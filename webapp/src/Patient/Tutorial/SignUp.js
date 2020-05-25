import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

class SignUp extends Component {
  state = {
    email: { valid: false, value: '' },
    fName: { valid: false, value: '' },
    uName: { valid: false, value: '' },
    selectedReasons: [],
  };

  handleChange = (e, { value }) => {
    const updatedList = [
      ...this.state.selectedReasons,
      { name: e.target.name, value },
    ];
    this.setState({ selectedReasons: updatedList });
  };

  submitSignup = (evt) => {};

  render() {
    return (
      <div>
        <Form>
          <Form.Input
            error={{
              content: 'Please enter your email',
              pointing: 'below',
            }}
            fluid
            label='Email'
            placeholder='Email'
            icon='at'
          />
          <Form.Input
            error={{
              content: 'Please enter your first name',
              pointing: 'below',
            }}
            fluid
            label='First name'
            placeholder='First name'
          />
          <Form.Input
            error='Please enter your user name'
            fluid
            label='User name'
            placeholder='User name'
          />
          <Form.Field>What interested you about Pandemic Patch?</Form.Field>
          <Form.Field>
            <Checkbox
              label='Choose this'
              name='1'
              value='this'
              checked={this.state.selectedReasons.find((el) => el.name === '1')}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label='Or that'
              name='2'
              value='that'
              checked={this.state.selectedReasons.find((el) => el.name === '2')}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button onClick={this.submitSignup} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
