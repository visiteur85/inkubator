//https://www.youtube.com/watch?v=1faxVHNBnsU&t=334s
//30-03


import axios from "axios";
import {AuthFromServerType} from "../Redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
    },
    baseURL: "https://social-network.samuraijs.com/api/"

});

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`1.0/users?page=${currentPage}&count=${pageSize}`,
        )
            .then(res => res.data)
    },
    follow(userId: number) {

        return instance.post(`1.0/follow/${userId}`)
    },
    unFollow(userId: number) {

        return instance.delete(`1.0/follow/${userId}`)
    },
    getProfile(userId:number) {
         return profileApi.getProfile(userId)
    },

};

export const profileApi = {
    getProfile(userId:number) {
        return instance.get(`1.0/profile/${userId}`
        )
    },
   getStatus(userId:number)  {
        return instance.get(`1.0/profile/status/${userId}`)
   },
    updateStatus(status:string)  {
        return instance.put(`1.0/profile/status`, {status:status})
    }

};

export const authApi = {
    me() {
         return instance.get<AuthFromServerType>(`1.0/auth/me`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                },
                withCredentials: true
            })

    },

};



