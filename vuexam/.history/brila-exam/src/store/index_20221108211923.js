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
    mutation: {
        changeName(state, name){
            state.list.name = name
        }
    },
    getters: {
        list: state => {
            return state.list;
        }
    },
    actions: {
        changeName({commit}, name) {
            console.log(name);
            commit('changeName', name);
        }
    }
});

export default store;