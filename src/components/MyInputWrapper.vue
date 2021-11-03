<template>
  <div class="relative">
    <div
      class="absolute ml-4 left-0 inset-y-0 flex items-center justify-center"
    >
      <component :is="iconInput"></component>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import IconPerson from "../assets/icon-person.svg";
import IconDollar from "../assets/icon-dollar.svg";

export default {
  components: { IconPerson, IconDollar },
  props: {
    iconInput: {
      type: String,
      required: true,
      validator: (val) => ["IconDollar", "IconPerson"].includes(val),
    },
  },
};
</script>
