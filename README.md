### "Would you rather ?" App 
This is my submition for the 2nd project in react nanodegree 

### How to start 
you can easily download the project then in the root folder open the command line 
then write "npm install" 
after all packages are installed you can be comfortable to use command 
"npm start"
to run the app  in the development mode at http://localhost:3000 


### App functionality 

This app let you make Questionnares and let other users to choose whatever they like 
you can also know your answered an not answered questions and check the overall results of these questions
you can log in and log out easily 
you can navigate easily in this App using the powerfull react-router package 

### App structure 

I prefer to keep the style of each component in its own directory instead of making global css folder
also i prefer to make all images in a global separate folder

public
   - index.html
src
   - components
      -component1 
         - component1.js
         - component1.css
      App.js
      App.css
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Utils
   - MiddleWares
   - images

   - index.js
   - index.css


### App heirarcy 

Home component
          ---Nav component
          ---Answered + unAnswered navigation Headers

          ---Question component --- conditional Header
                      --- interface  

Card component 
          ---Question component---conditional Header
                      ---children---Questionnare component
                                 ---Results component --Result component 


