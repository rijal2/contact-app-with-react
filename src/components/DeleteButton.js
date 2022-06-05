import React from "react";
import { createRoot } from "react-dom/client";

function DeleteButton({ id, onDelete }){
    return <button className="contact-item_delete" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton