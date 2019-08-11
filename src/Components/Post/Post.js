import React,{useState,useEffect} from 'react';
import './Post.css';
const maxLengthContext=1000;
const getTime = (stringDatetime) =>{
    let datetime=new Date(stringDatetime);
    let curTime=new Date();
    
    let diff=curTime-datetime;
    
    if (parseInt(diff/(1000*60*60*24))>=2) return `${parseInt(diff/(1000*60*60*24))} days ago`;
    if (parseInt(diff/(1000*60*60*24))===1) return `a day ago`;
    if (parseInt(diff/(1000*60*60))>=2) return `${parseInt(diff/(1000*60*60))} hours ago`;
    if (parseInt(diff/(1000*60*60))===1) return `an hour ago`;
    if (parseInt(diff/(1000*60))>=2) return `${parseInt(diff/(1000*60))} minutes ago`;
    if (parseInt(diff/(1000*60))===1) return `a minute ago`;
    return `seconds ago`;
    
    
}
const Post = (props) =>{
    let post=props.post;
    const [timePosting,setTimePosting]=useState(getTime(post.time));
    
    useEffect(()=>{
        let timeId=setInterval(()=>{
            setTimePosting(prev=>{return getTime(post.time);});
        },1000);
        return ()=>clearInterval(timeId);
    },[setTimePosting,post])
    return(
        <div id={`post-${props.id}`} className="post-component">
            <div className="post-component__title">{post.title} 
            <span>{timePosting}</span>
            </div>
            <div className="post-component__content"> by <span>{post.author}</span> <br></br>
            {post.content.slice(0,Math.min(maxLengthContext,post.content.length))} 
            {(maxLengthContext>post.content.legnth)?null:"..See more"}
            </div>
        </div>
    )
}

export default Post;