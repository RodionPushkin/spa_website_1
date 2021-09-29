<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-aura"></div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted() {
    if(window.innerHeight < window.innerWidth){
      this.cursorMovement()
    }
  },
  methods: {
    cursorMovement: function(){
      let cursorEl = document.querySelector('.cursor');
      let cursorAuraEl = document.querySelector('.cursor-aura');
      let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
      const mouseCoords = (e)=>{
        mouseX = e.pageX;
        mouseY = e.pageY;
      }
      let event;
      document.querySelector('body').addEventListener('mousemove', e=> {
        event = e
        mouseCoords(event)
        cursorAuraEl.classList.remove('disabled')
        cursorEl.classList.remove('disabled')
        if(e.toElement.classList.contains('hover')){
          cursorEl.classList.add('event-hover')
          cursorAuraEl.classList.add('event-hover')
        }else if(e.toElement.classList.contains('button')){
          cursorEl.classList.add('event-button')
          cursorAuraEl.classList.add('event-button')
        }else{
          cursorEl.classList.remove('event-hover')
          cursorAuraEl.classList.remove('event-hover')
          cursorEl.classList.remove('event-button')
          cursorAuraEl.classList.remove('event-button')
        }
        if(e.toElement.classList.contains('white')){
          cursorEl.classList.add('event-white')
          cursorAuraEl.classList.add('event-white')
          cursorEl.classList.add('event-white')
          cursorAuraEl.classList.add('event-white')
        }else{
          cursorEl.classList.remove('event-white')
          cursorAuraEl.classList.remove('event-white')
          cursorEl.classList.remove('event-white')
          cursorAuraEl.classList.remove('event-white')
        }
      })
      window.addEventListener('scroll', ()=> {
        mouseCoords(event)
      })
      document.querySelector('body').addEventListener('mouseout', ()=> {
        cursorAuraEl.classList.add('disabled')
        cursorEl.classList.add('disabled')
      })
      gsap.to({}, .01, {
        repeat: -1,
        onRepeat: () =>{
          posX += (mouseX - posX) / 5
          posY += (mouseY - posY) / 5
          gsap.set(cursorEl, {
            css: {
              left: mouseX - window.pageXOffset,
              top: mouseY - window.pageYOffset
            }
          })
          gsap.set(cursorAuraEl, {
            css: {
              left: posX - window.pageXOffset,
              top: posY - window.pageYOffset
            }
          })
        }
      })
    },
  }
}
</script>
<style lang="scss">
.cursor{
  position: fixed;
  height: 12px;
  width: 12px;
  top: -999999px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background : rgba(0, 0, 0, 1);
  border-radius: 36px;
  transition: width 0.2s cubic-bezier(0,-0.94,1,1.94), height 0.2s cubic-bezier(0,-0.94,1,1.94), opacity 0.2s, transform 0.2s cubic-bezier(0,-0.94,1,1.94), background 0.2s;
  z-index: 99999;
  user-select: none;
  pointer-events: none;
  &.event-hover{
    transform: translate(-50%, -50%) scale(0);
  }
  &.event-button{
    transform: translate(-50%, -50%) scale(0);
  }
  &.event-white{
    background : rgba(255, 255, 255, 1);
  }
  
}
.cursor-aura{
  position: fixed;
  height: 48px;
  width: 48px;
  top: -999999px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 36px;
  transition: width 0.2s cubic-bezier(0,-0.94,1,1.94), height 0.2s cubic-bezier(0,-0.94,1,1.94), opacity 0.2s, transform 0.2s cubic-bezier(0,-0.94,1,1.94), border 0.2s;
  z-index: 99999;
  user-select: none;
  pointer-events: none;
  &.event-hover{
    transform: translate(-50%, -50%) scale(1.3);
  }
  &.event-button{
    transform: translate(-50%, -50%) scale(1.3);
  }
  &.event-white{
    border: 1px solid rgba(255, 255, 255, 1); 
  }
}
.disabled{
  opacity: 0;
}
*{
  cursor: none;
}
</style>