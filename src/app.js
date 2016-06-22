import React from 'react';
import {render} from 'react-dom';
import Contact from './contact';
import ContactsList from './contacts-list';
import {Thead, Table, Th, Td, Tr} from 'reactable';

let contacts = [
  {
    id: 1,
    name: 'John',
    phone: '444-333-6679'
  },
  {
    id: 2,
    name: 'Danny',
    phone: '413-555-3334'
  },
  {
    id: 3,
    name: 'Alex',
    phone: '222-777-9999'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      contacts: props.contacts
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  addContact(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random() * 100) + 1);
    var newContactsList = this.state.contacts.concat([{id, name, phone}]);
    this.setState({
      contacts: newContactsList
    })
    this.refs.name.value  = '';
    this.refs.phone.value = '';
  }

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <div className="app-heading">
          <h1> Contact List </h1>
        </div>
        <div className="container">
          <div className="col-md-8 input-holder">
            <input type="text" className="input-text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
            <form onSubmit={this.addContact.bind(this)} >
              <input type="text" className="input-text" placeholder="Name" ref="name"/>
              <input type="text" className="input-text" placeholder="Phone number" ref="phone"/>
              <button className="add-contact" type="submit"> <i className="fa fa-plus" aria-hidden="true"/> </button>
            </form>
          </div>
        </div>
        <div className="contacts-list">
          <table>
            <thead>
              <tr>
                <td><strong>Name</strong></td>
                <td><strong>Phone</strong></td>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => {
                return <Contact contact={contact} key={contact.id}/>
              })}
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}

render(<App contacts={contacts} />, document.getElementById('app'));
