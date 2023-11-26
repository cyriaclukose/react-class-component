import React from "react";
class Door extends React.Component{

constructor()
{
    super();
    this.state={height:8};

}

render(){

    return (<p>Gaeage door has a height of {this.state.height}</p>);

}




}

export default Door