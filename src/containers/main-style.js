import { green800 } from 'material-ui/styles/colors';

const styles = {
  menuIcon: {
    color: '#FFFFFF',
  },
  specs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  specRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  specCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    marginLeft: 20,
    width: 300,
    backgroundColor: '#f1f2f3',
  },
  dropDown: {
    padding: 0,
  },
  menuItem: {
    margin: 0,
  },
  datepicker: {
    marginLeft: 20,
    backgroundColor: '#f1f2f3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  room: {
    width: 200,
    flexShrink: 0,
  },
  times: {
    overflow: 'auto',
    display: 'flex',
    alignItems: 'top',
    flexDirection: 'row',
    marginRight: 50,
  },
  time: {
    fontSize: 13,
    flexShrink: 0,
  },
  selected: {
    color: green800,
  },
  label: {
    textAlign: 'center',
  },
  capacity: {
    marginLeft: 70,
  },
  roomRow: {
    marginTop: 30,
  },
  roomInfo: {
    width: 300,
    margin: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  roomImage: {
    width: 300,
  },
  timeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 13,
    width: 800,
    margin: 0,
    padding: 0,
  },
};

export default styles;
