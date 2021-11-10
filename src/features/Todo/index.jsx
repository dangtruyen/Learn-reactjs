import React from 'react';
import { useState } from 'react/cjs/react.development';
import TodoList from './components/Todolist';


function TodoFeature() {

    const initTodoList = [
        {id: 1,
        title: 'Eat',
        status: 'new',
        },
        {id: 2,
        title: 'Code',
        status: 'completed',
        },
        {id: 3,
        title: 'Sleep',
        status: 'new',
        },
    ]

    const [ todoList, setTodoList ] = useState(initTodoList);
    const [ filterStatus, setFilterStatus ] = useState('all');

    const handleTodoClick = (todo, idx) =>{
        const newTodoList =[...todoList];
        console.log(idx);
        newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        setTodoList(newTodoList);
    }
    
    const handleShowAll = () =>{
        setFilterStatus('all')
    }

    const handleShowNew = () =>{
        setFilterStatus('new')
    }

    const handleShowCompleted = () =>{
        setFilterStatus("completed")
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all'|| filterStatus === todo.status);
    console.log(renderTodoList);
    return (
        <div>
            <h3>todo list app</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAll}>show all</button>
                <button onClick={handleShowNew}>show new</button>
                <button onClick={handleShowCompleted}>show completed</button>
            </div>
        </div>
    );
}

export default TodoFeature;