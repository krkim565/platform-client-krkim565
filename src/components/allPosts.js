import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { fetchPosts } from '../actions';
import '../style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    function renderImage(coverUrl) {
      // if statement checks if the coverUrl has something inside it
      // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
      if (/\S/.test(coverUrl)) {
        return (
          <Card.Img style={{ height: '35vh' }} variant="top" src={coverUrl} />
        );
      } else {
        return (
          <div />
        );
      }
    }
    const postList = this.props.allPosts.map((post) => {
      return (
        <div className="centeR" key={post.id}>
          <Link to={`posts/${post.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <Card>
              {renderImage(post.coverUrl)}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted">{post.tags}</Card.Footer>
            </Card>
          </Link>
        </div>
      );
    });

    if (this.props.errorOccurred) {
      return (
        <div className="fallback">
          <p>Sorry we are experiencing technical diffculties! Please retry in a few minutes.</p>
          <p>Error message: {this.props.error.message}</p>
        </div>
      );
    } else {
      return (
        <div>
          {postList}
        </div>

      );
    }
  }
}


function mapStateToProps(reduxState) {
  return {
    allPosts: reduxState.posts.all,
    errorOccurred: reduxState.posts.errorOccurred,
    error: reduxState.posts.error,
  };
}


export default connect(mapStateToProps, { fetchPosts })(Posts);
