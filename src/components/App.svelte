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



  {#if !$showHome}

  <div class = "inline">
		  <!-- <button  class="rectangle" src="https://cdn.discordapp.com/attachments/763258967546789890/1192675701590081647/image.png?ex=65a9f0ce&is=65977bce&hm=ae31a292ad86ef1dc2eb7e3a5992804969019fa88d5a169d64976d71ebfcb64e&" alt="rectangle" on:click={goToAnnouncements} />	 -->
      <button class="image-button1" on:click={goToAnnouncements} />	        
      <button class="image-button2" on:click={goToLeaderboard} />	
      <button class="image-button3" on:click={goToQuiz} />	
     

  </div>
  
  {/if}
  


</div>

<style>

.image-button1 {
    border: none;
    background: url('https://cdn.discordapp.com/attachments/763258967546789890/1192932218893516860/image.png?ex=65aadfb4&is=65986ab4&hm=d8e5550d61d98b669579ecd59bd01bcbecdf096396ae6be85d61a87aac754b1c&') no-repeat;
    background-size: cover;
    width: 40px; 
    height: 40px;
    margin-right: 20px ;
  }

  .image-button2 {
    border: none;
    background: url('https://cdn.discordapp.com/attachments/763258967546789890/1193289935097180260/Screenshot_2024-01-06_at_12.27.45_PM-removebg-preview.png?ex=65ac2cda&is=6599b7da&hm=9fb7d656f19b0e32adab0c11e98276266bcb14fbd46a4affcc09ac0f7a0e5c7c&') no-repeat;
    background-size: cover;
    width: 40px; 
    height: 40px;
    margin-right: 20px ;
  }

  .image-button3 {
    border: none;
    background: url('https://cdn.discordapp.com/attachments/763258967546789890/1193290304380489728/icon-6065371_1280-removebg-preview.png?ex=65ac2d32&is=6599b832&hm=8029cc2b8f373c5f4c2ebcbb29d60352ae5877fad8bf4f9f13803cbc575933c2&') no-repeat;
    background-size: cover;
    width: 40px; 
    height: 40px;
  }

.rectangle {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-right: 10px;
	}

  .inline {
		white-space: nowrap;
		margin-bottom: 5px;
		
	}

  :global(body) {
    background-color: #DAEDC2; 
    color: #000; 
  }
  

  .read-the-docs {
    color: #888;
  }
</style>