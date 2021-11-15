<script setup>
import useTip from "../composables/useTip";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyInputWrapper from "./MyInputWrapper.vue";
import MyFormBlock from "./MyFormBlock.vue";

const { bill, tip, people, tipDefaultList, setTip, setBill, setPeople } =
  useTip();
</script>

<template>
  <div class="space-y-8">
    <MyFormBlock labelId="bill_value" labelText="Bill" :state="bill">
      <MyInputWrapper class="mt-2" iconInput="IconDollar">
        <MyInput id="bill_value" :state="bill" @update-state="setBill" />
      </MyInputWrapper>
    </MyFormBlock>

    <MyFormBlock labelId="tip_value" labelText="Select Tip %" :state="tip">
      <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <MyButton
          variant="primary"
          v-for="tipValue in tipDefaultList"
          :key="tipValue"
          @click="setTip(tipValue)"
          :class="{ '!bg-primary !text-neutral-500': tipValue === tip }"
        >
          {{ tipValue }}%
        </MyButton>
        <MyInput
          :state="tip"
          @update-state="setTip"
          id="tip_value"
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
        <MyInput id="people_value" :state="people" @update-state="setPeople" />
      </MyInputWrapper>
    </MyFormBlock>
  </div>
</template>
