<template>
  <canvas ref="webgl"></canvas>
</template>

<script>
import Experience from "../Experience/Experience.js";
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  components: {},

  setup() {
    const webgl = ref(null);
    onMounted(() => {
      if (webgl.value) new Experience(webgl.value);
    });
    return { webgl };
  },
};
</script>
<style>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
