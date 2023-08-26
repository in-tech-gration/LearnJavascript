import { useEffect, useState } from 'react';
console.clear();

// useClock();
function getTime(){
  const time = new Date();
  return time.toLocaleString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
}
// console.log( getTime() );

function useClock(){
  const [ clock, setClock ] = useState(getTime());
  useEffect(()=>{
    const id = setInterval(()=>{
      console.log("tick");
      setClock(getTime());
    }, 1000 );
    return ()=>{
      clearInterval(id);
    }
  },[]);
  return clock;
}

function Panel(){
  const clock = useClock();
  return (
    <div>Panel { clock }</div>
  )
}

export default function App() {
  const [ display, setDisplay ] = useState(true);
  return (
    <>
      <h1>React</h1>
      <button onClick={()=> setDisplay(false)}>
        Remove Panel Clock
      </button>
      { display && <Panel /> }
      <Panel />
    </>
  );
}
