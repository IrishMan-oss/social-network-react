const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const  profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
            id: 5,
            message: state.newPostText,
            like: 2,
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
       }

 
}


export let addMessageActionCreate = () => {
    return {
      type: 'ADD-MESSAGE'
    }
  }
export let updateMessageActionCreate = (text) => {
    return{
      type: 'UPDATE_NEW_MESSAGE_TEXT',
      newText: text
    }
  }