<script>
    import { onMount } from 'svelte';
    import {profiles, name, showHome, showAnnouncements, addProfile} from '../js/store.js'
  
    let items, keys 
    addProfile("Ed", 1000)
    addProfile("Kiara", 900)
    addProfile("Sanya", 713)
    addProfile("Sarah", 850)
    addProfile($name, 700)
    
   
  
    function compareByPoints(a, b) {
        return a.points - b.points;
    }


    $: if ($profiles !== null) {
        items = Object.keys($profiles).map(
            (key) => { return [key, $profiles[key]] });

        items.sort(
            (first, second) => { return first[1] - second[1] }
        );

        keys = items.map(
            (e) => { return e[0] });
    }

    $: $profiles.sort(compareByPoints)


</script>
  
  
{#if $profiles !== null}
<ul>
    {#each keys as bee}
        {#if bee !== "0"}
            <p>{bee}    {$profiles[bee].points}</p>
        {/if}
    {/each}
</ul>
{/if}
  
  
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