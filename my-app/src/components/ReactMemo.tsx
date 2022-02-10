import React, {useState} from 'react';

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["dim", "pavel", "Anderew"]);
    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    );
};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>

}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>

}
const Users = React.memo(UsersSecret);

