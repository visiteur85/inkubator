import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Raiting/RatingRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledCheckBox, Input} from "./components/Input";
import { Select} from "./components/Select";


function App(props: any) {

    const items = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Kiev"},
        {value: "3", title: "Varshsava"}
    ]

    // const showValue = (value: number) =>{
    //     alert(value)
    // }
    //
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Select items={items}/>
            {/*<UncontrolledInput/>*/}
            {/*<Input/>*/}
            {/*<ControlledSelect/>*/}
            {/*<ControlledCheckBox/>*/}
            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           items={[{title: "Pavel", value: 1}, {title: "valera", value: 2},*/}
            {/*               {title:"artem", value: 3}, {title:"Viktor", value:4}]}*/}
            {/*           showValue={showValue}*/}
            {/*/>*/}
            {/*<OnOff  on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Second Menu"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>)
}


export default App;
