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
    const [listOfPosts,setPosts]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const [pageDisplay,setPage]=useState(1);
    const [numberOfPage,setNoP]=useState(0);
    const toPage = async (page)=>{
        setLoading(true);
        setPage(page);  
    }
    useEffect(()=>{
        const getAnnouncements= async()=>{
            let posts= await announcementManager.doList(pageDisplay);
            if (posts) 
            {
                setPosts(posts.results);    
                if (pageDisplay===1) setNoP(parseInt((posts.count-1)/ posts.results.length)+1);
            }
            else setPosts([]);
        }
        getAnnouncements();
    },[announcementManager,pageDisplay]);//trigger when component did mount
    useEffect(()=>{
        console.log(listOfPosts);
        if (listOfPosts) setLoading(false);            
    },[listOfPosts]);//trigger when receive
    if (isLoading==true)
        return(
            <div>LOADING</div>
        );//render when page is loading
    if (isLoading==false && listOfPosts.length===0)
        return(
            <div> No posts</div>
        );//render when there is no posts.
    //the below code is to load page.
    const listNOP=(curPage,NoP)=>{
        const displayN=[null,null,null,null,null]
        if (NoP<=5)
        {
            for (let i=0;i<NoP;i++) displayN[i]=i+1;
            console.log("Y");
        }
        else
        {
            let st=1,fn=5;
            st=curPage-2;
            fn=curPage+2;
            while (st<1) {st=st+1;fn=fn+1;}
            while (fn>NoP) {st=st-1;fn=fn-1;}
            for (let i=0;i<5;i++) displayN[i]=st+i;
            console.log("X");
        }
        console.log(displayN);
        return(
            <span> 
            {(displayN[0]===1)?null:"..."}
            {(displayN).map((page,id)=>{
                console.log(curPage===page);
                if (page===null) return null;
                if (page===curPage) return (<b>{page+" "}</b>);
                return (<span onClick={()=>{toPage(page)}}>{page}</span>)
            })}
            {(displayN[4]===NoP || displayN[4]===null)?null:"..."}</span>
        )
    }
    const displayNumOfPage = (NoP,curPage) =>{
        if (NoP === 0) return null;
        console.log(curPage);
        return(
        <div> 
            {(curPage!==1)?<span onClick={()=>{toPage(1)}}> {" << "} </span>:null}
            {(curPage!==1)?<span onClick={()=>{toPage(curPage-1)}}> {" < "} </span>:null}
                {listNOP(curPage,NoP)}
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