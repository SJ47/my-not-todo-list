import React from "react";
import CompletedTaskList from "../components/CompletedTaskList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

const TasksContainer = () => {
    return (
        <div className="app-container">
            {/* <h1>Hello from tasksContainer</h1> */}
            <Header />
            <TaskList />
            <CompletedTaskList />
            <Footer />
        </div>
    );
};

export default TasksContainer;
