import React, { Component } from 'react';

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    };
  }
  getVote = () => {
    this.setState({
      vote: this.state.vote + 1
    });
  }
  render() {
    return (
      <div>
        <h2>title: {this.props.bestData.title}</h2>
        <img src={this.props.bestData.image_url} alt='animals photos' ></img>
        <p>description: {this.props.bestData.description}</p>
        <button onClick={this.getVote}>Vote</button>
        <p>vote: {this.state.vote}</p>
      </div>
    );
  }
}

export default HornedBeast;
