// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath: string;
    username : string;
    replyText: string;
    likeNum : number;

}
export type { ReplyProps };

interface PostOwnnerProps {
    name: string; 
    img: string; 
    text: string; 
    likes : number;
  }
export type { PostOwnnerProps };

interface CommentProps {
    userImagePath : string;
    username : string;
    commentText : string
    likeNum : number;
    replies : [];
  
  }
export type { CommentProps };