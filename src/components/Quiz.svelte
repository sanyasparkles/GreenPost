<script>
    import { onMount } from 'svelte';
    import {questions} from '../js/questions.js'
    import {addPoints, stopTimer, guessedBool, quizOver, profiles, name, showHome, showAnnouncements, showQuiz, addProfile, showLeaderboard} from '../js/store.js'
    import CircleProgressBar from './CircleProgressBar.svelte';

    let currQuestion, timer, numRight = 0, numWrong = 0, questionNumber = 0, question
    let guessedAnswer = ""


    let whiteCircle = "https://cdn.discordapp.com/attachments/763258967546789890/1194846538338414602/image.png?ex=65b1d68d&is=659f618d&hm=743a61cd2696ccfab33ce064b7329dc6106bef5d276fae5dafcce52a3609822e&"
    let greenCircle = "https://cdn.discordapp.com/attachments/763258967546789890/1194846927280427108/image.png?ex=65b1d6ea&is=659f61ea&hm=efd3ab918fa55189f35b7865b29e9b9d7a17c7ab2dc0c9f80f838887ba670c9d&"
    let redCircle = "https://cdn.discordapp.com/attachments/763258967546789890/1194846607439564840/image.png?ex=65b1d69e&is=659f619e&hm=3b488e472b82a3112304d8c4b7a1fba90128df4ede544157a04fa22f9b1cc69d&"
    
    let iconA = whiteCircle
    let iconB = whiteCircle, iconC = whiteCircle, iconD = whiteCircle

    newQuestion()
    $: {
        if (questionNumber > 10) {
            $quizOver = true;
            $showQuiz = false;
            $showLeaderboard = true;
        }
    } 

    $: {
        if ($guessedBool) {
            guessedAnswer = "time up"
        }
    }
    
    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    function newQuestion() {
        iconA = whiteCircle
        iconB = whiteCircle
        iconC = whiteCircle
        iconD = whiteCircle
        $stopTimer = false;
        questionNumber++;
        currQuestion = getRandomQuestion()
    }



    $: {
        console.log("profiles is ", $profiles)
    }



    async function guessed(guessedAns) {
    
        $stopTimer = true;
        if (guessedAns === currQuestion.correct) {
            console.log('correct')  
            numRight++;
            console.log("Naame winneer is ", $name)
            // console.log("points num is ", $profiles[$name].points)
            // addPoints($name)
            $profiles[$name].info[0] += 100;
            // $profiles[$name].points += 100;
            
        }
        else {
            numWrong++;
        }

        console.log("guessedans is: ", guessedAns)
        switch(guessedAns) {
            case "a":
                iconA = redCircle
                break;
            case "b":
                iconB = redCircle
                break;
            case "c":
                iconC = redCircle
                break;
            case "d":
                iconD = redCircle
                break;
        }
        switch(currQuestion.correct) {
            case "a":
                iconA = greenCircle
                break;
            case "b":
                iconB = greenCircle
                break;
            case "c":
                iconC = greenCircle
                break;
            case "d":
                iconD = greenCircle
                break;
        }

        setTimeout(() => {
            console.log('6 seconds passed');
            newQuestion();
        }, 6000);


        //update right/wrong DONE

        //show right/wrong DONE
        //stop timer
        //wait 5 seconds
        //newQuestion()

    }


    function guessedA() {
        console.log("here")
        guessedAnswer = "a"
        guessed(guessedAnswer)
    }
    function guessedB() {
        guessedAnswer = "b"
        guessed(guessedAnswer)
    }
    function guessedC() {
        guessedAnswer = "c"
        guessed(guessedAnswer)
    }
    function guessedD() {
        guessedAnswer = "d"
        guessed(guessedAnswer)
    }





</script>
  


    


<p class="question">Question {questionNumber} / 10</p>

<p>
    <span class="text">Right: {numRight} </span>
    
    <span class="text1">Wrong: {numWrong}</span>
</p>

{#if !$stopTimer}
    <CircleProgressBar />
{/if}

<h2>{currQuestion.question}</h2> 
<div class = "inline">
<button class="answer-box" on:click={guessedA}>
    {currQuestion.a} 
</button>
<img class="answer-img" src={iconA} alt="rectangle" />
</div>

<div class = "inline">
    <button class="answer-box" on:click={guessedB}>
        {currQuestion.b} 
    </button>
    <img class="answer-img" src= {iconB} alt="rectangle" />
    </div>

<div class = "inline">
<button class="answer-box" on:click={guessedC}>
    {currQuestion.c} 
</button>
<img class="answer-img" src= {iconC} alt="rectangle" />
</div>
<div class = "inline">
    <button class="answer-box" on:click={guessedD}>
        {currQuestion.d} 
    </button>
    <img class="answer-img" src= {iconD} alt="rectangle" />
</div>

  
  
  <style>

.question {
    color: #000000;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
flex-shrink: 0;
}
p span {
    margin-right: 30px; 
    margin-left: 30px; 
  }
.text {
    color: #1F8435;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
flex-shrink: 0;

}

.text1 {
    color: #D05A04;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
flex-shrink: 0;

}


.inline-container {
    display: flex;
  justify-content: center;
}
.answer-img {
    width: 31.4px;
height: 33.087px;
flex-shrink: 0;
}

.inline {
		white-space: nowrap;
		margin-bottom: 5px;
		
	}

.answer-box {
    width: 300px;
height: 48px;
flex-shrink: 0;
border-radius: 15px;
border: 2px solid #92B03E;
background: #FFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
      .centered {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          gap: 0.5em;
          max-width: 40em;
          margin: 0 auto;
      }
  
      .input {	
          background-color: #3c414a;
            border: none;
          align-items: center;
          width: 30em;
            padding: 16px 32px;
            text-decoration: none;
           margin: 0px 0px;
          color: rgb(208, 205, 232);
            cursor: pointer;
          border-radius: 0.5em;
      }
      
  </style>






