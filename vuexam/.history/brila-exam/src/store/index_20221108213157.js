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
    getters: {
        list: state => {
            return state.list;
        }
    },
});

export default store;