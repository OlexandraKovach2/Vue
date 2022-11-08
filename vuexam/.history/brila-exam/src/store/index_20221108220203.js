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
            },
            {
                id: 2,
                name: "Sugar",
                unit: "Gram",
                count: "1300",
                cost: 50
            },
            {
                id: 3,
                name: "Eggs",
                unit: "Unit",
                count: "10",
                cost: 160
            },
            {
                id: 4,
                name: "Pepper",
                unit: "Unit",
                count: "35",
                cost: 40
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