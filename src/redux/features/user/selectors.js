export const selectUsers = (state) => state.user;
export const selectuserIds = (state) => selectUsers(state).ids;
export const selectUser = (state, userId) =>
  selectUsers(state).entities[userId];
