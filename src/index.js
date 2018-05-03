/**
 * Created by yexl@txtws.com on 2018/03/12.
 */
//菜单插件
require('metismenu');
//全局变量leftmenu和rightmenu
window.leftmenu = window.leftmenu || {};
window.rightmenu = window.rightmenu || {};
//初始化左侧菜单
leftmenu.initMenu = require('./left_menu');
//初始化右侧菜单
rightmenu.initMenu = require('./right_menu');

var $iframeWindowContainer = $('body').find('.right-container');
//点击左侧菜单
$('body').on('click', '.menu-item', function () {
    openIframe($(this).attr('href'));
    return false;
});

//点击右侧菜单
$('body').on('click', '.right-menu>ul>li>a', function () {
    var $item = $(this);
    $('.right-menu>ul>li>a').removeClass('active');
    $item.addClass('active');
    setTimeout(function(){
        whetherScrollTabWidth($item.parent('li').index());
    })
    return false;
});

//点击左滑
$('body').on('click','.tabs-scroller-left',function(){
    var left ='left'
     whetherScrollTabWidth(left);
});
//点击右滑
$('body').on('click','.tabs-scroller-right',function(){
    var right ='right'
     whetherScrollTabWidth(right);
});

//是否更改右侧标签滚动
function whetherScrollTabWidth(direction){
    var $iframeTabContainer=$('body').find('.right-menu>ul');
    var $width=$iframeTabContainer.parent('.right-menu').width()-70;
    var $children=$iframeTabContainer.children().length;
    // var $marginLeft=parseInt($iframeTabContainer.css('marginLeft').substr(0,$iframeTabContainer.css('marginLeft').indexOf('px')));//marginleft距离
    var $marginLeft=parseInt($iframeTabContainer.css('marginLeft').replace(/\s+|px/gi,""));//marginleft距离
    if($width>$children*110){
        
    }else{
        if(direction=='right'){
            var ulLength=parseInt(-$children*110);
            var ulReLength=parseInt((-$children*110)+330);
            if(ulReLength>=$marginLeft && $marginLeft>=ulLength){
                $iframeTabContainer.animate({
                    'margin-left':-($children-3)*110
                });
            }else if($marginLeft<=0 && $marginLeft>ulReLength){
                $iframeTabContainer.animate({
                    'margin-left':$marginLeft-330
                });
            }
        }else if(direction=='left'){
            if($marginLeft>-330&&$marginLeft<0){
                $iframeTabContainer.animate({
                    'margin-left':0
                });
            }else if($marginLeft<0){
                $iframeTabContainer.animate({
                    'margin-left':$marginLeft+330
                });
            }
        }else{
            var $toLeftDistance = direction*110;
            if($toLeftDistance+110>=$width){
                $iframeTabContainer.animate({
                    'margin-left':-$toLeftDistance+110
                });
            }else if($toLeftDistance<$width&&$marginLeft<0){
                $iframeTabContainer.animate({
                    'margin-left':0
                });
            }
        }
    }
}




//异步默认打开第一个iframe与打开iframe
window.openIframe=function(url){
    var index = 'f' + (new Date()).getTime();
    $iframeWindowContainer.children().remove();
    if (url) {
        var n = '<iframe class="active" name="iframe' + index + '" width="100%" height="100%" src="' + url + '" frameborder="0" data-id="' + index + '" seamless></iframe>';
        $iframeWindowContainer.append(n);
        return false;
    }else if(!url){
        var n = '<iframe class="active" name="iframe' + index + '" width="100%" height="100%" src="' + '404.html' + '" frameborder="0" data-id="' + index + '" seamless></iframe>';
        $iframeWindowContainer.append(n);
        return false;
    }
};



require('./css/index.less');