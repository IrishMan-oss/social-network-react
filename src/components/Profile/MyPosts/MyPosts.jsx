import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {
  addPostsActionCreate,
  updateNewPostActionCreater,
} from "../../../redux/dialog-reducer";

const MyPosts = (props) => {
  
  let postsData = props.posts.map((p) => (
    <Posts message={p.message} like={p.like} />
  ));

  let textAreaPostElement = React.createRef();

  let addPosts = () => {
    props.dispatch(addPostsActionCreate());
  };

  let onPostChange = () => {
    let text = textAreaPostElement.current.value;
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(updateNewPostActionCreater(text));
  };

  return (
    <div className={s.myposts}>
      <textarea
        onChange={onPostChange}
        ref={textAreaPostElement}
        value={props.newPostText.newPostText}
        className={s.textareaPost}
      />
      <button onClick={addPosts} className={s.btn_addPost}>Add</button>
        <h3 className={s.myPostSubTiile}>My posts</h3>
      <div className={s.myPostTiile}>new posts</div>
      {postsData}
    </div>
  );
};

export default MyPosts;
