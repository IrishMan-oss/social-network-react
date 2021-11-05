import React from 'react' ; 
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreate, updateMessageActionCreate} from '../../redux/profile-reducer'


const Dialogs = (props) => {
debugger
  let dialogElements = props.dialog.dialogsData
  .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

  let messageElements =  props.mes.message
  .map(messages => <Message message={messages.message} id={messages.id}/>)

  let textAreaElement = React.createRef()

  let addMessage = () => {
   props.dispatch(addMessageActionCreate())
    
  }

  let onPostChange = () => {
    let text = textAreaElement.current.value;
    props.dispatch(updateMessageActionCreate(text))

  };


    return   ( 
       <div className={s.dialog}>
        <div className={s.dialogsItem}>
          {dialogElements}
        </div>
        <div className={s.messages}>
         {messageElements}
        
          <div className={s.textarea}>
          <textarea 
          ref={textAreaElement} 
          onChange={onPostChange}
          value={props.dialog.newMessageText}
           />
          </div>
          <div>
            <button onClick={addMessage}>Отправить</button>
          </div>
        </div>
      
      </div>
      )
}

export default Dialogs;