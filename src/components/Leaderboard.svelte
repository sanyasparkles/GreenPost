<script>

import {first, profiles, name, showHome, showAnnouncements, addProfile} from '../js/store.js'

let redArrow = "https://cdn.builder.io/api/v1/image/assets/TEMP/f6284321b126ec14eb5b9e75c6c1708c2dfaaa5f57bc3cb3a55e7582845935d5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
let greenArrow = "https://cdn.builder.io/api/v1/image/assets/TEMP/5403e46a90ebb4dad2b51d3f457b39360c3eab021726c9692d6092f4c51aceed?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
let arrowLink
let count = 4
function incCount() {
  count++;
  // if(count >= 10) {
  //   count = 4;
  // }
  return true
}

let rank = 0


$: {
  if ($profiles) {
    console.log("profiles is ", $profiles)
  }
}


addProfile("Ed....", 3900, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")
    addProfile("Alexis".padEnd(2), 3105, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")
    addProfile("Taylor", 2900, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")
    addProfile("Travis", 1600, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")
    addProfile("Patrick", 1540, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")

    addProfile("Selena", 1320, "https://cdn.discordapp.com/attachments/763258967546789890/1194127999897960448/Learn-10-Fun-Facts-About-Santa_2.png?ex=65af395d&is=659cc45d&hm=d42ba2f62188607301ed000601f43586d85fd3483e99ed4cf56d52f548dcdd5e&")
    if ($first) {
      addProfile($name, 1300, "https://cdn.discordapp.com/attachments/763258967546789890/1194129582618574988/Elf-10.png?ex=65af3ad6&is=659cc5d6&hm=687628edd5cd8a0eeeb5a6aef621bfbd19960fc9ba318fddbe53f4fbd3fee69c&")
      $first = false
    }
    else {
      addProfile($name, $profiles[$name].info[0], "https://cdn.discordapp.com/attachments/763258967546789890/1194129582618574988/Elf-10.png?ex=65af3ad6&is=659cc5d6&hm=687628edd5cd8a0eeeb5a6aef621bfbd19960fc9ba318fddbe53f4fbd3fee69c&")
    }

    



let items, keys
$:  { if ($profiles !== null) {
        
        items = Object.keys($profiles).map(
            (key) => { return [key, $profiles[key]] });
       

        items.sort(
            (first, second) => { console.log(first[1].info[0]); return  second[1].points - first[1].points}
            
        );
        

        keys = items.map(
            (e) => { return e[0] });
    } }





</script>


<div class="div">

      
      <div class="podium">
        <div class="sarah-set">
          <img
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e329ed4eec52f2c6625f1dc26a94217ad665556bfd90fc69261b3573f0751437?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
            class="sarah-image"
          />
          <div class="text1">Sarah</div>
          <div class="number">4235</div>
        </div>
        <div class="kiara-set">
          <img
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0beabc90b4f7f219730f09026da93519148e22459ee93cad952a7d11cb764c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
            class="kiara-image"
          />
          <div class="text1">Kiara</div>
          <div class="number">4578</div>
        </div>
        <div class="sanya-set">
          <img
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63dc898220a3acb154ba62df251dc5fe8b19711ff0294440256e710bf67d15e6?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
            class="sanya-image"
          />
          <div class="text1">Sanya</div>
          <div class="number">3967</div>
        </div>
      </div>
    </div>


<!-- leaderboard aftr top 3 -->

{#if $profiles !== null && $name in $profiles}
<ul>
    {#each keys as bee}
        {#if bee !== "0"}
    
       
            
    <div class="div-21">
      <div class="div-22">{count=count+rank}</div>
      <div class="div-23">
        <img
          srcset={$profiles[bee].info[1]}
          class="img-9"
        />
        <div class="div-24">{bee}</div>
      </div>
      <div class="div-25">
        <div class="div-26">{$profiles[bee].info[0]}</div>
        {#if bee.charAt(0) === 'T' || bee.charAt(0) === 'E'}
        <img
        src={greenArrow}
        class="img-10"
      />

      {:else}
      <img
        src={redArrow}
        class="img-10"
      />
        {/if}
        
        
      </div>
    </div>
      {/if}
    {/each}
</ul>
{/if}














<!-- 

    <div class="div-21">
      <div class="div-22">5</div>
      <div class="div-23">
        <img
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/909e60f484667cd3a834339342dec558b03837a26d82e07ceebae994d3f0f55a?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-9"
        />
        <div class="div-24">Travis Kelce</div>
      </div>
      <div class="div-25">
        <div class="div-26">3578</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6284321b126ec14eb5b9e75c6c1708c2dfaaa5f57bc3cb3a55e7582845935d5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-10"
        />
      </div>
    </div>
    <div class="div-27">
      <div class="div-28">6</div>
      <div class="div-29">
        <img
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5c68fa132690e071e4f1d1e67d6f4131d255812784ab2d5afbd4b7a3fd012c9?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-11"
        />
        <div class="div-30">Taylor Swift</div>
      </div>
      <div class="div-31">
        <div class="div-32">3476</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5403e46a90ebb4dad2b51d3f457b39360c3eab021726c9692d6092f4c51aceed?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-12"
        />
      </div>
    </div>
    <div class="div-33">
      <div class="div-34">7</div>
      <div class="div-35">
        <img
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcebd5f978ce2378b9ae63624c866bf2aef7e42c5ceaa5385f1a280228e7e1d8?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-13"
        />
        <div class="div-36">Pat Mahomes</div>
      </div>
      <div class="div-37">
        <div class="div-38">3125</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6284321b126ec14eb5b9e75c6c1708c2dfaaa5f57bc3cb3a55e7582845935d5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
          class="img-14"
        />
      </div>
    </div>
    ss
  -->
  <style>
    
  
    .podium {
      position: relative;
      align-self: center;
      display: flex;
      align-items: start;
      gap: 17px;
      margin: 27px 0 29px;
      padding: 0 20px;
    }
    .sarah-set {
      align-self: end;
      display: flex;
      margin-top: 77px;
      flex-grow: 1;
      flex-basis: 0%;
      flex-direction: column;
      align-items: center;
    }
    .sarah-image {
      aspect-ratio: 1.02;
      object-fit: contain;
      object-position: center;
      width: 102px;
      overflow: hidden;
    }
    .text1 {
      color: #000000;
      font-weight: bold;
      text-align: center;
      margin-top: 11px;
      white-space: nowrap;
      font-size: 1.5em;
      
    }
    .number {
      color: #000000;
      text-align: center;
      margin-top: 0px;
      white-space: nowrap;
      font-weight: bold;
      font-size: 1em;
    }
    .kiara-set {
      display: flex;
      flex-grow: 1;
      flex-basis: 0%;
      flex-direction: column;
      align-items: center;
    }
    .kiara-image {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 146px;
      overflow: hidden;
    }
   
    .sanya-set {
      align-self: end;
      display: flex;
      margin-top: 77px;
      flex-grow: 1;
      flex-basis: 0%;
      flex-direction: column;
      align-items: center;
    }
    .sanya-image {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 100px;
      overflow: hidden;
    }
  
    .div-21 {
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      align-self: center;
      display: flex;
      margin-top: 20px;
      width: 100%;
      max-width: 382px;
      gap: 15px;
      padding: 10px 15px;
    }
    .div-22 {
      color: #000;
      text-align: center;
      flex-grow: 1;
      white-space: nowrap;
      margin: auto 0;
      font: 400 20px Mitr, sans-serif;
    }
    .div-23 {
      align-self: stretch;
      display: flex;
      padding-right: 46px;
      justify-content: space-between;
      gap: 15px;
    }
    .img-9 {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 60px;
      overflow: hidden;
      border-radius: 50%;
      max-width: 100%;
    }
    .div-24 {
      color: #000;
      text-align: center;
      align-self: center;
      flex-grow: 1;
      white-space: nowrap;
      margin: auto 0;
      font: 400 20px Mitr, sans-serif;
    }
    .div-25 {
      justify-content: space-between;
      align-self: stretch;
      display: flex;
      gap: 10px;
      padding: 16px 0;
    }
    .div-26 {
      color: #000;
      text-align: center;
      font: 400 18px Mitr, sans-serif;
    }
    .img-10 {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 15px;
      fill: #f61b35;
      overflow: hidden;
      align-self: center;
      max-width: 100%;
      margin: auto 0;
    }
   
  </style>
  