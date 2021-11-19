import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import dataAction from '../redux/action/action'

const List = ({ task, setTask, setEditTask }) => {

    const dispatch = useDispatch()

    const dataMock = useSelector((state) => state.dataApi)


    useEffect(() => {
        dispatch(dataAction.fetchData())
    }, [dispatch])

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
                                        <button className="btn btn-outline-primary" onClick={() => handleEdit(item)}>
                                            <i className="fas fa-edit"></i>
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
                                        <button className="btn btn-outline-secondary" onClick={() => handleUncomplete(item)}>
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
                        }
                </div>
            </div>
        </>
    )
}

export default List
