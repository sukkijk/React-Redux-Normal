export default function rootReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload
      case 'DECREMENT':
        if(state > 0){
        return state - 1
        }
        return state
      case 'RESET':
        return 0  
      default:
        return state
    }
  }