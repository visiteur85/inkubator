import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: Array<ItemType>
    showValue:(value: number)=>void

}

export function Accordion(props: AccordionPropsType) {
    debugger

    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} showValue={props.showValue}/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onChange:() =>void
    
}


export function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyType = {

    items: Array<ItemType>
    showValue:(value: number)=> void
}

function AccordionBody(props: AccordionBodyType) {
    return (<ul>
        {props.items.map((m, index)=><li onClick={()=>{props.showValue(m.value)}} key={index}>{m.title}</li>)}
    </ul>)
}

export default Accordion;