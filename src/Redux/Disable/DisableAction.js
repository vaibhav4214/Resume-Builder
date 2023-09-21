import { personal_details_true_false,education_true_false,work_experience_tru_false,skills_true_false } from "../Constant_Value";


const personal_complete=(val)=>
{
    return {
        type:personal_details_true_false,
        playload:val
    }
}

const work_experience_complete=(val)=>
{
    return {
        type:work_experience_tru_false,
        playload:val
    }
}

const education_complete=(val)=>
{
    return {
        type:education_true_false,
        playload:val
    }
}

const skills_complete=(val)=>
{
    return {
        type:skills_true_false,
        playload:val
    }
}

export {skills_complete,personal_complete,education_complete,work_experience_complete}