import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean

}

export function UncontrolledAccordion(props: AccordionPropsType) {



let [collapsed, setCollapsed] = useState(false );


    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() =>{setCollapsed(!collapsed)}}>Toggle</button>
        <AccordionBody tolik={collapsed}/>


    </div>
}



export function AccordionTitle(props: any) {
    return <h3>{props.title}</h3>
}

type AccordionBodyType = {
    tolik: boolean
}

function AccordionBody(props: AccordionBodyType) {

    return (
        <>

            {props.tolik && <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}
        </>

    )
}

