import {createStore} from 'vuex'

const store = createStore({
    state: {
        list: [
            {
                id: 1,
                name: "Salt",
                unit: "Gram",
                count: "300",
                cost: 30
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