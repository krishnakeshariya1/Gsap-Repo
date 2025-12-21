import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const App =()=>{
  const boxRef = useRef();

    useGSAP(()=>{
    gsap.from(boxRef.current,{
      y: 200,
     rotate : 360,
     delay: 0.5,
     duration: 1,
     opacity :0,
    })
  })
  return(
    <main>
      <div className="box"  >
        <div className="circle"></div>
        <div className="small-box" ref={boxRef}></div>
      </div>
      <div className="box2">
        <div className="circle"></div>
        <div className="small-box"></div>
      </div>
    </main>
  )
}
export default App