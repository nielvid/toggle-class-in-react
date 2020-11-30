


import styled from 'styled-components';
import {useRef, useState} from "react"




function App() {

  const myBox =useRef()

  const [isOpen, setOpen] = useState('false')


const Toggle1 = (e)=>{
 e.target.classList.toggle('close')
}

const Toggle2 = ()=>{
 setOpen(!isOpen) 
}

const Toggle3 = (e)=>{
myBox.current.classList.toggle('close')  
}


  
  return (
    <Wrapper>
      <h1>Toggling ClassName in React</h1>
      <p>The first Div Toggles on mouseEnter and onMouseLeave</p>
      <p>The Second Div Toggles on the first button click</p>
      <p>The Third toggles on the other button click</p>


  <Container>
   <div className="open"  onMouseEnter={Toggle1} onMouseLeave={Toggle1}>
    <p style={{color: 'red'}}>Event Target to toggle</p>
    </div>
   

    <div className={isOpen ? 'open': 'close'}  >
    <p>React useState to toggle</p>
  </div>
    

    <div className='open' ref={myBox} >
    <p style={{color: 'blue'}}>I use React ref hook to toggle</p>
   </div>
   
   </Container>

<button onClick= {Toggle2}>Toggle Second Div</button> |  <button onClick= {Toggle3}>Toggle Last Div</button>
   </Wrapper>
  );


}



export default App

const Wrapper = styled.div `
  width: 100%;
  padding: 25px;
  `

  const Container = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;


  .open{
    font-size:25px;
    display: block;
  }

  .close{
    display: none;
  }
  `



    