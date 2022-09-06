$(function(){
  // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    $('#btnSend').on('click',function(){
      var text=$('#ipt').val().trim()
      if(text.length<=0) {
        return $('#ipt').val('')
      }
      $('#talk_list').append(`
      <li class="right_word">
        <img src="img/person02.png" /> <span>${text}</span>
      </li>
      `)
      $('#ipt').val('')
      resetui() //追加信息后重置滚动条的位置
      getMsg(text) //用户追加信息后机器人回复
    })

    // 获取聊天机器人发送回来的消息
    function getMsg(text){
      $.ajax({
        method:'GET',
        url:'https://ajax-base-api-t.itheima.net/api/robot',
        data:{
          spoken:text
        },
        success:function(res){
          // console.log(res);
          if(res.message === 'success'){
           var msg= res.data.info.text
           $('#talk_list').append(`
            <li class="left_word">
              <img src="img/person01.png" /> <span>${msg}</span>
            </li>
            `)
            resetui()
            getVoice(msg)  //当机器人回复后，应该立即将文本转化为语音
          }
        },
        error:function(err){
          console.log(err);
        }
      })
    }

    // 把文字转化为语音播放
    function getVoice(text){
      $.ajax({
        method:'GET',
        url:'https://ajax-base-api-t.itheima.net/api/synthesize',
        data:{
          text:text
        },
        success:function(res){
          // console.log(res);
          if(res.status===200){
            // 播放语音
            $('#voice').attr('src',res.voiceUrl)
          }
        }
      })
    }

    // 为文本框绑定keyup（键盘弹起）事件 通过回车键回复消息
    $('#ipt').on('keyup',function(e){
      if(e.keyCode===13){
        $('#btnSend').click() //与点击按钮触发的事件相似的效果
      }
    })
})