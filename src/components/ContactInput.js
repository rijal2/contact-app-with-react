import React from "react";

class ContactInput extends React.Component{
    constructor(props){
        super(props)

        // Inisiasi state
        this.state = {
            nama: "",
            tag: ""
        }

        // Binding
        this.inputNama = this.inputNama.bind(this)
        this.inputTag = this.inputTag.bind(this)
        this.onSubmitInput = this.onSubmitInput.bind(this)
    }

    inputNama(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                nama: event.target.value
            }
            
        })
    }

    inputTag(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                tag: event.target.value
            }
            
        })
    }

    onSubmitInput(event){
        event.prventDefault()

        this.props.addContact(this.state)
    }

    render(){
        return (
            <form className="contact-input" onSubmit={this.onSubmitInput}>
                <input type="text" placeholder="Nama" value={this.state.nama} onChange={this.inputNama} ></input>
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.inputTag} ></input>
                <button type="submit">SUBMIT</button>
            </form>
        )
    }
}

export default ContactInput