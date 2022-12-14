import './App.css';
import './Components/Win.css';
import Win from './Components/Win';
import {useState} from "react";
import fire from "./video1.mp4";


function App() {
  const [card1, setCard1] = useState({flip:false});
  const [card2, setCard2] = useState({flip:false});
  const [card3, setCard3] = useState({flip:false});
  const [card4, setCard4] = useState({flip:false});
  const [card5, setCard5] = useState({flip:false});
  const [card6, setCard6] = useState({flip:false});
  const [card7, setCard7] = useState({flip:false});
  const [card8, setCard8] = useState({flip:false});
  const [card9, setCard9] = useState({flip:false});
  const [card10, setCard10] = useState({flip:false});
  //each card has its own state and by default the card is flipped to false

  const [count, setCount] = useState(0);
  //this state is for counting the number of clicks
  

  
  

  function handleClick1(e, card) {
    if (count===0){
    card.flip ? setCard1({flip:false}) : setCard1({flip:true});
    setCount(1); //this allow user to only click once
    
  }
}
//by default the card flipped to false so if card.flip is true then flip setCard1 to false else set it to false
  
  
  function handleClick2(e, card) {
    if (count===0){
    
    card.flip ? setCard2({flip:false}) : setCard2({flip:true});
    setCount(1);
  }
}


function handleClick3(e, card) {
  if (count===0){
    card.flip ? setCard3({flip:false}) : setCard3({flip:true});
    setCount(0);
  }
}

function handleClick4(e, card) {
  if (count===0){
    card.flip ? setCard4({flip:false}) : setCard4({flip:true});
    setCount(2);
  }
}

function handleClick5(e, card) {
  if (count===0){
    card.flip ? setCard5({flip:false}) : setCard5({flip:true});
    setCount(1);
  }
}

function handleClick6(e, card) {
  if (count===0){
    card.flip ? setCard6({flip:false}) : setCard6({flip:true});
    setCount(1);
  }
}

function handleClick7(e, card) {
  if (count===0){
    card.flip ? setCard7({flip:false}) : setCard7({flip:true});
    setCount(1);
  }
}

function handleClick8(e, card) {
  if (count===0){
    card.flip ? setCard8({flip:false}) : setCard8({flip:true});
    setCount(1);
  }
}

function handleClick9(e, card) {
  if (count===0){
    card.flip ? setCard9({flip:false}) : setCard9({flip:true});
    setCount(1);
  }
}

function handleClick10(e, card) {
  if (count===0){
    card.flip ? setCard10({flip:false}) : setCard10({flip:true});
    setCount(1);
  }
}

function handleClick(){

}


//These are the text within a card body.
  const statusArr = ["LOSE","LOSE","LOSE","LOSE","LOSE","LOSE","WIN","LOSE","LOSE","LOSE"];
  statusArr.sort(() => 0.5 - Math.random());

  console.log(statusArr)
  
  return (
   <div>
    <video src={fire} type="video/mp4" autoPlay loop muted />
        <div onClick={handleClick} className="cards">
          <h1 className="head1">IF YOU CHOOSE THE WIN CARD BETWEEN THESE CARDS THAT MEANS YOU WIN THIS GAME</h1>
            <Win value={"1"} status={statusArr[0]} flip={card1.flip} handleClick={(e) => handleClick1(e, card1)}/>
            <Win value={"2"} status={statusArr[1]} flip={card2.flip} handleClick={(e) => handleClick2(e, card2)}/>
            <Win value={"3"} status={statusArr[2]} flip={card3.flip} handleClick={(e) => handleClick3(e, card3)}/> 
            <Win value={"4"} status={statusArr[3]} flip={card4.flip} handleClick={(e) => handleClick4(e, card4)}/>
            <Win value={"5"} status={statusArr[4]} flip={card5.flip} handleClick={(e) => handleClick5(e, card5)}/>
            <Win value={"6"} status={statusArr[5]} flip={card6.flip} handleClick={(e) => handleClick6(e, card6)}/> 
            <Win value={"7"} status={statusArr[6]} flip={card7.flip} handleClick={(e) => handleClick7(e, card7)}/>
            <Win value={"8"} status={statusArr[7]} flip={card8.flip} handleClick={(e) => handleClick8(e, card8)}/>
            <Win value={"9"} status={statusArr[8]} flip={card9.flip} handleClick={(e) => handleClick9(e, card9)}/>
            <Win value={"10"} status={statusArr[9]} flip={card10.flip} handleClick={(e) => handleClick10(e, card10)}/>

          <button onClick={() => window.location.reload(false)} >Restart</button> 
          {/* this onClick event will reload the page */}

        </div>
   </div>  
   
  );
  
}


export default App;
