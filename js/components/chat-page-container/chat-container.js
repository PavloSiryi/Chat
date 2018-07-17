import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

import {MessageList, MessageForm} from './components';
import {addMessage, handleMessagesSort} from 'actions';
import {isLink, isValidVideo, isValidImage} from 'services/string.service';
import messageTypes from 'constants/messageTypes';

import styles from './chat-container.scss';

class ChatContainer extends Component {
  state = {
    socket: {},
    message: '',
    messageType: messageTypes[0],
    sortParam: 'asc'
  };

  componentDidMount = () => {
    if (!this.props.username.length) {
      this.props.history.push('/home');
      return;
    }
    const socket = new WebSocket('wss://echo.websocket.org/');

    socket.addEventListener('message', e => this.props.addMessage(JSON.parse(e.data)));
    this.setState({socket});
  };

  componentWillUnmount = () => {
    if (!isEmpty(this.state.socket)) this.state.socket.close();
  };

  handleStatePropertyChange = (propertyName, value) => {
    this.setState({[propertyName]: value});
  };

  handleValidationChack = () => {
    const {message, messageType} = this.state;

    switch (messageType) {
    case 'image':
      return isValidImage(message);
    case 'video':
      return isValidVideo(message);
    case 'link':
      return isLink(message);
    default:
      return true;
    }
  };

  handleMessageSend = () => {
    if (!this.handleValidationChack()) {
      alert('Provided URL is incorrect');
      return;
    }
    const {message, messageType} = this.state;
    const {username} = this.props;
    const messageObject = {
      messageType,
      message,
      username
    };

    this.setState({message: '', messageType: messageTypes[0]});
    this.props.addMessage({...messageObject, isMy: true});
    this.state.socket.send(JSON.stringify(messageObject));
  };

  handleMessageSort = () => {
    const sortParam = this.state.sortParam === 'asc' ? 'desc' : 'asc';

    this.setState({sortParam});
    this.props.handleMessagesSort(sortParam);
  };

  render() {
    const {message, messageType, sortParam} = this.state;
    const {messages} = this.props;

    return (
      <div className={styles.container}>
        <p className={styles.sort} onClick={this.handleMessageSort}>Sort by date: {sortParam}</p>
        <MessageList messages={messages} />
        <MessageForm
          message={message}
          messageType={messageType}
          handleStatePropertyChange={this.handleStatePropertyChange}
          handleMessageSend={this.handleMessageSend}
        />
      </div>
    );
  }
}

const mapStateToProps = ({username, messages}) => ({username, messages});
const mapDispatchToProps = dispatch => ({
  addMessage: data => dispatch(addMessage(data)),
  handleMessagesSort: sortType => dispatch(handleMessagesSort(sortType))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatContainer));
