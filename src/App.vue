<template>
  <div ref="appli" class="min-h-screen bg-neutral-200 flex items-center justify-center lg:py-10">
    <div class="mt-[50px] max-w-5xl mx-auto lg:mt-0">
      <header class="flex items-center justify-center">
        <img src="./assets/logo.svg" alt="Logo">
      </header>
      <main class="mt-10 p-8 bg-white rounded-t-3xl max-w-xl grid gap-10 lg:max-w-full lg:gap-12 lg:grid-cols-2 lg:rounded-b-3xl">
        <div class="space-y-8">
          <div>
            <div class="flex items-center justify-between">
              <label for="bill" class="text-neutral-400 font-bold">Bill</label>
              <span v-show="bill === 0" class="text-red-400 font-bold">Can't be zero</span>
            </div>
            <div class="mt-2 relative inline-block w-full">
              <div class="absolute ml-4 left-0 inset-y-0 flex items-center justify-center">
                <img src="./assets/icon-dollar.svg" alt="Dollar Icon">
              </div>
              <input
                v-model.number="bill"
                type="number"
                id="bill"
                min="0"
                placeholder="0"
                :class="{ '!border-red-400': bill === 0 }"
                class="px-4 py-[5px] w-full bg-neutral-100 rounded-md border-2 border-transparent placeholder-neutral-300 text-neutral-500 text-2xl font-bold text-right focus:outline-none focus:border-primary">
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="tip" class="text-neutral-400 font-bold">Select Tip %</label>
              <span v-show="tip === 0" class="text-red-400 font-bold">Can't be zero</span>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <button
                v-for="tipValue in [5, 10, 15, 25, 50]" :key="tipValue"
                @click="tip = tipValue"
                :class="{ '!bg-primary !text-neutral-500': tipValue === tip }"
                class="px-4 h-12 w-full rounded-md bg-neutral-500 text-white text-2xl font-bold leading-none hover:bg-primary hover:text-neutral-500 focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2"
                >{{ tipValue }}%
              </button>
              <input
                type="number"
                @input="setTip"
                min="1"
                max="100"
                required
                placeholder="Custom"
                :class="{ '!border-red-400': tip === 0 }"
                class="px-4 h-12 w-full bg-neutral-100 rounded-md border-2 border-transparent placeholder-neutral-300 text-neutral-500 text-2xl font-bold text-center focus:outline-none focus:border-primary" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="people" class="text-neutral-400 font-bold">Number of People</label>
              <span v-show="people === 0" class="text-red-400 font-bold">Can't be zero</span>
            </div>
            <div class="mt-2 relative inline-block w-full">
              <div class="absolute ml-4 left-0 inset-y-0 flex items-center justify-center">
                <img src="./assets/icon-person.svg" alt="Person Icon">
              </div>
              <input
                v-model.number="people"
                type="number"
                id="people"
                min="1"
                placeholder="0"
                :class="{'!border-red-400': (people === 0)}"
                class="px-4 py-[5px] w-full bg-neutral-100 rounded-md border-2 border-transparent placeholder-neutral-300 text-neutral-500 text-2xl font-bold text-right focus:outline-none focus:border-primary">
            </div>
          </div>
        </div>
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
            <button
              ref="btnReset"
              @click="reset"
              class="w-full py-3 rounded-md bg-primary text-neutral-500 text-xl font-bold uppercase leading-none transition-colors duration-300 hover:bg-[#9EE7DE] disabled:bg-primary/30 disabled:text-neutral-500/40 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-500">Reset</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'

export default {
  setup() {
    const btnReset = ref(null)

    const bill = ref(null)
    const tip = ref(null)
    const people = ref(null)

    const { format } = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

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
      btnReset.value.blur()
    }

    const setTip = evt => {
      const tipValue = +evt.target.value

      if (tipValue <= 100) {
        tip.value = tipValue
      }
    }

    // Disable the reset button on first load
    onMounted(() => btnReset.value.disabled = true)

    // Remove the disable state on the reset button
    watch([bill, tip, people], (newValues) => {
      btnReset.value.disabled = checkBeforeCompute(newValues)
    })

    return { btnReset, bill, tip, people, format, reset, tipAmount, totalAmount, setTip }
  },
}
</script>
