import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from "../model"
import SingleTodo from './SingleTodo';
import "./style.css";

interface props { 
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<props> = ( { 
    todos, 
    setTodos, 
    completedTodos, 
    setCompletedTodos, 
}) => { 
    return(
        <div className='container'>
            <Droppable droppableId='TodosList'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`todos ${snapshot.isDraggingOver?'dragactive': ""}`}
                            ref={provided.innerRef} 
                            {...provided.droppableProps}>
                            <span className="todos__heading">Active Tasks</span>
                                {todos?.map((todo,index) => (
                                    <SingleTodo 
                                        todo={ todo }
                                        index={index}
                                        key={ todo.id }
                                        todos={ todos }
                                        setTodos= { setTodos }
                                    />
                                ))}
                                {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>

            <Droppable droppableId='TodosRemove'>
                {
                    (provided, snapshot) => (
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps}
                            className={`todos ${snapshot.isDraggingOver?'dragcomplete': "remove"}`}
                        >
                        <span className="todos__heading">Completed Tasks</span>
                                {completedTodos?.map((todo, index) => (
                                    <SingleTodo 
                                        todo={ todo }
                                        index={index}
                                        todos={ completedTodos }
                                        key={ todo.id }
                                        setTodos= { setCompletedTodos }
                                    />
                                ))}
                                {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
};

export default TodoList;
