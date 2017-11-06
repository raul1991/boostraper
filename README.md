# boostraper
A bootstrap application with mongo as the database, python/flask as the backend, nodejs as a front end package manager and angular for the front end

### NOTE
  
  Change the PROD variable inside app/app.js to `true` when running in production.

### How to install

  Install  [node.js](https://nodejs.org)

### Install dependencies

    npm install
  
### Build resources

    gulp build

### Setting up the virtual environement in python
  
    1. pip install virtualenvwrapper
  
    2. mkvirtualenv <name>
  
    3. workon <name>
  
#### Installing flask in the environment

     pip install flask
    
### Running the app LOCALLY

    1. export FLASK_APP=server/server.py
  
    2. flask run
