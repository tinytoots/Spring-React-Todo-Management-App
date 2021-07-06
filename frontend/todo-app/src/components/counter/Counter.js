import React, {Component} from 'react'
import './Counter.css'

export default class Counter extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super(); // Error 1 使用this就需要super

        this.state = {
            counter : 0,
            secondCounter : 100
        }

        // bind the method to the class 如果不想写这个bind，需要把render写出箭头函数
        this.increment = this.increment.bind(this);

    }


    // update state - counter++ 如果在class里用方法就需要删除前面的function
    increment() { // 如果使用箭头函数这里也要改箭头函数
        // console.log('increment'); 
        // this.state.counter++;  改变state不能直接改，必须要使用setState改
        this.setState({
            counter: this.state.counter + this.props.by,
        });
    }
    
    // 不写箭头函数上面就需要bind
    render() {
        return (
            <div className='counter'> 
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    // render = () => { 箭头函数可以自动bind variables
    //     return (
    //         <div className='counter'> 
    //             <button onClick={this.increment}>+1</button>
    //             <span className="count">{this.state.counter}</span>
    //         </div>
    //     )
    // }
}
