<script>
import { ref, computed, onMounted, watch } from "vue";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyInputWrapper from "./MyInputWrapper.vue";
import MyFormBlock from "./MyFormBlock.vue";

export default {
  components: { MyButton, MyInput, MyInputWrapper, MyFormBlock },
  setup() {
    const bill = ref(null);
    const tip = ref(null);
    const people = ref(null);

    const btnReset = ref(null);
    const customTip = ref(null);

    const { format } = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const checkValue = (values) => {
      return values.some(
        (value) => value === null || value === "" || value === 0
      );
    };

    // Disable the reset button on first load
    onMounted(() => (btnReset.value.$el.disabled = true));

    // Remove the disable state on the reset button
    watch([bill, tip, people], (newValues) => {
      btnReset.value.$el.disabled = checkValue(newValues);
    });

    const tipAmount = computed(() => {
      if (checkValue([bill.value, tip.value, people.value])) return 0;

      return (bill.value * (tip.value / 100)) / people.value;
    });

    const totalAmount = computed(() => {
      if (checkValue([bill.value, tip.value, people.value])) return 0;

      return bill.value / people.value + tipAmount.value;
    });

    const reset = () => {
      bill.value = tip.value = people.value = null;
      // Clear the custom tip input
      customTip.value.$el.value = "";
      // Remove the focus style on the reset button
      btnReset.value.$el.blur();
    };

    const setTip = (evt) => {
      const tipValue = +evt.target.value;

      if (tipValue <= 100) {
        tip.value = tipValue;
      }
    };

    return {
      bill,
      tip,
      people,
      reset,
      tipAmount,
      totalAmount,
      setTip,
      btnReset,
      format,
      customTip,
    };
  },
};
</script>

<template>
  <main
    class="
      mt-10
      p-8
      bg-white
      rounded-t-3xl
      grid
      gap-10
      lg:gap-12
      lg:grid-cols-2
      lg:rounded-b-3xl
    "
  >
    <div class="space-y-8">
      <MyFormBlock labelId="bill_value" labelText="Bill" :state="bill">
        <MyInputWrapper class="mt-2" iconInput="IconDollar">
          <MyInput v-model.number="bill" id="bill_value" />
        </MyInputWrapper>
      </MyFormBlock>

      <MyFormBlock labelId="tip_value" labelText="Select Tip %" :state="tip">
        <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <MyButton
            variant="primary"
            v-for="tipValue in [5, 10, 15, 25, 50]"
            :key="tipValue"
            @click="tip = tipValue"
            :class="{ '!bg-primary !text-neutral-500': tipValue === tip }"
          >
            {{ tipValue }}%
          </MyButton>
          <MyInput
            ref="customTip"
            @input="setTip"
            id="tip_value"
            max="100"
            placeholder="Custom"
            :class="{ '!border-red-400': tip === 0 }"
            class="!text-center"
          />
        </div>
      </MyFormBlock>

      <MyFormBlock
        labelId="people_value"
        labelText="Number of People"
        :state="people"
      >
        <MyInputWrapper class="mt-2" iconInput="IconPerson">
          <MyInput v-model.number="people" id="people_value" />
        </MyInputWrapper>
      </MyFormBlock>
    </div>
    <div
      class="
        px-4
        py-7
        bg-neutral-500
        flex flex-col
        rounded-2xl
        md:px-10
        md:py-12
      "
    >
      <div class="space-y-6 md:space-y-10">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-white font-bold md:text-lg">Tip Amount</h3>
            <span class="text-neutral-300 text-sm font-bold">/ person</span>
          </div>
          <div>
            <h2 class="text-primary text-3xl font-bold md:text-5xl">
              {{ format(tipAmount) }}
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
              {{ format(totalAmount) }}
            </h2>
          </div>
        </div>
      </div>
      <div class="mt-9 lg:mt-auto">
        <MyButton variant="secondary" @click="reset" ref="btnReset">
          Reset
        </MyButton>
      </div>
    </div>
  </main>
</template>
