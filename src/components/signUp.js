/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { signupUser } from '../actions';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempEmail: '',
      tempPassword: '',
      tempUserName: '',
    };
  }

  updateEmail = (event) => {
    this.setState({ tempEmail: event.target.value });
  }

  updatePassword = (event) => {
    this.setState({ tempPassword: event.target.value });
  }

  updateUserName = (event) => {
    this.setState({ tempUserName: event.target.value });
  }

  handleSave = () => {
    const user = {
      email: this.state.tempEmail,
      password: this.state.tempPassword,
      userName: this.state.tempUserName,
    };
    // prob need to change this or NOT
    this.props.signupUser(user, this.props.history);
  }

  return = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="return">
          <i className="fas fa-arrow-circle-left fa-3x" onClick={this.return} />
          <p className="return-text">Return</p>
          <p className="center-text">Sign Up!</p>

        </div>
        <div className="editingPost">
          <Form
            style={{
              width: '70vw',
            }}
          >
            <Form.Group controlId="exampleForm.ControlInput10">
              <Form.Label style={{ color: 'white' }}>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={this.updateUserName} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput11">
              <Form.Label style={{ color: 'white' }}>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={this.updateEmail} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput12">
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.updatePassword} />
            </Form.Group>
          </Form>
          <div className="bottom-btns">
            <Button variant="outline-info" size="lg" onClick={this.handleSave}>Sign Up</Button>{' '}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { signupUser })(SignUp);
