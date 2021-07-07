import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

export default class Counter extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super(); // Error 1 使用this就需要super

        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this);
    }

    increment(by) { 
        // console.log(`increment from parent - ${by}`)
        this.setState({
            counter: this.state.counter + by
        });
    }

    // 可以改成箭头函数
    increment(by) { 
        // console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment}/> 
            <CounterButton by={5} incrementMethod={this.increment}/> 
            <CounterButton by={10} incrementMethod={this.increment}/> 
            <span className="count">{this.state.counter}</span>
          </div>
        );
      } 
}

class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super(); // Error 1 使用this就需要super

        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this);
    }


    increment() { 
        // console.log('increment'); 
        this.setState({
            counter: this.state.counter + this.props.by,
        });

        this.props.incrementMethod(this.props.by);
    }
    
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

// 设置默认props，在class外面
CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}