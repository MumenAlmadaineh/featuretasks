import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(data);
    return (
      <>
        {
          data.map(item => {
            return <HornedBeast bestData = {item}/>;
          })
        }
      </>
    );
  }
}

export default Main;
