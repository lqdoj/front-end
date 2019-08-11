const api="http://127.0.0.1:8000";
const PATH={
    USER:{
        root: '/users/',
        ME:'/users/me/',
        LOGIN:'/users/user_login/',
        LOGOUT:'/users/user_logout/',
        ID:(id)=> `users/${id}/`,
    },
    ANNOUNCEMENT:{
        root: '/announcements/'
    },
}

export default api;
export {PATH};