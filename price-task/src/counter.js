import React from "react";

class Counter extends React.Component(){
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        };
    }
    Addition = () =>{
        this.setState({count: this.state.count + 1})
    }
    Subraction = ()=>{
        this.setState({count: this.state.count - 1})

    }

    rest = () =>{
        this.setState({count: 0})

    }
    render(){
        return(
            <div>
            <p>Count -{this.state.count}</p>
            <button onClick={this.Addition} >+</button>{" "}
            <button onClick={this.Subraction}>-</button>{" "}
            <button onClick={this.rest}>0</button>{" "}
        </div>
        )
    }
    
}

//<Counter />
// Object create agum

// const counter = new Counter()
// counter
export default Counter;