import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import TaskBoard from './components/TaskBoard/TaskBoard';
import Footer from './components/Footer/Footer';
import CustomModal from './components/CustomModal/CustomModal';

import { TaskContext } from './contexts/TaskContext';
import { ModalContext } from './contexts/ModalContext';
import { notification } from 'antd';

import axios from 'axios';


import './App.css';








function App() {
  const [modalVisible, setModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  let [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');
  const [taskId, setTaskId] = useState(0);

  const setModalVisibility = (visible, action, task, taskId) => {
    setModal(visible);
    setModalAction(action);
    setTask(task);
    setTaskId(taskId);
  }

  useEffect(()=>{
    axios.get('/api/todos')
    .then(res => {
      setTodoList(res.data);
    })
  }, []);

  const addTask = (task, action) => {
    axios.post('/api/create', { task: task, completed: 0})
    .then(res => {
      setTodoList([...todoList, res.data]);
      notification['success']({
        'message': "Successful"
      })
    });
  }

  const editTask = (task) => {
    axios.put(`/api/todos/${taskId}`, {task: task})
    .then(res => {
      todoList.forEach((todo, index) => {
        if(todo.id === taskId){
          todoList[index] = res.data;
          setTodoList([...todoList]);
          notification['success']({
            'message': "Successful"
          });
        }
      })
    })
  }

  const checkTask = (id, checked) => {
    axios.put(`/api/todos/${id}`, {completed: checked})
    .then(res => {
      todoList.forEach((todo, index) => {
        if(todo.id === id){
          todoList[index] = res.data;
          setTodoList([...todoList]);
        }
      })
    })
  }

  const deleteTask = (id) => {
    axios.delete(`/api/delete/${id}`)
    .then(res => {
      todoList.forEach((todo, index) => {
        if(todo.id === id){
          todoList.splice(index, 1);
          setTodoList([...todoList]);
          notification['success']({
            'message': "Successful"
          })
        }
      })
    })
  }

  return (
    <TaskContext.Provider value={{ todoList, addTask, editTask, deleteTask, checkTask }}>
      <ModalContext.Provider value={{ modalVisible, modalAction, task, setModalVisibility }}>
        <div className="container-fluid wrapper">
          <Header />
          <TaskBoard />
          <Footer />
          <CustomModal />
        </div>
      </ModalContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
