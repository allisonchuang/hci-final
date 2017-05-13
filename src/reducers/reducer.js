import { ActionTypes } from '../actions';

const initialState = {
  all: [
    [{ date: 'Wed, April 26', room: 'Berry 171A', time: '7:30-8:00pm' }, { date: 'Wed, April 26', room: 'Berry 171A', time: '8:00-8:30pm' }],
    [{ date: 'Thurs, April 27', room: 'Berry 171B', time: '5:00-5:30pm' }, { date: 'Thurs, April 27', room: 'Berry 171B', time: '5:30-6:00pm' }],
  ],
  booking: [{ date: 'Wed, April 26', room: 'Berry 171A' },
    { date: 'Thurs, April 27', room: 'Berry 171A' }],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKING:
      return state.all.push(action.payload.booking);
    default:
      return state;
  }
};

export default Reducer;
