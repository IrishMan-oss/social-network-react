import React from 'react' ; 
import s from './Posts.module.css';


const Posts = (props) => {
    return  <div className={s.post}>
      <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="" />
        {props.message}
        <span>Like{props.like}</span>
      </div>
   
}

export default Posts;