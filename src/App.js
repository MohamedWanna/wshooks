import './App.css';
import ListToDo from './components/ListToDo';
import {task} from "./datax"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import { useState } from 'react';
function App() {
  const [tasks,setTasks] = useState(task)
  const handleadd =  (newtask) => { 
    setTasks([...tasks,newtask]) 
  }
  const handledelete = (id) => { 
    setTasks(tasks.filter(
      (el)=> el.id!==id
      ))
   }
  return (
    <div className="App">
      <ListToDo task = {tasks}handledelete={handledelete}/>

      <AddTask handleadd={handleadd}  />
    </div>
  );
}

export default App;
