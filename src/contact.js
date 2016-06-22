import React from 'react';

const Contact = ({contact}) =>
  <tr>
    <td>
      {contact.name} 
    </td>
    <td>
      {contact.phone}
    </td>
  </tr>

export default Contact;
