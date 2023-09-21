import { templates_value_change,dummy_data_details,education,skills_delete,skills_add,work_experience,delete_work_experience } from "./Constant_Value"

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    const DummyData= 
    {
    date:date,
    template:"",
    profile:"https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
    details:{
        firstName:"Vaibhav",
        lastName:"Yadav",
        mobile:7038409045,
        email:"Vaibhav@gmail.com",
        city:"Nanded",
        address:"Xyz",
        state:"Maharashtra",
        postalCode:431601,
        objective:"Hellow"

    },
    experience:[{companyName:"Infosys",
                 jobTitle:"Web Develope",
                 startYear:"2-12-2021",  
                endYear:"2-12-2022"
                }],

                skills:["Javascript","HTML","CSS","React Js"],
                education:{type:"Post Graduation",
                            university:"SRTM",
                            startYear:"2020",
                            endYear:"2023",
                            degree:"Yes"
                            }
                


   
}

const DummyDataReducer=(state=DummyData,action)=>{
        switch(action.type)
        {
            case templates_value_change:
              
                const DummyData={template:action.playload}
                localStorage.setItem("DummyData",JSON.stringify(DummyData))
                return state

            case dummy_data_details:
                const DummyData_details=JSON.parse(localStorage.getItem("DummyData"))
                const details_data={...DummyData_details,
                    profile:action.playload.profile,
                    details:{firstName:action.playload.firstName,
                        lastName:action.playload.lastName,
                        email:action.playload.email,
                        mobile:action.playload.mobile,
                        city:action.playload.city,
                        address:action.playload.address,
                        state:action.playload.state,
                        postalCode:action.playload.postalCode,
                        objective:action.playload.objective},
                        experience:DummyData_details.experience ? DummyData_details.experience : [],
                        skills:DummyData_details.skills ? DummyData_details.skills : [],
                        date:date,


                    
                    }
                        localStorage.setItem("DummyData",JSON.stringify(details_data))

                return state

                case work_experience:
                    let DummyData_work=JSON.parse(localStorage.getItem("DummyData"))
                        
                    DummyData_work.experience ?
                    DummyData_work.experience.push({
                            companyName:action.playload.companyName,
                            jobTitle:action.playload.jobTitle,
                            startYear:action.playload.startYear,
                        endYear:action.playload.startYear
                        }) : 
                        DummyData_work={...DummyData_work,
                                experience:[{companyName:action.playload.companyName,
                                jobTitle:action.playload.jobTitle,
                                startYear:action.playload.startYear,
                            endYear:action.playload.startYear}]
                        }
                    
                    localStorage.setItem("DummyData",JSON.stringify(DummyData_work))
                    return state

                    case delete_work_experience:
                        const DummyData_delete_work=JSON.parse(localStorage.getItem("DummyData"))
                        const newArr=DummyData_delete_work.experience.filter((e,i)=>
                        {   
                            console.log(i)
                            console.log(action.playload)
                            return i!=action.playload  
                        })
                        const after_del_work_expe={
                            ...DummyData_delete_work,
                            experience:newArr
                        }
                        console.log(newArr)
                        localStorage.setItem("DummyData",JSON.stringify(after_del_work_expe))
                        return {
                            ...state,
                            
                            
                        }
                    case education:
                            const education_data=JSON.parse(localStorage.getItem("DummyData"))
                            const education_data_after={
                                ...education_data,
                                education:{type:action.playload.educationtype,
                                            university:action.playload.university,
                                            startYear:action.playload.startYear,
                                            endYear:action.playload.endYear,
                                            degree:action.playload.degree
                            }
                                
                            }
                            localStorage.setItem("DummyData",JSON.stringify(education_data_after))
                            return state

                            case skills_add:
                                let before_skill_add=JSON.parse(localStorage.getItem("DummyData"))
                                before_skill_add.skills ? before_skill_add.skills.push(action.playload.skills) :
                                before_skill_add={
                                    ...before_skill_add,
                                    skills:[action.playload.skills]
                                }
                                localStorage.setItem("DummyData",JSON.stringify(before_skill_add))
                                return state

                                case skills_delete:
                                    let delete_skills=JSON.parse(localStorage.getItem("DummyData"))
                                    const newArrSkills=delete_skills.skills.filter((e,i)=>
                                    {
                                        return i!=action.playload
                                    })

                                    const after_skills_delete={
                                        ...delete_skills,
                                        skills:newArrSkills
                                    }
                                    localStorage.setItem("DummyData",JSON.stringify(after_skills_delete))
                                    return state
                       
            default:return state
        }
   
}

export default DummyDataReducer