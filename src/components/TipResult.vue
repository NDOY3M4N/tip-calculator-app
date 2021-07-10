<template>
  <div class="px-4 py-7 bg-neutral-500 flex flex-col rounded-2xl md:px-10 md:py-12">
    <div class="space-y-6 md:space-y-10">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-white font-bold md:text-lg">Tip Amount</h3>
          <span class="text-neutral-300 text-sm font-bold">/ person</span>
        </div>
        <div>
          <h2 class="text-primary text-3xl font-bold md:text-5xl">{{ format(tipAmount) }}</h2>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-white font-bold md:text-lg">Total</h3>
          <span class="text-neutral-300 text-sm font-bold">/ person</span>
        </div>
        <div><h2 class="text-primary text-3xl font-bold md:text-5xl">{{ format(totalAmount) }}</h2></div>
      </div>
    </div>
    <div class="mt-9 lg:mt-auto">
      <MyButton
        variant="secondary"
        @click="$emit('reset-tip')"
        ref="btnReset"
      >
        Reset
      </MyButton>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import MyButton from "./MyButton.vue"

export default {
  components: { MyButton },
  props: {
    tipAmount: Number,
    totalAmount: Number
  },
  setup() {
    const btnReset = ref(null)

    const { format } = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    // Use ref on component
    // https://stackoverflow.com/questions/67033933/cant-use-template-ref-on-component-in-vue-3-composition-api
    // Disable the reset button on first load
    onMounted(() => btnReset.value.$el.disabled = true)


    // Remove the disable state on the reset button
    // watch([bill, tip, people], (newValues) => {
      // btnReset.value.$el.disabled = checkBeforeCompute(newValues)
    // })

    return { format, btnReset }
  }
}
</script>
