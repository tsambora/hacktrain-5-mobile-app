import React, { Component } from 'react';
import {
  Box,
  Text,
  Layer,
} from 'grommet';
import { Update } from 'grommet-icons';

export default class EmergencyResult extends Component {
  state = {
    open: true,
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({open: false});
    }, 1000);
  }

  render() {
    const {open} = this.state;
    return (
      <div>
        <Box size='medium' pad='medium'>
          <Box pad={{vertical: 'large'}}>
            <Text>Coach 7 has been shut down</Text>
          </Box>
        </Box>
        {open && (
            <Layer full>
              <Box fill background="light-1" align="center" justify="center">
                <Update size='xlarge' style={{marginRight: '12px'}} />
              </Box>
            </Layer>
          )}
      </div>
    )
  }
}