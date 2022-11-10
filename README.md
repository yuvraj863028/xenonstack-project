# xenonstack-project
Description

This module is a common module for any website. As we all know that a website has: user registration, login, logout, password reset, etc sections.

This app includes following APIs:

user registration http://localhost:8000/user/sign-Up: This will require data in POST request

Body part:
  email:    test@example.com
  password: qwerty
  name:     hello
  phone:    7887978728
  address:  H.No.23, ABC block, Delhi, India
login http://localhost:8000/user/login :
This will require data in POST request and will return a token which you need to attach in header with every request

Body part:
  email:    test@example.com
  password: qwerty
set password http://localhost:8000/user/set-pwd : This will require a token passed in header and data in POST request

Header part:
  authorization:  cokiee token
Body part:
  password: example
view profile http://localhost:8000/user/view : This will require a token passed in header and data in POST request

Header part:
  authorization:    YOUR_TOKEN_HERE
profile pic upload http://localhost:8000/user/pic-upload : This will require a token passed in header and data in POST request

Header part:
  authorization:    YOUR_TOKEN_HERE
Body part:
  profile_pic: YOUR_FILE_INPUT_IMAGE
logout and refresh token http://localhost:3000/user/logout: A GET method which will store the provided token via header into redis so for the next time when user sends the same token then it will first check into redis and give response accordingly.

Header part:
  authorization:    YOUR_TOKEN_HERE
Note : There is a cron which will continously verify the token stored in redis using JWT verify function. Open new tab in your terminal and travel to the directory 'login-logout-jwt-nodejs' and run nodemon services/token-refresh.js
Requirements

MongoDB (3*)
Redis
NodeJS (10*)
Do following things before running the app

make a Database (auth) in MongoDB
Setup your config as required (configs/config.json)
run command npm install to install all the dependencies
install nodemon globally if you want to run your app on watch (npm install -g nodemon)
For Frontend help see page

login-logout-nodejs/view/ProfilePhotoDir/test.html

App Execution

nodemon index.js
About
No description, website, or topics provided.
Resources
 Readme
Stars
 1 star
Watchers
 2 watching
Forks
 0 forks
Releases
No releases published
Packages
No packages published
Environments 1
 github-pages Active
Languages
JavaScript
65.7%
 
HTML
4.3%
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
