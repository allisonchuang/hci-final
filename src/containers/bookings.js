import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  label: {

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
          <ListItem hoverColor={white} primaryText={string} style={styles.listItem} />
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
            <DropDownMenu
              value={1}
              // primary={string}
              labelStyle={styles.label}
              onChange={this.handleChange}
              style={styles.customWidth}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              // autoWidth={false}
            >
              <MenuItem disabled label={string} value={1} style={styles.menuItem}>
                {this.mapBookings(booking)}
              </MenuItem>
            </DropDownMenu>
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
