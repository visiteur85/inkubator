import React from 'react';
import s from "./users.module.css";
import {OneUserType} from "../../Redux/users-reducer";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangedPage: (page: number) => void
    items: Array<OneUserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


export const Users = (props: PropsType) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize);


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>

                {pages.map(page => {
                    return <span className={props.currentPage === page ? s.selectedPage : ""}
                                 onClick={() => {
                                     props.onChangedPage(page)
                                 }
                                 }>{page}</span>
                })}

            </div>

            {props.items.map((user: OneUserType) => {

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

