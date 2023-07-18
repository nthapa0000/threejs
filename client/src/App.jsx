import Canvas from "./canvas"
import Customizer from "./pages/customizer"
import Home from "./pages/Home"


function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <h1 className="head-text">Three Js</h1> */}
      <Home/>
      <Canvas/> 
       <Customizer/>
      {/* head-text is tailwind prop */}

    </main>
   )
}

export default App
