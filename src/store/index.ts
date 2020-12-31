import { createStore } from 'vuex';
import { userState } from './modules/user/store';
import { modules } from './modules';
export interface State {
    user:userState;
}

export default createStore<State>({
    modules
});