import React from "react";
import internal from "stream";

interface TodoItemProps {
  name: string;
  number: any;
}

function TodoItem(props: TodoItemProps) {
  return(
    <div>{(props.number + '.') + props.name}</div>
  )
}

export default TodoItem;