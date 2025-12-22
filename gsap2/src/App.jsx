import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
// const App = () => {
//   const boxRef = useRef();

import { useState } from "react"

//   useGSAP(() => {
//     gsap.from(boxRef.current, {
//       y: 200,
//       rotate: 360,
//       delay: 0.5,
//       duration: 1,
//       opacity: 0,
//     })
//   })
//   useGSAP(() => {
//     gsap.from(".small-box", {
//       rotate: 720,
//       duration: 2,
//       delay: 1,
//     })
//   }, { scope: ".box2" })

//   return (
//     <main>
//       <div className="box"  >
//         <div className="circle"></div>
//         <div className="small-box" ref={boxRef}></div>
//       </div>
//       <div className="box2">
//         <div className="circle"></div>
//         <div className="small-box"></div>
//       </div>
//     </main>
//   )
// }
// export default App
// const App = () => {
//   const [circle, setCircle] = useState(0);
//   const random = gsap.utils.random(-700, 600, 10);

//   useGSAP(() => {
//     gsap.to(".circle", {
//       x: circle,
//       duration: 0.5,
//     })
//   },[circle])

//   return (
//     <main>
//       <button onClick={() => {
//         setCircle(random)
//       }}>Animate</button>
//       <div className="circle"></div>
//     </main>
//   )
// }
// export default App

const App = () => {

  const Xrandom = gsap.utils.random(-700, 700, 10);
  const Yrandom = gsap.utils.random(-500, 500, 10);
  const rotateRandom = gsap.utils.random(-360, 360, 30);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [rotateVal, setRotate] = useState(0);

  const imgRef = useRef();

  useGSAP(() => {
    gsap.to(imgRef.current, {
      x: xVal,
      y: yVal,
      rotate: rotateVal,
      duration: 0.7,
      delay: 0.1,
    })
  },[xVal, yVal, rotateVal])
  return (
    <main>
      <button onClick={() => {
        setXVal(Xrandom);
        setYVal(Yrandom);
        setRotate(rotateRandom);
      }}>fly</button>
      <img src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="fly img" ref={imgRef} />
    </main>
  )
}
export default App