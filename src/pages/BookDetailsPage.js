import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { removeBook } from "../booksSlice";
const BookDetailsPage = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books.find((book) => book.id === id));
    const dispatch = useDispatch();

    if(!book) {
        return <div> Book Not Found</div>
    }
    const hanndleDelete = () => {
        dispatch(removeBook(id));
    };

    return ( 
        <div>   
            <h2> Book Details Page</h2>
            <p>Title: {book.title} </p>
            <p>Author: {book.author} </p>
            <p>Catgorey: {book.catgorey} </p>
            <p>ID: {book.id} </p>
            <div>
                <Link to={`/edit/${id}`}>Edit Book</Link>
                <button onClick={handleDelete}>Delete Book</button>
                </div>
                <link to ="/"> Back to Home</link>
        </div>
    );
};
 
export default BookDetailsPage;