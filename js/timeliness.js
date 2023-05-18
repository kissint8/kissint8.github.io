(function() {
    var times = document.getElementsByTagName('time');
    if (times.length === 0) { console.log("time is 0");return; }
    var posts = document.getElementsByClassName('post-content');
    if (posts.length === 0) {console.log("posts is 0"); return; }
    console.log("timeliness success!");
    var pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
    var now = Date.now()  /* 当前时间戳 */
    var interval = parseInt(now - pubTime)
    
    /*设定: 当文章发布距现在时已超过半年则警告*/
    if (interval > 6*30*24*60*60*1000){
      var days = parseInt(interval / 86400000)
      posts[0].innerHTML = 
      '<div class="note note-danger" style="font-size:0.9rem">' +
      '<div class="h5"><b>文章时效性警告</b></div>  <hr>'+
      '<p>这是一篇发布于<b>' + days + '天前</b>的文章，部分信息可能已发生改变，请注意甄别。</p>' +
      '<p>如果您有任何疑惑或想法，欢迎在下方留言或通过<a href="/about" target="blank"><b><u>关于页</u></b></a>的邮箱与我联系！</p>'+
      '</div>' + posts[0].innerHTML;
    }
    else{
        var days = parseInt(interval / 86400000)
        posts[0].innerHTML = 
        '<div class="note note-success" style="font-size:0.9rem">' +
        '<div class="h5"><b>文章时效性提醒</b></div>  <hr>'+
        '<p>这是一篇发布在<b>半年以内(' + days + '天前)</b>的文章，有一定参考性。</p>' +
        '<p>如果您有任何疑惑或想法，欢迎在下方留言或通过<a href="/about" target="blank"><b><u>关于页</u></b></a>的邮箱与我联系！</p>'+
        '</div>' + posts[0].innerHTML;
    }
  })();