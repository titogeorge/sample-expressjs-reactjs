import React, { Component } from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Well = require('react-bootstrap').Well;

class Profile extends Component {
 
  render() {
    return (
        <Grid fluid className="margin-10-10">
        <Row className="show-grid">
          <Col md={12}>
            <Row className="show-grid">
              <Col md={3}> </Col>
              <Col md={6}>
                <Well>
                  <Row className="show-grid">
                    <Col md={3}>
                      Name
                    </Col>
                    <Col md={9}>
                      {this.props.user.name}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col md={3}>
                      User Name
                    </Col>
                    <Col md={9}>
                      {this.props.user.username}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col md={3}>
                      Email
                    </Col>
                    <Col md={9}>
                      {this.props.user.email}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col md={3}>
                      Phone
                    </Col>
                    <Col md={9}>
                      {this.props.user.phone}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col md={3}>
                      www
                    </Col>
                    <Col md={9}>
                      {this.props.user.website}
                    </Col>
                  </Row>
                </Well>
              </Col>
              <Col md={3}> </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}



export default Profile;
