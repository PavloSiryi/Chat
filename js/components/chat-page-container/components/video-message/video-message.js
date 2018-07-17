import React from 'react';

import TextMessage from '../text-message/text-message';

import styles from './video-message.scss';

export default ({message}) => (
  <div>
    <TextMessage message={message} />
    <video style={{float: message.isMy ? 'right' : 'left'}} width="400" controls>
      <source src={message.message} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div className={styles.clear} />
  </div>
);
