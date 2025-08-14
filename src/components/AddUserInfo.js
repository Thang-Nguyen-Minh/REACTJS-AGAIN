import React, {Component, useState} from 'react'
import App from "../App";
const AddUserInfo = (props) => {
    const [name,setName]=useState('');
    const [address,setAddress]=useState('Ha Noi');
    const [age,setAge]=useState('');

    const handleClick = (event) => {
        event.preventDefault();
        setAddress(event.target.value);
        setAge(Math.floor(Math.random()*100)+1);
    }

    const handleChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //Làm gì có thay đổi trên giao diện mà cho vào setState. Hài vl
        props.handleAddUser({
            id: Math.floor(Math.random()*100)+1 + '-random',
            name: name,
            age: age,
        })
    }

    return (
        <div>
            My name is {name}
            <hr/>
            My address is {address}
            <hr/>
            My age is {age}
            <button onClick={(event) => {handleClick(event)}} type="button">Click mee</button>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <label>Your name : </label>
                <input
                    type="text"
                    onChange={(event) => {handleChangeInput(event)}}
                />
                <label>Your age : </label>
                <input
                    type="text"
                    onChange={(event) => {handleChangeAge(event)}}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo;