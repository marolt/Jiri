import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters.js'
import { mutations } from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jurys: [],
        students: [],
        projects: [],
        eventJurys: [],
        eventStudents: [],
        eventProjects: [],
    },
    getters,
    mutations,
})