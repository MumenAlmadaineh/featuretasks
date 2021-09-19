import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';

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

        <div className='row'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.image_url} onClick={this.getVote} />
              <Card.Body>
                <Card.Title >{this.props.title}</Card.Title>
                <Card.Text>
                  number of votes: {this.state.vote}(❤️)
                </Card.Text>

                <Button onClick={() => this.props.shownInfo(this.props.title, this.props.description)} variant="primary">description</Button>
              </Card.Body>
            </Card>
          </Col>
        </div>

        {/* <h2>title: {this.props.bestData.title}</h2>
        <img src={this.props.bestData.image_url} alt='animals photos' ></img>
        <p>description: {this.props.bestData.description}</p>
        <button onClick={this.getVote}>Vote</button>
        <p>vote: {this.state.vote}</p> */}
      </div>
    );
  }
}

export default HornedBeast;
