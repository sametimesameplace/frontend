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

 

