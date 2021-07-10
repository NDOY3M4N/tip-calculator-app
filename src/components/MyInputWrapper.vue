<template>
  <div class="relative inline-block w-full">
    <div class="absolute ml-4 left-0 inset-y-0 flex items-center justify-center">
      <img :src="iconInput" alt="Icon">
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconInput: String
  },
}
</script>
