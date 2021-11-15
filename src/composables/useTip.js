import { computed, reactive, toRefs, readonly } from "vue";
import checkValues from "../lib/checkValues";

const state = reactive({
  bill: null,
  tip: null,
  people: null,
  tipDefaultList: [5, 10, 15, 25, 50],
});

const useTip = () => {
  const reset = () => {
    state.bill = state.tip = state.people = null;
  };

  const setBill = (billValue) => (state.bill = billValue);
  const setTip = (tipValue) => (state.tip = tipValue);
  const setPeople = (peopleValue) => (state.people = peopleValue);

  const tipAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return (state.bill * (state.tip / 100)) / state.people;
  });

  const totalAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return state.bill / state.people + tipAmount.value;
  });

  return {
    ...toRefs(readonly(state)),
    reset,
    tipAmount,
    totalAmount,
    setBill,
    setTip,
    setPeople,
  };
};

export default useTip;
