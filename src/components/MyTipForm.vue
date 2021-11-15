<script setup>
import useTip from "../composables/useTip";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyInputWrapper from "./MyInputWrapper.vue";
import MyFormBlock from "./MyFormBlock.vue";

const { bill, tip, people, tipDefaultList, setTip } = useTip();
</script>

<template>
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
          v-model.number="tip"
          id="tip_value"
          max="100"
          placeholder="Custom"
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
</template>
