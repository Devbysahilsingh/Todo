import React, { useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const Entry = () => {
  
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handelAdd = (e) => {
    e.preventDefault()
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    console.log(todos)

   
  };

  const handeledit = (e,id) => {
    let t= todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newtodos=todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newtodos)

  };

  const handeledelete=(e,id) => {
    let newtodos=todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newtodos)
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handlecheckbox=(e)=>{
    let id=e.target.name
    let index= todos.findIndex(item=>{
      return item.id===id;
      
    })
    let newtodos=[...todos];
    newtodos[index].isCompleted=!newtodos[index].isCompleted
    setTodos(newtodos)
  }

  return (
    <div className="w-screen h-screen laptop:h-screen laptop:flex laptop:justify-center">
      {/* Main content div */}
      <div className="flex flex-col w-full h-full bg-violet-300 rounded-none p-[1rem] laptop:w-[60%] laptop:h-[80vh] laptop:rounded-2xl laptop:mt-[1rem]">
        <h1 className='text-xl text-center text-neutral-900 underline decoration-violet-900 tablet:text-2xl'>
          iTask - Manage Your Todos at One Place
        </h1>
        <h1 className='text-2xl text-neutral-900 mt-[0.5rem] underline decoration-violet-500'>Add a todo</h1>

        {/* Form to add todos */}
        <form className="mt-3 text-center flex" onSubmit={handelAdd}>
          <input 
            onChange={handleChange} 
            value={todo} 
            type='text' 
            placeholder='Enter your task' 
            className="w-[80%] p-[0.5rem] ps-[1rem] border-2 border-violet-900 rounded-full mr-[1rem] focus:outline-none"
          />
          <button type="submit" className="w-[100px] h-[50px] bg-violet-600 rounded-md text-white">Add</button>
        </form>

        <div className='flex mt-2'>
          <input type="checkbox" className='mr-[5px]' />
          <p>Show Finished</p>
        </div>

        <div className='h-[2px] w-[90%] bg-black self-center mt-[1rem]'></div>

        <h1 className='text-2xl mt-2 underline decoration-violet-500'>Your Todos</h1>

        {/* Display todos */}
        <div className='w-full h-full bg-white rounded-lg p-5 flex flex-col  items-center gap-y-2 relative'>
          {todos.length===0 && <div className='text-1.5xl self-center place-content-center tablet:text-2xl'>No todos to display😢💔</div>}
          {todos.map(item => (
            <div  key={item.id} className="flex justify-between items-center p-1.5 w-full h-auto  bg-purple-200 flex-wrap">
              <div className='flex w-[80%] flex-wrap gap-x-2'>
              <input onChange={handlecheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
              <div className={` ${item.isCompleted?"line-through":""}`}>{item.todo}</div>
              </div>
              <div className="todo-buttons flex  flex-wrap gap-x-2">
                <button onClick={(e)=>handeledit(e,item.id)} className="w-[70px] p-2 bg-violet-500 text-white rounded-md">EDIT</button>
                <button onClick={(e)=>handeledelete(e,item.id)} className="w-[70px]  bg-red-500 text-white rounded-md">DELETE</button>
              </div>
            </div>
          ))}
        </div> {/* Todos box end */}
      </div> {/* Main content div end */}
    </div>
  );
};

export default Entry;
