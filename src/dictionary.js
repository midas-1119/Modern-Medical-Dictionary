import React from "react";

export default function Dictionary() {
    function search (event)
    alert ("searching...");

    return <div className="dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true}/>
            
        </form>
    </div>    
}