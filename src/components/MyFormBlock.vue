<template>
  <div>
    <div class="flex items-center justify-between">
      <label :for="labelId" class="text-neutral-400 font-bold">
        {{ labelText }}
      </label>
      <span v-show="state === 0" class="text-red-400 font-bold">
        Can't be zero
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelId: String,
    labelText: String,
    state: Number,
  },
};
</script>
