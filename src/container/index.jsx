import React, { useState } from 'react'

import Form from '../components/form'
import List from '../components/list'

import "../style/index.css"

function Index() {

    const [input, setInput] = useState("")
    const [task, setTask] = useState([])
    const [editTask, setEditTask] = useState(null)

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h1>
                            Do-it!
                        </h1>
                    </div>
                    <div className="row">
                        <Form 
                            input={ input }
                            setInput={ setInput }
                            task={ task }
                            setTask={ setTask }
                        />
                    </div>
                    <div className="row">
                        <List 
                            task={task}
                            setTask={setTask}
                            editTask={editTask}
                            setEditTask={setEditTask}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
