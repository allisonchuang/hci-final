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
import Dialog from 'material-ui/Dialog';
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
  times: {
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'top',
    flexDirection: 'row',
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
    margin: 0,
    width: 300,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  roomImage: {
    width: 300,
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
          info: { image: '/images/171a.jpg', description: 'description 1', library: 'Baker-Berry', capacity: '4' },
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
      modalOpen: false,
    };
  }

  handleActionTouchTap() {
    this.setState({
      open: false,
      modalOpen: true,
    });
  }

  handleRequestClose() {
    if (this.state.selected.length > 0) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
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

  handleTimeSlider(event, value) {
    this.setState({
      timeSlider: value,
    });
  }

  renderRooms() {
    const roomgrid = this.state.rooms.map((room, i) => {
      // const roomId = this.state.rooms[i].room.replace(/\s+/g, '');
      const times = room.times.map((time, j) => {
        let button = '';
        if (this.state.timeSlider <= j) {
          if (time.available && (this.state.selected.length < 4)) {
            button = (
              <Checkbox
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
              />
            );
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
              button = (
                <Checkbox
                  label={time.time}
                  disabled
                />
              );
            } else {
              button = (
                <Checkbox
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
                />
              );
            }
          }
        }
        return (
          <div key={time.time}>
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
              onTouchTap={(event) => { this.state.show = room.info; this.handleTouchTap(event); }}
            />
            <div style={styles.times}>
              {times}
            </div>
          </div>
        </div>
      );
    });
    return roomgrid;
  }

  render() {
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={(event) => {
          this.setState({
            modalOpen: false,
          });
        }}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={(event) => {
          this.setState({
            modalOpen: false,
          });
        }}
      />,
    ];

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
                onChange={(event, value) => { this.handleTimeSlider(event, value); }}
              />
            </div>
          </div>
          <div>
            {this.renderRooms()}
          </div>
          <Snackbar
            open={this.state.open && (this.state.selected.length > 0)}
            message={`You've booked ${this.state.selected.length} time slots`}
            action="Submit"
            onActionTouchTap={() => { this.handleActionTouchTap(); }}
            onRequestClose={(event) => { this.handleRequestClose(); }}
          />
          <Dialog
            title="Confirm your booking"
            actions={modalActions}
            modal
            open={this.state.modalOpen}
          >
            You have booked {this.state.selected.length} session(s).
          </Dialog>
          <Popover
            open={this.state.infoOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={(event) => { this.handleRequestCloseInfo(event); }}
          >
            <Paper style={styles.roomInfo} zDepth={2} rounded={false}>
              <img src={`${this.state.show.image}`} style={styles.roomImage} alt="hello" />
              {this.state.show.description}
            </Paper>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
