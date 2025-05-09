
import React from 'react';
import { Card } from 'react-bootstrap';


const CourseCard = ({ course }) => (
  <Card className="h-100 course-card">
    <Card.Img variant="top" src={course.thumbnail} className="course-thumbnail" />
    <Card.Body>
      <div className="course-title">{course.title}</div>
      <div className="course-instructor">By {course.instructor}</div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="course-price">${course.price}</span>
        <span className="course-rating">
          {"★".repeat(course.rating)}{"☆".repeat(5 - course.rating)}
        </span>
      </div>
    </Card.Body>
  </Card>
);

export default CourseCard;
