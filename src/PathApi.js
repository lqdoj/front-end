const api="http://127.0.0.1:8000";
const PATH={
    USER:{
        root: '/users/',
        ME:'/users/me/',
        LOGIN:'/tokens/',
        LOGOUT:(token) => `/tokens/${token}/`,
        ID:(username)=> `/users/${username}/`,
    },
    ANNOUNCEMENT:{
        root: '/announcements/'
    },
}

export default api;
export {PATH};