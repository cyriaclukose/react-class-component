import React from "react";
class Garage extends React.Component{

constructor(props)
{

    super(props);
    
}

render()
{

return (<p>this  Garage and has a width of : {this.props.width}</p>)

}

}
export default Garage;