import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import styles from './main-style';
import roomsArray from './main-rooms';
import { addBooking } from '../actions';
import '../style.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      show: '',
      infoOpen: false,
      location: -1,
      capacity: -1,
      rooms: roomsArray,
      selected: [],
      open: false,
      today,
      timeSlider: 16,
      modalOpen: false,
      floor: 1,
    };
    this.formatDate = this.formatDate.bind(this);
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

  formatDate() {
    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    const month = new Array(12);
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'Jun';
    month[6] = 'Jul';
    month[7] = 'Aug';
    month[8] = 'Sep';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';
    const date = this.state.today;
    return `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;
  }

  renderRooms() {
    const today = this.formatDate(this.state.today);
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
                      date: today,
                      room: this.state.rooms[i].room,
                      time: time.time,
                    });
                    this.setState({
                      open: true,
                    });
                  } else if (!isInputChecked) {
                    for (let x = 0; x < 4; x += 1) {
                      if (JSON.stringify(this.state.selected[x]) === JSON.stringify({
                        date: today,
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
                date: today,
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
                        date: today,
                        room: this.state.rooms[i].room,
                        time: time.time,
                      });
                      this.setState({
                        open: true,
                      });
                    } else if (!isInputChecked) {
                      for (let x = 0; x < 4; x += 1) {
                        if (JSON.stringify(this.state.selected[x]) === JSON.stringify({
                          date: today,
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
          <div key={time.time} style={styles.time}>
            {button}
          </div>
        );
      });

      if (((this.state.floor === -1)
          || (this.state.floor === room.info.floor))
          && ((this.state.capacity === -1)
          || (this.state.capacity < room.info.capacity))
          && ((this.state.location === -1)
          || (this.state.location === room.info.library))) {
        return (
          <div>
            <div className="room-row" key={room.room} style={styles.roomRow}>
              <FlatButton
                label={room.room}
                style={styles.room}
                labelPosition="before"
                primary
                icon={<ActionInfo />}
                onTouchTap={(event) => { this.state.show = room.info; this.handleTouchTap(event); }}
              />
              <div style={styles.times}>
                {times}
              </div>

            </div>
          </div>
        );
      } else {
        return (<div />);
      }
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
            open: true,
          });
        }}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={(event) => {
          const bookings = [];
          for (let i = 0; i < this.state.selected.length; i += 1) {
            bookings.push(this.state.selected[i]);
          }
          this.props.add(bookings);
          this.setState({
            modalOpen: false,
          });
          this.forceUpdate();
        }}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div>
          <div style={styles.specs}>
            <div style={styles.specRow}>
              <div>Location </div>
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
                <MenuItem primaryText="All Libraries" value={-1} />
                <MenuItem primaryText="Baker-Berry Library" value={'Baker-Berry'} />
                <MenuItem primaryText="Feldberg Library" value={'Feldberg'} />
                <MenuItem primaryText="Matthews-Fuller Library" value={'Matthews-Fuller'} />
              </DropDownMenu>
              <div style={styles.capacity}>Capacity </div>
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
                <MenuItem primaryText="For any number of people" value={-1} />
                <MenuItem primaryText="2+ people" value={2} />
                <MenuItem primaryText="5+ people" value={5} />
                <MenuItem primaryText="7+ people" value={7} />
              </DropDownMenu>
            </div>
            <div style={styles.specRow}>
              <div>Date </div>
              <DatePicker
                defaultDate={this.state.today}
                container="inline"
                mode="landscape"
                style={styles.datepicker}
                textFieldStyle={styles.dateText}
              />
            </div>
            <div style={styles.specCol}>
              <div>Start Time </div>
              <div style={styles.timeLabels}>
                <div>
                  12am
                </div>
                <div>
                  4am
                </div>
                <div>
                  8am
                </div>
                <div>
                  12pm
                </div>
                <div>
                  4pm
                </div>
                <div>
                  8pm
                </div>
                <div>
                  12am
                </div>
              </div>
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
            <div style={styles.floors}>
              <div>Current Floor </div>
              <DropDownMenu style={styles.floorDropdown} value={this.state.floor} selectedMenuItemStyle={styles.chosenFloor} onChange={(event, index, value) => {
                this.setState({
                  floor: value,
                });
              }}
              >
                <MenuItem value={-1} primaryText="All" />
                <MenuItem value={0} primaryText="Ground" />
                <MenuItem value={1} primaryText="First" />
                <MenuItem value={2} primaryText="Second" />
                <MenuItem value={3} primaryText="Third" />
                <MenuItem value={4} primaryText="Fourth" />
              </DropDownMenu>
            </div>
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

const mapDispatchToProps = dispatch => (
  {
    add: booking => dispatch(addBooking(booking)),
  }
);

export default withRouter(connect(null, mapDispatchToProps)(Main));
