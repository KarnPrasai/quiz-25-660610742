"use client";

import { PostOwnnerProps } from '@/libs/types';


export default function PostOwnner(
    {name , img , text , likes} : PostOwnnerProps) {
      return (
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={img}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              {name}
            </span>
          </div>

          <span className="text-white">
            {text}
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{likes} คน</span>
          </div>
          <hr className="m-0 border" />
        </div>
    );
  
}
