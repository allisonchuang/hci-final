import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { green500, white } from 'material-ui/styles/colors';
import List from 'material-ui/List/List';
import Divider from 'material-ui/Divider';
import ListItem from 'material-ui/List/ListItem';

const styles = {
  selectedItem: {
    color: green500,
  },
  customWidth: {
    width: 210,
    padding: 0,
    marginTop: -15,
  },
  menuItem: {
    marginTop: -20,
    marginBottom: -20,
    padding: 0,
  },
  listItem: {
    marginTop: 0,
    fontSize: 15,
  },
  divider: {
    marginLeft: 0,
    width: 220,
  },
  list: {
    marginTop: -15,
  },
  xButton: {
    marginTop: -12,
    marginLeft: -12,
  },
  iconClick: {
    marginTop: -10,
    marginLeft: -20,
  },
  iconX: {
    marginTop: 0,
    marginLeft: 0,
  },
  bookingRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

class Bookings extends Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, value: 1 };
    this.mapBookings = this.mapBookings.bind(this);
    this.mapAllBookings = this.mapAllBookings.bind(this);
  }

  mapBookings(books) {
    let bookings = this.props.bookings;
    bookings = books.map((booking) => {
      const string = `${booking.time} (${booking.room})`;
      return (
        <div className="post-layout">
          <ListItem hoverColor={white} primaryText={string} style={styles.listItem} rightIcon={<IconButton iconStyle={styles.xButton}><NavigationClose /></IconButton>} />
        </div>
      );
    });
    return (
      <List style={styles.list}>
        {bookings}
      </List>
    );
  }

  mapAllBookings() {
    const allBookings = this.props.bookings.map((booking) => {
      const string = `${booking[0].date}`;
      return (
        <div>
          <MuiThemeProvider>
            <div style={styles.bookingRow}>
              <DropDownMenu
                value={1}
                labelStyle={styles.label}
                onChange={this.handleChange}
                style={styles.customWidth}
              >
                <MenuItem disabled label={string} value={1} style={styles.menuItem}>
                  {this.mapBookings(booking)}
                </MenuItem>
              </DropDownMenu>
              <IconButton style={styles.iconClick} iconStyle={styles.iconX}><NavigationClose /></IconButton>
            </div>
          </MuiThemeProvider>
        </div>
      );
    });
    return (
      <div>{ allBookings }</div>
    );
  }

  render() {
    return (
      <div>
        {this.mapAllBookings()}
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    bookings: state.books.all,
  }
);

export default withRouter(connect(mapStateToProps, null)(Bookings));
