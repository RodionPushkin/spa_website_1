<template>
  <!-- <router-link to="/">page</router-link> -->
  <main class="main">
    <router-view/>
  </main>
</template>

<style lang="scss">
:root {
  --main-color: #000000;
  --hover-color: #000000;
  --error-color: #000000;
  --good-color: #000000;
  --bg-color: #f9f9f9;
  --black-color: #000000;
  --white-color: #ffffff;
}
*{padding: 0;margin: 0;border: 0; scroll-behavior: smooth; user-select: none;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding:0;border:0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
@media (min-width: 500px) {
  ::-webkit-scrollbar{width:30px}
  ::-webkit-scrollbar-track{border-radius:100px;background-clip:border-box}
  ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);background-clip:padding-box;border:13px solid transparent;border-radius:100px; transition: 1s;}
  ::-webkit-scrollbar-button,::-webkit-scrollbar-track-piece{background:transparent}
  ::-webkit-scrollbar-corner{background:transparent}
}
body{
  overflow-x: hidden;
  overflow-y: overlay;
}
.input{
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid var(--black-color);
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 24px;
  color: var(--black-color);
}
.button{
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 24px;
  background: var(--main-color);
  transition: 0.2s;
  color: var(--white-color);
}
.button:hover{
  background: var(--black-color);
}
.check{
  margin: 16px;
  position: relative;
}
.check::after{
  content: '';
  position: absolute;
  left: 24px;
  width: 150px;
}
/////////////////////////////////////////////////////////
// font sizes
.s{
  font-size: 18px;
  line-height: 22px;
}
.m{
  font-size: 20px;
  line-height: 24px;
}
.l{
  font-size: 22px;
  line-height: 26px;
}
.xl{
  font-size: 26px;
  line-height: 30px;
}
/////////////////////////////////////////////////////////
// colors b is bg c is font color
.mb{
  background: var(--main-color);
}
.mc{
  color: var(--main-color);
}
.sb{
  background: var(--hover-color);
}
.sc{
  color: var(--hover-color);
}
/////////////////////////////////////////////////////////
// main and second fonts
.mf{
  font-family: 'Roboto', sans-serif;
}
.sf{
  font-family: 'Istok Web', sans-serif;
}
.copy{
  user-select: all;
}
.link{
  color: var(--main-color);
  transition: 0.2s;
  &.router-link-exact-active{
    color: var(--black-color);
  }
}
.link:hover{
  color: var(--hover-color);
}
.main{
  flex: 1 0 auto;
  min-height: calc(100vh - 167px);
}
.content{
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  background: var(--bg-color);
  font-size: 16px;
  line-height: 20px;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}
.page{
  width: 100%;
  height: 100%;
  display: block;
}
@media (min-width: 700px) and (max-width: 1400px) {
  .s{
    font-size: 16px;
    line-height: 20px;
  }
  .m{
    font-size: 18px;
    line-height: 22px;
  }
  .l{
    font-size: 20px;
    line-height: 24px;
  }
  .xl{
    font-size: 22px;
    line-height: 26px;
  }
  .main{
    min-height: calc(100vh - 118px);
  }
}
@media (max-width: 700px) {
  .s{
    font-size: 12px;
    line-height: 16px;
  }
  .m{
    font-size: 14px;
    line-height: 18px;
  }
  .l{
    font-size: 16px;
    line-height: 20px;
  }
  .xl{
    font-size: 20px;
    line-height: 24px;
  }
  .main{
    min-height: 100vh;
  }
}
</style>
