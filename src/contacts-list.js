import React from 'react';


class ContactsList extends React.Component {
  render() {
    console.log(this.props.contacts);
    return (
      <ul>
        <li> Lucy 323-222-446 </li>
      </ul>
    )
  }
}

export default ContactsList;
