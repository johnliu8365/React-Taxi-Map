export default function (state = null, action) {
	switch(action.type) {
		case 'DESTINATION_SELECTED':
			return action.payload;
	}
	return state;
}
