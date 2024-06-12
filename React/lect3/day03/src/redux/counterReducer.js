export function counterReducer(state = { count: 40 }, action) {
	console.log(action);
	if (action.type === "INCREASE")
		return { count: state.count + action.payload };
	if (action.type === "DECREASE")
		return { count: state.count - action.payload };
	return state;
}
