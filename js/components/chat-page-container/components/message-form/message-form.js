import React from 'react';

import messageTypes from 'constants/messageTypes';

import styles from './message-form.scss';

export default ({message, messageType, handleStatePropertyChange, handleMessageSend}) => (
  <div className={styles.container}>
    <textarea
      className={styles.input}
      value={message}
      onChange={e => handleStatePropertyChange('message', e.target.value)}
    />
    <button className={styles.button} onClick={handleMessageSend}>Send</button>
    <select
      className={styles.select}
      value={messageType}
      onChange={e => handleStatePropertyChange('messageType', e.target.value)}
    >
      {
        messageTypes.map(type => <option key={type} value={type}>{type.toUpperCase()}</option>)
      }
    </select>
  </div>
);
