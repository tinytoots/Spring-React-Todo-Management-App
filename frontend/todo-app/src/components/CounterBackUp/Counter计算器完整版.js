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
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by) { 
        // console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by) { 
        // console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset() {
        this.setState({counter: 0});
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
            <h1>set</h1>
          </div>
        );
      } 
}

class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super(); // Error 1 使用this就需要super

        // this.state = {
        //     counter : 0,
        // }

        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className='counter'> 
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethodment(this.props.by)}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        )
    }

}

// 设置默认props，在class外面
CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}