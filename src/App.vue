

<template>
  <div class="maindiv">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      left_arrow: false,
    };
  },
 
 
};
</script>

<style   scoped>
.van-nav-bar{
  background-color: lightblue;
}
.maindiv{
  height: 100%;

}
</style>