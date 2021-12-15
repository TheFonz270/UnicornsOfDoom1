# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Scottish History App

Hey hey, this app was created for a Group project for our codeclan course using React and an Express server. Our brief was: 

### Educational App

The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.

### MVP
A user should be able to:

view some educational content on a particular topic
be able to interact with the page to move through different sections of content

### Example Extensions

Use an API to bring in content or a database to store information.
Use charts or maps to display your information to the page.

we met this MVP and both extensions thanks to our MongoDB database and Reactjs-2 doughnut chart used to display a users quiz score, 

## Description of Functionality: 

The app was designed as a platform for users to read the story of historical figures, and then take a quiz to help them remember key points from what they had read. This would be aimed primarily at children of mid primary school age, so nothing too complicated but not too simplified at the same time. 

Our user journey starts with the splash page, which for our current version is "Scotland" although in an expanded version, users would be able to choose between the 4 contries currently in the United Kingdom. 

The splash page would display the "Key players" in that countries history in a stylised gallery like format, from here users can choose who's story they'd like to read. The content of the stories is loaded from our database and populates our "story" section, after navigating through each page one after the other they are offered a quiz to help test their knowledge, or to return to the countries gallery. 

The quiz will load it's questions and answers from our database, the database is structured so that the quiz can choose to load only questions about the current character, although this hasn't been implemented yet on the client end, so our current version loads all questions.

After answering the questions, the user is shown their score via a doughnut chart and given the option to either return to the gallery or re-read the story so they can try the quiz again.

Throughout the whole journey the user will have a companion in Tom, who provides commentary on their jorney, giving tips on how to use the site, and commenting on their final quiz score. 

## To set up

To get the app up and running: 

1. pull the full repo from github
2. npm install the client
3. npm install the server
4. run database seeds from the server.
5. npm run server:dev from the server folder in terminal
6. npm start from the client folder in terminal
7. By default app should then run on localhost:3000, server and database/api should be viewable on localhost:5000

## Techonlogies used

This app used React JS, Express, and MongoDb. We used React for fast render, Virtual DOM and and reusable components. Express helped us build this app without much effort on the server side. MongoDB in turn offered flexible schema. With these tools were able to immediately start building our application without spending time configuring the elements.  





## Credits
List of contributors:

[https://avatars.githubusercontent.com/u/91466370?v=4](https://avatars.githubusercontent.com/u/91466370?v=4)

**[TheFonz270](https://github.com/TheFonz270)**

[https://avatars.githubusercontent.com/u/91193065?v=4](https://avatars.githubusercontent.com/u/91193065?v=4)

**[ Stefano Binando](https://github.com/StBinando)**

[https://avatars.githubusercontent.com/u/91730984?v=4](https://avatars.githubusercontent.com/u/91730984?v=4)

**[AndrewCalder95](https://github.com/AndrewCalder95)**

[https://avatars.githubusercontent.com/u/20367762?v=4](https://avatars.githubusercontent.com/u/20367762?v=4)

**[Michael Plata](https://github.com/Michaelplata)**

If you want to learn more about the quiz used in this app, go to the excellent resource at : [https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/)

The main cartoon characted was taken from http://clipart-library.com/free/kids-vector-png.html. All other images and text used in the stories were sourced from William Wallace wikipedia page. 


