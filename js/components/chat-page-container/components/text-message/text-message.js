import React from 'react';

import styles from './text-message.scss';

export default ({message}) => (
  <div style={{textAlign: message.isMy ? 'right' : 'left'}}>
    {message.messageType === 'text' ?
      <h3 className={styles.message}>{message.message}</h3> :
      <a href={message.message}>{message.message}</a>
    }
    <p className={styles.description}>{message.username}, {message.date}</p>
  </div>
);
