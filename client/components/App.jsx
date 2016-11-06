import React, { Component } from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
  }
  signOut() {
    request.post('/api/signout')
           .then(() => {
             this.updateAuth();
             hashHistory.push('/');
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(userDetails) {
    request.post('/api/login')
           .send(userDetails)
           .then(() => {
             this.updateAuth();
           });
  }
  signUp(userDetails) {
    request.post('/api/signup')
           .send(userDetails)
           .then(() => {
             this.updateAuth();
           });
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div className="top-nav_links">
          <Link to="#" onClick={this.signOut} >SIGN OUT</Link>
        </div>
        );
    } else {
      userDisplayElement = (
        <div className="top-nav_links">
          <Link to="/signup" className="signup" >SIGN UP</Link>
        </div>
      );
    }
    const childrenWithProps = React.cloneElement(this.props.children, {
      token: this.state.token,
      handleSignup: this.signUp,

    });
    return (
      <div>
        <div className="top-nav clearfix">
          <Link to="/">
            <img
              className="graffitiicon"
              src="./images/art3.png"
              alt="graffiti"
            />
          </Link>
          {userDisplayElement}
        </div>
        {childrenWithProps}
      </div>
    );
  }
}

 // {childrenWithProps}
App.propTypes = propTypes;

export default withRouter(App);
