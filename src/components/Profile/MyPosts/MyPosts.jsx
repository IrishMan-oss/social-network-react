import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";


const MyPosts = (props) => {

  let postsData = props.posts.map((p) => (
    <Posts message={p.message} like={p.like} />
  ));

  let textAreaPostElement = React.createRef();

  let onAddPosts = () => {
    props.addPost()
  };

  let onPostChange = () => {
    let text = textAreaPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.myposts}>
      <textarea
        onChange={onPostChange}
        ref={textAreaPostElement}
        value={props.newPostText}
        className={s.textareaPost}
      />
      <button onClick={onAddPosts} className={s.btn_addPost}>Add</button>
        <h3 className={s.myPostSubTiile}>My posts</h3>
      <div className={s.myPostTiile}>New posts</div>
      {postsData}
    </div>
  );
};

export default MyPosts;
