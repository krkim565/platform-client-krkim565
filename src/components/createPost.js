/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempTitle: '',
      tempTags: '',
      tempContent: '',
      tempCoverUrl: '',
    };
  }

  updateTitle = (event) => {
    this.setState({ tempTitle: event.target.value });
  }

  updateTags = (event) => {
    this.setState({ tempTags: event.target.value });
  }

  updateContent = (event) => {
    this.setState({ tempContent: event.target.value });
  }

  updateCoverUrl = (event) => {
    this.setState({ tempCoverUrl: event.target.value });
  }

  handleSave = () => {
    const post = {
      title: this.state.tempTitle,
      tags: this.state.tempTags,
      content: this.state.tempContent,
      coverUrl: this.state.tempCoverUrl,
    };

    this.props.createPost(post, this.props.history);
  }

  handleDelete = () => {
    this.props.history.push('/');
  }

  return = () => {
    this.props.history.push('/');
  }


  render() {
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
          <div className="return">
            <i className="fas fa-arrow-circle-left fa-3x" onClick={this.return} />
            <p className="return-text">Return</p>
            <p className="center-text"> Add whatever your tastebuds desire!</p>

          </div>
          <div className="editingPost">
            <Form
              style={{
                width: '70vw',
              }}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: 'white' }}>Dish Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Title" onChange={this.updateTitle} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: 'white' }}>Tags</Form.Label>
                <Form.Control size="sm" type="text" placeholder="Tags" onChange={this.updateTags} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ color: 'white' }}>Recipe</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={this.updateContent} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: 'white' }}>Pic Url</Form.Label>
                <Form.Control type="text" placeholder="Cover Url" onChange={this.updateCoverUrl} />
              </Form.Group>
            </Form>
            <div className="bottom-btns">
              <Button variant="outline-info" size="lg" onClick={this.handleSave}>Save</Button>{' '}
              <Button variant="outline-info" size="lg" onClick={this.handleDelete}>Cancel</Button>{' '}
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    errorOccurred: reduxState.posts.errorOccurred,
    error: reduxState.posts.error,
  };
}


export default connect(mapStateToProps, { createPost })(NewPost);
