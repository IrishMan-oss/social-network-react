import React from 'react' ; 
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return  (
    <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
   </div>
   <div className={s.item}>
      <NavLink to="/dialog" activeClassName={s.activeLink}>Messages</NavLink>
   </div>
   <div className={s.item}> 
      <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
   </div>
   <div className={s.item}>
      <NavLink to="/Setting" activeClassName={s.activeLink}>Setting</NavLink>
   </div>

   <span className={s.titleFriends}>Friends</span>
   <div className={s.friends}>
      <div className={s.itfriends}>
         <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="icon" />
      </div>
      <div className={s.itfriends}> 
         <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="icon" />
      </div>
      <div className={s.itfriends}>
          <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="icon" />
      </div>
   </div>
</nav>
    )

}

export default Navbar;