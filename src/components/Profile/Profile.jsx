import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = (props) => {
   
  return (
    <div>
      <ProfileInfo className={s.deskriptionBlock} />
      <MyPosts
        posts={props.profilePage.postData}
        addPost={props.addPost}
        newPostText={props.profilePage}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
