import React from 'react' ; 
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
          <img src="https://poster.nicefon.ru/2016_05/23/1080x610/18500d4e3e39ffefef6fe.jpg"></img>  
        <div className={s.deskriptionBlock}>
          <span className={s.spanTittleRpofile}>Avatar + deskription</ span>
        </div>
      </div>
 )
}

export default ProfileInfo;