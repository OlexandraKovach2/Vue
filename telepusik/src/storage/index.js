import {createStore} from 'vuex';

const store = createStore({
    state: {
        cardList:[
            {
                id: 1,
                name: "Wolf",
                imgSrc:"https://chudo-ostriv.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/b/o/boc223739_1.webp",
                price: 30,
                favorite: false,
              },
              {
                id: 2,
                name: "Alpaka",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYzcXDALUgNpxmhHkgPxwwc3r7Ox9Ub6q_FzSm5YQruf83gbYfxH78_dJ9D54pamkqmc&usqp=CAU",
                price: 24,
                favorite: false
              },
              {
                id: 3,
                name: "Unicorn",
                imgSrc: "https://bi.ua/uploaded-images/products/size_400/539322_1.jpg",
                price: 43,
                favorite: false,
              },
              {
                id:4,
                name: "Fox",
                imgSrc: "https://besmart.ua/uploads/product_photos/26/57/l_f0c0bt3lq_d7a9b32d.jpg",
                price: 24,
                favorite: false
              },
              {
                id: 5,
                name: "Solth",
                imgSrc: "https://www.rofu.de/out/pictures/master/product/1/242820_8421405459_ty_beanie_bellies_sloth_silas_01.jpg",
                price: 10,
                favorite: false
              },
              {
                id: 6,
                name: "Seal",
                imgSrc: "https://www.sell2bbnovelties.com/mm5/beanies/BOO_B_tusk-36187_540x540.jpg",
                price: 24,
                favorite: false
              }
        ]
    },
    mutations: {
        addToCardList(state, arr) {
            state.cardList.push({
                id: state.cardList.length,
                name: arr[0],
                imgSrc: arr[1],
                price: arr[2],
                favorite: false
            });
        },
        favoriteButton(state,id) {

            state.cardList.forEach(function(item){
                if(item.id == id){
                    if(item.favorite){
                        item.favorite = false;
                    }
                    else{
                        item.favorite = true;
                    }
                    
                }
            });
        }
    },
    getters: {
        cardList: state => {
            return state.cardList;
        }
    },
    actions: {
        addToCardList({commit}, arr) {
            commit('addToCardList', arr)
        },
        favoriteButton({commit}, id){
            commit('favoriteButton', id)
        }
    }
    
});

export default store;