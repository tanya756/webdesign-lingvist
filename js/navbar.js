var htmlstr='<nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">';
        htmlstr = htmlstr + '<div class="container topnav">';
        htmlstr = htmlstr + '<div class="navbar-header">';
        htmlstr = htmlstr + '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">';
        htmlstr = htmlstr + '<span class="sr-only">Toggle navigation</span>';
        htmlstr = htmlstr + '<span class="icon-bar"></span>';
        htmlstr = htmlstr + '<span class="icon-bar"></span>';
        htmlstr = htmlstr + '<span class="icon-bar"></span>';
        htmlstr = htmlstr + '</button>';
        htmlstr = htmlstr + '<a href="https://www.lingvist.com.tw/" title="Lingvist" class="logo"></a>';
        htmlstr = htmlstr + '</div>';
        htmlstr = htmlstr + '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
        htmlstr = htmlstr + '<ul class="nav navbar-nav navbar-right">';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/features/index.html">特色</a></li>';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/courses/index.html">課程總覽</a></li>';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/purchase/purchase.html">⽅案價格<span class="label-danger">限時促銷</span></a></li>';
        // htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/purchase/purchase.html">⽅案價格</a></li>';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/blog/">部落格</a></li>';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/news/index.html">最新消息</a></li>';
        htmlstr = htmlstr + '<li><a href="https://www.lingvist.com.tw/share/feedback/index.html">用戶見證</a></li>';

if(this.loginMemberId){
        htmlstr = htmlstr + '<li class="dropdown hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout" class="dropdown-toggle" data-toggle="dropdown" > <span style="color:#f1a272;">'+this.loginMemberId+'<b class="caret"></b></span></a>';
        htmlstr = htmlstr + '<ul class="dropdown-menu lg-menu hidden-xs">';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://go.lingvist.com/signin?language=zh-Hant">開始上課</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/goredeempage">我要儲值</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout">我的帳戶</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/api/logout">登出<i class="glyphicon glyphicon-log-out"></i> </a></li></ul>'
      }else{
        htmlstr = htmlstr + '<li class="dropdown hidden-xs"><a class="dropdown-toggle" data-toggle="dropdown" href="#">登入<b class="caret"></b></a>';
        htmlstr = htmlstr + '<ul class="dropdown-menu lg-menu hidden-xs">';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://go.lingvist.com/signin?language=zh-Hant">開始上課</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/goredeempage">我要儲值</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout">我的帳戶</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://go.lingvist.com/register?course_uuid=5009bc72-077b-4c39-a966-f9cabcb131ae">註冊新帳號</a></li></ul>';
      } 

        htmlstr = htmlstr + '<li class="dropdown hidden-xs"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-globe hidden-xs"></i> 繁中</a>';
        htmlstr = htmlstr + '<ul class="dropdown-menu lg-menu hidden-xs">';
        htmlstr = htmlstr + '<li class="hidden-xs dropdown-header">繁中</li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://www.lingvist.com.hk/">简中</a></li>';
        htmlstr = htmlstr + '<li class="hidden-xs"><a href="https://www.lingvist.com/">English</a></li></ul>';
      

if(this.loginMemberId){
        htmlstr = htmlstr + '<li class="visible-xs"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout" class="dropdown-toggle" data-toggle="dropdown" >';
          htmlstr = htmlstr + '<span style="color:#f1a272;">'+this.loginMemberId+'<b class="caret"></b></span></a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://go.lingvist.com/signin?language=zh-Hant">開始上課</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://secure.lingvist.com.tw/lsec/goredeempage">我要儲值</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout">我的帳戶</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://secure.lingvist.com.tw/lsec/api/logout">登出<i class="glyphicon glyphicon-log-out"></i> </a></li>';
      }else{
        htmlstr = htmlstr + '<li class="visible-xs"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> 登入 <b class="caret"></b></a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://go.lingvist.com/signin?language=zh-Hant">開始上課</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://secure.lingvist.com.tw/lsec/goredeempage">我要儲值</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://secure.lingvist.com.tw/lsec/myacc/initMyaccout">我的帳戶</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://go.lingvist.com/register?course_uuid=5009bc72-077b-4c39-a966-f9cabcb131ae" target="_blank">註冊新帳號</a></li>';
      } 

        htmlstr = htmlstr + '<li class="visible-xs"><a data-toggle="dropdown" href="#"> 語言 <b class="caret"></b></a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://www.lingvist.com.tw/">繁中</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://www.lingvist.com.hk/index.html">简中</a></li>';
        htmlstr = htmlstr + '<li class="visible-xs xs-menu"><a href="https://www.lingvist.com/" target="_blank">English</a></li>';
      htmlstr = htmlstr + '</ul></div></div></nav>'; document.writeln(htmlstr);  
    
document.writeln('<script type="text/javascript" src="/js/navbar_jquery.js"></script>');