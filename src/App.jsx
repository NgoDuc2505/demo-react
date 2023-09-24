import Carousel from "./components/Carousel/Carousel"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Playground from "./components/Playground/Playground"



function App() {
  
  return (
    <div className='main-app'>
      <Header/>
      {/* <Carousel></Carousel> */}
      <Footer></Footer>
      <Playground/>
    </div>
  )
}

export default App
