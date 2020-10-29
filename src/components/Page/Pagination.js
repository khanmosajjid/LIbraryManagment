import React, { Component, useState } from "react";
import { Col, Container,
     Row ,
Card, CardTitle,CardBody,CardImg,
CardSubtitle,CardText,Button,Badge} from "reactstrap";
import Cards from "../Cards/Cards";
import book from "../../book.json";
import "./Pagination.css";
import PaginationBtn from "../../User/Pagination-btn/Pagination-btn";
import book1 from '../../assets/book1.jpeg'

const Pagination = () => {
  const [posts, setPosts] = useState(book);
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  
  const onPaginationChange = (start, end) => {
    // console.log(start,end);
    setPagination({ start: start, end: end });
  };

  return (
    <Container>
      <Row className="pagination-row">
        {posts.slice(pagination.start, pagination.end).map((post) => (
          <Col lg={3} className="column">
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={book1}
                  alt="Card image cap"
                  className="books-img"
                />
                <CardBody>
        <CardTitle className="book-title">{post.title}</CardTitle>
        <CardSubtitle>{post.author}</CardSubtitle>
                  <CardText>
                   {post.Details}
                  </CardText>
                  <Row>
                      <Col>
                      <Badge color="success">Available</Badge>
                 <Badge color="danger">NotAvailable</Badge>
                      </Col>
                  </Row>
                 
                  <Button>Issue</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
        <PaginationBtn
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        ></PaginationBtn>
      </Row>
    </Container>
  );
};
export default Pagination;
