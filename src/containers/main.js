import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import styles from './main-style';
import roomsArray from './main-rooms';
import '../style.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      show: '',
      infoOpen: false,
      location: 1,
      capacity: 1,
      rooms: roomsArray,
      selected: [],
      open: false,
      today,
      timeSlider: 16,
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
          <div key={time.time} style={styles.time}>
            {button}
          </div>
        );
      });
      return (
        <div>
          <div className="room-row" key={room.room} style={styles.roomRow}>
            <FlatButton
              label={room.room}
              style={styles.room}
              labelPosition="before"
              primary
              icon={<ExpandMore />}
              onTouchTap={(event) => { this.state.show = room.info.description; this.handleTouchTap(event); }}
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
                <MenuItem primaryText="Baker Berry Library" value={1} />
                <MenuItem primaryText="Feldberg Library" value={2} />
                <MenuItem primaryText="Mathews-Fuller Library" value={3} />
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
                <MenuItem primaryText="For any number of people" value={1} />
                <MenuItem primaryText="1 – 4 people" value={2} />
                <MenuItem primaryText="5 – 8 people" value={3} />
                <MenuItem primaryText="9 – 12 people" value={4} />
                <MenuItem primaryText="13+ people" value={5} />
              </DropDownMenu>
            </div>
            <div style={styles.specRow}>
              <div>Date </div>
              <DatePicker
                defaultDate={this.state.today}
                container="inline"
                mode="landscape"
                style={styles.datepicker}
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
              {this.state.show}
            </Paper>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
