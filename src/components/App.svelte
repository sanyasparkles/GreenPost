<script>

  import viteLogo from '/vite.svg'
  import Home from './Home.svelte'
  import Announcements from './Announcements.svelte'
  import Leaderboard from './Leaderboard.svelte';
  import Quiz from './Quiz.svelte';
  import {showHome, showAnnouncements, showLeaderboard, showQuiz} from '../js/store.js'


  function goToAnnouncements() {
    $showAnnouncements = true;
    $showHome = false;
    $showLeaderboard = false;
    $showQuiz = false;
  }

  function goToLeaderboard() {
    $showLeaderboard = true;
    $showHome = false;
    $showAnnouncements = false;
    $showQuiz = false;
  }

  function goToQuiz() {
    $showQuiz = true;
    $showHome = false;
    $showLeaderboard = false;
    $showAnnouncements = false;
  }

</script>

 
   
<div class = "centered">
  {#if $showHome}
    <Home />
  {/if}

  {#if $showAnnouncements}
  <Announcements />
  {/if}

  {#if $showLeaderboard}
    <Leaderboard />
  {/if}

  {#if $showQuiz}
    <Quiz />
  {/if}


  <button on:click={goToAnnouncements}>
    A
  </button>
  <button on:click={goToLeaderboard}>
    L
  </button>
  <button on:click={goToQuiz}>
    Q
  </button>


</div>

<style>
  :global(body) {
    background-color: #18181A; 
    color: #6395EC; 
  }
  

  .read-the-docs {
    color: #888;
  }
</style>