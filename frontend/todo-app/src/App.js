import React, { Component } from 'react';
import './App.css';
// import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter />  */}
        <TodoApp />
      </div>
    );
  } 
}
export default App;


// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello Worlds
//       </div>
//     );
//   }
// }
  