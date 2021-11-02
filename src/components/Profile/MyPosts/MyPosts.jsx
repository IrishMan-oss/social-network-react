import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {
  
  let postsData = props.posts.map((p) => (
    
    <Posts message={p.message} like={p.like} />
  ));

  let textAreaPostElement = React.createRef();

  let addPosts = () => {
    props.addPost();
   
  };

  let onPostChange = () => {
    let text = textAreaPostElement.current.value;
    props.updateNewPostText(text);

  };


  return (
    <div className={s.myposts}>
      <textarea
        onChange={onPostChange}
        // name="post"
        // id="textarea"
        // cols="10"
        // rows="2"
        ref={textAreaPostElement}
        value={props.newPostText.newPostText}
      />
      <button onClick={addPosts}>Add</button>
      my posts
      <div>new posts new posts new posts</div>
      {postsData}
    </div>
  );
};

export default MyPosts;
