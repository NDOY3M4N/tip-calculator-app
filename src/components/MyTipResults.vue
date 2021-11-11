<script setup>
import { onMounted, watch, ref } from "vue";
import useTip from "../composables/useTip";
import formatPrice from "../utils/formatPrice";
import checkValues from "../utils/checkValues";
import MyButton from "./MyButton.vue";

const { reset, computedTotal, computedTip } = useTip();
const btnReset = ref(null);

// Disable the reset button on first load
onMounted(() => {
  if (computedTip.value === 0 && computedTotal.value === 0)
    btnReset.value.$el.disabled = true;
});

watch([computedTip, computedTotal], (newValues) => {
  btnReset.value.$el.disabled = checkValues(newValues);
});

const resetResults = () => {
  reset();
  // Remove the focus styles on the reset button
  btnReset.value.$el.blur();
};
</script>

<template>
  <div
    class="px-4 py-7 bg-neutral-500 flex flex-col rounded-2xl md:px-10 md:py-12"
  >
    <div class="space-y-6 md:space-y-10">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-white font-bold md:text-lg">Tip Amount</h3>
          <span class="text-neutral-300 text-sm font-bold">/ person</span>
        </div>
        <div>
          <h2 class="text-primary text-3xl font-bold md:text-5xl">
            {{ formatPrice(computedTip) }}
          </h2>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-white font-bold md:text-lg">Total</h3>
          <span class="text-neutral-300 text-sm font-bold">/ person</span>
        </div>
        <div>
          <h2 class="text-primary text-3xl font-bold md:text-5xl">
            {{ formatPrice(computedTotal) }}
          </h2>
        </div>
      </div>
    </div>
    <div class="mt-9 lg:mt-auto">
      <MyButton variant="secondary" @click="resetResults" ref="btnReset">
        Reset
      </MyButton>
    </div>
  </div>
</template>
