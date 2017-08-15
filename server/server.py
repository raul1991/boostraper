import flask
from flask import Flask, render_template
from flask.ext.mongoalchemy import MongoAlchemy

app = Flask(__name__)
app.config['MONGOALCHEMY_DATABASE'] = 'heroku_w1hjpl69'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://heroku_w1hjpl69:llmljj3stm2f3ei1v6906l83j2@ds123084.mlab.com:23084/heroku_w1hjpl69'

db = MongoAlchemy(app)

class Item(db.Document):
    name = db.StringField()
    quantity = db.IntField()

@app.route('/')
def hello_world():
        item = Item(name='Rahul', quantity=2)
        item.save()
        return render_template('index.html')

@app.route('/home')
def home():
        return "Home Page"
