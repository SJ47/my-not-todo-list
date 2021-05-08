import React, { useState, useEffect } from "react";
import CompletedTaskList from "../components/CompletedTaskList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TasksService from "../services/TasksService";

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks on first render
    useEffect(() => {
        TasksService.getTasks().then((tasks) => setTasks(tasks));
    }, []);

    // handle when unchecked task is clicked in main task window
    const handleClickTask = (selectedTask) => {
        // Map through tasks and toggle task status
        const updatedTasks = tasks.map((task) => {
            if (task.id === selectedTask.id) {
                task.status = !task.status;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // Handle adding a new task when clicked
    const handleAddNewTask = () => {
        const emptyTask = {
            id: tasks.length + 1,
            description: "New Empty Task",
            status: false,
        };

        setTasks([...tasks, emptyTask]);

        // Code below for posting to DB file when ready

        // TasksService.postTask(emptyTask).then((tasks) =>
        //     setTasks([...tasks, emptyTask])
        // );
    };

    // Handle updating a task
    const handleUpdateTask = (selectedTask) => {
        // Map through tasks and update the changed task
        const updatedTasks = tasks.map((task) => {
            if (task.id === selectedTask.id) {
                task.description = selectedTask.description;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="app-container">
            <Header />
            <TaskList
                tasks={tasks}
                handleClickTask={handleClickTask}
                handleUpdateTask={handleUpdateTask}
            />
            <CompletedTaskList />
            <Footer handleAddNewTask={handleAddNewTask} />
        </div>
    );
};

export default TasksContainer;