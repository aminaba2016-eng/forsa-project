import axios from "axios";
import { FAIL_USER,EDIT_USER,POST_USER, LOAD_USER,GET_USER, LOGIN_USER, REGISTER_USER ,CURRENT_USER,LOGOUT_USER} from "../../const/user/user";




export const registerUser=(user,history)=> async (dispatch) =>{
    dispatch({type:LOAD_USER});
    try {

       const result= await axios.post("/user/register",user);
        //{user,msg,roken}
        dispatch({type: REGISTER_USER,payload: result.data});
        history.push("/")
    } catch (error) {
        const{errors,msg} = error.response.data;
        if(Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))}
        }
       
};
export const postuser = (post) => async (dispatch) => {
    try {
        const result = await axios.post("/user", post);
        dispatch(getusers());
    } catch (error) {
        console.log(error.response);
    }
};
export const getusers = () => async (dispatch) => {
    dispatch({ type: GET_USER });
    try {
        let result = await axios.get("/user");
        console.log(result)
        dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_USER, payload: error });
        console.log(error);
    }
};
export const edituser = (id, user) => (dispatch) => {
    axios
        .put(`/user/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_USER, payload: res.data.message });
        })
        .then(dispatch(getusers()))
        .catch((err) => console.log(err));
};

export const loginUser=(user,history)=> async (dispatch) =>{
    dispatch({type:LOAD_USER});
    try {

       const result= await axios.post("/user/login",user);//{user,msg,roken}
        dispatch({type:LOGIN_USER, payload: result.data});
        history.push("/")
    } catch (error) {
        const {errors,msg}=error.response.data;
     if(Array.isArray(errors)) {
         errors.forEach((err)=>alert(err.msg));}
        //dispatch({type:FAIL_USER, payload: error.response.data});
    if(msg){
        alert(msg);
    }
    }
   
    
};


export const current = () => async (dispatch)=>{
    dispatch({type : LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("/user/current",options);
       //user
        dispatch({type:CURRENT_USER,payload :result.data.user})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});

    }
}


export const logout=()=>{
    return {
        type:LOGOUT_USER
    };
};