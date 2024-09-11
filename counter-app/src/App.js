import React from 'react';
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import LoginStatus from "./components/LoginStatus";
import TodoList from "./components/TodoList"



function App() {
    return (
        <div>
        <h1>React Practice</h1>
        <Counter />
        <Greeting />
        <LoginStatus />
        <TodoList />
        </div>
    );
}
    
    export default  App;
