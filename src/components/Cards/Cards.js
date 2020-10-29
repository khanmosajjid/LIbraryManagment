import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Cards.css'

// "BookName": "Chmpak",
//         "Author": "XYZ",
//         "PublishedInYear": "2000",
//         "Volume": 1,
//         "Details": "Comedy Book for kids to get intereset in reading Books and enjoying it too",
//         "Theme": "Comedy"

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%"  src={props.book} alt="Card image cap" />
        <CardBody>
          <CardTitle>BookTitle</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to</CardText>
          <Button>Book</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;