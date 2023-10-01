import { useState } from "react"
import Carousel from "./components/Carousel/Carousel"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Playground from "./components/Playground/Playground"
import ShowData from "./components/ShowData/ShowData"



function App() {
  let check = true
 
  const [incre,setIncre] = useState(0)

  const [color,setColor] = useState('black')
  // useState là những data cần linh động thay đỏi (data động)
  // let color = 'black'
  // function setColor(Newcolor){
  //  color = Newcolor
  //}
  return (
    <div className='main-app'>
   
      {/* <ShowData tang={incre} /> */}
      {/* <Footer></Footer> */}
      <Playground setIncrease={setIncre} number={incre} colorShow={color}/>
      <Header setColorFunct={setColor}/>
    </div>
  )
}

export default App
