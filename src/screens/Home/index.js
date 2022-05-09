import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { useState , useEffect } from "react";
import axios from "axios";



function Home (props) {
  const [state,setState]=useState({
    value: "",
    items: [] }

  )

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      const data = result.data;
      setState({
        ...state,
        items: data.slice(0 - 5),
        value:''
      });
    });
  },[] );
  
   const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

   const handleAdd = (e) => {
    e.preventDefault();
    setState({
      ...state,
      items: [
        ...state.items,
        {
          title: state.value,
          id: Math.random() * 20000,
          editItem:false,
        },
        
      ],
      value: '',
    });
  };
   const handleDelete = (id) => {
    const newArray = state.items.filter((item) => item.id !== id);
    
    setState({
      ...state,
      items: newArray,
    });
  };
  
     const handleEdit=(id)=>{
      const newArray = state.items.filter((items) => items.id !== id);
      const selectedItem=state.items.find(items=> items.id===id)
      selectedItem.editItem=true
      console.log(newArray)

      setState({
        ...state,
       items:newArray,
       item:selectedItem,
       id:id,
       editItem:true,
       value:selectedItem.title
       
      })
      console.log(selectedItem)

    }

  

 
    
    return (
      
      <div className={"inner-container"}>
        <h1>To Do List App</h1>
        <InputBox
       
          value={state.value}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
       
        
        <List changeEditMode={handleEdit} onDeleteToHome={handleDelete} items={state.items}  onEditToHome={handleEdit}  />
      </div>
    );
  }


export default Home;
