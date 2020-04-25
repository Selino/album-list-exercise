export default (state = { albums: [] }, action) => {
  switch (action.type) {
    case "SET":
      return { albums: action.albums }
    default:
      return state
  }
}
