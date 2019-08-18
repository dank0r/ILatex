import React from 'react';
import '../styles/App.css';
import Editor from './Editor';
import OutputWindow from './OutputWindow';

class App extends React.Component {
  render() {
    return (
        <div className='ignoreMath application'>
          <Editor />
          <OutputWindow  className='processMath'/>
        </div>
    );
  }
}

export default App;
