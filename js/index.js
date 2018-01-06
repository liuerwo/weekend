$(function(){
    //轮播图
     var length=$('.banner-img').length;
     var index;
     function  move(){
         index=$('.show').index();
          index++;
         if(index>=length){index=0}
         $('.banner-img').eq(index).addClass('show').siblings().removeClass('show');
        $('.banner-item').eq(index).addClass('show').siblings().removeClass('show');
     $('.banner-img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
     // $('.banner-item').eq(index).fadeIn(1000).siblings(1000).fadeOut(1000);
     }
     var t= setInterval(move,2000);
    
    //点击选择套餐价位
    $('.index-bottom').on('click',function(){
        $(this).addClass('xuan').siblings().removeClass('xuan');
    });
    
    //选项卡--活动详情，活动评价
    $('.index-btn-btn').on('click',function(){
        $(this).addClass('dian').siblings().removeClass('dian');
        $('.index-inner').eq($(this).index()).addClass('show').siblings().removeClass('show')
    });

   //点击评分
    $('.index-li').on('click',function(){
        $(this).addClass('xuan').siblings().removeClass('xuan');
    });

    $('.xx-item').on('click',function(){
        $(this).addClass('dian').siblings().removeClass('dian');
        $('.xx-inner-box').eq($(this).index()).addClass('xuan').siblings().removeClass('xuan')
    });

    // 点击跳出侧边栏
    $('.show-ce').on('click',function(){
        $('.index-ce-box').toggleClass('tan');
        $('.cover').toggleClass('tan')
    })

   //touch事件
  var left = null;          
  $(document).on('touchstart', function (e) {
    left = e.originalEvent.changedTouches[0].pageX;
  });
  $(document).on('touchmove', function (e) {
    var n = e.originalEvent.changedTouches[0].pageX;
    var x = n - left;
  // touchmove
  $(document).on('touchend', function (e) {

var n = e.originalEvent.changedTouches[0].pageX;
    if ((n > left) && (n - left > 40)) {
      $('.cover').removeClass('tan');
$('.index-ce-box').removeClass('tan')  
    }
  });
})






// $.post("这里写请求的地址", {  这是请求的参数
//                         page: that.pag,
//                         size: 10,
//                         action: "decSnowmanlist"
//                     },
//                     function(e) {
// //                      e.data.forEach(function(v) {
// //                              that.list = that.list.push(v)
// //                          })
//                         e = JSON.parse(e);
//                         if(e.status == 1) {
//                             that.zrequire = false;
//                             that.list = that.list.concat(e.data);
//                         }
//                     }
//                 )















    });