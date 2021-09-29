<template>
  <div class="menu">
    <div class="menu-button hover" @click="toggleMenu">
      <div class="button-wrap">
        <div class="button-item"></div>
      </div>
    </div>
    <nav class="nav">
      <div class="nav-item mf hover">
        главная
      </div>
      <div class="nav-item mf hover">
        проекты
      </div>
      <div class="nav-item mf hover">
        о нас
      </div>
      <div class="nav-item mf hover">
        контакты
      </div>
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
        menu.querySelector('.nav').classList.remove('active')
        document.querySelector('body').classList.remove('active')
        this.$store.dispatch('SET_MENU_OPENED',{
          payload: false
        })
      }else{
        menu.querySelector('.menu-button').classList.add('active')
        menu.querySelector('.nav').classList.add('active')
        document.querySelector('body').classList.add('active')
        this.$store.dispatch('SET_MENU_OPENED',{
          payload: true
        })
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
  pointer-events: none;
}
.menu-button{
  position: absolute;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.3s;
  pointer-events: all;
  z-index: 9999;
  .button-wrap{
    height: 32px;
    width: 32px;
    pointer-events: none;
    position: relative;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    transform: rotateZ(90deg);
  }
  .button-item{
    height: 6px;
    width: 24px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    left: 4px;
    top: 13px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
  }
  .button-item:before{
    height: 6px;
    width: 32px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    left: -4px;
    top: -13px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    content: "";
  }
  .button-item:after{
    height: 6px;
    width: 32px;
    background: var(--black-color);
    border-radius: 2px;
    position: absolute;
    left: -4px;
    top: 13px;
    transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
    content: "";
  }
}
.nav{
  height: 100vh;
  min-width: 400px;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 200px 36px;
  padding-right: 86px;
  font-size: 36px;
  position: absolute;
  right: -400px;
  transition: 0.2s cubic-bezier(.37,-0.64,.61,1.6);
  .nav-item{
    pointer-events: all;
    transition: 0.3s;
    &:hover{
      color: var(--main-color);
    }
  }
  &.active{
    right: -50px;
  }
}
@media (min-width: 1400px) {
  .menu-button{
    top: 72px;
    right: 144px;
    &.active{
      background: var(--hover-color);
      .button-item{
        width: 0px;
        background: var(--black-color);
        border-radius: 2px;
        position: absolute;
        transform-origin: center;
        left: 16px;
        top: 16px;
      }
      .button-item:before{
        transform: rotateZ(-45deg);
        width: 32px;
        left: -16px;
        top: -3px;
      }
      .button-item:after{
        width: 32px;
        left: -16px;
        top: -3px;
        transform: rotateZ(45deg);
      }
    }
    &:hover{
      background: var(--hover-color);
      .button-wrap{
        transform: rotateZ(0deg);
      }
    }
  }
}
@media (min-width: 700px) and (max-width: 1400px) {
  .menu-button{
    top: 72px;
    right: 72px;
    &.active{
      background: var(--hover-color);
      .button-item{
        width: 0px;
        background: var(--black-color);
        border-radius: 2px;
        position: absolute;
        transform-origin: center;
        left: 16px;
        top: 16px;
      }
      .button-item:before{
        transform: rotateZ(-45deg);
        width: 32px;
        left: -16px;
        top: -3px;
      }
      .button-item:after{
        width: 32px;
        left: -16px;
        top: -3px;
        transform: rotateZ(45deg);
      }
    }
    &:hover{
      background: var(--hover-color);
      .button-wrap{
        transform: rotateZ(0deg);
      }
    }
  }
}
@media (max-width: 700px) {
  .menu{
    height: 100vh;
    width: 100vw;
  }
  .menu-button{
    bottom: 144px;
    left: 50%;
    transform: translateX(-50%);
    &.active{
      background: var(--hover-color);
      .button-item{
        width: 0px;
        background: var(--black-color);
        border-radius: 2px;
        position: absolute;
        transform-origin: center;
        left: 16px;
        top: 16px;
      }
      .button-item:before{
        transform: rotateZ(-45deg);
        width: 32px;
        left: -16px;
        top: -3px;
      }
      .button-item:after{
        width: 32px;
        left: -16px;
        top: -3px;
        transform: rotateZ(45deg);
      }
    }
  }
}
</style>
