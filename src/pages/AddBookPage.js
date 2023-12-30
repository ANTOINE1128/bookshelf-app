import React from "react";
import BookForm from "../components/BookForm";
import '../styles/AddBookPage.css'; 

const AddBookPage = () => {
    return ( 
        <div className= "container">
            <h2> Add Book Page </h2>
            <BookForm />

        </div>
     );
}
 
export default AddBookPage;