<template>
  <button
    :class="classObject"
    class="
      w-full h-12
      rounded-md
      text-xl font-bold
      uppercase leading-none
      transition-colors duration-300
      disabled:bg-primary/30
      disabled:text-neutral-500/40
      disabled:cursor-not-allowed
      focus:outline-none
      focus:ring focus:ring-primary focus:ring-offset-2
    ">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue"

export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const classObject = computed(() => {
      return {
        'bg-neutral-500 text-white hover:bg-primary hover:text-neutral-500': props.variant === 'primary',
        'bg-primary text-neutral-500 hover:bg-[#9EE7DE] focus:ring-offset-neutral-500': props.variant === 'secondary'
      }
    }) 

    return { classObject }
  },
}
</script>
