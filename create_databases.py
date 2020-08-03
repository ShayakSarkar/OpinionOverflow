import flask as fl
import os
from flask_sqlalchemy import SQLAlchemy

basedir=os.path.abspath(os.path.dirname(__file__))

app=fl.Flask(__name__)
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
    category_id=db.Column(db.Numeric,primary_key=True)
    name=db.Column(db.String(64))

    def __repr__():
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





        
    
