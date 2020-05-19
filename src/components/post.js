/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import marked from 'marked';
import Card from 'react-bootstrap/Card';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempTitle: '',
      tempTags: '',
      tempContent: '',
      tempCoverUrl: '',
      isEditing: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);

    this.setState({
      isLoading: false,
    });
    // this.setState({
    //   tempTitle: this.props.currentPost.title,
    //   tempTags: this.props.currentPost.tags,
    //   tempContent: this.props.currentPost.content,
    //   tempCoverUrl: this.props.currentPost.coverUrl,
    // });
  }

  handleDelete= () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  handleEdit = () => {
    this.setState({
      isEditing: true,
      tempTitle: this.props.currentPost.title,
      tempTags: this.props.currentPost.tags,
      tempContent: this.props.currentPost.content,
      tempCoverUrl: this.props.currentPost.coverUrl,
    });
  }

  handleSave = () => {
    const post = {
      title: this.state.tempTitle,
      tags: this.state.tempTags,
      content: this.state.tempContent,
      coverUrl: this.state.tempCoverUrl,
    };
    this.props.updatePost(this.props.match.params.postID, post);
    this.setState({ isEditing: false });
  }

  updateTitle = (event) => {
    this.setState({ tempTitle: event.target.value });
  }

  updateContent = (event) => {
    this.setState({ tempContent: event.target.value });
  }

  updateCoverUrl = (event) => {
    this.setState({ tempCoverUrl: event.target.value });
  }

  updateTags = (event) => {
    this.setState({ tempTags: event.target.value });
  }

  handleCancel = () => {
    this.setState({ isEditing: false });
  }

  return = () => {
    this.props.history.push('/');
  }

  authenticatedEdit() {
    if (this.props.authenticated) {
      return (
        <div className="bottom-btns">
          <Button variant="outline-info" size="lg" onClick={this.handleEdit}>Edit</Button>{' '}
          <Button variant="outline-info" size="lg" onClick={this.handleDelete}>Delete</Button>{' '}
        </div>
      );
    }
    return null;
  }

  // this.props.currentPost.author == null
  renderSomeSection() {
    console.log(this.props.authenticated);
    if (this.props.currentPost.author == null) {
      console.log(this.props.currentPost.author);
      return (
        <div>
          Loading...
        </div>
      );
    } else if (this.state.isEditing) {
      return (
        <div className="editingPost">
          <Form style={{
            width: '70vw',
          }}
          >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: 'white' }}>Title</Form.Label>
              <Form.Control size="lg" type="text" value={this.state.tempTitle} onChange={this.updateTitle} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: 'white' }}>Tags</Form.Label>
              <Form.Control size="sm" type="text" value={this.state.tempTags} onChange={this.updateTags} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ color: 'white' }}>Content</Form.Label>
              <Form.Control as="textarea" rows="3" value={this.state.tempContent} onChange={this.updateContent} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: 'white' }}>Cover url</Form.Label>
              <Form.Control type="text" value={this.state.tempCoverUrl} onChange={this.updateCoverUrl} />
            </Form.Group>
          </Form>
          <div className="bottom-btns">
            <Button variant="outline-info" size="lg" onClick={this.handleSave}>Save</Button>{' '}
            <Button variant="outline-info" size="lg" onClick={this.handleCancel}>Cancel</Button>{' '}
          </div>
        </div>
      );
    } else {
      return (
        <div className="post">
          <Card>
            <Card.Header>{this.props.currentPost.title}</Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.currentPost.tags}
              </Card.Subtitle>
              <Card.Text dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
            </Card.Body>
            <Card.Footer className="text-muted">{this.props.currentPost.coverUrl}</Card.Footer>
            <Card.Footer className="text-muted">{this.props.currentPost.author.userName}</Card.Footer>
          </Card>
          {this.authenticatedEdit()}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="return">
          <i className="fas fa-arrow-circle-left fa-3x" onClick={this.return} />
          <p className="return-text">Return</p>
          <p className="after-return"> Your Recipe!</p>
        </div>
        {this.renderSomeSection()}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    currentPost: reduxState.posts.current,
    authenticated: reduxState.auth.authenticated,
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post);
