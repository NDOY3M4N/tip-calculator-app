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

<script setup>
defineProps({
  labelId: { type: String, required: true },
  labelText: { type: String, required: true },
  state: { type: [Number, null], required: true },
});
</script>
