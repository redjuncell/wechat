import React from 'react';
import './App.css';
import   Myrouters from  './components/common/MyRouters'
import router  from  './router'
function App() {
  return (
    <div className="App">
       <p>weChat项目启动</p>
        <Myrouters  router={router}/>
    </div>
  );
}

export default App;
