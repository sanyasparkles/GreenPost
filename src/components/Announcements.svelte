<script>
    import {dateStr, activities, name, showHome, showAnnouncements, showLeaderboard, showQuiz} from '../js/store.js'
    
    import Calendar from './Calendar.svelte';
    //import { Datepicker } from 'svelte-calendar';

	
	const today = new Date;




</script>



<div>


    <!-- <Datepicker /> -->

    <Calendar {today} year={2024} />

    <div class="inline">
        <img class="megaphone" src="https://cdn.discordapp.com/attachments/763258967546789890/1192932218893516860/image.png?ex=65aadfb4&is=65986ab4&hm=d8e5550d61d98b669579ecd59bd01bcbecdf096396ae6be85d61a87aac754b1c&" alt="rectangle" />	
        <p class = "date">{$dateStr}</p>
    </div>

    {#if $activities && $dateStr in $activities}
    <ul>
        {#each $activities[$dateStr] as activity}
        
        <span class="container">
            <img class = "rect" src="https://cdn.discordapp.com/attachments/763258967546789890/1192969112561926195/image.png?ex=65ab0210&is=65988d10&hm=e13fcb556fb4a37416e8fc0a20629fe95cdf9cf1eee579f6e0df4461991037d3&" alt="grey rect">
            <div class="overlay-text">
                {activity}
            </div>
        </span>
        
        {/each}
        
    </ul>
    {/if}

</div>


<style>

.container {
    position: relative;
    width: 100%;
    margin: 10px;
  }
  
 
  
  .overlay-text {
    position: absolute;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    
    display: flex;
    width: 273px;
    height: 36px;
    /* flex-direction: column; */
    
    flex-shrink: 0;
    color: #000;
    
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    

  }

    .rect {
        width: 358px;
        height: auto;
        display: block;
        border-radius: 10px;
        background: #D9D9D9;
        
    }
    .date {
        display: flex;
        width: 273px;
        height: 36px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
        /* font-family: Inter; */
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .megaphone {
        width: 51px;
        height: 47px;
        margin-right: 25px;
        margin-left: 10px;
        flex-shrink: 0;
    }
    .inline {
        display: flex;
		white-space: nowrap;
        align-items: center;
		margin-bottom: 5px;
		
	}
</style>