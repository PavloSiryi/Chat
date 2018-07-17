import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StartPageContainer from 'components/start-page-container/start-page-container';
import ChatContainer from 'components/chat-page-container/chat-container';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={StartPageContainer}/>
        <Route exact path="/home" component={StartPageContainer}/>
        <Route exact path="/chat" component={ChatContainer}/>
      </div>
    </Router>
  );
};
