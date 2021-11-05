import { profileReducer } from "./profile-reducer"
import { dialogReducer } from "./dialog-reducer"


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, friend", like: "15" },
        { id: 2, message: "How are you", like: "5" },
      ],
      newPostText: "  React",
    },
    dialogPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state change");
  },

  subsc(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage,action)
    this._callSubscriber(this._state)
  }
  
}


export default store;

