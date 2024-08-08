"use client";

import PostOwnner from "@/components/PostOwnner";
import { PostOwnnerProps } from "@/libs/types";
import Comment from "@/components/Comment";
import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";
import { useState } from "react";

export default function Home() {


  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name={"Karn Prasai 660610742"} 
        img={"./profileimages/Profile.jpg"} 
        text={"Muhaha"} 
        likes={99}        
        />
        {/* Comment Example */}
        
        

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
        {comments.map((comments : any) =>
         <Comment 
         key = {comments.username}
         userImagePath={comments.userImagePath} 
         username={comments.username} 
         commentText={comments.commentText} 
         likeNum={comments.likeNum} 
         replies={comments.replies}          
         />
        )}
      </div>
    </div>
  );
}
