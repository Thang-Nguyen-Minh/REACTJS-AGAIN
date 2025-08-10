import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component{

    render(){
        return (
            <div>
                <UserInfo />
                <br/> <br/>
                <DisplayInfo name='Minh Thang' age={20} />
                <hr/>
                <DisplayInfo name='Thanh Binh' age={18} />
            </div>
        )
    }
}
export default MyComponent;