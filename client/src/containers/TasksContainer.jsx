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
        selectedTask.status = !selectedTask.status;
        TasksService.updateTask(selectedTask).then(() => {
            // Map through tasks and update the changed task
            const updatedTasks = tasks.map((task) => {
                if (task._id === selectedTask._id) {
                    task.status = selectedTask.status;
                }
                return task;
            });
            setTimeout(() => {
                setTasks(updatedTasks);
            }, 200);
        });
    };

    // Handle adding a new task when clicked.  Add empty default task to DB then add to state.  Adding to DB will return new id for task.
    const handleAddNewTask = () => {
        const emptyTask = {
            description: "New Task",
            status: false,
        };

        TasksService.postTask(emptyTask).then((savedTask) =>
            setTasks([...tasks, savedTask])
        );
    };

    // Handle updating a task.
    const handleUpdateTask = (selectedTask) => {
        TasksService.updateTask(selectedTask).then(() => {
            // Map through tasks and update the changed task
            const updatedTasks = tasks.map((task) => {
                if (task._id === selectedTask._id) {
                    task.description = selectedTask.description;
                }
                return task;
            });
            setTasks(updatedTasks);
        });
    };

    // Handle deleting a task.  Delete task from DB then delete from state.
    const handleDeleteTask = (selectedTask) => {
        TasksService.deleteTask(selectedTask._id).then(() => {
            setTasks(tasks.filter((task) => task._id !== selectedTask._id));
        });
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
