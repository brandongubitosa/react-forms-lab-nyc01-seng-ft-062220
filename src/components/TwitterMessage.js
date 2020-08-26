import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessageChange} value={this.state.message}name="message" id="message" />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;

//maxChars={280}

// You'll find an <input type="text"> in this component. Make this a controlled component by adding the 
// attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input.

// Show the remaining characters in the component. It doesn't matter how you render it, as long as 
// the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.