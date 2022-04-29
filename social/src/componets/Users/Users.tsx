import React from "react";
import {OneUserType} from "../../Redux/users-reducer";
import s from "./users.module.css"
import axios from "axios";


type PropsType = {
    items: Array<OneUserType>;
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount:(totalCount:number)=>void

    pageSize: number
    totalCount: number
    currentPage: number
};


export class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
            }
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }
    onChangedPage = (page:number)=> {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);


        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>

                    {pages.map(page => {
                        return <span className={this.props.currentPage === page ? s.selectedPage : ""}
                                     onClick={() => {
                                         this.onChangedPage(page)
                                     }
                                     }>{page}</span>
                    })}

                </div>

                {this.props.items.map((user: OneUserType) => {

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
                      this.props.unFollow(user.id)
                  }}>UnFollow</button>
                  : <button onClick={() => {
                      this.props.follow(user.id)
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
    }
}
