import {createStore} from 'vuex'

const store = createStore({
    state: {
        list: [
            {
                id: 1,
                name: "test"
            }
        ]
    },
    mutations: {
        changeName(state, name){
            state.list[0].name = name
        }
    },
    getters: {
        list: state => {
            return state.list;
        }
    },
    actions: {
        changeName({commit}, name) {
            commit('changeName', name);
        }
    }
});

export default store;