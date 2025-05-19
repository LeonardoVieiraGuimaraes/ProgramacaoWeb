import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCardGrid from './componentes/ContactCardGrid'
import getContacts from './getContacts'

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(getContacts())
  },[])

  return (
      <ContactCardGrid contacts={contacts} />
  );
}

export default App;
