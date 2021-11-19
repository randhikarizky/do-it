import React from 'react'

const List = ({ task, setTask, editTask, setEditTask }) => {

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
            <div className="list-container">
                <div className="row">
                    <h3>
                        On going tasks
                    </h3>
                    <div className="list-group">
                        {
                            task.map((item) => (
                                item.status !== 1 ?
                                    <button type="button" className="list-group-item list-group-item-action" key={item.id} data-bs-toggle="modal" data-bs-target="#detailModal">
                                        <span>{item.title}</span>
                                        <div className="btn-container">
                                            <i className="fas fa-check" onClick={ ()=> handleComplete(item) }></i>
                                            <i className="fas fa-trash" onClick={ () => handleDelete(item) }></i>
                                        </div>
                                    </button>
                                : ''
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <h3>
                        Completed tasks
                    </h3>
                    <div className="list-group">
                        {
                            task.map((item) => (
                                item.status === 1 ?
                                    <button type="button" className="list-group-item list-group-item-action" key={item.id} data-bs-toggle="modal" data-bs-target="#detailModal">
                                        <span><s>{item.title}</s></span>
                                        <div className="btn-container">
                                            <i className="fas fa-check" onClick={ ()=> handleComplete(item) }></i>
                                        </div>
                                    </button>
                                : ''
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="modal" tabindex="-1" id="detailModal">
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
