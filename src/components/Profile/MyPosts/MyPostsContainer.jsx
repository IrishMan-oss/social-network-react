import React from "react";
import { connect } from "react-redux";
import {
  addPostsActionCreate,
  updateNewPostActionCreater,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {  
//   return (
//     <StoreContext.Consumer > 
//       {
//       (store) => {
//           let state = store.getState()
//           let addPost = () => {
//             store.dispatch(addPostsActionCreate());
//           };

//           let onPostChange = (text) => {
//             let action = updateNewPostActionCreater(text)
//             store.dispatch(action)
//           }
//         return  <MyPosts updateNewPostText={onPostChange} 
//               addPost={addPost} 
//               posts={state.profilePage.postData} 
//               newPostText={state.profilePage.newPostText} />
//       }
//     }
//     </StoreContext.Consumer>
//   )
// };
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
     dispatch(addPostsActionCreate());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreater(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
