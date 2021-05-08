import React, { useState, useEffect } from "react";
import CompletedTaskList from "../components/CompletedTaskList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TasksService from "../services/TasksService";
import { useId } from "react-id-generator";

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
        setTimeout(() => {
            setTasks(updatedTasks);
        }, 200);
    };

    // Handle adding a new task when clicked
    const handleAddNewTask = () => {
        // Likely change approach to ID when using MongoDb to get unique ID keys
        const newId = Date.now();

        const emptyTask = {
            // id: tasks.length + 1,
            id: newId,
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

    // Handle deleting a task
    const handleDeleteTask = (selectedTask) => {
        setTasks(tasks.filter((task) => task.id !== selectedTask.id));
    };

    return (
        <div className="app-container">
            <Header />
            <TaskList
                tasks={tasks}
                handleClickTask={handleClickTask}
                handleUpdateTask={handleUpdateTask}
            />
            <CompletedTaskList
                tasks={tasks}
                handleClickTask={handleClickTask}
                handleDeleteTask={handleDeleteTask}
            />
            <Footer handleAddNewTask={handleAddNewTask} />
        </div>
    );
};

export default TasksContainer;
