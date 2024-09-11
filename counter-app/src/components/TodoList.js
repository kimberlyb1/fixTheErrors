import React, { useState } from 'react';
// This React component is a simple To-Do list app where students should be able to add tasks to the list. However, the current code contains some errors that students need to fix.
// Find and fix the errors to make the To-Do list app function correctly.
// Ensure that tasks are displayed in the list when added and that the input field clears after a task is added.
function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleInput(event) {
        setTask(event.target.value);
    }

    function addTask() {
        if (task.trin() !== "") {
        setTasks({...tasks, task});
        setTask('');
    }
}

    return (
        <div>
            <h1>My To-Do List</h1>
            <input type="text" value={task} onChange={handleInput} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                     <li key={index}>{task}</li>)}
                ))}
                            </ul>
        </div>
    );
}

export default TodoList;
