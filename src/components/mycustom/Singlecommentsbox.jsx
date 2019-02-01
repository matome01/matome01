import React from 'react'

export default function Singlecommentsbox({comments, comment_num, comment_datetime, comment_authorId, comment_text, comment_text_kr, comment_anchor, className, thread_opId}) {
  const directchildren = comments.filter(comment => comment.comment_anchor.includes(`>>${comment_num}`))
  //const directchildren = comments.filter(comment => comment.comment_anchor[0]==`>>${comment_num}`)
  return (
    <div className={className ? className : "content1"}>
      <div className="id">
          {comment_num}. ID:<span className={thread_opId.includes(comment_authorId)? "op" : null}>{comment_authorId}</span> <span title={comment_datetime}>{`${comment_datetime.slice(0, 10)} ${comment_datetime.slice(13, -3)}`}</span> 
      </div>
      <div style={{paddingTop: 10}}>
          <p className="content">
            {comment_text_kr.replace(`${comment_anchor[0]}\n`, "")}<br /><span className="jp">{comment_text.replace(`${comment_anchor[0]}\n`, "")}</span> {/* comment_anchor[0]에서 undefined일때도 있음..empty array일때. */}
          </p>
      </div>
      { directchildren.map(directchild => (<Singlecommentsbox {...directchild} comments={comments} className="content2" thread_opId={thread_opId} />)) }
    </div>
  )
}

