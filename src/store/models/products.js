export const products = {
  state: {
    listQtd: 0,
    list: [],
    isLoading: false,
  },
  reducers: {
    GET_PRODUCTS: (state) => {
      return {
        list: state.list,
        isLoading: true,
      };
    },
    SET_PRODUCTS: (state, payload) => {
      const newList = state.list.concat(payload);

      return {
        listQtd: newList.length,
        list: newList,
        isLoading: false,
      };
    },
    LOADING: (state, loading) => {
      return {
        list: state.list,
        isLoading: loading,
      };
    },
  },
  effects: (dispatch) => ({
    async getProducts(payload, rootState) {
      const quantity = rootState.products.listQtd;
      try {
        this.GET_PRODUCTS();
        const res = await fetch(`http://localhost:3000/api/getData`);
        const data = await res.json();
        this.SET_PRODUCTS(data);
      } catch (error) {
        console.log(error);
        this.IS_LOADING(false);
      }
    },
  }),
};
