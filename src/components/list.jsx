import moment from 'moment'
import React, { useState } from 'react'

const List = ({ task, setTask, setEditTask }) => {

    const [ sortedArray, setSortedArray] = useState([])

    const handleDelete = ({ id }) => {
        setTask(task.filter((item) => item.id !== id ))
    }

    const handleEdit = ({ id }) => {
        const findTask = task.find((item) => item.id === id )
        setEditTask(findTask)
    }

    const handleComplete = (item) => {
        setTask(
            task.map((list) => {
                if(list.id === item.id) {
                    return { ...list, status: 1}
                }
                return list
            })
        )
    }

    const handleUncomplete = (item) => {
        setTask(
            task.map((list) => {
                if(list.id === item.id) {
                    return { ...list, status: 0 }
                }
                return list
            })
        )
    }

    const sortArray = (status) => {
        let sorted = task.sort((a, b) => new moment(a.date).format('YYYYMMDD HH:mm') - new moment(b.date).format('YYYYMMDD HH:mm'))
        let reversed = sorted.reverse()

        switch(status) {
            case 0 :
                return {
                    content: (
                        sorted.map((item) => (
                            item.status === 0 ?
                                <div className="btn-group" role="group" key={item.id} style={{ marginBottom: '1vh' }}>
                                    <button className="btn btn-outline-primary" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }}>
                                        {item.title}
                                    </button>
                                    <button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={() => handleComplete(item)}>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button className="btn btn-outline-primary" onClick={() => handleEdit(item)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-outline-danger" onClick={() => handleDelete(item)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                : ''
                        ))
                    )
                }
            case 1 :
                return {
                    content: (
                        reversed.map((item) => (
                            item.status === 1 ?
                                <div className="btn-group" role="group" key={item.id} style={{ marginBottom: '1vh' }}>
                                    <button className="btn btn-primary" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }}>
                                        {item.title}
                                    </button>
                                    <button className="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={() => handleUncomplete(item)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <button className="btn btn-outline-primary" onClick={() => handleEdit(item)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-outline-danger" disabled>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                : ''
                        ))
                    )
                }
            default:
                return sorted
        }
    }

    return (
        <>
            <div className="list-container">
                <div className="row progress-container">
                    <h3>
                        On going tasks
                    </h3>
                    <div className="list-group">
                        {
                            sortArray(0).content
                        }
                    </div>
                </div>
                <div className="row complete-container">
                    <h3>
                        Completed tasks
                    </h3>
                        {
                            sortArray(1).content
                        }
                </div>
            </div>
        </>
    )
}

export default List
