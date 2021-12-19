import React, { useEffect, useMemo } from 'react';
import { matchPath, useHistory, useLocation, useRouteMatch } from 'react-router';
import { useState } from 'react/cjs/react.development';
import TodoList from '../../components/Todolist';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';


function ListPage() {

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
    /** 
     update url params
     
     effect
     listen to location search 
     ->> update state
     */
    const location = useLocation(); // get location
    const history = useHistory();
    const match = useRouteMatch();
    const [ todoList, setTodoList ] = useState(initTodoList);
    const [ filterStatus, setFilterStatus ] = useState(()=>{
        const params = queryString.parse(location.search); // get search value
        console.log(params);
        return params.status || 'all';
    })

    useEffect(()=>{
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all')

    },[location.search])

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
        //setFilterStatus('all')
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.patch,
            search: queryString.stringify(queryParams),
        })

    }

    const handleShowNew = () =>{
        //setFilterStatus('new')
        const queryParams = {status: 'new'};
        history.push({
            pathname: matchPath.patch,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowCompleted = () =>{
        //setFilterStatus("completed")
        const queryParams = {status: 'completed'};
        history.push({
            pathname: matchPath.patch,
            search: queryString.stringify(queryParams),
        })
    }

    const renderTodoList = useMemo(()=>{
       return todoList.filter(todo => filterStatus === 'all'|| filterStatus === todo.status);
    },[todoList, filterStatus])
    //    console.log(renderTodoList);

    const handleTodoFormSubmit = (values) => {
        console.log('Form Submit:', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        };
        const newTodoList = [...todoList,newTodo];

        setTodoList(newTodoList);
    }

    return (
        <div>

            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAll}>show all</button>
                <button onClick={handleShowNew}>show new</button>
                <button onClick={handleShowCompleted}>show completed</button>
            </div>
            
            <h3> What to do ?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
}

export default ListPage;