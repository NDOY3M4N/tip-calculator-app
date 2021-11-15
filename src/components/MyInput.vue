<template>
  <input
    :value="state"
    @input="$emit('update-state', +$event.target.value)"
    :id="id"
    :placeholder="placeholder"
    :class="{ '!border-red-400': state === 0 }"
    type="number"
    min="1"
    class="
      px-4
      py-[5px]
      w-full
      bg-neutral-100
      rounded-md
      border-2 border-transparent
      placeholder-neutral-300
      text-neutral-500 text-2xl
      font-bold
      text-right
      focus:outline-none
      focus:border-primary
    "
  />
</template>

<script setup>
defineProps({
  placeholder: { type: String, default: "0" },
  id: { type: String, required: true },
  state: { type: [Number, null], required: true },
});

defineEmits(["update-state"]);
</script>
