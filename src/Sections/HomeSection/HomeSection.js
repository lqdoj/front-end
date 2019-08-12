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
    const [isLoading,setLoading]=useState(true);
    const [pageDisplay,setPage]=useState(0);
    const [numberOfPage,setNoP]=useState(0);
    const setPostToPage = async (page)=>{
        let posts=await announcementManager.doList(page);
        setPosts(posts.results);
    }
    useEffect(()=>{
        console.log(isLoading);
        const listPage= async ()=>{
            let posts= await announcementManager.doList(1);
            setPosts(posts.results);
            setNoP(parseInt((posts.count-1)/ posts.results.length)+1);
            console.log(posts);
        }
        if (isLoading){
            
            setLoading(false);
            setPage(1);
            listPage();
        }
    },[setLoading,isLoading,announcementManager]
    )
    const toPage = (page) =>{
        setPage(page);
        setPostToPage(page);
    }
    const displayNumOfPage = (NoP,curPage) =>{
        if (NoP === 0) return null;
        console.log(curPage);
        return(
        <div> 
            {(curPage!==1)?<span onClick={()=>{toPage(1)}}> {" << "} </span>:null}
            {(curPage!==1)?<span onClick={()=>{toPage(curPage-1)}}> {" < "} </span>:null}
                {curPage} 
            {(curPage!==NoP)?<span onClick={()=>{toPage(curPage+1)}}> {" > "} </span>:null}
            {(curPage!==NoP)?<span onClick={()=>{toPage(NoP)}}> {" >> "} </span>:null}
        </div>
            )
    }
    return(
        <div className="home-section">
        {displayedPosts(listOfPosts)}
        {displayNumOfPage(numberOfPage,pageDisplay)}
        </div>
    )
}

export default HomeSection;