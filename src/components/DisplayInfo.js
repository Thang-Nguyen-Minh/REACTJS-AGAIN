import React from 'react'
class DisplayInfo extends React.Component{
    render(){
        //destructuring
        const { name, age } = this.props;
        //const name=this.props.name và const age=this.props.age
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}
export default DisplayInfo;