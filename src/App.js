import React from "react";
import Car from "./Car";
import Garage from "./Garage";
import Door from "./Door";
class App extends React.Component{


    render (){

        return(<div className="app1">
          <Car />
          <Garage width="5" />
          <Door />

        </div>);

    }


}

export default App;