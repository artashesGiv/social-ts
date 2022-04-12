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
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
   },

   unfollowUser(userId: number) {
      return instance.delete(`follow/${userId}`)
   },

   followUser(userId: number) {
      return instance.post(`follow/${userId}`)
   },
}

export const authAPI = {
   authMe() {
      return instance.get('auth/me')
   },

   login(email: string, password: string, rememberMe: boolean = false) {
      return instance.post('auth/login', {email, password, rememberMe})
   },

   logout() {
      return instance.delete('auth/login')
   },
}

export const profileAPI = {
   getProfile(userId: string) {
      return instance.get(`profile/${userId}`)
   },

   getStatus(userId: string) {
      return instance.get(`profile/status/${userId}`)
   },

   updateStatus(status: string) {
      return instance.put(`profile/status`, {status: status})
   },

   savePhoto(photo: any) {
      const formData = new FormData()
      formData.append('image', photo)
      return instance.put('profile/photo', formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   },
}