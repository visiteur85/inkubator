import React from "react";
import {OneUserType} from "../../Redux/users-reducer";
import s from "./users.module.css"
import axios from "axios";

type PropsType = {
    items: Array<OneUserType>;
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
};

export const Users = (props: PropsType) => {

    const getUsers = () => {


        if (props.items.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users", {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })

                .then(response => {
                    props.setUsers(response.data.items)
                })
            // props.setUsers(
            //     [
            //         {
            //             id: 1, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
            //             followed: false, fullName: "Pavel", status: "I am boss", location: {city: "Minsk", country: "Belarus"}
            //         },
            //         {
            //             id: 2, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
            //             followed: true, fullName: "Sasha", status: "I am boss too", location: {city: "New-York", country: "USA"}
            //         },
            //         {
            //             id: 3,
            //             photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
            //             followed: false,
            //             fullName: "Andrew",
            //             status: "I am boss too too)",
            //             location: {city: "Kiev", country: "Ukrain"}
            //         }
            //     ]
            // )
        }
    }
    return (
        <div>
            <button onClick={getUsers}> get Users</button>
            {props.items.map((user) => {

                return <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small !== null ? user.photos.small :
                  "https://postnauka.ru/files/images/3/3/0/0/0/0/0/0/0/0/thumb/s_OsZAIqDKB_qz1omo5RFbf-W-xqzjAz.jpg"}
                   className={s.userPhoto} alt=""/>
            </div>
            <div>
              {user.followed ?
                  <button onClick={() => {
                      props.unFollow(user.id)
                  }}>UnFollow</button>
                  : <button onClick={() => {
                      props.follow(user.id)
                  }}>Follow</button>
              }
              
            </div>
          </span>
                    <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>
                {"user.location.country"}
              </div>
              <div>
              {"user.location.city"}
              </div>
            </span>
          </span>
                </div>
            })}
        </div>
    );
};
