import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts= [
    {
      id:"1",
      name:"ak",
      email:"ak@gmail.com",
    },
    {
      id:"2",
      name:"sdjksjd",
      email:"ajsdjdk@gmail.com",
    },
    {
      id:"3",
      name:"jay",
      email:"jay@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
