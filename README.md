
Prérequis
NodeJS (version 12.18)
npm
Installation et lancement du back-end

vous pouvez trouver le back-end du projet ici : 
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

En se plaçant dans ce repo du back-end, installer ses dépendances :

npm install

Lancer le back-end sur le port 3000 (port par défaut) :

npm run start

Installation et lancement du front-end
Cloner le présent repo du front-end de SportSee :

git clone https://github.com/logic-fabric/LoicMangin_12_14072021.git

En se plaçant dans ce repo du front-end, installer ses dépendances :

npm install

Lancer le front-end sur le port 3001 :

npm start

Le front-end est alors consultable à l'URL http://localhost:3001.

N.B. :
l'API de SportSee ne fournit des données que pour les utilisateurs d'id 12 et 18.

Il est possible de récupérer les données à afficher via des données mockées présentes dans le front du projet, dans ce cas il est possible d'alterner les utilisateurs à afficher en modifiant l'id en haut de la partie service.
La marche à suivre est expliquée en commentaire.

De base, le programme est conçu pour récupérer les données mockées en priorité afin de rendre ce projet consultable même sans le back.

Pour récupérer les données depuis l'API, il se rendre sur le ficier contenant les données mockées et modifier la valeur de MockedDataUser à null. 
La marche à suivre est expliquée dans le document en commentaire


Installation (english version)
Prerequisites
NodeJS (version 12.18)
npm
Installing and launching back-end
Clone the repository of SportSee back-end:

git clone https://github.com/logic-fabric/sportsee-api.git

Inside this back-end repository, install dependencies:

npm install

Launch back-end on port 3000 (default port):

npm run start

Installing and launching front-end
Clone the repository of SportSee front-end:

git clone https://github.com/logic-fabric/LoicMangin_12_14072021.git

Inside this front-end repository, install dependencies:

npm install

Launch front-end on port 3001:

npm start

Front-end is now rendered at URL http://localhost:3001.

N.B.:
SportSee API only contains data for users with id 12 and 18.
user 18 has an alternative version of the chart "Sessions average duration", more relevant than the one on the Figma mock-up.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
