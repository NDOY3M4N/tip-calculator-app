<template>
  <button
    :class="dynamicStyles"
    class="
      py-3
      w-full
      rounded-md
      text-xl
      font-bold
      uppercase
      duration-300
      focus:outline-none
      focus:ring focus:ring-primary focus:ring-offset-2
      hover:bg-[#9EE7DE]
    "
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    variant: {
      type: String,
      required: true,
      validator: (val) => ["primary", "secondary"].includes(val),
    },
  },
  setup(props) {
    const dynamicStyles = computed(() => {
      return {
        "bg-neutral-500 text-white hover:text-neutral-500":
          props.variant === "primary",
        "bg-primary text-neutral-500  focus:ring-offset-neutral-500 disabled:bg-primary/30 disabled:text-neutral-500/40 disabled:cursor-not-allowed":
          props.variant === "secondary",
      };
    });

    return { dynamicStyles };
  },
};
</script>
