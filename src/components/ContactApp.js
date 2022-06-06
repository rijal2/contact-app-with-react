import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component{
    constructor(props){
        super(props)

        // Inisiasi state
        this.state = {
            contacts: getData()
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
        this.onAddContactEventHandler = this.onAddContactEventHandler.bind(this)
    }

    onDeleteEventHandler(id){
        const contacts = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({contacts})
    }

    onAddContactEventHandler({nama, tag}){
        this.setState((previousState) => {
            return {
                contacts: [
                    ...previousState,
                    {
                        id: +new Date(),
                        nama,
                        tag,
                        imageUrl: "/images/default.jpg"
                    }   
                ]
            }
        })
    }

    render(){
        return(
            <div className="contact-app">
                <h1>Aplikasi Penambah Kontak</h1>
                <h2>Tambah Data</h2>
                <ContactInput addContact={this.onAddContactEventHandler} />
                <h2>Daftar Kontak</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler}/>
                
            </div>
        )
    }
}

export default ContactApp;