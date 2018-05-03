/**
 * Created by yexl@txtws.com on 2018/03/12.
 */
module.exports = function (menu) {
    //递归渲染
    function renderMenu(htmlArr, menu) {
        for (var i in menu) {
            if(menu[i]['active']&&menu[i]['items']){
                htmlArr.push("<li class='active'>");
            }else{
                htmlArr.push('<li>');
            }
            if (!menu[i]['items']) {
                if (menu[i]['sep']) {
                    htmlArr.push('<span class= "sep" >' + menu[i]['sep'] + '</span>');
                } else {
                    htmlArr.push('<a class = "menu-item" href="' + menu[i]['url'] + '">');
                    if (menu[i]['icon'] && menu[i]['icon'].match(/\.\w{2}/)) {
                        htmlArr.push('<i class="nav-icon"><img src="' + menu[i]['icon'] + '" /></i>');
                    } else {
                        htmlArr.push('<i class="nav-icon ' + (menu[i]['icon'] ? menu[i]['icon'] : 'fa fa-link') + '"></i>');
                    }
                    htmlArr.push('<span class="nav-label">' + menu[i]['title'] + '</span>');
                    htmlArr.push('</a>');
                }
            } else {
                htmlArr.push('<a href="javascript:;">');
                if (menu[i]['icon'] && menu[i]['icon'].match(/\.\w{2}/)) {
                    htmlArr.push('<i class="nav-icon"><img src="' + menu[i]['icon'] + '" /></i>');
                } else {
                    htmlArr.push('<i class="nav-icon ' + (menu[i]['icon'] ? menu[i]['icon'] : 'fa fa-th-large') + '"></i>');
                }
                htmlArr.push('<span class="nav-label">' + menu[i]['title'] + '</span>');
                htmlArr.push('<span class="nav-arrow fa"></span>');
                htmlArr.push('</a>');
                htmlArr.push('<ul>');
                renderMenu(htmlArr, menu[i]['items']);
                htmlArr.push('</ul>');
            }
            htmlArr.push('</li>');
        }
    }

    //渲染
    var htmlArr = [];
    renderMenu(htmlArr, menu);
    htmlArr.unshift('<ul class="left-sidebar-nav">');
    htmlArr.push('</ul>');
    $('.left-menu').html(htmlArr.join(""));

    //初始化菜单插件
    $(".left-sidebar-nav").metisMenu(
        {
            preventDefault: false
        }
    );
};