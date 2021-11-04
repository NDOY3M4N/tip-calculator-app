<script>
import MyTipForm from "./MyTipForm.vue";
import MyTipResults from "./MyTipResults.vue";

export default {
  components: { MyTipForm, MyTipResults },
};
</script>

<template>
  <main
    class="
      mt-10
      p-8
      bg-white
      rounded-t-3xl
      grid
      gap-10
      lg:gap-12
      lg:grid-cols-2
      lg:rounded-b-3xl
    "
  >
    <MyTipForm />
    <MyTipResults />
  </main>
</template>
