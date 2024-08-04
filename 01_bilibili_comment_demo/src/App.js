import avatar from './image/bozai.png'
// import './App.css';
import './App.scss'
import {useState} from "react";

// 评论列表数据
const list = [
  {
    "rpid": 3,
    "user": {
      "uid": "13258165",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "周杰伦"
    },
    "content": "哎哟，不错哦",
    "ctime": "10-18 08: 15",
    "like": 126
  },
  {
    "rpid": 2,
    "user": {
      "uid": "36080105",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "许嵩"
    },
    "content": "我寻你千百度 日出到迟暮",
    "ctime": "11-13 11: 29",
    "like": 88
  },
  {
    "rpid": 1,
    "user": {
      "uid": "30009257",
      "avatar": avatar,
      "uname": "黑马前端"
    },
    "content": "学前端就来黑马",
    "ctime": "10-19 09: 00",
    "like": 66
  }
]

// 当前登录用户信息
const user = {
  uid: '12678461',
  //用户头像
  avatar,
  uname: '哈卡斯',
}

//导航Tab组
const tabs = [

]




function App() {
  /**
   * 渲染评论列表
   *  1、使用 useState 维护 list
   * 删除评论功能
   *  1、只有自己的评论才显示删除按钮
   *  2、点击删除按钮，删除当前评论，列表中不再显示
   *  思路：
   *    1、删除显示 - 条件渲染
   *    2、删除功能 - 拿到当前项id以id为条件对评论列表做filter过滤
   *    
   */
   const [commentList, setCommentList] = useState(list)
  
  return (
    <div className="App">
      {/* 导航 Tab */}
      <div className="reply-navigation">

      </div>
      
      <div className = "reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像"></img>
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
            <div key={item.rpid} className="reply-item">
            {/* 头像 */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img
                  className="bili-avatar-img"
                  alt=""
                  src={item.user.avatar}
                  />
              </div>
            </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name"> {item.user.uname} </div>
                </div>
                {/* 评论内容 */}
                <div className='root-reply'>
                  <span className='reply-content'> {item.content} </span>
                  <div className='replt-info'>
                    {/* 评论时间 */}
                    <span className='reply-time'> {item.ctime} </span>
                    {/* 评论数量 */}
                    <span className='reply-like'> 点赞数：{item.like} </span>
                    <span className='delete-btn'> 删除 </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          

        </div>

      </div>
    </div>
  );
}

export default App;
