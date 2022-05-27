import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'http://127.0.0.1:8000';
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
  Add requireToken: true in request config, for API that required Authorization token
 */
 api.interceptors.request.use(
     config => {
         if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
             config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

         return config;
     },
    err => {
         console.error(err);
    }
 );

export default class API {
    getPosts = async() => {
        const posts = await api
            .get("/posts/")
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
                throw new Error(error);
            });
        return posts; 
    };
    addPost = async(name,body,image) =>{
        const formData=new FormData ();
        formData.append("name",name);
        formData.append("image",image);
        formData.append("body",body);
        const savedPost= await api
            .post("/posts/add/",formData)
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
             throw new Error(error);
            });
        return savedPost; 
    };
    deletePosts = async(id)=> {
        const response= await api 
            .delete("/posts/delete/"+id+"/")
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
                throw new Error(error);
            });
        return response ; 
    };
    /////////////////////////////////////////////
    Item
    /////////////////////////////////////////////
    getItems =async (category)=>{
        let url="/items";
        if (category){
            url+="?category="+category;
        }
        const items = await api 
            .get(url)
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
                throw new Error(error);
            });
        return items;
    };
    /////////////////////////////////////////
    Review
    /////////////////////////////////////////

    getReviews = async (items_id)=>{
        let url="/reviews?item_id="+items_id;
        const reviews= await api
            .get(url)
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
                throw new Error(error);
            });
        return reviews;
    };
    writeReview = async(name,body,item_id,like_count) =>{
        const formData=new FormData ();
        formData.append("name",name);
        formData.append("item",item_id);
        formData.append("body",body);
        formData.append("like_count",like_count);

        const savedReview= await api
            .post("/reviews/add/",formData)
            .then((response)=>{
                return response.data;
            })
            .catch((error)=>{
             throw new Error(error);
            });
        return savedReview; 
    };
    }





    

    
