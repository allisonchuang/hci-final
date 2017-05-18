import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green800 } from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Slider from 'material-ui/Slider';
import '../style.scss';

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
    height: 100,
    width: 100,
    margin: 0,
    textAlign: 'center',
    display: 'inline-block',
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      show: '',
      infoOpen: false,
      location: 1,
      capacity: 1,
      rooms: [
        {
          room: 'Berry 171a',
          info: { image: 'room', description: 'description 1', library: 'Baker-Berry', capacity: '4' },
          times: [
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
          ],
        },
        {
          room: 'Berry 171b',
          info: { image: 'room', description: 'description 2', library: 'Baker-Berry', capacity: '4' },
          times: [
            {
              time: '8am - 8:30am',
              available: true,
            },
            {
              time: '8:30am - 9am',
              available: true,
            },
            {
              time: '9:30am - 10am',
              available: false,
            },
            {
              time: '10:30am - 11am',
              available: true,
            },
          ],
        },
      ],
      selected: [],
      open: false,
      today,
      timeSlider: 0,
    };
  }

  handleActionTouchTap() {
    this.setState({
      open: false,
    });
    // use modal
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleRequestCloseInfo(event) {
    this.setState({
      infoOpen: false,
    });
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      infoOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  handleTimeSlider(event) {
    this.setState({
      timeSlider: event.target.value,
    });
  }

  renderRooms() {
    const roomgrid = this.state.rooms.map((room, i) => {
      // const roomId = this.state.rooms[i].room.replace(/\s+/g, '');
      const times = room.times.map((time) => {
        let button = '';
        if (time.available && (this.state.selected.length < 4)) {
          button = (<Checkbox
            label={time.time}
            onCheck={(event, isInputChecked) => {
              if (isInputChecked) {
                this.state.selected.push({
                  room: this.state.rooms[i].room,
                  time: time.time,
                });
                this.setState({
                  open: true,
                });
              } else if (!isInputChecked) {
                for (let x = 0; x < 4; x += 1) {
                  if (JSON.stringify(this.state.selected[x]) === JSON.stringify({
                    room: this.state.rooms[i].room,
                    time: time.time,
                  })) {
                    this.state.selected.splice(x, 1);
                    this.setState({
                      open: true,
                    });
                  }
                }
              }
            }}
          />);
        } else {
          let selected = false;
          for (let x = 0; x < 4; x += 1) {
            if (JSON.stringify(this.state.selected[x]) === JSON.stringify({
              room: this.state.rooms[i].room,
              time: time.time,
            })) {
              selected = true;
            }
          }
          if (selected === false) {
            // button = (<RaisedButton disabled />);
            button = (<Checkbox
              label={time.time}
              disabled
            />);
          } else {
            button = (<Checkbox
              label={time.time}
              onCheck={(event, isInputChecked) => {
                if (isInputChecked) {
                  this.state.selected.push({
                    room: this.state.rooms[i].room,
                    time: time.time,
                  });
                  this.setState({
                    open: true,
                  });
                } else if (!isInputChecked) {
                  for (let x = 0; x < 4; x += 1) {
                    if (JSON.stringify(this.state.selected[x]) === JSON.stringify({
                      room: this.state.rooms[i].room,
                      time: time.time,
                    })) {
                      this.state.selected.splice(x, 1);
                      this.setState({
                        open: true,
                      });
                    }
                  }
                }
              }}
            />);
          }
        }
        return (
          <div className="time-row" key={time.time}>
            {button}
          </div>
        );
      });
      return (
        <div>
          <div className="room-row" key={room.room} style={styles.roomRow}>
            <FlatButton
              label={room.room}
              labelPosition="before"
              primary
              icon={<ExpandMore />}
              onTouchTap={(event) => { this.state.show = room.info.description; this.handleTouchTap(event); }}
            />
            {times}
          </div>
        </div>
      );
    });
    return roomgrid;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={styles.specs}>
            <div style={styles.specRow}>
              <div>Location: </div>
              <DropDownMenu
                value={this.state.location}
                labelStyle={styles.label}
                onChange={(event, index, value) => { this.setState({ location: value }); }}
                style={styles.menu}
                iconStyle={styles.menuIcon}
                menuItemStyle={styles.menuItem}
                menuStyle={styles.dropDown}
                selectedMenuItemStyle={styles.selected}
                autoWidth={false}
              >
                <MenuItem primaryText="Baker Berry Library" value={1} />
                <MenuItem primaryText="Feldberg Library" value={2} />
                <MenuItem primaryText="Mathews-Fuller Library" value={3} />
              </DropDownMenu>
              <div style={styles.capacity}>Capacity: </div>
              <DropDownMenu
                value={this.state.capacity}
                labelStyle={styles.label}
                onChange={(event, index, value) => { this.setState({ capacity: value }); }}
                style={styles.menu}
                iconStyle={styles.menuIcon}
                menuItemStyle={styles.menuItem}
                menuStyle={styles.dropDown}
                selectedMenuItemStyle={styles.selected}
                autoWidth={false}
              >
                <MenuItem primaryText="For any number of people" value={1} />
                <MenuItem primaryText="1 – 4 people" value={2} />
                <MenuItem primaryText="5 – 8 people" value={3} />
                <MenuItem primaryText="9 – 12 people" value={4} />
                <MenuItem primaryText="13+ people" value={5} />
              </DropDownMenu>
            </div>
            <div style={styles.specRow}>
              <div>Date: </div>
              <DatePicker
                defaultDate={this.state.today}
                labelStyle={styles.label}
                container="inline"
                mode="landscape"
                style={styles.datepicker}
              />
            </div>
            <div style={styles.specRow}>
              <Slider
                min={0}
                max={48}
                step={1}
                style={{ width: 800 }}
                value={this.state.timeSlider}
                onChange={(event) => { this.handleTimeSlider(event); }}
              />
            </div>
          </div>
          <div>
            {this.renderRooms()}
          </div>
          <Snackbar
            open={this.state.open}
            message={`You've booked ${this.state.selected.length} time slots`}
            action="Submit"
            onActionTouchTap={this.handleActionTouchTap}
            onRequestClose={(event) => { this.handleRequestClose(); }}
          />
          <Popover
            open={this.state.infoOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={(event) => { this.handleRequestCloseInfo(event); }}
          >
            <Paper style={styles.roomInfo} zDepth={2} rounded={false}>
              {this.state.show}
            </Paper>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;