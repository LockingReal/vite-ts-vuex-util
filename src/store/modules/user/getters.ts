import { userState } from "./store";

const moduleGetters = {
    isLogin: (state: userState): string => {
        return `${state.loading}`;
    }
}

export default moduleGetters;