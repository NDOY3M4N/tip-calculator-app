<template>
  <div class="min-h-screen bg-neutral-200 flex items-center justify-center lg:py-10">
    <div class="mt-[50px] max-w-5xl mx-auto lg:mt-0">
      <header class="flex items-center justify-center">
        <img src="./assets/logo.svg" alt="Logo">
      </header>
      <main class="mt-10 p-8 bg-white rounded-t-3xl max-w-xl grid gap-10 lg:max-w-full lg:gap-12 lg:grid-cols-2 lg:rounded-b-3xl">
        <TipNumbers />
        <TipResult :tipAmount="tipAmount" :totalAmount="totalAmount" @reset-tip="reset"/>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import TipNumbers from './components/TipNumbers.vue'
import TipResult from './components/TipResult.vue'

export default {
  components: { TipNumbers, TipResult },
  setup() {
    const bill = ref(null)
    const tip = ref(null)
    const people = ref(null)

    const checkBeforeCompute = (operands) => {
      return operands.some(operand => operand === null || operand === '' || operand === 0)
    }

    const tipAmount = computed(() => {
      if (checkBeforeCompute([bill.value, tip.value, people.value])) return 0

      return ((bill.value * (tip.value / 100)) / people.value)
    })

    const totalAmount = computed(() => {
      if (checkBeforeCompute([bill.value, tip.value, people.value])) return 0

      return (bill.value / people.value) + tipAmount.value
    })

    const reset = () => {
      bill.value = tip.value = people.value = null
      // btnReset.value.$el.blur()
    }

    const setTip = evt => {
      const tipValue = +evt.target.value

      if (tipValue <= 100) {
        tip.value = tipValue
      }
    }

    return { bill, tip, people, reset, tipAmount, totalAmount, setTip }
  },
}
</script>
