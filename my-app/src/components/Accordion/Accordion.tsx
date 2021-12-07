import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean

}

export function Accordion(props: AccordionPropsType) {
    debugger

    return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}



export function AccordionTitle(props: any) {
    debugger
    return <h3>{props.title}</h3>
}

function AccordionBody(props: any) {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default Accordion;