#!/bin/bash
http-server . -a 0.0.0.0 -p $PORT & flask run --host=0.0.0.0 --port 33507
