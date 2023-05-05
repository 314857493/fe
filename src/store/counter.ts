import { model } from '@modern-js/runtime/model';

export const countModel = model('count').define({
  state: {
    value: 1,
  },
  actions: {
    add(state) {
      state.value += 1;
    },
  },
});
