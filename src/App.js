import './App.css';
import { Footer,Blog,Features,Header,Possibitily,WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './components'

function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibitily/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
