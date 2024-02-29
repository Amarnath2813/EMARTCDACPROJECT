import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import { Container, Row, Col } from 'react-bootstrap';

const SubCategory = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [Subcategories, setSubcategories] = useState([]);

  const handleClick = (id, flag) => {
    if (flag) {
      navigate(`/subcat/${id}`);
    } else {
      navigate(`/product/${id}`);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const response = await fetch('https://localhost:7040/Category/getCatNameByParentId/' + id);
      const data = await response.json();
      setSubcategories(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSubcategories();
  }, [id]);

  return (
    <Container>
      <Row>
        {Array.isArray(Subcategories) &&
          Subcategories.map((i) => (
            <Col md={4} key={i.catmasterId} onClick={() => handleClick(i.catmasterId, i.childflag)}>
              <ItemCard title={i.categoryName} img={i.catImgPath} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SubCategory;