<script>
    let fullName = '';
  </script>
  
  <div class="main-container">
    <header class="header">Enter your full name</header>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58091ed42efa4a8e40bf25c551fe50d1c164dc11352b59cd011dba3362fd8e24?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&" class="img" />
    <input type="text" bind:value={fullName} />
  </div>
  
  <style>
    .main-container {
      border-radius: 9px;
      border: 2px solid rgba(238, 238, 238, 0.14);
      background-color: #edf8ff;
      align-self: center;
      display: flex;
      margin-top: 7px;
      width: 278px;
      max-width: 100%;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
      padding: 13px;
    }
  
    .header {
      color: #747474;
      flex-grow: 1;
      white-space: nowrap;
      font: 300 10px Poppins, sans-serif;
    }
  
    @media (max-width: 991px) {
      .header {
        white-space: initial;
      }
    }
  
    .img {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 12px;
      overflow: hidden;
      max-width: 100%;
    }
  
    .input {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      font-size: 14px;
      width: 100%;
      box-sizing: border-box;
    }
  </style>