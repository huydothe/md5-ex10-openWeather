import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  const [state, setState] = useState();

  const getApi = async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  };

  useEffect(() => {
    getApi().then((res) => {
      console.log(res);
      setState(res.data)
    });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>userID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { state && state.slice(0,30).map((item,index)=>(
            <tr key={index}>
              <td>{index}</td>
              <td>{item.userID}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </>
  );
}
