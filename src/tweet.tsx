// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

type Tweet = {user:string, content:string,  likes: number, timestamp: string }

const Tweet = ({user, content, likes, timestamp}:Tweet) => {
    let [like_count, setLiked] = useState(likes);

    function handleLike() {
        if(like_count == likes){
            setLiked(like_count + 1);
        } else {
            setLiked(like_count - 1);
        }
    };

    return (
    <>
        <div className='tweet'>
            <h2>@{user}</h2>
            <h4>{content}</h4>
            <p>{timestamp}</p>
            <button onClick={handleLike}>{like_count == likes ? `🤍 ${like_count} Likes`: `❤️ ${like_count} Likes`}</button>
        </div>
        
    </>
    )
  }


 export default Tweet;
