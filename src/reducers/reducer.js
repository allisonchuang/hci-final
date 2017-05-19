import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  booking: [{ date: 'Wed, April 26', room: 'Berry 171A' },
    { date: 'Thurs, April 27', room: 'Berry 171A' }],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKING:
      return Object.assign({}, state, {
        all: [...state.all, action.payload.booking],
      });
    case ActionTypes.DELETE_BOOKING:
      action.payload.bookings.splice(action.payload.index, 1);
      return Object.assign({}, state, {
        all: action.payload.bookings,
      });
    default:
      return state;
  }
};

export default Reducer;
