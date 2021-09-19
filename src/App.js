import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from './data.json';
import SelectedBeast from './component/SelectedBeast';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      showInfo: false,
    };

  }

  shownInfo = (title, description) => {
    this.setState({
      title: title,
      description: description,
      showInfo: true,
    });
  }

  hiddenInfo = () => {
    this.setState({
      showInfo: false
    });
  }

  render() {
    return (
      <>
        <Header />

        {
          data.map((item) => {
            return <Main
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              keyword={item.keyword}
              shownInfo={this.shownInfo}
            />;
          })
        }

        <SelectedBeast
          hiddenInfo={this.hiddenInfo}
          title={this.state.title}
          description={this.state.description}
          showInfo={this.state.showInfo}
        />

        <Footer />
      </>
    );
  }
}

export default App;
