import React from 'react';

import TextMessage from '../text-message/text-message';

import styles from './image-message.scss';

export default ({message}) => (
  <div>
    <TextMessage message={message} />
    <img className={styles.image} style={{float: message.isMy ? 'right' : 'left'}} src={message.message} />
    <div className={styles.clear} />
  </div>
);
