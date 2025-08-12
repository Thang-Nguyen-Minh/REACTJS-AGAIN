import React from 'react'
import counterReducer from "../redux/reducer/counterReducer";
import AddUserInfo from "./AddUserInfo";
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
                id: 3,
                name : "Kieu Yen",
                age : 22,
            }
        ]
    }
    handleAddUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj,...this.state.listUsers],
        })
    }
    handleDeleteUser = (id) => {
        //Phải để let thì mảng mới thay đổi được
        let listUsersClone=this.state.listUsers;
        //Phải gán mảng mới vào do filter trả về 1 mảng mới
        listUsersClone=listUsersClone.filter(item=>item.id!==id);
        this.setState({
            listUsers: listUsersClone,
        })
    }
    render(){
        return (
            <div>
                <AddUserInfo handleAddUser={this.handleAddUser}/>
                <br/> <br/>
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
        )
    }
}
export default MyComponent;