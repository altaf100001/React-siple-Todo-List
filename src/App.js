import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import {v4 as uuid} from "uuid"

function App() {
  return (
    <div className="App">
     <Todo />
    </div>
  );
}

export default App;
