
// eslint-disable-next-line import/no-anonymous-default-export
export default (events =[], action) => {
    switch (action.type) {
        case "FETCH_ALL":
          return action.payload
        case "CREATE":
          return [...events, action.payload]          
        case "UPDATE":
          return events.map(event => event._id === action.payload._id ? action.payload : event)
        case "DELETE":
          return events.filter(event => event._id !== action.payload)
        case "ADDMEMBER":
          let upEvent = events.filter(event => event._id === action.payload._id)
          upEvent.members = [...upEvent.members, action.payload.member]
          return upEvent
          default:
          return events;
      }
}