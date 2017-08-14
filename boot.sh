#!/bin/bash

sed -i -e 's/$PORT/'"$1"'/g' server/static/js/bootstrapper.bundle.min.js
flask run --host=0.0.0.0 --port $1
