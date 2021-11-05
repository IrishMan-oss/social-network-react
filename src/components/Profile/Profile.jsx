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
        dispatch={props.dispatch}
        newPostText={props.profilePage}
      />
    </div>
  );
};

export default Profile;
