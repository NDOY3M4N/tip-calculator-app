import { ref, computed, onMounted, watch, reactive, toRefs } from "vue";
import checkValues from "../utils/checkValues";

const useTip = () => {
  const state = reactive({
    bill: null,
    tip: null,
    people: null,
    tipDefaultList: [5, 10, 15, 25, 50],
  });

  const btnReset = ref(null);
  const customTip = ref(null);

  // Disable the reset button on first load
  onMounted(() => (btnReset.value.$el.disabled = true));

  // Remove the disable state on the reset button
  watch(
    () => [state.bill, state.tip, state.people],
    (newValues) => (btnReset.value.$el.disabled = checkValues(newValues))
  );

  const tipAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return (state.bill * (state.tip / 100)) / state.people;
  });

  const totalAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return state.bill / state.people + tipAmount.value;
  });

  const reset = () => {
    state.bill = state.tip = state.people = null;
    // Clear the custom tip input
    customTip.value.$el.value = "";
    // Remove the focus style on the reset button
    btnReset.value.$el.blur();
  };

  const setTip = (evt) => {
    const tipValue = +evt.target.value;

    if (tipValue <= 100) {
      state.tip = tipValue;
    }
  };

  return {
    ...toRefs(state),
    reset,
    tipAmount,
    totalAmount,
    setTip,
    btnReset,
    customTip,
  };
}

export default useTip
