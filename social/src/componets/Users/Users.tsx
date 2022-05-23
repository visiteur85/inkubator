import React from 'react';
import s from "./users.module.css";
import {OneUserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userApi} from "../../API/api";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangedPage: (page: number) => void
    items: Array<OneUserType>
        toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
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
                <NavLink to={`/profile/${user.id}`}>
              <img src={user.photos.small !== null ? user.photos.small :
                  "https://postnauka.ru/files/images/3/3/0/0/0/0/0/0/0/0/thumb/s_OsZAIqDKB_qz1omo5RFbf-W-xqzjAz.jpg"}
                   className={s.userPhoto} alt=""/>
                    </NavLink>
            </div>
            <div>
              {user.followed ?
                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.unFollowThunkCreator(user.id)

                  }}>UnFollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.followThunkCreator(user.id)
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

