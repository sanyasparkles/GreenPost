<script>
    import { onMount } from 'svelte';
    import {questions} from '../js/questions.js'
    import {stopTimer, guessedBool, quizOver, profiles, name, showHome, showAnnouncements, showQuiz, addProfile, showLeaderboard} from '../js/store.js'
    import CircleProgressBar from './CircleProgressBar.svelte';

    let currQuestion, timer, numRight = 0, numWrong = 0, questionNumber = 0, question
    let guessedAnswer
    let iconA = "", iconB = "", iconC = "", iconD = ""

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
            $guessedAnswer = "time up"
        }
    }
    
    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    function newQuestion() {
        $stopTimer = false;
        questionNumber++;
        currQuestion = getRandomQuestion()

    }






    async function guessed(guessedAns) {
    
        $stopTimer = true;
        if (guessedAns === currQuestion.correct) {
            console.log('correct')  
            numRight++;
            $profiles[$name].points += 100;
        }
        else {
            numWrong++;
        }
        switch(guessedAns) {
            case "a":
                iconA = "W"
                break;
            case "b":
                iconB = "W"
                break;
            case "c":
                iconC = "W"
                break;
            case "d":
                iconD = "W"
                break;
        }
        switch(currQuestion.correct) {
            case "a":
                iconA = "R"
                break;
            case "b":
                iconB = "R"
                break;
            case "c":
                iconC = "R"
                break;
            case "d":
                iconD = "R"
                break;
        }

        setTimeout(() => { console.log('6 seconds passed'); }, 6000);
        newQuestion()


        //update right/wrong DONE

        //show right/wrong DONE
        //stop timer
        //wait 5 seconds
        //newQuestion()

    }


    function guessedA() {
        guessedAnswer = "a"
        guessed()
    }
    function guessedB() {
        guessedAnswer = "b"
        guessed()
    }
    function guessedC() {
        guessedAnswer = "c"
        guessed()
    }
    function guessedD() {
        guessedAnswer = "d"
        guessed()
    }





</script>
  

<p>Right: {numRight}        Wrong: {numWrong}</p>


<p>Question {questionNumber} / 10</p>
{#if !$stopTimer}
    <CircleProgressBar />
{/if}

<h2>{currQuestion.question}</h2> 

<button on:click={guessedA}>
    {currQuestion.a} {iconA}
</button>
<p></p>
<button on:click={guessedB}>
    {currQuestion.b} {iconB}
</button>
<p></p>
<button on:click={guessedC}>
    {currQuestion.c} {iconC}
</button>
<p></p>
<button on:click={guessedD}>
    {currQuestion.d} {iconD}
</button>
<p></p>

  
  
  <style>
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






