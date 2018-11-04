## Introduction

A brief Introduction and summary of the App.
This is a single page application. A single player Tic Tac Toe game. current status of the application allows a player to play as both player'X' and player'O'. Plans for the future is to add an AI opponent and multiplayer opponent.

foodtrient is a single page application that allows a user to add an ingredient item to the applications database and also allow to add a particular ingredient(item) to a container(fridge) which is user specific.
In the future the application should provide the user nutrients analytics and present the user with options of a recipe based on ingredients provided. And try to provide some nutritional guide.

## Requirements

This module requires the following:
  - A user must signup with a unique email address to setup a player account.
  - A user must sign-in to utilize the application.
  - After signin the user can view global ingredients
  - After signin the user can view his/her items in the fridge container
  - An authenticated user must also be able add and remove item from his/her fridge



## Technologies used

* html
* css
* javascript
* jquery
* ajax
* sass
* Ruby
* Ruby on Rails
* PostgreSQL

## Plan and Development process

My process in developing this application has been mostly test driven. I made it a habit to test almost every line of code I wrote including console loging all result during development.

My approach was to start working on the back-end in order to understand the response from the server when utilizing the API, for this i did a deep dive into the APi documentation for both the user API's and game API's. I created multiple curls scripts which includes sign-up, sign-out sign-in  to test authentication with the user server and create-game, update-game and get-games for the game server. The API actions used are GET, POST and PATCH.

After developing curl-scripts to verify access to the servers I started working on developing the Ajax calls accordingly. I decided to work on the front-end by developing bearbone html with various elements which will be used to pass data and events with proper routing to the respective api calls. My api calls are being made by utilizing Ajax calls which trigger different messages/actions depending on success/failure of the api call through Ajax. After a completely connected from the front end to the servers were made, I then focused on the game logic.

My process in developing this application has been mostly test driven. I made it a habit to test almost every line of code I wrote including console loging all result during development.
The development time for the first iterations of this application is 5 days starting on Oct 18 2018
My first order of businesss is to create an ingredient curl script to crud the ingredient resources yet to be created. All ingredient Curl script were created with executed with success except for update and destroy
my first commit was made to the API repository in order to save all work done.
A second round on CRUD-ing my Ingredient resource was successfull with index, show, update, destroy, create working without authentication.
My next approach is to Scaffold a fridge resource, which was successfull. Checked all files that rails generated to verify there are no errors. Start working on creating fridge curls scripts, Made commits for fridge migrate to save my progress and have a database setup. Had success with Create, update, destroy, index and show curl for fridge resource. I started work on front end client application before working on back end deploy serve side to heroku. Afterwhich I worked on login. At this point i decided to make an attempt to access heroku api for client side with success.
On the second day I decided to start working on front end to html of client
Worked on event handler and researched handle bars(templating engine) as some off my resources will use handle bars for UI.
After some UI work for auth client side I realize I need to test change password in server side before proceeding as the user api was already created for my application by other developers. So headed back to server side to CRUD user resource. Checked to see if curl script for auth works with local serve side .(success)
Auth works and worked on creating resources, seem to have worked but need to test in Postgres server side
Time to work on show ingredient that were created.
Finally able to create and read a resource from the front end. Now working on updating, deleting  a resource Success with deleting resource.
Working on updating a resource.
Need to build a modal or use a form.
Implementing a form first before modal
Success inplementing form updating of resource
checking fridge curl in server side to implement authentication and relationship
Success with fridge create, update, index, show, destroy. CRUD complete
Able to create a relation between ingredient and fridge and user
Trying to verify CRUD resources in the frontend app including UI
Create relation and isolate what users can access


## Unsolved Problems

  - In future iterations I'll like to seed the database with ingredients that a user can use by adding and removing ingredient from their fridge.
  - A user will not be allowed to create nor delete an ingerdient
  - A responsive user interface and better UI/UX.

## Wireframe
[Imgur](https://i.imgur.com/W4nCRCo.jpg)
[Imgur](https://i.imgur.com/CqP0sej.jpg)

## User Stories.
* As a non credential user I should be able to sign up with and email address and password.
* As credential yser should be able to sign-in.
* As a credential user I should be able change my password once logged in.
* As a credential user I should be able to see my selected ingredients added to my fridge
* As a user should be able to search for ingredient and add to my fridge
