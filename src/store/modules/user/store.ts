export const createStore = () => {
    const store = {
        loading:false,
    }
    return store;
};
export type userState = ReturnType<typeof createStore>;