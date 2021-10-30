import React from 'react' ; 
import s from './MyPosts.module.css';
import Posts from './Post/Posts';


const MyPosts = (props) => {
  
  let postsData = props.posts.profilePage.postData.map(p => <Posts message={p.message} like={p.like}/>)

  let textAreaPostElement = React.createRef()
    
  
  let addPosts = () => {
   
    let text = textAreaPostElement.current.value;
    props.addPost(text);
  }
  
    return ( <div className={s.myposts}>
            <textarea name="post" id="textarea" cols="10" rows="2" ref={textAreaPostElement}></textarea>
            <button onClick={addPosts}>Add</button>
            my posts
            <div>
            new posts 
      new posts 
            new posts 
          </div>
          {postsData}
          
          </div> )
}

export default MyPosts;