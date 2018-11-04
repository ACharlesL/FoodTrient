
## Introduction

A brief Introduction and summary of the App.
Foodtrient is a single page application that allows a user to add an ingredient item to the applications database and also allow to add a particular ingredient(item) to a container(fridge) which is user specific.
In the future the application should provide the user nutrients analytics and present the user with options of a recipe based on ingredients provided. And try to provide some nutritional guide.

## Links

  - [Client](https://acharlesl.github.io/FoodTrient/)

  - [API](https://foodtrient.herokuapp.com/)

  - [API Repo](https://github.com/ACharlesL/FoodTrient-API)

## Requirements

This module requires the following:
  - A user must signup with a unique email address to setup a player account.
  - A user must sign-in to utilize the application.
  - After signin the user can view global ingredients
  - After signin the user can view his/her items in the fridge container
  - An authenticated user must also be able add and remove item from his/her fridge



## Technologies used

* HTML
* CSS
* Javascript
* JQuery
* AJAX
* Sass
* Ruby
* Ruby on Rails
* PostgreSQL
* HandelBars
* Grunt
* Node
* Git

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

On the second day I decided to start work on front end and html for client-side.
Worked on event handler and researched handle bars(templating engine) as some off my resources will use handle bars for UI.
After some UI work for auth client side I realize I need to test change password in server side before proceeding as the user api was already created for my application by other developers. So headed back to server side to CRUD user resource. Checked to see if curl script for auth works with local serve side .(success)
The result was good, Auth works and move on to work on creating resources, seem to have worked but need to test in Postgres server side
Time to work on show ingredient that were created.

Finally able to create and read a resource from the front end. Working on updating, deleting  a resource Success with deleting resource.
Worked on updating a resource.
I realize I need to build a modal or use a form, Implemented a form first and will consider a modal for version 2.
Success implementing form for updating a resource, checking fridge curl in server side to implement authentication and relationship
Success with fridge create, update, index, show, destroy. CRUD complete.
Able to create a relation between ingredient and fridge and user.
Trying to verify CRUD resources in the client-side app including UI
Create relation and isolate what users can access.


## Unsolved Problems

  - In future iterations I'll like to seed the database with ingredients that a user can use by adding and removing ingredient from their fridge.
  - A user will not be allowed to create nor delete an ingerdient
  - A responsive user interface and better UI/UX.

## Wireframe
  - [Imgur](https://i.imgur.com/W4nCRCo.jpg)
  - [Imgur](https://i.imgur.com/CqP0sej.jpg)

## User Stories.
* As a non credential user I should be able to sign up with and email address and password.
* As credential yser should be able to sign-in.
* As a credential user I should be able change my password once logged in.
* As a credential user I should be able to see my selected ingredients added to my fridge
* As a user should be able to search for ingredient and add to my fridge
