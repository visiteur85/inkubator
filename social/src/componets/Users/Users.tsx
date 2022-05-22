import React from 'react';
import s from "./users.module.css";
import {OneUserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangedPage: (page: number) => void
    items: Array<OneUserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
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
                      props.toggleFollowingProgress(true, user.id)
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                          headers: {
                              'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                          },
                          withCredentials: true
                      })
                          .then(response => {
                              if (response.data.resultCode === 0) {
                                  props.unFollow(user.id)
                              }
                              props.toggleFollowingProgress(false, user.id)
                          })


                  }}>UnFollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.toggleFollowingProgress(true, user.id)
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                          headers: {
                              'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                          },
                          withCredentials: true
                      })
                          .then(response => {
                              if (response.data.resultCode === 0) {
                                  props.follow(user.id)
                              }
                              props.toggleFollowingProgress(false, user.id)
                          })

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

