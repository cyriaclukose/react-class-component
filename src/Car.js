import React from "react";
class Car extends React.Component {

   constructor(props) {

      super(props);
      this.state = {
         color: "red",
         model: "yaris",
         brand: "tayota"
      };
   }

   changeColor=()=> {

      this.setState({ color: "blue" });
   }

   render() {

      return (<div>
         <h1>hello world i am using class component to render this</h1>
         <p> the brand of the car is : {this.state.brand}. <br/> The model of the car
            is :{this.state.model}<br/>. The color of the car is : {this.state.color} </p>

         <button  type="button" onClick={this.changeColor}  >click me to change color</button>
      </div>);


   }

}
export default Car;