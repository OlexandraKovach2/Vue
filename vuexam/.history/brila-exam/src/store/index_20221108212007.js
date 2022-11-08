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
            console.log(name);
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
            commit('changeName', name);
        }
    }
});

export default store;