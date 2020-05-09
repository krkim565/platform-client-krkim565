import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import React from 'react';
import '../style.scss';
import Posts from './allPosts';
import NewPost from './createPost';
import Post from './post';


const FallBack = (props) => {
  return <div className="fallback">Incorrect link</div>;
};


const Nav = (props) => {
  return (
    <nav className="nav-bar">
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginRight: '5px',
      }}
        exact
        to="/"
      >
        My Recipedia
      </NavLink>
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginLeft: '5px',
      }}
        to="/posts/new"
      >
        Post Recipe
      </NavLink>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
