const initState = {
  users: [
    { id: 1, name: "dang" },
    { id: 2, name: "phuong" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((user) => {
        return user.id !== action.payload.id;
      });
      return {
        ...state,
        users,
      };
    case "ADD_USER":
      let id = Math.round(Math.random() * 10000);
      const newUser = {
        id: id,
        name: `randomUser: ${id}`,
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    default:
      return state;
  }
};
export default rootReducer;
