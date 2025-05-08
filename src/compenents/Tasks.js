import React, { useEffect, useState } from 'react';

function Tasks() {
    const [loading,setLoading]=useState(true)
    const [Tasklist,setTasks]=useState([])
    

    useEffect(() => {
     fetch("http://localhost/stepeffect/crud/select.php")
    
     .then((resp)=>  resp.json())
      .then((data)=> {
        console.log(data)
         setTasks(data.data)
        setLoading(false);

      })

      .catch((error) => {
        console.error('وقع مشكل:', error);
        setLoading(false);
      });
      }, []);

  return (
    <div>
              <h2>لائحة المستخدمين:</h2>

      {loading ? (
        <p>جارٍ تحميل البيانات...</p>
      ) : (
        <ul>
          {Tasklist.map((task) => (
            <li key={task.id}>{task.NameTask}</li>
          ))}
        </ul>
      )}
</div>

  );
}

export default Tasks;
