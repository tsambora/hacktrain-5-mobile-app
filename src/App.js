import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Text,
} from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmergencyToggle from './EmergencyToggle';
import EmergencyResult from './EmergencyResult';
import Logo from './logo.svg';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='#b3e5fc'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='small'
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box>
          <AppBar>
            <img src={Logo} alt='logo' />
            <Box align='center'>
              <Text>
                Jim Jefferies
              </Text>
            </Box>
          </AppBar>
          <Box direction='row' flex>
            <Router>
              <div>
                <Route exact path="/" component={EmergencyToggle} />
                <Route exact path="/result" component={EmergencyResult} />
              </div>
            </Router>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
