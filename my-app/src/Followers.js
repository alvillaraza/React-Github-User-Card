import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Row, Col
  } from 'reactstrap';

function Followers(props) {
    return (
        <Row>
        <Col xs="12" md="6" xl="3">
            <Card>
            {props.followers.map(follower => (
                <CardBody>
                <div key={follower.id}>
                <CardImg top width='100%' src={follower.avatar_url} alt={`profile of ${follower.name}`} />
                <CardTitle>{follower.login}</CardTitle>
                <CardSubtitle>{follower.html_url}</CardSubtitle>
                </div>
              </CardBody>
            ))}
            </Card>
      
        </Col>
      </Row>
    );
}

export default Followers;