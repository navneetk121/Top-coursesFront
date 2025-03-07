import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card=(props)=>{

    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id))
        {
            //already liked
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like removed");
        }
        else{
            //not liked yet, have to update
            if(likedCourses.length===0)
               {
                setLikedCourses([course.id]);
               }
            else{
                //non empty pehle se h
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked successfully");
        }
    }
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className="relative">
                <img src={course.image.url}  alt={course.image.alt} loading='lazy'></img>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>

                <button onClick={clickHandler}>
                   {
                    !likedCourses.includes(course.id)?
                    (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>):
                    (<FcLike fontSize="1.75rem" ></FcLike>)
                   }
                    
                </button>

            </div>

            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>{
                    (course.description.length>100)?
                    (course.description.substr(0,100))+"...":
                    (course.description)
                }</p>
            </div>
        </div>
    )
}
export default Card;