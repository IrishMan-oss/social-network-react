const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.message.push(newMessage);
      state.newMessageText = "";
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state
    default :
    return state;
  }

  
}

export let addPostsActionCreate = () => {
    return {
      type: 'ADD-POST'
    }
  }
  
export let updateNewPostActionCreater = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT', 
      newText: text
    }
  }