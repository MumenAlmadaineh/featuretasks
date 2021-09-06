import React, { Component } from 'react';

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>title: {this.props.title}</h2>
        <img src={this.props.imgUrl} alt='animals photos' ></img>
        <p>description: {this.props.description}</p>
        <button>Vote</button>
        <p>vote: {this.props.vote}</p>
      </>
    );
  }
}

export default HornedBeast;
