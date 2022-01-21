const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";


let initialState = {
    message: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" },
    ],
    newMessageText: "Push",
    dialogsData: [
      { id: 1, name: "Maks" },
      { id: 2, name: "Stas" },
      { id: 3, name: "Slava" },
      { id: 4, name: "Sanya" },
    ],
  
}

export const dialogReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    message: {...state.message}
  }

  
  switch (action.type) {
    case ADD_MESSAGE:{
      let body = stateCopy.newMessageBody
      stateCopy.newMessageBody = "";
      stateCopy.message.push({id:4, message: body});
      return stateCopy
    }
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.body;
      return stateCopy
    default:
    return state
  }
 
}

export const addMessageActionCreate = () => {
    return {
      type: 'ADD-MESSAGE'
    }
  }
  
export const updateMessageActionCreate = (body) => {
    return{
      type: 'UPDATE_NEW_MESSAGE_BODY',
      body: body
    }
  }