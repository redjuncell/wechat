import  Friends  from '../view/friends'
import  My  from '../view/my'
import  Found  from  '../view/found'
import  Home  from  "../view/home"
import  Login  from  "../view/Login.jsx"
import  index  from  "../view/index"
// import  Hscss from "../assets/css/home.module.scss"
const router=[
    {
        path:"/login",
        component:Login
    },
    {
        path:"/",
        component:index,
        children:[
            {
                path:"/friends",
                component:Friends
            },
            {
                 path:"/found",
                 component:Found
            },
            {
                path:"/my",
                component:My
            },
            {
                path:"/",
                exact:true,
                component:Home
            }   
        ]
    },
   
   
]
export default  router