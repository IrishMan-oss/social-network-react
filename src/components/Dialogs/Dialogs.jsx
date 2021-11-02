import React from 'react' ; 
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
  
  let dialogElements = props.dialog.dialogsData
  .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

  let messageElements =  props.mes
  .map(messages => <Message message={messages.message} id={messages.id}/>)

  let textAreaElement = React.createRef()

  let addMessage = () => {
   props.addMessage()
    
  }

  let onPostChange = () => {
    let text = textAreaElement.current.value;
    props.updateNewMessageText(text);

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