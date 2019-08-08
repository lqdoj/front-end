import React from 'react';
import './HomeSection.css';

import Post from '../../Components/Post/Post';
const listOfPosts=[
    {title:"Test title",
    author:"admin",
    date:new Date(2019,6,25,21,0),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est. "
    },
    {title:"Test title",
    author:"admin",
    date:new Date(2019,6,26,9,18),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est. "
    },
    {title:"Test title",
    author:"admin",
    date:new Date(2019,6,26,9,0),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa volutpat, lobortis mi at, malesuada metus. Donec quis nunc feugiat, tincidunt massa in, congue eros. Mauris enim diam, elementum sed diam vel, mollis ornare lectus. Fusce molestie feugiat nisi. Nulla arcu sem, condimentum nec eros eget, scelerisque vulputate orci. Aliquam imperdiet bibendum imperdiet. In nec ligula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam tempus ex sem, aliquam luctus quam euismod vitae. Nulla pulvinar condimentum justo, consectetur maximus augue placerat sed. Pellentesque consectetur mattis mollis. Aenean a efficitur neque. Vestibulum congue, orci eu laoreet condimentum, mauris orci dictum est, ut pharetra quam quam in ante. Praesent non quam est. "
    }
];
const displayedPosts = listOfPosts.map(
    (post, id) =>{
        return (
            <Post key={id} post={post}/>
        )
    }
)
const HomeSection = (props) =>{
    return(
        <div className="home-section">
        {displayedPosts}
        </div>
    )
}

export default HomeSection;