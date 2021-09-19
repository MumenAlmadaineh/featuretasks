import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {

  render() {
    let title = this.props.title;
    let image_url = this.props.image_url;
    let description = this.props.description;
    let keyword = this.props.keyword;
    let shownInfo = this.props.shownInfo;
    return (
      <>
        {
          < HornedBeast title={title}
            image_url={image_url}
            description={description}
            keyword={keyword}
            shownInfo={shownInfo}
          />
        }
      </>
    );
  }
}

export default Main;
