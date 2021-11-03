<template>
  <div class="min-h-screen bg-neutral-200 grid place-content-center lg:py-11">
    <div class="mt-12 w-full max-w-xl lg:mt-0 lg:max-w-5xl">
      <MyHeader />
      <MyTip />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTip from "./components/MyTip.vue";

export default {
  components: { MyHeader, MyTip },
};
</script>
