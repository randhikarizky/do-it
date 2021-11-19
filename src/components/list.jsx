import React, { useState } from 'react'

import Modal from 'react-modal'

// Modal.setAppElement('#container-fluid')

const List = ({ task, setTask, editTask, setEditTask }) => {

    const [ taskEditData, setTaskEditData ] = useState({})
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleSetEditTaskData = (item) => {
        setTaskEditData({
            id: item.id,
            title: item.title,
            description: item.description,
            status: item.status,
            createdAt: item.createdAt
        })

        return console.log(taskEditData)
    }

    const handleDelete = ({ id }) => {
        setTask(task.filter((item) => item.id !== id ))
    }

    const handleEdit = ({ id }) => {
        const findTask = task.find((item) => task.id === id )
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

    return (
        <>
            <div className="list-container" id="container-fluid">
                <div className="row progress-container">
                    <h3>
                        On going tasks
                    </h3>
                    <div className="list-group">
                        {
                            task.map((item) => (
                                item.status !== 1 ?
                                    <div className="btn-group" role="group" key={item.id} style={{ marginBottom: '1vh' }}>
                                        <button className="btn btn-outline-primary" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }}>
                                            {item.title}
                                        </button>
                                        <button className="btn btn-outline-success" onClick={() => handleComplete(item)}>
                                            <i className="fas fa-check"></i>
                                        </button>
                                        <button className="btn btn-outline-danger" onClick={() => handleDelete(item)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    : ''
                            ))
                        }
                    </div>
                </div>
                <div className="row complete-container">
                    <h3>
                        Completed tasks
                    </h3>
                        {
                            task.map((item) => (
                                item.status === 1 ?
                                    <div className="btn-group" role="group" key={item.id} style={{ marginBottom: '1vh' }}>
                                        <button className="btn btn-success" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }}>
                                            {item.title}
                                        </button>
                                        <button className="btn btn-outline-success" onClick={() => handleComplete(item)}>
                                            <i className="fas fa-check"></i>
                                        </button>
                                        <button className="btn btn-outline-danger" disabled>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                : ''
                            ))
                        }
                </div>
            </div>

            <Modal isOpen={ isModalOpen }>
                <h1>
                    aaaaaaaaa
                </h1>
            </Modal>

            <div className="modal" visible={ isModalOpen } tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
