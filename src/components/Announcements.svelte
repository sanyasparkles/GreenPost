<script>
      import {activities, name, showHome, showAnnouncements, showLeaderboard, showQuiz} from '../js/store.js'

</script>

<div>

    <p> Welcome, {$name}!</p>

    <p>[insert calender image]</p>

    <h1>Dec 25, 2023</h1>

    {#if $activities !== null}
    <ul>
        {#each $activities as activity}
            <p>{activity}</p>
        {/each}
    </ul>
    {/if}
    
</div>

