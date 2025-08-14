import React,{useState} from 'react'
const DisplayInfo = (props) => {
    const [showInfo, setShowInfo] = useState(true)

    const handleClick = () => {
        setShowInfo(!showInfo)
    }
    //destructuring
    const {listUsers} = props;
    //const listUsers = this.props.listUsers;

    return (
        <div>
            <button onClick={()=>{handleClick()}}>
                {showInfo ? 'Hide Info' : 'Show Info'}
            </button>
            {listUsers.map(user => {
                return (
                    <div>
                        {showInfo && <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                            <div>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                            </div>
                            <div>
                                <button onClick={(id)=>props.handleDeleteUser(user.id)}>Delete User</button>
                            </div>
                            <hr/>
                        </div>}
                    </div>
                )
            })}
        </div>
    )

}
export default DisplayInfo;