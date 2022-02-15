import React, {useCallback, useMemo, useState} from 'react';


export const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>

}
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["dim", "pavel", "Anderew"]);

    const newArray =  useMemo(()=>{return users.filter(u=>u.toLowerCase().indexOf("a")>-1)},[])


    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </div>
    );
};




export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [book, setBooks] = useState(["React", "CSS", "JS"]);

    // const newArray =  useMemo(()=>{return book.filter(u=>u.toLowerCase().indexOf("a")>-1)},[])

   const addBook = ()=> {
        const newBook = [...book, "ANGULAR" + new Date().getTime()];
        setBooks(newBook)
    }

 const memorized = useMemo(()=> {
     return ()=> {
         const newBook = [...book, "ANGULAR" + new Date().getTime()];
         setBooks(newBook)
     }
 },[book]);

    const memorized2 = useCallback(()=> {
                    const newBook = [...book, "ANGULAR" + new Date().getTime()];
            setBooks(newBook)

    },[book]);


    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Book  addBook={addBook} />
        </div>
    );
};

export const BooksSecret = (props: { addBook:()=>void }) => {
    return <div>
        <button onClick={()=>props.addBook}>+</button>
    </div>

}
const Book = React.memo(BooksSecret);




















// export const UseMemoForReactMemo = () => {
//     const [a, setA] = useState<number>(0)
//     const [b, setB] = useState<number>(0)
//
//     let resultA = 1;
//     let resultB = 1;
//
//     resultA = useMemo(()=>{
//         let tempResultA=1;
//         for (let i= 1; i<=a; i++) {
//             let fake=0;
//             while(fake < 100000000) {
//                 fake++;
//                 const fakeValue = Math.random();
//             }
//             tempResultA = tempResultA*i
//
//         }
//         return tempResultA},[a]);
//
//
//     for (let i= 1; i<=b; i++) {
//         resultB= resultB*i
//     }
//     return (
//         <div>
//             <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
//             <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
//             <hr/>
//             <div>
//                 Result for a: {resultA}
//             </div>
//             <div>
//                 Result for b: {resultB}
//             </div>
//         </div>
//     );
// };

