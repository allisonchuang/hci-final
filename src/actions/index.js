export const ActionTypes = {
  ADD_BOOKING: 'ADD_BOOKING',
  DELETE_BOOKING: 'DELETE_BOOKING',
};

export function addBooking(booking) {
  return {
    type: ActionTypes.ADD_BOOKING,
    payload: {
      booking,
    },
  };
}

export function deleteBooking(index, bookings) {
  return {
    type: ActionTypes.DELETE_BOOKING,
    payload: {
      bookings,
      index,
    },
  };
}
