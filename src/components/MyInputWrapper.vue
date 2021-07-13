<template>
  <div class="relative">
    <div class="absolute ml-4 left-0 inset-y-0 flex items-center justify-center">
      <img width="13" height="16" :src="iconInput" alt="Icon">
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
