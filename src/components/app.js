import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import '../style.scss';
import Posts from './allPosts';
import NewPost from './createPost';
import Post from './post';
import SignIn from './signIn';
import SignUp from './signUp';
import NavBar from './navBar';
import PrivateRoute from './privateRoute';

const FallBack = (props) => {
  return <div className="fallback">Incorrect link</div>;
};


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <PrivateRoute path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
