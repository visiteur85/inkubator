import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void

}

export function Accordion(props: AccordionPropsType) {
    debugger

    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onChange:() =>void
}


export function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onChange}>{props.title}</h3>
}

function AccordionBody(props: any) {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default Accordion;