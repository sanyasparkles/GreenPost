<script>
  import { onMount } from 'svelte';
  import {name, showHome, showAnnouncements} from '../js/store.js'

  let email, password



  function logIn() {
    $showHome = false
    $showAnnouncements = true
  }



</script>


<div class = "centered">

  <h1>GreenPost</h1>
  <p>Your Name:</p>
  <input class = "input" type="text" bind:value={$name} placeholder="Enter Your Name">

  <p>Your Email:</p>
  <input class = "input" type="text" bind:value={email} placeholder="Enter Your Email">

  <p>Password:</p>
  <input class = "input" type="text" bind:value={password} placeholder="Enter Your Password">
  
  <button on:click={logIn}>
    Create An Account
  </button>
</div>





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