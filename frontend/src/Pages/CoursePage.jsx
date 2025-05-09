// pages/CoursesPage.js
import React, { useState } from 'react';
import coursesData from '../Component/Data';
import CourseCard from '../Component/CourseCard/CourseCard';
import { Container, Row, Col, Form } from 'react-bootstrap';

const CoursesPage = () => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const filteredCourses = coursesData
    .filter(course => category === '' || course.category === category)
    .sort((a, b) => {
      if (sort === 'priceLow') return a.price - b.price;
      if (sort === 'priceHigh') return b.price - a.price;
      if (sort === 'popularity') return b.popularity - a.popularity;
      return 0;
    });

  return (
    <Container className="mt-4">
      <h2 className="mb-4">All Courses</h2>
      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select onChange={e => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredCourses.map(course => (
          <Col key={course.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesPage;
