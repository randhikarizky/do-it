import React, { useState } from 'react'

import Form from '../components/form'
import List from '../components/list'
import "../style/index.css"

function Index() {
    const [newTask, setNewTask] = useState("")

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
                        <Form />
                    </div>
                    <div className="row">
                        <List />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
