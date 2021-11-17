import { watch, computed, reactive, readonly } from "vue";
import useTip from "./useTip";
import gsap from "gsap";

const useCounter = () => {
  const { tipAmount, totalAmount } = useTip();

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
    computedTip: readonly(computedTip),
    computedTotal: readonly(computedTotal),
  };
};

export default useCounter;
