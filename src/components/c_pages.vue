<template>
  <div class="pages">
    <div class="section selected">
      <div class="page">
        <div class="page-bg">
          <h1 class="hover white">главная</h1>
        </div>
        
      </div>
    </div>
    <div class="section">
      <div class="page">
        <div class="page-bg">
          <h1 class="hover white">проекты</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="page">
        <div class="page-bg">
          <h1 class="hover white">о нас</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="page">
        <div class="page-bg">
          <h1 class="hover white">контакты</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component',
  computed: {
    menu () {
      return this.$store.getters.MENUOPENED
    },
    selectedPage () {
      return this.$store.getters.SELECTEDPAGE
    }
  },
  watch: {
    menu (newCount, oldCount) {
      this.togglepages(newCount)
    },
    selectedPage(newCount, oldCount) {
      this.changePage(newCount)
    }
  },
  mounted(){
  },
  methods:{
    togglepages: function(menuopened){
      let pagesEl = document.querySelector('.pages')
      let sections = pagesEl.querySelectorAll('.section')
      if(menuopened.payload == true){
        pagesEl.classList.add('active')
        document.querySelector('.main').classList.add('active')
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('o1')
          sections[i].classList.remove('o2')
          sections[i].classList.remove('o3')
          sections[i].classList.remove('o4')
        }
        for (let i = 0; i < sections.length; i++) {
          if(sections[i].classList.contains('selected')){
            switch (i) {
              case 0:
                sections[0].classList.add('o1')
                sections[1].classList.add('o2')
                sections[2].classList.add('o3')
                sections[3].classList.add('o4')
                sections[0].classList.add('selected')
                break;
              case 1:
                sections[0].classList.add('o4')
                sections[1].classList.add('o1')
                sections[2].classList.add('o2')
                sections[3].classList.add('o3')
                sections[1].classList.add('selected')
                break;
              case 2:
                sections[0].classList.add('o3')
                sections[1].classList.add('o4')
                sections[2].classList.add('o1')
                sections[3].classList.add('o2')
                sections[2].classList.add('selected')
                break;
              case 3:
                sections[0].classList.add('o2')
                sections[1].classList.add('o3')
                sections[2].classList.add('o4')
                sections[3].classList.add('o1')
                sections[3].classList.add('selected')
                break;
            }
            sections[i].classList.remove('selected')
          }
        }
      }else{
        pagesEl.classList.remove('active')
        document.querySelector('.main').classList.remove('active')
        if(this.$store.getters.SELECTEDPAGE.payload != undefined){
          sections[this.$store.getters.SELECTEDPAGE.payload].classList.add('selected')
        }else{
          sections[this.$store.getters.SELECTEDPAGE].classList.add('selected')
        }
        sections[0].classList.remove('o1')
        sections[1].classList.remove('o2')
        sections[2].classList.remove('o3')
        sections[3].classList.remove('o4')
        
      }
    },
    changePage: function(page){
      let pagesEl = document.querySelector('.pages')
      let sections = pagesEl.querySelectorAll('.section')
      console.log(page.payload);
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('o1')
        sections[i].classList.remove('o2')
        sections[i].classList.remove('o3')
        sections[i].classList.remove('o4')
        sections[i].classList.remove('selected')
      }
      switch (page.payload) {
        case 0:
          sections[0].classList.add('o1')
          sections[1].classList.add('o2')
          sections[2].classList.add('o3')
          sections[3].classList.add('o4')
          sections[0].classList.add('selected')
          break;
        case 1:
          sections[0].classList.add('o4')
          sections[1].classList.add('o1')
          sections[2].classList.add('o2')
          sections[3].classList.add('o3')
          sections[1].classList.add('selected')
          break;
        case 2:
          sections[0].classList.add('o3')
          sections[1].classList.add('o4')
          sections[2].classList.add('o1')
          sections[3].classList.add('o2')
          sections[2].classList.add('selected')
          break;
        case 3:
          sections[0].classList.add('o2')
          sections[1].classList.add('o3')
          sections[2].classList.add('o4')
          sections[3].classList.add('o1')
          sections[3].classList.add('selected')
          break;
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
  transition: 0.3s;
  &.active{
    top: calc((100vh - 300px) * 0.4);
    left: calc((0vw - 300px) * 0.4);
    // left: calc(25vw - 350px);
    
    transform: scale(0.4) rotateX(-13.7deg) rotateY(-4.7deg) rotateZ(-4.9deg);
    transform-origin: center;
    transform-style: preserve-3d;
    .section{
      border-radius: 16px;
    }

  }
}
.page{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  h1{
    font-size: 150px;
    color: #fff;
    @media (max-width: 700px){
      font-size: 50px;
    }
  }
  .page-bg{
    width: 100vw;
    height: 100vh; 
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
  }
}
.section{
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 0.2s;
  overflow-x: hidden;
  overflow-y: overlay;
  &.active{
    height: 100vh;
    overflow: hidden;
  }
  &.o1{
    left: 0px;
    top: 0px;
    transform: translateZ(40px);
  }
  &.o2{
    left: -30px;
    top: -30px;
    transform: translateZ(30px);
    
  }
  &.o3{
    left: -60px;
    top: -60px;
    transform: translateZ(20px);
    
  }
  &.o4{
    left: -90px;
    top: -90px;
    transform: translateZ(10px);
  }
  &.selected{
    left: 0px !important;
    top: 0px !important;
    transform: translateZ(40px) !important;
    z-index: 4;
  }
}
.section:nth-child(1) .page-bg{
  background: url('https://w-dog.ru/wallpapers/10/17/432030742341343/okean-zakat-volna-voda-priroda.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.section:nth-child(2) .page-bg{
  background: url('https://tsdbklimovo.ru/wp-content/uploads/2020/06/ookean2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.section:nth-child(3) .page-bg{
  background: url('https://images.pexels.com/photos/57946/pexels-photo-57946.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200');
  background-repeat: no-repeat;
  background-size: cover;
}
.section:nth-child(4) .page-bg{
  background: url('https://rusinfo.info/wp-content/uploads/9/f/6/9f664359381ff7e3d34f99bb86d7a3e0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
