import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Raiting/RatingRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className={"App"}>
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledRating/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
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
