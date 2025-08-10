import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";

class MyComponent extends React.Component{
    //this : đại diện cho MyComponent, state là 1 thuộc tính trong đó
    state = {
        name : "Minh Thắng",
        address : "Ha Noi",
        age: 21
    }
    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            name: 'Thanh Bình',
            age: Math.floor(Math.random()*100)+1//Ngẫu nhiên 1 số từ 1 đến 100
        })
    }
    render(){
        return (
            <div>
                My name is {this.state.name}
                <hr/>
                My address is {this.state.address}
                <hr/>
                My age is {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}} type="button">Click mee</button>
            </div>
        )
    }
}
export default MyComponent;