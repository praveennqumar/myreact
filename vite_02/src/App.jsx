import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//...........................hooks
function App() {
 

let [viteNO,setcounter] = useState(8);
// let viteNO = '02';


function clicked(){
  console.log('youn clicked on me')
  // viteNO >20 ?  viteNO+1 : viteNO;
  // viteNO = viteNO+1;
  setcounter(viteNO <20 ?  viteNO+1 : viteNO);
}
function clicked1(){
  console.log('youn clicked on me')
  setcounter( viteNO >0 ?viteNO-1 : viteNO)
}


  return (
    <>
     <h3> kaa ji</h3>
     <p> hello from vite_{viteNO} practice </p>
     <button onClick={clicked}> add file :{viteNO}</button>
     <button onClick={clicked1}> remove file:{viteNO}</button>
     <div>footer :{viteNO}</div>
   </>

  )
}

export default App
