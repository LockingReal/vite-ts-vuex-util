<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
// import
import { useStore } from 'vuex';
import {State} from '../store';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props){
    const store = useStore<State>();
    const { state,getters } = store;
    console.log("ssdasdxs:",state.user.loading);
    console.log(getters['user/isLogin']);
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
