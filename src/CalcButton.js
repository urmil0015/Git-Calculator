import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';


class CalcButton extends React.Component{
    
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        
        let style;
    
    if(this.props.val === '0'){
        style = { marginRight: "2em", marginBottom: 10, width: "25em", height: "6em" }
    } else {
        style = { marginRight: "2em", marginBottom: 10, width: "7em", height: "6em", textAlign: "centre" }
    }
    if(this.props.val === '=' || this.props.val === 'AC'){
        style = { marginRight: "2em", marginBottom: 10, width: "34em", height: "6em" }
    }    
        return(
            <Button style={style} type='primary' onClick={() => this.props.calc(this.props.val)}>{this.props.val}</Button>
        )
    }
    
}


export default CalcButton