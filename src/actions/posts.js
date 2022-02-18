import * as api from '../api'

export const getEvents = () => async(dispatch) => {
    const { data } = await api.fetchEvents()
    dispatch({type: "FETCH_ALL", payload: data })
}

export const createEvent = (event) => async (dispatch) => {
    const { data } = await api.createEvent(event)
    dispatch({type: 'CREATE', payload: data})
}

export const updateEvent = (id, event) => async (dispatch) => {
    const { data } = await api.editEvent(id, event)
    dispatch({type: 'UPDATE', payload: data})
}

export const deleteEvent = (id) => async (dispatch) => {
    await api.deleteEvent(id)
    dispatch({type: 'DELETE', payload: id})
}


export const addMember = (id, member) => async (dispatch) => {
    const { data } = await api.addMember(id, member)
    dispatch({type: 'ADDMEMBER', payload: data})
}