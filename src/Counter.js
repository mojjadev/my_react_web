import React, { Component } from "react";

class Counter extends Component {

  state = {
    number : 0
  }

  // constructor(props){
  //   super(props);
  //   state = {
  //     number: 1
  //   }
  // }

  handleIncrease = () => {
    // this.setState({
    //   number : this.state.number + 1
    // });
    // 비구조화 할당 변경
    const {number} = this.state;
    this.setState({
      number : number + 1
    });
  }

  handleDecrease = () => {
    // this.setState({
    //   number : this.state.number - 1
    // });
    // 비구조화 할당 변경
    this.setState(
      ({number}) => ({
        number: number - 1
      })
    );
  }
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;