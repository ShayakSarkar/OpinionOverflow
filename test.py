from create_databases import db,User
db.session.add(User(username='Sarkar',hashed_password='asdasda',avg_score=0))
db.session.commit()

