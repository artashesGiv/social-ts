import axios from 'axios'

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '91a7ff3a-e232-4dc0-85e8-2f35ca14e9d6',
   },
})

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
   },

   unfollowUser(userId: number) {
      return instance.delete(`follow/${userId}`).then(response => response.data)
   },

   followUser(userId: number) {
      return instance.post(`follow/${userId}`).then(response => response.data)
   },
}

export const authAPI = {
   authMe() {
      return instance.get('auth/me').then(response => response.data)
   },
}

export const profileAPI = {
   setUserProfile(userId: string) {
      return instance.get(`profile/${userId}`).then(response => response.data)
   },
}