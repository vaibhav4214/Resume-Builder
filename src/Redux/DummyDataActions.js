import { templates_value_change,dummy_data_details,skills_delete,skills_add,work_experience,education,delete_work_experience } from "./Constant_Value"

const template_value=(val)=>
{
    return{
        type:templates_value_change,
        playload:val
    }
}

const dummy_details_change=(val)=>{
    return{
        type:dummy_data_details,
        playload:val
    }
}

const add_work_exp=(val)=>{
    return{
        type:work_experience,
        playload:val
    }
}

const delete_experience=(val)=>
{
    return {
        type:delete_work_experience,
        playload:val
    }
}

const education_add=(val)=>
{
    return{
        type:education,
        playload:val
    }


}

const add_skills=(val)=>
{
    return{
        type:skills_add,
        playload:val
    }
}

const delete_skills=(val)=>
{
    return {
        type:skills_delete,
        playload:val
    }
}
export {template_value,dummy_details_change,delete_skills,add_skills,add_work_exp,delete_experience,education_add}