import logo from './logo.svg';
import '../styles/App.scss';
import Component1 from './Exam/component1';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          
          
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<Component1 />} />
            <Route path="/user" element={<ListUser />} exact/>
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
          
        </header>

        {/* plugin Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
