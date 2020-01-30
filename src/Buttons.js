import React from 'react';
class Buttons extends React.Component{
    
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    render(){
        return(
        
            <button onClick={() => this.props.greet()}>Hi</button>
            
        )
    }
    
}


export default Buttons