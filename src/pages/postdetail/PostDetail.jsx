import { Container } from '@mui/material'
import React from 'react'
import Topbar from '../../components/topbar/Topbar'

const PostDetail = () => {
  return (
    <Container maxWidth="lg">
        <Topbar/>
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTopContainer">
                    <div className="postBoard">
                        게시글  경주 같은 경로 표시
                    </div>
                    <div className="postTitle">
                        게시글 제목
                    </div>
                    <div className="postTitleFooter">
                        <div className="postTime">
                            게시글 작성시간
                        </div>
                        <div className="psotViewCount">
                            조회수 표시
                        </div>
                        <div className="postLikeCount">
                            좋아요 표시
                        </div>
                    </div>
                </div>
                <div className="postDetailContainer">
                    게시글내용
                </div>


                <div className="replyContainer">
                    <div className="replyWrapper">
                        <div className="inputReply">
                            <input type="text" className="replyInput" />
                        </div>
                        <button className="replySubmitButton">입력</button>
                        <div className="replyDisply">
                            <div className="replyTopContainer">
                                <div className="replyUser">
                                    댓글작성자
                                </div>
                                <div className="replyTime">
                                    댓글작성시간
                                </div>
                                <button className="replyDeleteButtto">삭제</button>
                            </div>
                            <div className="replyContentsContainer">
                                <div className="replyContents">
                                    댓글 표시
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommendPostContainer">
                    추천게시글
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PostDetail