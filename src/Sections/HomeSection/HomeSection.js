import React,{useContext,useState,useEffect} from 'react';
import './HomeSection.css';
import AnnouncementManageContext from '../../Contexts/AnnouncementManage/AnnouncementManage';

import Post from '../../Components/Post/Post';

const displayedPosts = (listOfPosts) =>{
    return listOfPosts.map(
    (post, id) =>{
        return (
            <Post key={id} post={post}/>
        )
    }
)}
const HomeSection = (props) =>{
    let announcementManager=useContext(AnnouncementManageContext);
    const [listOfPosts,setPosts]=useState([]);
    useEffect(()=>{
        const a=async ()=>{
            let posts= await announcementManager.doList();
            setPosts(posts.results)
            console.log(posts.results);
        }
        
    }
    )
    return(
        <div className="home-section">
        {displayedPosts(listOfPosts)}
        </div>
    )
}

export default HomeSection;