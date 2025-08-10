import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component{
    state={
        listUsers:[
            {
                id: 1,
                name : "Minh Thang",
                age : 21,
            },
            {
                id: 2,
                name : "Thanh Binh",
                age : 19,
            },
            {
                id: 1,
                name : "Kieu Yen",
                age : 22,
            }
        ]
    }
    render(){
        return (
            <div>
                <UserInfo />
                <br/> <br/>
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        )
    }
}
export default MyComponent;