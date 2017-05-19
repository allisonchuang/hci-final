const roomsArray = [
  {
    room: 'Berry 171a',
    info: {
      image: 'room',
      description: 'description 1',
      library: 'Baker-Berry',
      capacity: '6',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 171b',
    info: {
      image: 'room',
      description: 'description 2',
      library: 'Baker-Berry',
      capacity: '6',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 171C',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '6',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 178K',
    info: {
      image: 'room',
      description: 'description 4',
      library: 'Baker-Berry',
      capacity: '6',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 367',
    info: {
      image: 'room',
      description: 'description 5',
      library: 'Baker-Berry',
      capacity: '4',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 368',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '8',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 405',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '4',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Berry 406',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '4',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Novack 72',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '4',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
  {
    room: 'Novack 73',
    info: {
      image: 'room',
      description: 'description 3',
      library: 'Baker-Berry',
      capacity: '4',
    },
    times: [
      {
        time: '12am - 12:30am',
        available: true,
        selected: false,
      },
      {
        time: '12:30am - 1am',
        available: true,
        selected: false,
      },
      {
        time: '1am - 1:30am',
        available: true,
        selected: false,
      },
      {
        time: '1:30am - 2am',
        available: true,
        selected: false,
      },
      {
        time: '2am - 2:30am',
        available: true,
        selected: false,
      },
      {
        time: '2:30am - 3am',
        available: true,
        selected: false,
      },
      {
        time: '3am - 3:30am',
        available: true,
        selected: false,
      },
      {
        time: '3:30am - 4am',
        available: true,
        selected: false,
      },
      {
        time: '4am - 4:30am',
        available: true,
        selected: false,
      },
      {
        time: '4:30am - 5am',
        available: true,
        selected: false,
      },
      {
        time: '5am - 5:30am',
        available: true,
        selected: false,
      },
      {
        time: '5:30am - 6am',
        available: true,
        selected: false,
      },
      {
        time: '6am - 6:30am',
        available: true,
        selected: false,
      },
      {
        time: '6:30am - 7am',
        available: true,
        selected: false,
      },
      {
        time: '7am - 7:30am',
        available: true,
        selected: false,
      },
      {
        time: '7:30am - 8am',
        available: true,
        selected: false,
      },
      {
        time: '8am - 8:30am',
        available: true,
        selected: false,
      },
      {
        time: '8:30am - 9am',
        available: true,
        selected: false,
      },
      {
        time: '9:30am - 10am',
        available: false,
        selected: false,
      },
      {
        time: '10:30am - 11am',
        available: true,
        selected: false,
      },
      {
        time: '11am - 11:30am',
        available: true,
        selected: false,
      },
      {
        time: '11:30am - 12pm',
        available: true,
        selected: false,
      },
      {
        time: '12pm - 12:30pm',
        available: true,
        selected: false,
      },
      {
        time: '12:30pm - 1pm',
        available: true,
        selected: false,
      },
      {
        time: '1pm - 1:30pm',
        available: true,
        selected: false,
      },
      {
        time: '1:30pm - 2pm',
        available: true,
        selected: false,
      },
      {
        time: '2pm - 2:30pm',
        available: true,
        selected: false,
      },
      {
        time: '2:30pm - 3pm',
        available: true,
        selected: false,
      },
      {
        time: '3pm - 3:30pm',
        available: true,
        selected: false,
      },
      {
        time: '3:30pm - 4pm',
        available: true,
        selected: false,
      },
      {
        time: '4pm - 4:30pm',
        available: true,
        selected: false,
      },
      {
        time: '4:30pm - 5pm',
        available: true,
        selected: false,
      },
      {
        time: '5pm - 5:30pm',
        available: true,
        selected: false,
      },
      {
        time: '5:30pm - 6pm',
        available: true,
        selected: false,
      },
      {
        time: '6pm - 6:30pm',
        available: true,
        selected: false,
      },
      {
        time: '6:30pm - 7pm',
        available: true,
        selected: false,
      },
      {
        time: '7:30pm - 8pm',
        available: true,
        selected: false,
      },
      {
        time: '8:30pm - 9pm',
        available: true,
        selected: false,
      },
      {
        time: '9pm - 9:30pm',
        available: true,
        selected: false,
      },
      {
        time: '9:30pm - 10pm',
        available: true,
        selected: false,
      },
      {
        time: '10pm - 10:30pm',
        available: true,
        selected: false,
      },
      {
        time: '10:30pm - 11pm',
        available: true,
        selected: false,
      },
      {
        time: '11:30pm - 12am',
        available: true,
        selected: false,
      },
    ],
  },
];

export default roomsArray;
