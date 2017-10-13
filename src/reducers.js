// const todo = (state,action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text:action.text,
//         completed: false
//       };
//       case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return stae;
//       }
//         return {
//           ...state,
//           completed: !state.completed
//       };
//       default:
//         return state;
//   }
// }

function todosReducer (state = [],action) {
  switch (action.type) {
     case 'ADD_TODO':
       return state.concat(action.item)
     case 'REMOVE_TODO':
       const indx = state.indexOf(action.item)
       return state.filter((_, idx) => indx !== idx)
     default:
       return state
   }
 }

 export default todosReducer
