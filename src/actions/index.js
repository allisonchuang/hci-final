
// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD_BOOKING: 'ADD_BOOKING',
};


export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

export function addBooking(booking) {
  return {
    type: ActionTypes.ADD_BOOKING,
    payload: {
      booking,
    },
  };
}
