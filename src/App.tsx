import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";




function App(): JSX.Element {
    // const tasks: Array<TaskType>
    const tasks: TaskType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS & SCSS', isDone: true},
        {id: 3, title: 'ES6/Typescript', isDone: false}
    ]

    return (
        <div className = 'App'>
            <TodoList
                title = 'What to learn'
                tasks={tasks}/>
            {/*<TodoList title = 'What to read' />*/}
            {/*<TodoList title = 'What to buy' />*/}
        </div>
    );
}

export default App;

