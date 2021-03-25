# nteract games


![zoomCallIcon](https://user-images.githubusercontent.com/52294389/112428546-8cfb7580-8cf8-11eb-90eb-ccd859a2defd.png)
<img width="781" alt="Screen Shot 2021-03-24 at 11 31 19 PM" src="https://user-images.githubusercontent.com/52294389/112428867-114df880-8cf9-11eb-82ab-f9d566df6ca5.png">
![coffeeChat](https://user-images.githubusercontent.com/52294389/112428524-85d46780-8cf8-11eb-961c-ad43f896d8ee.png)

  <a href="https://nteract-games.herokuapp.com/">
Project Deployment Site</a>

### Built With

* React
* Node.JS
* PostgreSQL
* Express
* Axios
* HTML
* CSS
  
### Create Local Envrionment (For Developers)
1. Clone the repo
```sh
git clone 
https://github.com/celinevalentine/nteract-games
```
2. Install dependencies
```sh
npm install
```

3. Run in your local environment

```sh
http://localhost:3000
npm start
```

### Userflow
Upon logging into the account, users can choose one a game to play. By following through the prompts, users can complete each task of the game. If users don't answer correctly 100%, the screen will take them back to the beginning of the task to complete. Each task is timed and will automatically proceed to the next page once the timer is up.

## Features

The purpose of the project is to help young students and enterprenures improve their social skills. By completing each game, users will increase their awareness of surroudings, social etiquettes and people interactions in various social scenarios and events. Each game has 5 tasks and each task has embedded timer and invisible hotspots to click. Auth0 is used to for user authentication and authorization.


## DATA

The app has a customized RESTful API with Node, Express and PostgreSQL (a.k.a, pg)that provides information about each game, tasks and hotspots. Having such an API, it helps improve the readability and scability of the code. It allows to create addiontional game modules with very little effort. With use of Postman, all games, tasks and hotspots are capable of being retrieved, created, updated, and deleted. 

## Stretch Goals

I plan to continue building more game modules that require additional data structures and schemas added to the database. In additional, I also plan to add more features on user's profile page where users can see their game performance such as the time that took to complete the game and games that have been completed with customized badgers. Users can also share their game results via social media links. 

## Contact

Celine Valentine - [@celineval3](https://twitter.com/celineval3) - cvdev8961@gmail.com

Source Code Link: [https://github.com/celinevalentine/nteract-games]()
