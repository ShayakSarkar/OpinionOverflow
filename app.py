import flask,os
from flask_sqlalchemy import SQLAlchemy
from create_databases import User,db

app=flask.Flask(__name__)
basedir=os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
app.config['SECRET_KEY']='hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI']=\
    'sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN']=True
print(app.config['SQLALCHEMY_DATABASE_URI'])

db=SQLAlchemy(app)

class User(db.Model):
        __tablename__='User'
        username=db.Column(db.String(64),primary_key=True)
        hashed_password=db.Column(db.String(500))
        avg_score=db.Column(db.Numeric(10,3))
        
        def __repr__(self):
            return ('<User {}>'.format(self.username))

class Blog(db.Model):
    __tablename__='Blog'
    blog_id=db.Column(db.Numeric(10),primary_key=True)
    likes=db.Column(db.Numeric(10),nullable=False)
    dislikes=db.Column(db.Numeric(10),nullable=False)
    bookmarks=db.Column(db.Numeric(10),nullable=False)
    author=db.Column(db.String(64),nullable=False)
    data=db.Column(db.String(500),nullable=False)
    heading=db.Column(db.String(100),nullable=False)

    def __repr__(self):
        return('<Blog {}, id:{}>'.format(self.blog_heading,self.blog_id))
    

class Comment(db.Model):
    __tablename__='Comment'
    comment_id=db.Column(db.Numeric(10),primary_key=True)
    blog_id=db.Column(db.Numeric(10))
    username=db.Column(db.String(64))   #Who wrote the comment
    data=db.Column(db.String(300))

    def __repr__(self):
        return('<Comment {} id:{}>'.format(self.username,self.comment_id))
    
class Category(db.Model):
    __tablename__='Category'
    category_id=db.Column(db.Integer,primary_key=True, autoincrement=True)
    name=db.Column(db.String(64))

    def __repr__(self):
        return('<Category {}>'.format(self.name))
    
class Follows(db.Model):
    __tablename__='Follows'
    left_username=db.Column(db.String(64),primary_key=True)
    right_username=db.Column(db.String(64),primary_key=True)

    def __repr__(self):
        return('<Follows {} -> {}>'.format(self.left_username,self.right_username))

class Bookmarks(db.Model):
    __tablename__='Bookmarks'
    username=db.Column(db.String(64),primary_key=True) 
    blog_id=db.Column(db.Numeric(10),primary_key=True) 

    def __repr__(self):
        return('<Bookamrks {} {}>'.format(self.username,self,blog_id))

class Belongs_to(db.Model):
    __tablename__='Belongs_to'
    blog_id=db.Column(db.Numeric(10),primary_key=True)
    category_id=db.Column(db.Numeric(10),primary_key=True)

    def __repr__(self):
        return('<Belongs_to {} -> {}>'.format(self.blog_id,self.category_id))

class Interested_in(db.Model):
    __tablename__='Interested_in'
    username=db.Column(db.String(64),primary_key=True)
    category_id=db.Column(db.Numeric(10),primary_key=True)

    def __repr__(self):
        return('<Interested_in {} -> {}>'.format(self.username,self.category_id))

if __name__=='__main__':
    #favicon
    @app.route('/favicon.ico')
    def get_favicon():
        return flask.send_file('./favicon.ico','img/png')

    #The home page
    @app.route('/')
    def index():
        return flask.render_template('/index/index.html')

    #Index page api endpoint
    @app.route('/index_api/')
    def index_api():
        res=flask.Response(status=302)
        res.headers['Location']='http://localhost:5000/redirect'
        return res
    #Any other file be routed according to this entry
    #The files will be served as per the actual file path

    @app.route('/redirect')
    def redirect_view():
        return('<html><h1>Redirected</h1></html>')

    @app.route('/templates/index/LoginSignup.js')
    def loginSignup():
        print('Serverd the LoginSignup file')
        res=flask.send_file('templates/index/LoginSignup.js')
        res=flask.make_response(res)
        return res


    #The URIs of the apis

    #Endpoint for fetching the interests list
    @app.route('/getInterests',methods=['GET'])
    def getInterests():
        d=dict()
        d['availableInterests']=[]
        for i in db.session.query(Category).all():
            d['availableInterests'].append((i.category_id,i.name))
        
        res=flask.jsonify(d);
        print('sent response')
        return res

    #Submission endpoint for creating a user
    @app.route('/createUser/',methods=['POST'])
    def createUser():
        for i in flask.request.cookies:
            print(i,flask.request.cookies.get(i))
        print('I got the data')
        data=flask.request.get_json(force=True)
        print(data['username'])
        print(data['password'])
        res=flask.make_response(data)
        res.headers['Access-Control-Allow-Origin']='*'
        u1=User(username=str(data['username']),hashed_password=str(data['password']), avg_score=0)
        db.session.add(u1)
        print('Created',u1)
        db.session.commit()
        return res

    @app.route('/postCategories',methods=['POST'])
    def getCategories():
        print(flask.request.get_json(force=True))
        return 'Receieved'

    @app.route('/<path:path>')
    def catchall(path):
        res=flask.send_file(path)
        return res

    app.run(debug=True)