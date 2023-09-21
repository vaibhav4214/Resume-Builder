
import { personal_details_true_false,education_true_false,work_experience_tru_false,skills_true_false } from "../Constant_Value";
const initial_state=  JSON.parse(localStorage.getItem("disabledData")) ? JSON.parse(localStorage.getItem("disabledData")) :{
    personal_details:false,
    education:false,
    work_experience:false,
    skills:false
}


const DisableReducer=(state=initial_state,action)=>
{
    switch(action.type)
    {
        case personal_details_true_false:
            // localStorage.setItem("disabledData",JSON.stringify({...state,
            //     personal_details:true
            // }))
                if(action.playload=="template")
                {
                    return  {...state,
                        personal_details:false}
                }

                else{
                        return   {...state,
                            personal_details:true}
                }
                
              


            case work_experience_tru_false:
                // localStorage.setItem("disabledData",JSON.stringify({...state,
                //     work_experience:true
                // }))
                if(action.playload=="template")
                {
                    return  {...state,
                        work_experience:false}
                }

                else{
                        return   {...state,
                            work_experience:true}
                }
           

         case education_true_false:
            // localStorage.setItem("disabledData",JSON.stringify({...state,
            //     education:true
            // }))
            if(action.playload=="template")
            {
                return  {...state,
                    education:false}
            }

            else{
                    return   {...state,
                        education:true}
            }
               

        default :return state

    }
}

export default DisableReducer