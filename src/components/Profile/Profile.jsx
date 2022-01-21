import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo className={s.deskriptionBlock} />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
