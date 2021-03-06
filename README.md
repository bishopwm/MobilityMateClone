# MobilityMate

### About

###### MobilityMate was the brainchild of my fullstack app idea for Ironhack Miami's Hackshow, which took place in May 2020.

###### MobilityMate is a simple app intended to visualize the data available in [Google's Mobility Trends report](https://www.google.com/covid19/mobility/) for each state in the U.S. This includes the public's movements to various public venues such as parks, grocery stores, transit, etc., which have come into greater focus during the COVID-19 pandemic. This app visualizes the ever-changing data to make trends visible at a glance!

### Core functionalities 

###### View 30 day average for people's movements to various places, by state. View individual data points for people's movements to varioius places, by state, each day over the past month in graph form. Save graphs to user profile for later reference. Export data to CSV, Add/Remove graphs/data at will.

### Technologies

##### Backend: 
* Node.js, 
* Express.js, 
* MongoDB/Atlas Cloud

##### Frontend: 
* ReactJS, 
* JavaScript, 
* React-Bootstrap

### Build Instructions

## Start Server
##### cd backend/ 
##### npm i 
##### nodemon 


## Start client
##### cd frontend/ 
##### npm i 
##### npm start


## Deploy DB
##### sign in with Atlas. 
##### Get connection string and add it to .env file. MONGDB_URI = ...

## Deploy to Heroku
##### heroku create 
##### git add . 
##### git commit -m 'deploying' 
##### git push
##### git push heroku master
##### add convig var for MONGDB_URI in heroku dashboard


## Deploy to Netlify
##### Login to Netlify & Select the repo
##### In backend/app.js add client url generated by Netlify
