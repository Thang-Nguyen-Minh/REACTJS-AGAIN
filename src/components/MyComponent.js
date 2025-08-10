import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";

class MyComponent extends React.Component{
    //this : đại diện cho MyComponent, state là 1 thuộc tính trong đó
    state = {
        name : "Minh Thang",
        address : "Ha Noi",
        age: 21
    }
    handleClick = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target);//in ra cả thẻ button
        console.log(event.target.name);//Click me
        console.log(this.state.name);
    }
    render(){
        return (
            <div>
                My name is {this.state.name}
                <hr/>
                My address is {this.state.address}
                <hr/>
                My age is {this.state.age}
                <button onClick={this.handleClick} type="button">Click mee</button>
            </div>
        )
    }
}
export default MyComponent;