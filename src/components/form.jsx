import React from 'react'

const Form = ({ input, setInput, task, setTask }) => {
    
    const handleTextInput = (e) => {
        setInput(e.target.value)
    }

    const handleSetId = () => {
        let id = task.length()
        return id + 1
    }

    const getDateTime = () => {
        let dateTime = ''
        let currentDate = new Date()
        dateTime = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes()

        return dateTime        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTask([
            ...task,
            { id: handleSetId, title: input, description: "-", status: 0, createdAt: getDateTime }
        ])
        setInput("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task" 
                    className="task-input-form" 
                    value={input}
                    required    
                    onChange={handleTextInput}
                />
                <button className="btn btn-success btn-add" type="submit">
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </>
    )
}

export default Form
