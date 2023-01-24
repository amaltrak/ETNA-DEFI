import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";
import Navbarr from "../components/Navbar.jsx";

function students() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");


  return (
    <>
      <Navbarr />
      <div>
      <h1 className="text-center mt-4">Rechercher un élève</h1>
      <Form>
            <InputGroup className="my-3">
              {/* onChange for search */}
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contacts"
              />
            </InputGroup>
          </Form>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>login</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.login.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td><a href="/Melee">{item.login}</a></td>
                    <td>{item.firstname}</td>
                    <td>{item.login}@etna-alternance.net</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default students;
