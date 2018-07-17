import React from 'react';

import {ImageMessage, TextMessage, VideoMessage} from '../../components';

import styles from './message-list.scss';

const getMessageComponent = message => {
  switch (message.messageType) {
  case 'image':
    return <ImageMessage key={message.id} message={message} />;
  case 'video':
    return <VideoMessage key={message.id} message={message} />;
  default:
    return <TextMessage key={message.id} message={message} />;
  }
};

export default ({messages = []}) => (
  <div className={styles.container}>
    {messages.map(message => (
      getMessageComponent(message)
    ))}
  </div>
);
