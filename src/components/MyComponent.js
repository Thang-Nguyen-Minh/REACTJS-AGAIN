import React,{useState} from 'react'
import counterReducer from "../redux/reducer/counterReducer";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
const MyComponent = (props) => {
    const listUsers=[
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
            name : "Dang Khoa",
            age : 22,
        }
    ]

    const [user,setUser]=useState(listUsers);

    const handleAddUser = (userObj) => {
        setUser([userObj,...user]);
    }

    const handleDeleteUser = (id) => {
        setUser(user.filter(user=>user.id !== id))
    }

    return (
        <div>
            <AddUserInfo handleAddUser={handleAddUser}/>
            <br/> <br/>
            <DisplayInfo
                listUsers={user}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}
export default MyComponent;