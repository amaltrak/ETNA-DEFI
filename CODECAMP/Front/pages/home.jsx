import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import Navbarr from "../components/Navbar.jsx";

function Home() {
  return (
    <>
    <Navbarr />
    <div container>
      <Stack direction="horizontal" gap={3}>
        <br />
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src="proms.png" />
          <Card.Body>
            <Card.Title>Promo</Card.Title>
            <Card.Text>promo 2026-APAE</Card.Text>
            <a href="/students"><Button variant="primary">accéder à la promo</Button></a>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src="proms.png" />
          <Card.Body>
            <Card.Title>Promo</Card.Title>
            <Card.Text>promo 2025-APAE</Card.Text>
            <Button variant="primary">accéder à la promo</Button>
          </Card.Body>
        </Card>

        <br />

        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src="proms.png" />
          <Card.Body>
            <Card.Title>Promo</Card.Title>
            <Card.Text>promo 2024-APAE</Card.Text>
            <Button variant="primary">accéder à la promo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src="proms.png" />
          <Card.Body>
            <Card.Title>Promo</Card.Title>
            <Card.Text>bachelor 2024</Card.Text>
            <Button href="" variant="primary">
              accéder à la promo
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src="proms.png" />
          <Card.Body>
            <Card.Title>Promo</Card.Title>
            <Card.Text>Master 2023</Card.Text>
            <Button href="" variant="primary">
              accéder à la promo
            </Button>
          </Card.Body>
        </Card>
      </Stack>
    </div>
    </>
  );
}

export default Home;
