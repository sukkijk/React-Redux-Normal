import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import MemoComponents from './useMemo'
import CallbackComponent from './useCallback'
import useCusHooks from './customhooks';
import HOComponent from './HOC';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state)=>{return state})
  const {increment} = useCusHooks(2);
  const result=["word","words","workers","workafella"];
  const searchWord =()=>{
    var res= result.filter((el,i)=> el.includes("work"))
    console.log(res,"res--------------")
  }
  return (
    <div className="App">
      <p>{value}</p>
   <button onClick={()=>dispatch({type:'INCREMENT',payload:1})}>Increment</button>
   <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
   <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
   <MemoComponents />
   <CallbackComponent />
   <button onClick={()=>increment()}>Custom Hook </button>
   <button onClick={searchWord}>search</button>
    </div>
  );
}
const App1=HOComponent(App);
export default App1;
