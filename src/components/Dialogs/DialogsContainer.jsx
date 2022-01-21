import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreate,
  updateMessageActionCreate,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return <StoreContext.Consumer>
//     {
//       store =>
//       {
//         // let state = store.getState().dialogsPage;
//         let addMessage = () => {
//           store.dispatch(addMessageActionCreate());
//         };

//         let onPostChange = (body) => {
//           store.dispatch(updateMessageActionCreate(body));
//         };
//         return  <Dialogs
//             updateMessageBody={onPostChange}
//             sentMessage={addMessage}
//             dialogPage={store.getState().dialogPage}
//           />
//       }}
//     </StoreContext.Consumer>
 
// };

let mapStateToProps = (state) => {
  return {
     dialogPage: state.dialogPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: () => {
     dispatch(addMessageActionCreate());
    },
    sentMessage: (body) => {
      dispatch(updateMessageActionCreate(body));
    }
}
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
