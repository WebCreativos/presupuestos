export const state = () => ({
    titlePage:'Home',
    showBottomBar: false,
})

export const mutations = {
    setTitlePage(state, showBottomBar) {
        state.titlePage = showBottomBar
    },
    setShowBottomBar(state, showBottomBar) {
        state.showBottomBar = showBottomBar
    },
}

export const actions = {
    setTitlePage({ commit }, titlePage) {
        commit('setTitlePage', titlePage)
    },
    setShowBottomBar({ commit }, showBottomBar) {
        commit('setShowBottomBar', showBottomBar)
    },

}

export const getters = {
    titlePage(state) {
        return state.titlePage
    },
    showBottomBar(state) {
        return state.showBottomBar
    },
}