import { watch, computed, reactive, toRefs } from "vue";
import checkValues from "../lib/checkValues";
import gsap from "gsap";

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

  const setTip = (evt) => {
    const tipValue = +evt.target.value;

    if (tipValue <= 100) {
      state.tip = tipValue;
    }
  };

  const tipAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return (state.bill * (state.tip / 100)) / state.people;
  });

  const totalAmount = computed(() => {
    if (checkValues([state.bill, state.tip, state.people])) return 0;

    return state.bill / state.people + tipAmount.value;
  });

  const tweened = reactive({
    tip: tipAmount.value,
    totalPerPerson: totalAmount.value,
  });

  const computedTip = computed(() => tweened.tip);
  const computedTotal = computed(() => tweened.totalPerPerson);

  // Animate the reactive state
  watch([tipAmount, totalAmount], (newValues) => {
    gsap.to(tweened, {
      duration: 0.3,
      tip: newValues[0],
      totalPerPerson: newValues[1],
    });
  });

  return {
    ...toRefs(state),
    reset,
    computedTip,
    computedTotal,
    setTip,
  };
};

export default useTip;
