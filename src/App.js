import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


const Globalstyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
`
const Body = styled.div`
   background-color: darkcyan;
`
const Container = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   color: white;
`
const Num = styled.h2`
   font-size: 2vw;
`

const Count = styled.div`
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`
const Button = styled.button`
   background-color:#FFB10A;
   border: none;
   font-size: 4vw;
   padding: 1vh 3vw;
   color:blueviolet
`




export default class Counter extends Component {
  
  state = {
    count: 0
  }

  add = () =>{
    const {count} = this.state
    if(count < 10){
      this.setState({
        count: count +1
      })
    }
    }
  

  remove = () => {
    const {count} = this.state
    if(count > 0){
      this.setState({
        count: count -1
      })
    } 
  }

  render(){
    const {count} = this.state
    const {add,remove} = this
    return(
      <Body>
        <Container>
        <Globalstyle/>
        <h1>React Counter App</h1>
        <Count>
        <Button onClick={add}> + </Button>
        <Num>{count}</Num>
        <Button onClick={remove}> - </Button>
        </Count>
      </Container>
      </Body>
      
    )
  }

}