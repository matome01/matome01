import React, { Component } from 'react'
import Singlecommentsbox from './Singlecommentsbox'

export class Postbody extends Component {
  render() {
    return (
      <div>
        <p className="source">출처: <a href={this.props.alljson.thread_url} target="_blank" rel="noopener nofollow noreferrer">{this.props.alljson.thread_url}</a></p><br/>
        <label for="twolang" style={{fontWeight: 550}}>일본어 같이보기</label>
        <input type="checkbox" id="twolang"/><br/><br/>
        { this.props.alljson.comments.map(comment => comment.comment_anchor == false ? (
          <div className={comment.comment_num === '1'? "commentbox0" : "commentbox1"}>
            <Singlecommentsbox {...comment} comments={this.props.alljson.comments} thread_opId={this.props.alljson.thread_opId} />
          </div>
          ) : null)
        }
      </div>
    )
    //어떻게props을 줄진모르겠지만 어떻게든 한 (~~).json의 내용전체(url, opId까지)를 주겠지, 그걸 this.props.alljson라고하자 (alljson이라 한이유: json전체를 받기때문)
    //할일: div안에다가 원문주소라던가, 원문보기기능(체크박스)이라던가 넣자 // <Single~~ />에 ()로 안묶어도돼나? 싱글라인이라서 안묶어도돼나..?
    //ternary operator 더 깔끔하게 수정가능할듯
  }
}

export default Postbody
