#!/bin/bash
#echo $PORT >> ~/.bashrc
export FLASK_APP=server/server.py
sed -i -e 's/$PORT/'"$PORT"'/g' /app/server/static/js/bootstrapper.bundle.min.js
flask run --host=0.0.0.0 --port $PORT
