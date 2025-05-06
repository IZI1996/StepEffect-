import React, { useState } from 'react';
import axios from "axios";
import { tab } from '@testing-library/user-event/dist/tab';

function Task() {
const [taskValue,setTaskvalue]=useState({NameTask:''})
const [responseMessage, setResponseMessage] = useState(''); 




const handleInputChange = (e) => {
  setTaskvalue({
     
      [e.target.name]: e.target.value
  });
};

const handleClick = async (e) => {
  e.preventDefault();
  const postData = new FormData();
      postData.append('NameTask', taskValue.NameTask);

  try {

      const response = await axios.post(
       
          'http://localhost/stepeffect/crud/insert.php', 
          postData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setResponseMessage(response.data.message);
  
console.log(postData)
      
  } catch (error) {
      setResponseMessage(error.response?.data?.message || "Error connecting to the server.");
  }
}

  return (
    <div>
       <h2>Simple Input Example</h2>
      <input
      name='NameTask'
        type="text"
        value={taskValue.NameTask}
        onChange={handleInputChange} // call handler on input change
    placeholder="Enter task name"
      />
      <p>You typed: {taskValue.NameTask}</p>
      <button onClick={handleClick}>Save Task</button>
        <p>{responseMessage}</p> 

</div>

  );
}

export default Task;
