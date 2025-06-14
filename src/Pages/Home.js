import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5">
        <Container>
          <h1>Welcome to Dev-Tracker</h1>
          <p>Your ultimate solution to track development progress with ease and efficiency.</p>
          <img src="./images/hero.webp" alt="Hero" className="img-fluid rounded shadow mt-3" width="600" />
        </Container>
      </div>

      {/* About Section */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <img src="/images/about devtacker.webp" alt="Team" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h2>About Dev-Tracker</h2>
            <p>
              Dev-Tracker helps developers and teams monitor their project tasks, updates, and goals in a centralized dashboard.
              Designed with simplicity and productivity in mind, it enables better collaboration and faster development.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-4">Key Features</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
          
              <Card.Body>
                <Card.Title>Real-Time Progress</Card.Title>
                    <Card.Img variant="top" src="/images/real time progress.jpeg"   style={{ width: '100%', height: '215px' }}/>
                <Card.Text>
                  Track your project's progress in real-time with dynamic dashboards and updates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Team Collaboration</Card.Title>
                <Card.Img variant="top" src="/images/team collaboratin.jpeg" />
                <Card.Text>
                  Share tasks, updates, and communicate seamlessly within your dev team.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Task Management</Card.Title>
                <Card.Img variant="top" src="/images/task management.jpeg" />
                <Card.Text>
                  Create, assign, and manage tasks effortlessly with built-in tracking tools.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default Home;
