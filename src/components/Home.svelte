<script>
  import { onMount } from 'svelte';
  import {name, showHome, showAnnouncements} from '../js/store.js'

  let email, password



  function logIn() {
    $showHome = false
    $showAnnouncements = true
  }



</script>


<div>

  
  <img class = "tree" src="https://cdn.discordapp.com/attachments/763258967546789890/1192607634235334706/tree.png?ex=65a9b169&is=65973c69&hm=2c2aac16167201622389c4dded89a28ff6544eb67389b549bb7b7b0d45718e1a&" alt="tree" />

  <h1 class = "shadow">GreenPost</h1>
  <h2 class = "shadow">Sign Up!</h2>

  <label class = "label">
	Your Name:
  	<input class = "input" type="text" bind:value={$name} placeholder="Enter Your Name">
  </label>
  

  <label class = "label">
	Your Email:
  	<input class = "input" type="text" bind:value={email} placeholder="Enter Your Email">
  </label>

  <label class = "label">
	Password:
  	<input class = "input" type = "password" bind:value={password} placeholder="Enter Your Password">
  </label>
  
  <div class = "inline">
	<img class = "line" src="https://cdn.discordapp.com/attachments/763258967546789890/1192651669901672589/image.png?ex=65a9da6c&is=6597656c&hm=fd1eae906d9dcebeae57108156a4d447bffe02e6523b04c746f00cf8160ca81b&" alt="tree" />
	<p class = "or">or</p>
	<img class = "line" src="https://cdn.discordapp.com/attachments/763258967546789890/1192651669901672589/image.png?ex=65a9da6c&is=6597656c&hm=fd1eae906d9dcebeae57108156a4d447bffe02e6523b04c746f00cf8160ca81b&" alt="tree" />
  </div>

  <div class = "inline">
		<img class="rectangle" src="https://cdn.discordapp.com/attachments/763258967546789890/1192675701590081647/image.png?ex=65a9f0ce&is=65977bce&hm=ae31a292ad86ef1dc2eb7e3a5992804969019fa88d5a169d64976d71ebfcb64e&" alt="rectangle" />	
		<img class="rectangle" src="https://cdn.discordapp.com/attachments/763258967546789890/1192675740559355934/image.png?ex=65a9f0d7&is=65977bd7&hm=bfb62e10b946cfe0083dea49a18fff63a857d95bc7bae0ba2a4c745481a8afea&" alt="rectangle" />
		<img class="rectangle" src="https://cdn.discordapp.com/attachments/763258967546789890/1192675847698645003/image.png?ex=65a9f0f0&is=65977bf0&hm=6bc61dcc0fbf5a67e2fd1629a8e240e4000e7da3523f6f805a40f9d80b126659&" alt="rectangle" />

  </div>

  <!-- <img class = "logos" src="https://cdn.discordapp.com/attachments/763258967546789890/1192648439159332985/image.png?ex=65a9d76a&is=6597626a&hm=8d5db485e4a66f8c897e37b75f124ae2e6d058daad4580c67a6147656eca6c2a&" alt="logos" /> -->
  
  <button class = "create" on:click={logIn}>
    Create An Account
  </button>
</div>





<style>

	

	.overlay-images {
		position: relative;
  		width: 25px; 
  		height: 25px;
	}
	.overlay-image {
		position: absolute;
  		width: 100%; 
  		height: 100%; 
  		top: 0;
  		left: 0;
	}
	.rectangle {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.line {
		width: 160px;
		height: 1px;
		flex-shrink: 0;
		stroke-width: 1.5px;
		stroke: #C0E0FF;
	}

	.or {
		width: 10px;
		height: 16px;
		flex-shrink: 0;
		color: #BBDEFF;
		font-size: 13px;
		font-style: normal;
		font-weight: 900;
		line-height: normal;
		display: inline-block;
  		vertical-align: middle;
		margin-bottom: 4px;
		margin-left: 3px;
		margin-right: 3px;

	}
	.inline {
		white-space: nowrap;
		margin-bottom: 5px;
		
	}
	.create {
		border-radius: 21px;
		background: #4898C6;
		box-shadow: 0px 4px 4px 0px #7BBCFC;
		width: 278px;
		height: 37px;
		color: #EDF8FF;
		/* font-family: Poppins; */
		font-size: 10px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
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

	.logos {
		width: 500px;
		height: 100px;
		flex-shrink: 0;
	}

	.input {	
		background-color: #edf8ff;
  		border: none;
		align-items: center;
		width: 25em;
  		padding: 16px 32px;
  		text-decoration: none;
 		margin: 0px 0px;
		color: #757575;
  		cursor: pointer;
		border-radius: 0.5em;
		box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
		display: block;
  		margin-top: 5px;
	}

	.shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	.label {
		display: flex;
		flex-direction: column;
		align-items: left;
		color: #615F5F;
  		text-align: left;
		margin-bottom: 30px;


	}

	.tree {
		width: 214px;
		height: 236px;
		flex-shrink: 0;
	}
	
	
</style>