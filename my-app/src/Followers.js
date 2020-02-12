import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col
  } from 'reactstrap';

function Followers(props) {
    return (
        <Row>
            {props.followers.map(follower => (
        <Col xl="3" md="6" sm="12">
            <Card>
                <CardBody>
                <div key={follower.id}>
                <CardImg src={follower.avatar_url} alt={`profile of ${follower.name}`} />
                <CardTitle><a href={follower.html_url}>{follower.login}</a></CardTitle>
                
                </div>
              </CardBody>
            </Card>
      
        </Col>
            ))}
      </Row>
    );
}

export default Followers;