import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Label, MediaQuery
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './homepage.css'

export default (props) => (
    <div className="sportCard">
        <Link to={`/api/sports/${props.sportId}/leagues`} thisSportId={props.sportId}>
            <Card>
                {/* <CardImg top width="10%" src="/test_photo.jpg" alt="Sport Image" /> */}
                <CardImg className="card-img-top" top width="10%" top height="5%" src={props.image} alt="Sport Image" />
                <CardBody className="cardBody">
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    {/* <Button>Go To Leagues</Button> */}
                </CardBody>
            </Card>
        </Link>

    </div>
);
