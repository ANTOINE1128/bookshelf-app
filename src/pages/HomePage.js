import React from "react";
import BookList from "../components/BookList";
import '../styles/HomePage.css'; 

const HomePage = () => {
    return ( 
        <div className="container">
            <h2> Home Page </h2>
            <BookList />
            
        </div>
     );
}
 
export default HomePage;