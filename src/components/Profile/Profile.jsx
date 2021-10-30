import React from 'react' ; 
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './PofileInfo/ProfileInfo'


const Profile = (props) => {
   
    return  <div> 
               <ProfileInfo className={s.deskriptionBlock}/>
               <MyPosts posts={props.post} addPost={props.addPost}/>
            </div>
    
}

export default Profile;