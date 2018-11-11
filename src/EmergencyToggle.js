import React, { Component } from 'react';
import {
  Box,
  Text,
  Layer,
  Heading,
  Button
} from 'grommet';
import { Trigger, Clock, Action } from 'grommet-icons';

export default class EmergencyToggle extends Component {
  state = {
    open: false,
  };

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: undefined });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Box size='medium' pad='medium'>
          <Box pad={{vertical: 'large'}}>
            <Text>Class 400</Text>
          </Box>
          <Box pad={{vertical: 'large'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <div style={{flex: 1}}>
                <Text>08:34</Text>
              </div>
              <div style={{flex: 1}}>
                <Text>London Waterloo</Text>
              </div>
              <div style={{flex: 1, textAlign: 'center'}}>
                <Text>-></Text>
              </div>
              <div style={{flex: 1}}>
                <Text>Portsmouth Harbour</Text>
              </div>
            </div>
          </Box>
          <Box pad={{vertical: 'large'}}>
            <div style={{justifyContent: 'center', display: 'flex', flexDirection:'row'}}>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', borderRadius: '56px 0 0 0', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#70a1ff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}/>
              <div style={{width: '12.5%', height: '12px', backgroundColor: '#fff', border: '1px solid #AAAAAA', borderRadius: '0 56px 0 0', margin: '0 8px'}}/>
            </div>
          </Box>
          <Box pad={{vertical: 'large'}}>
            <div style={{justifyContent: 'start', display: 'flex', flexDirection:'column', height: '80px', border: '1px solid #AAAAAA', padding: '16px'}}>
              <div style={{flex: 1}}>
                <Text>Coach 7</Text>
              </div>
              <div style={{flex: 1, justifyContent: 'space-between', display: 'flex', flexDirection:'row'}}>
                <div>
                  <Trigger size='small' style={{marginRight: '12px'}} />
                  <Text>70% Remaining</Text>
                </div>
                <div>
                  <Clock size='small' style={{marginRight: '12px'}} />
                  <Text>42 minutes</Text>
                </div>
              </div>
            </div>
          </Box>
          <Box pad={{vertical: 'large'}}>
            <div onClick={this.onOpen} style={{justifyContent: 'center', height: '24px', border: '1px solid #70a1ff', padding: '16px', cursor: 'pointer'}}>
              <Action size='small' style={{marginRight: '12px'}} />
              <Text>Shut Down</Text>
            </div>
          </Box>
        </Box>
        {open && (
          <Layer
            position="center"
            modal
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
            <Box pad="medium" gap="small" width="medium">
              <Heading level={3} margin="none">
                Confirm
              </Heading>
              <Text>Are you sure you want to shut down coach 7?</Text>
              <Box
                tag="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button label="Cancel" onClick={this.onClose} color="dark-6" />
                <Button
                  label={
                    <Text color="white">
                      <strong>Shut Down</strong>
                    </Text>
                  }
                  onClick={() => { this.props.history.push('/result') }}
                  primary
                  color="#70a1ff"
                />
              </Box>
            </Box>
          </Layer>
        )}
      </div>
    )
  }
}