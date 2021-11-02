let rerender = () => {
  console.log('state change')
}



  let state = {
    profilePage: {
      postData: [
        {id: 1, message:'Hi, friend', like:'15'},
        {id: 2, message:'How are you', like:'5'} 
      ],
      newPostText: 'React'
    },
    dialogPage:{

      message:[
        {id: 1, message:'Hi'},
        {id: 2, message:'How are you'}],
      newMessageText: 'Push',
      dialogsData: [
        {id: 1, name:'Maks'},
        {id: 2, name:'Stas'},
        {id: 3, name:'Slava'},
        {id: 4, name:'Sanya'}      
    ]
}
  }

 export let addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likeCount:1
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerender(state)
  }

  export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerender()
  }
  export let addMessage = () => {
    let newMessage = {
      id: 5,
      message: state.dialogPage.newMessageText
      
    }
    state.dialogPage.message.push(newMessage)
    state.dialogPage.newMessageText = ''
    rerender()
  }
  export let updateNewMessageText = (newText) => {

    state.dialogPage.newMessageText = newText;
    rerender()
  }
export const subsc = (observer) => {
  rerender = observer
}
export default state;