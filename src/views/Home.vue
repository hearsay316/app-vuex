<template>
  <div class="home">
    <div><span>计算器</span> {{ count }}</div>
    <div><span>double</span> {{ double }}</div>
    <button @click="$store.state.count++">错误修改</button>
    <button @click="$store.commit('add', 1)">z正确修改</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    console.log(store, "store");
    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
    };
  },
};
</script>
