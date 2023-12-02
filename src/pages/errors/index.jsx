import React from "react";
import { useParams } from "react-router-dom";

export function ErrorPage() {
    const status = useParams();
    return (
    <div className="error-page">
        {status !== undefined ? status : "404"}
    </div>
    )
}

 

export function DisplayError(props) {
    return (
        <div class="error_message_wrapper">
            <p class="error_message">{props.message}</p>
    </div>
    )
}

