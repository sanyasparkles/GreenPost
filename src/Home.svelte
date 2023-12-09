<script>
  import { onMount } from 'svelte';

  let buttonText = 'Create an account';
  let name, email

  onMount(() => {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      // Add your logic here
      name.value = ""
      email.value = ""
    });
  });
</script>


<div class="div">
  <img
    loading="lazy"
    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a7e5fb2cd33400dccf9201cc911e7dde61d872b6b8e79f9e5c0b760d6c2585?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
    class="img"
  />
  <div class="div-2">GreenPost</div>
  <div class="div-3">Sign Up!</div>
  <div class="div-4">Your Name :</div>
  <div class="div-5">
    <input class = "input" type="text" bind:value={name} placeholder="Enter Your Name">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/58091ed42efa4a8e40bf25c551fe50d1c164dc11352b59cd011dba3362fd8e24?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-2"
    />
  </div>
  <div class="div-7">Your Email :</div>
  <div class="div-8">
    <div class="div-9">
      <input class = "input" type="text" bind:value={email} placeholder="Enter Your Email">
      <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad54bac2bebb79cbfd6a906d5e56e74f0b403b5f51f3ba06beb1ebbe444b28c2?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-3"
    />
    </div>
    
  </div>
  <div class="div-10">Password:</div>
  <div class="div-11">
    <div class="div-12">****************</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/14e5adda969ad518df99a1bed49cc0d261a8abf16909ebe54b20f71e63d16c06?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-4"
    />
  </div>
  <div class="div-13">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/759c7825389c4799cf401ef6477351d2ec1fedf0f75cd7437776586748b83df1?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-5"
    />
    <div class="div-14">or</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/759c7825389c4799cf401ef6477351d2ec1fedf0f75cd7437776586748b83df1?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-6"
    />
  </div>
  <div class="div-15">
    <img
      loading="lazy"
      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03da1206-9c0d-4dd1-adb1-dff8366dd3d3?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-7"
    />
    <img
      loading="lazy"
      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af499802-167e-4572-abe1-dc4c6f5ff318?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-8"
    />
    <img
      loading="lazy"
      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/052710ef-714f-4449-b892-8a5d5f6a28e5?apiKey=551fc44e6b1e4fa8a3003cbcc599e930&"
      class="img-9"
    />
  </div>
  <button class = "main-container" id="button" on:click={() => {}}>
    {buttonText}
  </button>
</div>
<style>



.main-container {
    color: #edf8ff;
    white-space: nowrap;
    border-radius: 21px;
    box-shadow: 0px 4px 4px 0px #7bbcfc;
    background-color: #4898c6;
    align-self: center;
    width: 278px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin: 49px 0 44px;
    padding: 15px 60px;
    font: 700 10px Poppins, sans-serif;
  }

  @media (max-width: 991px) {
    .main-container {
      white-space: initial;
      margin: 40px 0;
      padding: 0 20px;
    }
  }

.input {	
		background-color: #EDF8FF;
  		border: none;
		align-items: center;
		width: 13em;
    height: 2em;
  		padding: 16px 32px;
  		text-decoration: none;
 		margin: 0px 0px;
		color: rgb(30, 30, 32);
  		cursor: pointer;
		border-radius: 0.5em;
	}

  .div {
    border-radius: 28px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #daedc2;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 50px 43px;
  }
  @media (max-width: 991px) {
    .div {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .img {
    aspect-ratio: 0.91;
    object-fit: contain;
    object-position: center;
    width: 214px;
    overflow: hidden;
    align-self: center;
    margin-top: 34px;
    max-width: 100%;
  }
  .div-2 {
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: center;
    margin-top: 24px;
    white-space: nowrap;
    font: 600 29px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-2 {
      white-space: initial;
    }
  }
  .div-3 {
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: center;
    margin-top: 11px;
    white-space: nowrap;
    font: 600 22px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-3 {
      white-space: initial;
    }
  }
  .div-4 {
    color: #615f5f;
    align-self: center;
    margin-top: 4px;
    white-space: nowrap;
    font: 500 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-4 {
      white-space: initial;
    }
  }
  .div-5 {
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
  .div-6 {
    color: #747474;
    flex-grow: 1;
    white-space: nowrap;
    font: 300 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-6 {
      white-space: initial;
    }
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 12px;
    overflow: hidden;
    max-width: 100%;
  }
  .div-7 {
    color: #615f5f;
    align-self: center;
    margin-top: 27px;
    white-space: nowrap;
    font: 500 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-7 {
      white-space: initial;
    }
  }
  .div-8 {
    border-radius: 9px;
    border: 1.5px solid #e7f3ff;
    background-color: #edf8ff;
    align-self: center;
    display: flex;
    margin-top: 7px;
    width: 278px;
    height: 0 px;
    max-width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 13px;
  }
  .div-9 {
    color: #747474;
    flex-grow: 1;
    white-space: nowrap;
    font: 300 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-9 {
      white-space: initial;
    }
  }
  .img-3 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 12px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-10 {
    color: #615f5f;
    align-self: center;
    margin-top: 29px;
    white-space: nowrap;
    font: 500 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-10 {
      white-space: initial;
    }
  }
  .div-11 {
    border-radius: 9px;
    border: 1.5px solid #e7f3ff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #edf8ff;
    align-self: center;
    display: flex;
    margin-top: 6px;
    width: 278px;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px;
  }
  .div-12 {
    color: #747474;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 300 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-12 {
      white-space: initial;
    }
  }
  .img-4 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 12px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-13 {
    align-self: stretch;
    display: flex;
    margin-top: 34px;
    justify-content: space-between;
    gap: 6px;
  }
  @media (max-width: 991px) {
    .div-13 {
      justify-content: center;
    }
  }
  .img-5 {
    aspect-ratio: 81;
    object-fit: contain;
    object-position: center;
    width: 162px;
    stroke-width: 1.5px;
    stroke: #c0e0ff;
    overflow: hidden;
    align-self: start;
    max-width: 100%;
  }
  .div-14 {
    color: #bbdeff;
    font: 900 10px Zen Maru Gothic, sans-serif;
  }
  .img-6 {
    aspect-ratio: 81;
    object-fit: contain;
    object-position: center;
    width: 162px;
    stroke-width: 1.5px;
    stroke: #c0e0ff;
    overflow: hidden;
    align-self: start;
    max-width: 100%;
  }
  .div-15 {
    align-self: center;
    display: flex;
    margin-top: 32px;
    width: 154px;
    max-width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-15 {
      justify-content: center;
    }
  }
  .img-7 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    flex: 1;
  }
  .img-8 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    flex: 1;
  }
  .img-9 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    flex: 1;
  }
  .div-16 {
    color: #edf8ff;
    white-space: nowrap;
    border-radius: 21px;
    box-shadow: 0px 4px 4px 0px #7bbcfc;
    background-color: #4898c6;
    align-self: center;
    width: 278px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin: 49px 0 44px;
    padding: 15px 60px;
    font: 700 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-16 {
      white-space: initial;
      margin: 40px 0;
      padding: 0 20px;
    }
  }
</style>