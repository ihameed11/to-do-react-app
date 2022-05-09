import "./style.css";
import Button from "../Button";

function ListIem(props) {
  return (
    <div className={"flex item"} >
      
      <input type="checkbox" className="check " id="box"/>
      <p className={"title"}  >{props.title}</p>
      <Button onClick={()=>props.onEdit(props.id)} >edit</Button>
      <Button onClick={() => props.onDelete(props.id)}>Delete</Button>

    </div>
  );
}

export default ListIem;
