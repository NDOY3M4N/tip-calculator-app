<script>
import useTip from "../composables/useTip";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyInputWrapper from "./MyInputWrapper.vue";
import MyFormBlock from "./MyFormBlock.vue";

export default {
  components: { MyButton, MyInput, MyInputWrapper, MyFormBlock },
  setup() {
    return { ...useTip() };
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
            v-for="tipValue in tipDefaultList"
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
              {{ formatPrice(tipAmount) }}
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
              {{ formatPrice(totalAmount) }}
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
