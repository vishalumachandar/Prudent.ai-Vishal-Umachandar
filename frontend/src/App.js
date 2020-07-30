import React, { Component } from 'react';
import './App.css';
import FileUpload from './Components/Fileupload'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Front End Task</h1>
        <FileUpload></FileUpload>
      </div>
    );
  }
}

export default App;
