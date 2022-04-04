import React from 'react';
import './index.css';

import ReactDOM from "react-dom";


import {addPost, RootStateType, state} from "./Redux/state";
import {renderTree} from "./render";


// export const renderTree = (state:RootStateType) => {
//     ReactDOM.render(
//         // <BrowserRouter>
//             <App appState={state}
//                  addPost={addPost}/>
//          // </BrowserRouter>
//         ,
//         document.getElementById('root'),
//     );
// }
renderTree(state);






