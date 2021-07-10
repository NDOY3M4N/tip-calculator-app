<template>
  <div class="space-y-8">
    <MyFormBlock labelId="bill_value" labelText="Bill" :state="bill">
      <MyInputWrapper class="mt-2" iconInput="/icon-dollar.svg">
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
          :class="{'!bg-primary !text-neutral-500': tipValue === tip}"
        >
          {{ tipValue }}%
        </MyButton>
        <MyInput
          @input="setTip"
          id="tip_value" max="100" placeholder="Custom"
          :class="{ '!border-red-400': tip === 0 }"
          class="!text-center"/>
      </div>
    </MyFormBlock>

    <MyFormBlock labelId="people_value" labelText="Number of People" :state="people">
      <MyInputWrapper class="mt-2" iconInput="/icon-person.svg">
        <MyInput v-model.number="people" id="people_value" />
      </MyInputWrapper>
    </MyFormBlock>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
import MyInputWrapper from './MyInputWrapper.vue'
import MyFormBlock from './MyFormBlock.vue'

export default {
  components: { MyButton, MyInput, MyInputWrapper, MyFormBlock },
}
</script>
