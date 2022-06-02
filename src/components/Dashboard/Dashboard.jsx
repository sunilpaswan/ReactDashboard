import React, { useEffect,useState } from 'react'
import CreateTask from './CreateTask';
import Card from "./Card"



const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
  
  useEffect(() => {
      let arr = localStorage.getItem("taskList")
     
      if(arr){
          let obj = JSON.parse(arr)
          setTaskList(obj)
      }
  }, [])


  const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const toggle = () => {
      setModal(!modal);
  }

  const saveTask = (taskObj) => {
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(taskList)
      setModal(false)
  }

  return (
    <>
    <div  
    style={{height:"100px", paddingLeft: "5rem", paddingTop: "3rem", background:"#e8ebed" }} >
    <button type="button" class="btn btn-success" 
    style={{background: "rgb(11, 179, 11)"}}
    onClick = {()=> setModal(true)}>Add New Schedule</button>
      <input 
       style={{float: "right", paddingRight: "2rem", marginRight: "5rem", border: "none", borderRadius: "0.80rem",
    background: "e8ebed"}}
        type="text" placeholder="    Search Your Schedule.."></input>
      
    </div>
    <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            
    </>
  )
}

export default Dashboard
