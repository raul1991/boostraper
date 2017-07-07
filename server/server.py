import flask
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
        resp = flask.Response("Hello, World!")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
