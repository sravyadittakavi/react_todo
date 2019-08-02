import React from 'react';
class Task extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            name:''
        } 
        this.onChange = this.onChange.bind(this);     
    }
    onChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(<div>
            <section>
                <label>Name:</label>
                <input type="text" onChange={this.onChange}></input>
            </section>
            <p>Name of the task is {this.state.name}</p>
            </div>)
    }
}
export default Task;