import React from 'react'
class DisplayInfo extends React.Component{
    state = {
        showInfo: true
    }
    handleClick = (event) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render(){
        //destructuring
        const {listUsers} = this.props;
        //const listUsers = this.props.listUsers;

        return (
            <div>
                <button onClick={(event)=>{this.handleClick(event)}}>
                    {this.state.showInfo ? 'Hide Info' : 'Show Info'}
                </button>
                {listUsers.map(user => {
                    return (
                        <div>
                            {this.state.showInfo && <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={(id)=>this.props.handleDeleteUser(user.id)}>Delete User</button>
                                </div>
                                <hr/>
                            </div>}
                        </div>

                    )
                })}
            </div>
        )
    }
}
export default DisplayInfo;