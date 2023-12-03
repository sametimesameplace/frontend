import React from "react";

import { DisplayError } from "../pages/errors";

const ELEM_CLASSES = {
    "input" : "form_input",
    "label" : "form_label",
    "button" : "form_button",
}


export default function FormComponent(props) {
    const errorMessage = props.errorMessage;
    
    const enhanceElement = (element) => {
        let newElem;
        let _cls = ELEM_CLASSES[element.type]
        if (_cls !== undefined) {
            const newClsName = element.props.className ? element.props.className + " " + _cls : _cls;
            newElem = React.cloneElement(element, {className: newClsName})

        }
        return newElem ? newElem : element
    }

    const enhancedChildren = React.Children.map(props.children, (child) => {return enhanceElement(child)})
        
    
    return (
    <div class="custom_form">
        <form onSubmit={props.onSubmit}>
               {enhancedChildren} 
        </form>
        {errorMessage.length > 0 ? <DisplayError message={errorMessage} /> : ""}
    </div>

    )
}
