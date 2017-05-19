export const ActionTypes = {
  ADD_BOOKING: 'ADD_BOOKING',
};

export function addBooking(booking) {
  return {
    type: ActionTypes.ADD_BOOKING,
    payload: {
      booking,
    },
  };
}
