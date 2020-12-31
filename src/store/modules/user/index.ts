import mutations from './mutations';
import { createStore } from './store';
import getters from './getters';
import actions from './action';
const state = createStore();

export default {
    namespaced:true,
    mutations,
    state,
    actions,
    getters
}