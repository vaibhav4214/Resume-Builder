import Navbar from "../Navbar"

import "./Css/personal_details.css"
import Details_Navbar from "./Details_Navbar"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummy_details_change } from "../../Redux/DummyDataActions";
import { useDispatch } from "react-redux";
import { personal_complete } from "../../Redux/Disable/DisableAction";
import React from 'react'

import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
// for crop image
import "./Css/personal_details.css"


const Personal_Details = () => {

    const availableData = JSON.parse(localStorage.getItem("DummyData"))
    const navigate = useNavigate()
    const availableProfile = availableData.profile ? availableData.profile : ""
    const dispatch = useDispatch()
    const [imgLink, setimgLink] = useState(availableData.profile ? availableData.profile : '');
    
    const { register, handleSubmit, formState: { errors } } = useForm()
// crop image
const [crop, setCrop] = useState({ x: 0, y: 0 })
const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
const [croppedImage, setCroppedImage] = useState(null)
const [rotation, setRotation] = useState(0)
const [zoom, setZoom] = useState(1)


const onCropComplete = async(croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
}

const CropBtn=async()=>
{
            
  try {
    const croppedImage = await getCroppedImg(
      imgLink,
      croppedAreaPixels,
      rotation
    )
    console.log('donee', { croppedImage })
    setCroppedImage(croppedImage)
    setimgLink(croppedImage)
  } catch (e) {
    console.error(e)
  }
  document.querySelector(".crop-img").style.display="none"
}
  
  

// end crop


    // change profile
    const change_profile_image = (e) => {
        
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
            setimgLink(reader.result)
        })

        document.querySelector(".crop-img").style.display="block"
        document.querySelector(".crop-img").style.zIndex = "1";
      

    }

    const cancleCrop=()=>
    {
        document.querySelector(".crop-img").style.display="none"
    }




    const onSubmit = (data) => {


        const allData = {
            profile: imgLink,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobile: data.mobile,
            city: data.city,
            state: data.state,
            address: data.address,
            postalCode: data.postalCode,
            objective: data.objective
        }
        dispatch(dummy_details_change(allData))
        dispatch(personal_complete())
        navigate("/details/work-experience")



    }


    return <>
        <Navbar />
        {/* crop image */}
        <div className="App crop-img bg-[#b6adad] fixed h-[100%] my-auto w-[98%] mx-auto " style={{display:"none"}}>
      <div className="crop-container">
        <Cropper
          image={imgLink}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls ">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value)
          }}
          className="zoom-range block mb-[5px] cropImgInpute"
        />
        
        <Button onClick={CropBtn} sx={{mx:1}} variant="contained">Crop</Button>
        <Button onClick={cancleCrop} variant="contained" color="error">Cancle</Button>
      </div>
      

    </div>
    {/* end crop */}
        
        <div className="grid-cols-12 grid  w-[85%] mb-[100px]  mx-auto mt-[5%]">
            <div className="col-span-12 lg:col-span-3 "><Details_Navbar /></div>
            <div className="col-span-12 lg:col-span-6">
                <form id="personal_details" onSubmit={handleSubmit(onSubmit)}>
                    <table>

                        <tr className="border-none">
                            <td>
                                <img alt="profile" src={imgLink ? imgLink : "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"} className="h-[100px] cursor-pointer w-[100px] rounded-[50px]" />
                                <label for="profile_img" className="text-[#3232a1] cursor-pointer text-[12px]"  >Change Profile Photo </label>
                                {availableProfile ? "" : <input id="profile_img"  {...register("profile_image", { required: true })} onChange={change_profile_image} accept="image/*" className="hidden select_profile_img" type="file"></input>}

                                <p className="text-[red]">{errors.profile_image && "Profile Image is required"}</p>
                            </td>
                            <td></td>
                        </tr>

                        <tr className="border-none">
                            <td><label>First Name</label><br />
                                <TextField id="First_Name" variant="outlined" defaultValue={availableData.details ? availableData.details.firstName : ""} {...register("firstName", { required: true })} />
                                <p className="text-[red]">{errors.firstName && "First name is required"}</p>
                            </td>
                            <td><label>Last Name</label><br />
                                <TextField id="Last_Name" defaultValue={availableData.details ? availableData.details.lastName : ""} {...register("lastName", { required: true })} variant="outlined" />
                                <p className="text-[red]">{errors.lastName && "Last name is required"}</p>
                            </td>
                        </tr>
                        <tr className="border-none">
                            <td><label>Email</label><br />
                                <TextField id="Email" defaultValue={availableData.details ? availableData.details.email : ""} variant="outlined"
                                    {...register("email", {
                                        required: "Email is required",
                                        validate: {
                                            maxLength: (v) =>
                                                v.length <= 50 || "The email should have at most 50 characters",
                                            matchPattern: (v) =>
                                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                                "Email address must be a valid address",
                                        },
                                    })}
                                />
                                <p className="text-[red]">
                                    {errors.email?.message && (
                                        <small>{errors.email.message}</small>
                                    )}</p>
                            </td>
                            <td><label>Mobile</label><br />
                                <TextField id="Mobile" className="remove_num_arrow" defaultValue={availableData.details ? parseInt(availableData.details.mobile) : ""} variant="outlined" {...register("mobile", {
                                    required: true, minLength: 10, maxLength: 10, validate: {

                                        matchPattern: (v) =>
                                            /^[0-9\b]+$/.test(v)
                                    },
                                },)} />
                                <p className="text-[red]">{errors.mobile && "10 Digit Mobile Number required"}</p>
                            </td>

                        </tr>
                        <tr className="border-none w-[100%]">
                            <label>Address</label><br />

                            <TextField id="Address" defaultValue={availableData.details ? availableData.details.address : ""} variant="outlined" sx={{ width: '200%' }} {...register("address", { required: true })} />
                            <p className="text-[red]">{errors.address && "Address required"}</p>
                        </tr>
                        <tr className="border-none">
                            <td><label>City</label><br />
                                <TextField id="City" defaultValue={availableData.details ? availableData.details.city : ""} variant="outlined" {...register("city", { required: true })} />
                                <p className="text-[red]">{errors.city && "City is required"}</p>
                            </td>
                            <td><label>State</label><br />
                                <TextField id="State" defaultValue={availableData.details ? availableData.details.state : ""} variant="outlined" {...register("state", { required: true })} />
                                <p className="text-[red]">{errors.state && "State is required"}</p>
                            </td>
                        </tr>
                        <tr className="border-none w-[100%]">
                            <label>Postal Code</label><br />
                            <TextField id="Postal_Code" defaultValue={availableData.details ? availableData.details.postalCode : ""} variant="outlined" type="number" {...register("postalCode", { required: true })} />
                            <p className="text-[red]">{errors.postalCode && "This Field is required"}</p>
                        </tr>
                        <tr className="border-none w-[100%]">
                            <label>Objective</label><br />
                            <TextField id="Objective" defaultValue={availableData.details ? availableData.details.objective : ""} variant="outlined" sx={{ width: '200%' }} {...register("objective", { required: true })} />
                            <p className="text-[red]">{errors.objective && "This Field is required"}</p>
                        </tr>
                        <tr className="border-none">
                            <td>
                            </td>
                            <td>

                                <Button className="float-right" type="submit" variant="contained" sx={{ margin: '5px' }}>Next</Button>
                                <Button className="float-right" onClick={() => { navigate(-1); }} variant="outlined" sx={{ margin: '5px' }}>Back</Button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div className="col-span-12 lg:col-span-3"></div>

        </div>

    </>
}

export default Personal_Details