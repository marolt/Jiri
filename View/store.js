import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters.js'
import { mutations } from './mutations.js'
import { actions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: null,
        userData: {},
        users: [],
        jurys: [],
        students: [],
        projects: [],
        events: [],
        event: {},
        eventJurys: [],
        eventStudents: [],
        eventProjects: [],
        meeting: {},
        meetingProjects: [],
    },
    getters,
    mutations,
    actions,
})