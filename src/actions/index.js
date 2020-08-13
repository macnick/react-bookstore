const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  changeFilter,
  CHANGE_FILTER,
};
