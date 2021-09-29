<template>
  <div class="pages">
    <div class="section">
      <h1>главная</h1>
    </div>
    <div class="section ">
      <h1>проекты</h1>
    </div>
    <div class="section ">
      <h1>о нас</h1>
    </div>
    <div class="section ">
      <h1>контакты</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component',
  computed: {
    count () {
      return this.$store.getters.MENUOPENED
    }
  },
  watch: {
    count (newCount, oldCount) {
      this.togglepages(newCount)
    }
  },
  mounted(){
  },
  methods:{
    togglepages: function(menuopened){
      let pagesEl = document.querySelector('.pages')
      if(menuopened.payload == true){
        pagesEl.classList.add('active')
        document.querySelector('.main').classList.add('active')
      }else{
        pagesEl.classList.remove('active')
        document.querySelector('.main').classList.remove('active')
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pages{
  position: relative;
  width: 100vw;
  top: 0px;
  left: 0px;
  transition: 0.2s ease-in-out;
  &.active{
    top: 25%;
    left: calc(50% - 300px);
    transform: scale(0.5) translate(-100%, -50%);

  }
}
.section{
  min-height: 100vh;
  width: 100vw;
  background: var(--bg-color);
  position: absolute;
  top: 0px;
  left: 0px;
  &.active{
    height: 100vh;
    overflow: hidden;
  }
  &.selected{
    
  }
}
</style>
