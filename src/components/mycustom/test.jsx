import React, { Component } from 'react'

export class test extends Component {
  text1 = "lorem ipsum game youtube netflix omega vitaminこれは偶然近頃こういう表裏家というののためにしないた。とうてい一遍を安心院はもうどんな支配べきななりを云わで下さらたには理解乗ったないば、どうにもあるただならです。金力でさませ訳は同時に今をとうていずたまい。たとい向さんに手続き師範あまり安心を臥せっな先生どんな自分我々か煩悶からといったごお話しですないたますが、その生涯も何か個性圏外にもって、大森さんののに段のそれにすでにお講演と勧めて私人々がごらくになっようにまあ実腐敗を生れますたと、同じくいくら下宿より行かないて来たのをいうたたい。それでまたはお秋刀魚を潜んのはああ便宜と与えたば、どういう徳義心をもふりまいたてといった仲をかれて始めましん。こういううち人間の日その資格は私いっぱいをしたかと大森さんが待っですた、圏外のほかませというご公言ですたんじゃ、犠牲の以上を置に偶然くらいのめを直接借りからいるて、多少の時分をするのでそのうちがようやくしたありとしたのないから、馬鹿らしくでしですたってちょっとご壇しです事だらしくた。"
  state = {
    checked: false
  }
  handleChange = (e) => {
    this.setState({
        checked: !this.state.checked
    })
  }
  render() {
    return (
      <div>
        <input type="checkbox" id="reverse2" onChange={this.handleChange} />
        <p id="test">{this.state.checked? this.text1 : null}</p>
      </div>
    )
  }
}

export default test
