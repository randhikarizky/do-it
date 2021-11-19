import React, { useState, useEffect } from 'react'

import Form from '../components/form'
import List from '../components/list'

import "../style/index.css"

function Index() {

    const initialState = JSON.parse(localStorage.getItem('task')) || []
    const [input, setInput] = useState("")
    const [task, setTask] = useState([])
    const [editTask, setEditTask] = useState(null)

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task))
    }, [task])

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="row title-container">
                                <h1 className="display-1">
                                    Do-it!
                                </h1>
                            </div>
                            <div className="row form-container">
                                <Form
                                    input={input}
                                    setInput={setInput}
                                    task={task}
                                    setTask={setTask}
                                    editTask={editTask}
                                    setEditTask={setEditTask}
                                />
                            </div>
                            <div className="row">
                                <List
                                    task={task}
                                    setTask={setTask}
                                    setEditTask={setEditTask}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
