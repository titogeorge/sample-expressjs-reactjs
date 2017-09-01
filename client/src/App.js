import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts'
import Profile from './Profile'
var Glyphicon = require('react-bootstrap').Glyphicon;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Tab = require('react-bootstrap').Tab;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Tabs = require('react-bootstrap').Tabs;

class App extends Component {
  state = {users: []}
  defaultKey = 1;

   getInitialState() {
    return {
      showPosts: false
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="border-2-grep-padding-10">
              <img src={logo} className="App-logo" alt="logo" />
              G' Book
          </h2>
        </div>
        <div className="border-1-grep-padding-10">
          <Tab.Container id="user-list" defaultActiveKey={this.defaultKey}>
            <Row className="clearfix">
              <Col sm={4}>
                <Nav bsStyle="pills" stacked>
                  {this.state.users.map(user =>
                    <NavItem eventKey={user.id} key={user.id}>
                      <Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;{user.name}
                    </NavItem>
                  )}
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation>
                  {this.state.users.map(user =>
                    <Tab.Pane eventKey={user.id} key={user.id}>
                      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Profile">
                          <Profile user={user}/>
                        </Tab>
                        <Tab eventKey={2} title="Posts">
                        <Posts user={user.id} name={user.name}/>
                        </Tab>
                      </Tabs>
                    </Tab.Pane>
                  )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}



export default App;
