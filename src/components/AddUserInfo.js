import React, {Component} from 'react'
import App from "../App";
class AddUserInfo extends Component {
    //this : đại diện cho MyComponent, state là 1 thuộc tính trong đó
    state = {
        name : '',
        address : "Ha Noi",
        age: ''
    }
    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            name: 'Thanh Bình',
            age: Math.floor(Math.random()*100)+1//Ngẫu nhiên 1 số từ 1 đến 100
        })
    }
    handleChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }
    handleChangeAge = (event) => {
        event.preventDefault();
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        //Làm gì có thay đổi trên giao diện mà cho vào setState. Hài vl
        console.log(this.state);
        this.props.handleAddUser({
            id: Math.floor(Math.random()*100)+1 + '-random',
            name: this.state.name,
            age: this.state.age,
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
                <hr/>
                My address is {this.state.address}
                <hr/>
                My age is {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}} type="button">Click mee</button>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Your name : </label>
                    <input
                        type="text"
                        onChange={(event) => {this.handleChangeInput(event)}}
                    />
                    <label>Your age : </label>
                    <input
                        type="text"
                        onChange={(event) => {this.handleChangeAge(event)}}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfo;