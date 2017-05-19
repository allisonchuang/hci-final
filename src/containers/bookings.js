import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { green500, white, black } from 'material-ui/styles/colors';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FlatButton from 'material-ui/FlatButton';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Popover from 'material-ui/Popover';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteBooking } from '../actions';

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
  booking: {
    width: 210,
    padding: 0,
    marginTop: -5,
    color: black,
    textAlign: 'left',
    display: 'flex',
  },
  dropDown: {
    marginRight: 0,
  },
};

class Bookings extends Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, openBooking: false };
    this.mapBookings = this.mapBookings.bind(this);
    this.mapAllBookings = this.mapAllBookings.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  handleRequestClose() {
    this.setState({
      openBooking: false,
    });
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      openBooking: true,
      anchorEl: event.currentTarget,
    });
  }

  deleteBook(booking) {
    for (let x = 0; x < this.props.bookings.length; x += 1) {
      if (JSON.stringify(this.props.bookings[x]) === JSON.stringify(booking)) {
        this.props.deleteBooking(x, this.props.bookings);
      }
    }
  }

  mapBookings(books) {
    let bookings = this.props.bookings;
    bookings = books.map((booking) => {
      const string = `${booking.time} (${booking.room})`;
      return (
        <div key={string} className="post-layout">
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
    console.log(this.props.bookings);
    const allBookings = this.props.bookings.map((booking) => {
      const string = `${booking[0].date}`;
      return (
        <div>
          <MuiThemeProvider>
            <div style={styles.bookingRow}>
              <FlatButton
                style={styles.booking}
                label={string}
                labelPosition="before"
                primary
                icon={<ExpandMore style={styles.dropDown} />}
                onTouchTap={(event) => { this.handleTouchTap(event, booking); }}
              />
              <IconButton onTouchTap={(event) => {
                this.deleteBook(booking);
              }} style={styles.iconClick} iconStyle={styles.iconX}
              ><NavigationClose /></IconButton>
              <Popover
                open={this.state.openBooking}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                onRequestClose={(event) => { this.handleRequestClose(event); }}
              >
                {this.mapBookings(booking)}
              </Popover>
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

const mapDispatchToProps = dispatch => (
  {
    deleteBooking: (index, bookings) => dispatch(deleteBooking(index, bookings)),
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bookings));
