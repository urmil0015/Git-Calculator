import React from 'react';
import CalcButton from './CalcButton';
import { Button, message, Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import Buttons from './Buttons.js'
import Try from './Try';

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            greeting: "HELLLOOOSSSSSS",
            display: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.changed = this.changed.bind(this)
        this.keyDown = this.keyDown.bind(this)
    }
    
    
    handleClick(e){
        if(e != '=' && e != '+' && e != '-' && e != '*' && e != '/' && e != 'AC'){
        this.setState( (prev) => {
            return{
            display: prev.display + e
        }})} 
        else if (e == '+' || e == '-' || e == '*' || e == '/'){
            console.log(this.state.display);
            if(this.state.display.includes('+') || this.state.display.includes('-') || this.state.display.includes('*') || this.state.display.includes('/')){
                console.log("already one" + this.state.display + e);
                
                let equ = this.state.display
            let first, second
            let values = equ.split(/([\/\+\-\*])+/)
            first = parseInt(values[0])
            second = parseInt(values[2])
            console.log(first);
            console.log(second);
            let val
            switch(values[1]){
                case "+":
                   val = first + second
                    break;
                case "-":
                    val = first - second
                    break;
                case "*":
                    val = first * second
                    break;
                case "/":
                    val = first / second
                    break;
                default:
                    val = 0
                    break;
            }
            
            this.setState({
                display: val
            })
                
            } else {
                console.log("first one");
            }
            this.setState((prev) => {
                return {
                    display: prev.display + e
                }
            })
        } else if(e == 'AC'){
                  this.setState({
                    display: ""
                  })
                  }
         else {
            let equ = this.state.display
            let first, second
            let values = equ.split(/([\/\+\-\*])+/)
            first = parseInt(values[0])
            second = parseInt(values[2])
            console.log(first);
            console.log(second);
            let val
            switch(values[1]){
                case "+":
                   val = first + second
                    break;
                case "-":
                    val = first - second
                    break;
                case "*":
                    val = first * second
                    break;
                case "/":
                    val = first / second
                    break;
                default:
                    val = 0
                    break;
            }
            
            this.setState({
                display: val
            })
        }
    }
    
    
    keyDown(e){
        e.preventDefault();
        
        return false;
    }
    
    changed(e){
        this.setState({
            display: e.target.value
        })
    }
    
    render(){
        
        const styles = { marginLeft: "33%", marginTop: "5%" }
        
        
        return(
        <div style={styles} className='container'>
            <Input style={{ width: "42%", marginBottom: "2%"}} value={this.state.display} onChange={this.changed} onKeyPress={this.keyDown}/>
            <Row>
            <CalcButton val='AC' calc={this.handleClick}/>
            </Row>
            <Row>
            <CalcButton val='9' calc={this.handleClick}/>
            <CalcButton val='8' calc={this.handleClick}/>
            <CalcButton val='7' calc={this.handleClick}/>
            <CalcButton val='+' calc={this.handleClick}/>
            </Row>
            <Row>
            <CalcButton val='6' calc={this.handleClick}/>
            <CalcButton val='5' calc={this.handleClick}/>
            <CalcButton val='4' calc={this.handleClick}/>
            <CalcButton val='-' calc={this.handleClick}/>
            </Row>
            <Row>
            <CalcButton val='3' calc={this.handleClick}/>
            <CalcButton val='2' calc={this.handleClick}/>
            <CalcButton val='1' calc={this.handleClick}/>
            <CalcButton val='*' calc={this.handleClick}/>
            </Row>
            <Row>
            <CalcButton val='0' calc={this.handleClick}/>
            <CalcButton val='/' calc={this.handleClick}/>
            </Row>
            <Row>
            <CalcButton val='=' calc={this.handleClick}/>
            </Row>
            
            
        <h1></h1>    
        </div>
        )
    }
}


export default App