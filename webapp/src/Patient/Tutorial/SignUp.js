import React, { Component } from 'react';
import {
  Form,
  Button,
  Checkbox,
  TextArea,
  Label,
  Message,
  Card,
  Header,
  Icon,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

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

  submitSignup = evt => {
    //TODO Whatever we have on the backend for this should be triggered here
  };

  render() {
    return (
      <div className='sign-up-page_parent'>
        <Header className='sign-up-page_header' as='h1' icon textAlign='center'>
          <Icon name='stethoscope' circular />
          <Header.Content>Pandemic Patch</Header.Content>
        </Header>
        <Card className='sign-up-page_content'>
          <Card.Content>
            <Form onSubmit={this.submitSignup} success={false} loading={false}>
              <Form.Input
                // error={{
                //   content: 'Please enter your email',
                //   pointing: 'below',
                // }}
                fluid
                label='Email Address'
                placeholder='Valid email address'
                icon='at'
              />
              <Form.Input
                // error={{
                //   content: 'Please enter your first name',
                //   pointing: 'below',
                // }}
                fluid
                label='First name'
                placeholder='First name'
              />
              <Form.Input
                // error='Please enter your user name'
                fluid
                label='User name'
                placeholder='User name'
              />
              <Form.Field>What interested you about Pandemic Patch?</Form.Field>
              <Form.Field>
                <Checkbox
                  label='I can report an emergency at any time'
                  name='1'
                  value='I can report an emergency at any time'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '1'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="I want to avoid Hospitals and Doctors' offices"
                  name='2'
                  value="I want to avoid Hospitals and Doctors' offices"
                  checked={this.state.selectedReasons.find(
                    el => el.name === '2'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I like that I can get help right at home'
                  name='3'
                  value='I like that I can get help right at home'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '3'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I want to visit my doctor online and pick up my prescriptions from the local drugstore'
                  name='4'
                  value='I want to visit my doctor online and pick up my prescriptions from the local drugstore'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '4'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I want to help solve COVID19'
                  name='5'
                  value='I want to help solve COVID19'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '5'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I think we need to be better prepared'
                  name='6'
                  value='I think we need to be better prepared'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '6'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I want to get the latest COVID19 news'
                  name='7'
                  value='I want to get the latest COVID19 news'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '7'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I would rather play a game than fill out boring medical forms'
                  name='8'
                  value='I would rather play a game than fill out boring medical forms'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '8'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I want to earn an income'
                  name='9'
                  value='I want to earn an income'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '9'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='I want my family to be safe and stay healthy'
                  name='10'
                  value='I want my family to be safe and stay healthy'
                  checked={this.state.selectedReasons.find(
                    el => el.name === '10'
                  )}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Label>
                  Tell us something totally random about yourself. We want
                  weird.
                  <br />
                  <sub>
                    I'll go first: I love putting vinegar and spicy mayonnaise
                    on my white rice. For breakfast.
                  </sub>
                </Label>
                <TextArea placeholder="Let's Hear It" />
              </Form.Field>
              <Message
                success
                header="Awesome! Now you're good to go."
                content="You'll be redirected in a few seconds."
              />
              <Button type='submit'>Submit</Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.currentUser,
});

export default connect(mapStateToProps)(SignUp);
