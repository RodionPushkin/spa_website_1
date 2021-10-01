import { createStore } from 'vuex'

export default createStore({
  state: {
    pages:{
      selectedPage: 0,
      isMenuOpened: false,
    }
  },
  getters:{
    SELECTEDPAGE(state){
      return state.pages.selectedPage
    },
    MENUOPENED(state){
      return state.pages.isMenuOpened
    }
  },
  mutations: {
    setMenuOpened(state, payload){
      state.pages.isMenuOpened = payload
    },
    setSelectedPage(state, payload){
      state.pages.selectedPage = payload
    },
  },
  actions: {
    SET_MENU_OPENED(context, payload){
      context.commit('setMenuOpened', payload);
    },
    SET_SELECTED_PAGE(context, payload){
      context.commit('setSelectedPage', payload);
    }
  },
})
