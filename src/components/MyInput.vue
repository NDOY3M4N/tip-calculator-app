<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', +$event.target.value)"
    :id="id"
    :placeholder="placeholder"
    :class="{ '!border-red-400': modelValue === 0 }"
    type="number"
    min="1"
    class="px-4 py-[5px] w-full bg-neutral-100 rounded-md border-2 border-transparent placeholder-neutral-300 text-neutral-500 text-2xl font-bold text-right focus:outline-none focus:border-primary">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '0'
    },
    id: String,
    modelValue: Number
  },
  emits: ['update:modelValue']
}
</script>
