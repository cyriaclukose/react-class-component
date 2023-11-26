# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React class component

 react class component are the old way using react component. Component name should start with a capital name(=Car.js) .We can create class
 component by using keyword 'class' and by extending React.Component. The class
 has method called render which can be used to return HTML  element.

 Class can also have constructor function. which can be used to initialise
 properties. We can use state object to store properties.from the constructor 
 function using super() keyword we can call  the construct of parent React.Component

 class Car {

    constructor(){
      super();
      this.state={color:"red"};

    }


 } 

 we can also pass properties to the component using props. if constructor is there we have 
 to pass props as a parameter to constructor function and pass it as an argument to 
 the parent through super keyword

props are passed as attributes in the component eg: <Car color:"red" />. Here color is passed as a props property

 we can use a class component inside another class component
 
 ## Class Component state
 state object is used to store the properties belonging to the object

 setState() method need to be used to change the state . this will ensure that comonent knows the 
 state has been changes and it would execute the 
 render method and other lifecycle methods

 class Car extends React.Component{

    constructor(props){

      super(prope);
      this.state={
        color:"red",
        brand:"ford",
        model:"ford focus"
      };
    }
    changeColor(){

        this.setState({color:"blue"})
    }

   render()
   {
    return (
    <div>
     <p> the brand of the car is :  {this.state.brand}
        the model of the car is : {this.state.model}
        the color of the car us :{this.state.color}
     </p>
    
    <button onclick="this.changeColor()">Click to Change color</button>
    </div>

    );

   }

 }
 



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
