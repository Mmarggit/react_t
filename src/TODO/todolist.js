import React from "react"
import PropTypes from "prop-types"
import TodoItem from "./todoitem"

const styles = {
    ul: {
        listStyle: "none" , 
        margin: 0, 
        padding: 0
    }
}
 function TodoList(props) {
    return  (
        <ul style={styles.ul}>
          {props.todos.map((todo, index) => {
            return <TodoItem todo = {todo}
             key = {todo.id} 
             index = {index} 
             onChange={props.onToggle}/>
          })}
        </ul>
    )
} 

TodoList.propTypes = {
     todos:  PropTypes.arrayOf(PropTypes.object).isRequired
} 


export default TodoList