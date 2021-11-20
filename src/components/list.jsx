import moment from 'moment'
import React, { useState } from 'react'

const List = ({ task, setTask, editTask, setEditTask }) => {

    const [currentData, setCurrentData] = useState([])
    // const [newData, setNewData] = useState([])

    const handleDelete = ({ id }) => {
        setTask(task.filter((item) => item.id !== id ))
    }

    const handleEdit = ({ id }) => {
        const findTask = task.find((item) => item.id === id)

        setCurrentData([findTask])
    }

    const updateTask = (title, id, status, description) => {
        
    }

    const handleEditSubmit = (e) => {
        
    }

    const handleSetNewData = (item) => {
        
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
                                    <button className="btn btn-outline-primary" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }} onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal">
                                        {item.title}
                                    </button>
                                    <button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={() => handleComplete(item)}>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button className="btn btn-outline-primary" onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal">
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
                                    <button className="btn btn-primary" style={{ width: '150%', textAlign: 'left', fontWeight: 'bold' }} onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal">
                                        {item.title}
                                    </button>
                                    <button className="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={() => handleUncomplete(item)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <button className="btn btn-outline-primary" onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal">
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

            {/* MODAL EDIT DATA */}
            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel"><strong>Edit Task</strong></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            currentData.map((item) => (
                                <>
                                    <div className="modal-body">
                                        <form>
                                            <div key={item.id}>
                                                <div className="mb-3">
                                                    <label className="form-label"><strong>Title</strong></label>
                                                    <input type="text" className="form-control" value={item.title} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label"><strong>Description</strong></label>
                                                    <textarea className="form-control" rows="3">{item.description}</textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <select class="form-select">
                                                        <option selected>Status</option>
                                                        <option value="1">Completed</option>
                                                        <option value="0">On Going</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="staticEmail" class="col-sm-4 col-form-label"><strong>Time Created :</strong></label>
                                                    <div class="col-md-8">
                                                        <input type="text" readonly class="form-control-plaintext" value={moment(item.createdAt).format('DD/MM/YYYY - HH:mm')} />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                                        <button type="submit" className="btn btn-primary" onClick={() => handleSetNewData(item)}>Save</button>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* END OF MODAL EDIT DATA */}
        </>
    )
}

export default List
