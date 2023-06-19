import React from 'react';
import { Table } from 'react-bootstrap';

function Employee(props) {
  return (
    <div>
        {/* <h1>Name:,Age:</h1> */}
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>{props.name}</td><td>{props.age}</td></tr>
            </tbody>
           
        </Table>
    </div>
  )
}

export default Employee