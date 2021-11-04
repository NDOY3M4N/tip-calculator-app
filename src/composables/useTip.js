import { ref, computed, reactive, toRefs } from "vue";
import checkValues from "../utils/checkValues";

const state = reactive({
  bill: null,
  tip: null,
  people: null,
  tipDefaultList: [5, 10, 15, 25, 50],
});

const useTip = () => {

  const btnReset = ref(null);
  const customTip = ref(null);

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
