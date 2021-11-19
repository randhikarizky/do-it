import React from 'react'

import moment from 'moment'

const Form = ({ input, setInput, task, setTask }) => {
    
    const handleTextInput = (e) => {
        setInput(e.target.value)
    }

    const handleSetId = () => {
        let id = task.length()
        let newId = parseInt(id) + 1
        return newId
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTask([
            ...task,
            { id: handleSetId, title: input, description: "-", status: 0, createdAt: moment().format('YYYY-MM-DD HH:mm') }
        ])
        setInput("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="task"
                        className="form-control task-input-form"
                        value={input}
                        required
                        onChange={handleTextInput}
                    />
                    <button className="btn btn-success btn-add" type="submit">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form
