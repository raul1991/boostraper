import flask
from flask import Flask, render_template
from flask.ext.mongoalchemy import MongoAlchemy

app = Flask(__name__)
app.config['MONGOALCHEMY_DATABASE'] = '<your-db-name>'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = '<your-connection-string>'

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
