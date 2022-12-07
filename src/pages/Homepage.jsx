import React from 'react';
import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

import MyButton from '../other/MyButton';
import './HomePage.Style.css';

import { Col, Row } from 'antd';
import { Layout } from 'antd';
import { Input } from 'antd';


let nextId = 0;

const { Content } = Layout;
const { TextArea } = Input;


const HomePage = () => {
    const navigate = useNavigate();

    const navigateToDetail = (todo) => {
        navigate(`/todo/${todo.id}`, { replace : true, state: { id: todo.id, title: todo.title, description: todo.description } });
    };

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
      const [todos, setTodos] = useState([]);
      const pushClick = () => {
        setTitle('');
        setDescription('');
        setTodos([
          ...todos,
          { id: nextId++, title: title, description: description }
        ]);
      }

      const filterClick = (todo) => { 
        setTodos(
          todos.filter((t) => t !== todo)
        );
      }

    //   useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/')
    //     }, [])
    // })

    return (
        <>
        <Layout>
            <Content style={{backgroundColor: 'Pink', width: '100vw', height: '100%', padding: '50px'}}>
        <Row gutter={8}>
         <Col span={8}></Col>   
        <Col span={8}>
            <h1>To Do List</h1>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row gutter={8}>
         <Col span={8}></Col>   
        <Col span={8}>
            <div style={{backgroundColor: 'White',border: '2px black solid', width: '100%', height: '250px', borderRadius: '10px', overflowY: 'auto', overflowX: 'hidden'}}>
                <ul>
                { todos.map(todo => (
          <h1 key={todo.id} onClick={() => {navigateToDetail(todo)}}>
            {todo.title}{' '}
            <MyButton fungsi={() => {filterClick(todo)}} namaFungsi="x" />
          </h1>
        ))}

                </ul>
            </div>
        </Col>
        <Col span={8}></Col>
      </Row>


      <Row gutter={8}>
         <Col span={8}></Col>   
        <Col span={8}>
            <h1>Add To Do</h1>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row gutter={8}>
         <Col span={8}></Col>   
        <Col span={8}>
        <Input placeholder="Title" allowClear value={title}
        onChange={e => setTitle(e.target.value)} /> 
    <br />
    <br />
    <TextArea
      showCount
      maxLength={100}
      style={{ height: 120, marginBottom: 24 }}
      placeholder="Description"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <MyButton fungsi={pushClick} namaFungsi="+"/>
        </Col>
        <Col span={8}></Col>
      </Row>

    
      <Row gutter={8}>
         <Col span={8}></Col>   
        <Col span={8}>
        <Outlet/>
        </Col>
        <Col span={8}></Col>
      </Row>


      </Content>
      </Layout>
      </>


    );
};

export default HomePage;