import React from "react";

import Price from "./Price";

import PRICE from "./price.json";
// function App(){


//     const data =[
//         {
//             name:"Free",
//             symbol: "$", 
//             price: "0",
//             years: "month",
//             facility :[
//                 {
//                     name:"Single User",
//                     acess: true
//                 },
//                 {
//                     name:"5GB Storage",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Public Projects",
//                     acess: true
//                 },
//                 {
//                     name:"Community Access",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Private Projects",
//                     acess: false
//                 },
//                 {
//                     name:"Dedicated Phone Support",
//                     acess: false
//                 },
//                 {
//                     name:"Free Subdomain",
//                     acess: false
//                 },
//                 {
//                     name:"Monthly Status Reports",
//                     acess: false,
//                 }
//             ]
//         },
//         {
//             name:"Plus",
//             symbol: "$",
//             price: "9",
//             years: "month",
//             facility :[
//                 {
//                     name:"Single User",
//                     acess: true
//                 },
//                 {
//                     name:"5GB Storage",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Public Projects",
//                     acess: true
//                 },
//                 {
//                     name:"Community Access",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Private Projects",
//                     acess: true
//                 },
//                 {
//                     name:"Dedicated Phone Support",
//                     acess: true
//                 },
//                 {
//                     name:"Free Subdomain",
//                     acess: true
//                 },
//                 {
//                     name:"Monthly Status Reports",
//                     acess: false,
//                 }
//             ]
//         },
//         {
//             name:"Pro",
//             symbol: "$", 
//             price: "50",
//             years: "month",
//             facility :[
//                 {
//                     name:"Single User",
//                     acess: true
//                 },
//                 {
//                     name:"5GB Storage",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Public Projects",
//                     acess: true
//                 },
//                 {
//                     name:"Community Access",
//                     acess: true
//                 },
//                 {
//                     name:"Unlimited Private Projects",
//                     acess: true
//                 },
//                 {
//                     name:"Dedicated Phone Support",
//                     acess: true
//                 },
//                 {
//                     name:"Free Subdomain",
//                     acess: true
//                 },
//                 {
//                     name:"Monthly Status Reports",
//                     acess: true,
//                 }
//             ]
//         },
//     ]
    
//     const handClick = () =>{
//         console.log("clicked")
//     }
    
//     const [add, setAdd] = React.useState(0);

//     const Addition = ()=>{
//         setAdd( ++add);
//     }
    
//     const Subraction = ()=>{

//     }
//     const rest = ()=>{

//     }
//     return (

//         <div>
//             <p>Count -</p>
//             <button onClick={Addition} >+</button>{" "}
//             <button onClick={Subraction}>-</button>{" "}
//             <button onClick={rest}>0</button>{" "}
//         </div>

//         // <section className="pricing py-5">
//         //   <div className="container">
//         //     <div className="row">
//         //    {data.map(res => <Price {...res} btn={handClick} />)}
//         //     </div>
//         //   </div>
//         // </section>
//     )
// }

class App extends React.Component{
    
    handClick = (name) =>{
        console.log(name)
    }

    constructor(props){
        super(props)
        this.state ={
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
    return (
        <>
        <div>
            <p>Count -{this.state.count}</p>
            <button onClick={this.Addition} >+</button>{" "}
            <button onClick={this.Subraction}>-</button>{" "}
            <button onClick={this.rest}>0</button>{" "}
        </div>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
           {PRICE.map(res => <Price {...res} btn={this.handClick} />)}
            </div>
          </div>
        </section>
        </>
    );
}
}


export default App;