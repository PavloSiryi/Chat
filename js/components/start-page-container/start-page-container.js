import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {StartPageForm} from './components';
import {handleNameChange} from 'actions';

import styles from './start-page-container.scss';

class StartPageContainer extends Component {
  state = {
    name: ''
  };

  handleNameChange = val => {
    this.setState({name: val});
  };

  handleNextClick = () => {
    this.props.handleNameChange(this.state.name);
    this.props.history.push('/chat');
  };

  render() {
    const {name} = this.state;

    return (
      <div className={styles.container}>
        <StartPageForm
          name={name}
          handleNameChange={this.handleNameChange}
          handleNextClick={this.handleNextClick}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleNameChange: name => dispatch(handleNameChange(name))
});

export default withRouter(connect(null, mapDispatchToProps)(StartPageContainer));
