import axios from "axios";

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
}



