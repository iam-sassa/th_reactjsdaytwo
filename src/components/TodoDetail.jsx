import React from "react";
import { useLocation } from "react-router-dom";
const TodoDetail = () => {
    const { state } = useLocation();
    return (
        <>
       
            <h1>Your Activity Detail</h1>

            <div style={{backgroundColor: 'White', padding: '10px'}}>
                <h2>Title : {state.title}</h2>
                <h2>Description : {state.description}</h2>
            </div>
        </>

    );

};
export default TodoDetail;