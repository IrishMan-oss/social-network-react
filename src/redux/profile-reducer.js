const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = { 
  postData: [
  { id: 1, message: "Hi, friend", like: "15" },
  { id: 2, message: "How are you", like: "5" },   
  ],
  newPostText: "  React",
}


export const profileReducer = (state = initialState, action) => { 
  switch(action.type){
        case ADD_POST:{
            let newPost = {
              id: 5,
              message: state.newPostText,
              like: 2,
            };
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
          
            return stateCopy
          }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        default:
            return state
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

