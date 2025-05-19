import TaskList from "./TasksList"
import AddTask from "./AddTask"
import { useReducer, useState } from "react";

const initialTasks = [
    { id: 0, text: 'Visit Shiv Mandir', done: true },
    { id: 1, text: 'Watch a snake charmer show', done: false },
    { id: 2, text: 'India Gate pic', done: true },
];
let nextId = 3;

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(reducerFunction, initialTasks);
    function handleAddTask(text) {
        dispatch({
            type: 'added',
            text: text,
            nextId: nextId
        })
    }
    function handleUpdateTasks(task) {
        dispatch({
            type: 'update',
            task: task
        })
    };
    function handleDeleteTasks(taskId) {
        dispatch({
            type: 'delete',
            taskId: taskId
        })
    }
    return (
        <div className="taskApp">
            <h1>To Do List</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onChangeTask={handleUpdateTasks} onDeleteTask={handleDeleteTasks} />
        </div>
    )
}

function reducerFunction(tasks, action) {
    switch (action.type) {
        case 'added':
            return [
                ...tasks,
                {
                    id: action.nextId,
                    text: action.text,
                    done: false,
                }
            ]
        case 'update': {
            return tasks.map((t) => {
                if (t.id === action.id) {
                    return action;
                } else {
                    return t;
                }
            })
        }
        case 'delete':
            return tasks.filter((t) => t.id !== action.taskId);

        default:
            break;
    }
}