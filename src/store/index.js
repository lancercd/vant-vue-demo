import { createStore } from "vuex";
import { TOKEN_KEY, USERNAME_KEY } from "@/constant/key";
import LocalStorageUtils from "@/utils/StorageUtils/LocalStorageUtils";

const state = {
    username: LocalStorageUtils.getItem(USERNAME_KEY),
    token: LocalStorageUtils.getItem(TOKEN_KEY)
};

const mutations = {
    setUser(state, data) {
        state.token= data[TOKEN_KEY];
        state.username = data.username;
        LocalStorageUtils.setItem(TOKEN_KEY, state.token);
        LocalStorageUtils.setItem(USERNAME_KEY, state.username)
    },
}

const store = createStore({
    state,
    mutations,
    actions: {

    },
    getters:{

    },
    modules: {

    }
})


export default store;
