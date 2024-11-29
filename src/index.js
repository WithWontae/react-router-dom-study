import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Route, Routes, HashRouter, NavLink, useParams, BrowserRouter } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'JS', desc:'JS is ...'},
  {id:3, title:'React', desc:'React is ...'},
];

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    desc:'Not Found'
  }

  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
          {/* <li><NavLink to="/topics/1">HTML</NavLink></li>
          <li><NavLink to="/topics/2">JS</NavLink></li>
          <li><NavLink to="/topics/3">React</NavLink></li> */}
          {lis}
      </ul>
      <Routes>
        {/* <Route path="/1" element={'HTML is ...'} />
        <Route path="/2" element={'JS is ...'} />
        <Route path="/3" element={'React is ...'} /> */}
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> */}
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics/">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Fount'} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
