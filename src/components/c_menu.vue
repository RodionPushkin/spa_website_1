<template>
  <div class="menu">
    <div class="menu-button hover" @click="toggleMenu">
      <div class="button-wrap">
        <div class="button-item"></div>
      </div>
    </div>
    <nav class="nav">
    </nav>
  </div>
</template>

<script>
export default {
  name: 'c_menu',
  methods: {
    toggleMenu: function(){
      let menu = document.querySelector('.menu')
      if(menu.querySelector('.menu-button').classList.contains('active')){
        menu.querySelector('.menu-button').classList.remove('active')
      }else{
        menu.querySelector('.menu-button').classList.add('active')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.menu{
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
}
.menu-button{
  position: absolute;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.3s;
  .button-wrap{
    height: 32px;
    width: 32px;
    pointer-events: none;
    position: relative;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    // transform: rotateZ(90deg);
  }
  .button-item{
    height: 6px;
    width: 24px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 16px;
    top: 16px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
  }
  .button-item:before{
    height: 6px;
    width: 32px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 12px;
    top: -10px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    content: "";
  }
  .button-item:after{
    height: 6px;
    width: 32px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 12px;
    top: 16px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    content: "";
  }
  &.active{
    background: var(--hover-color);
    .button-item{
      width: 0px;
      background: var(--black-color);
      border-radius: 2px;
      position: absolute;
      transform: translate(-50%, -50%);
      transform-origin: center;
      left: 16px;
      top: 16px;
    }
    .button-item:before{
      transform: rotateZ(-45deg) translate(-50%, -50%);
      width: 32px;
      left: -2px;
      top: -8px;
    }
    .button-item:after{
      width: 32px;
      left: -6px;
      top: 14.5px;
      transform: rotateZ(45deg) translate(-50%, -50%);
    }
  }
  &:hover{
    background: var(--hover-color);
    .button-wrap{
      transform: rotateZ(0deg);
    }
  }
}
@media (min-width: 1400px) {
  .menu-button{
    top: 144px;
    right: 144px;
  }
}
@media (min-width: 700px) and (max-width: 1400px) {
  .menu-button{
    top: 72px;
    right: 72px;
  }
}
@media (max-width: 700px) {
  .menu-button{
    top: 24px;
    right: 24px;
  }
}
</style>
