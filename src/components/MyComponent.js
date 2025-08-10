import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component{

    render(){
        return (
            <div>
                <UserInfo />
            </div>
        )
    }
}
export default MyComponent;