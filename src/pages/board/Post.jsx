import { ListItem, Typography } from "@mui/material";
import React from "react";

const Post = ({ post, handlePostDetail }) => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      key={post.postId}
      dense="true"
    >
      <Typography
        padding="5px"
        onClick={() => {
          handlePostDetail(post.postId);
        }}
      >
        게시글 번호: {post.postId}
      </Typography>
      <Typography
        padding="5px"
        onClick={() => {
          handlePostDetail(post.postId);
        }}
      >
        게시글제목: {post.title}
      </Typography>
      <Typography padding="5px">게시글 작성자: {post.user}</Typography>
      <Typography padding="5px">댓글 수: {post.replyList}</Typography>
    </ListItem>
  );
};

export default Post;
