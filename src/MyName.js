import React, { Component, Fragment} from 'react';

class MyName extends Component {
  // static defaultProps = {
  //   name : '기본 이름'
  // }
  render() {
    return (
      <div>
        안녕하세요! 제이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name : '기본 이름'
}
export default MyName;