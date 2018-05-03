/**
 * Created by yexl@txtws.com on 2018/03/12.
 */
module.exports = function (menu) {
    //递归渲染
    function renderMenu(htmlArr, menu) {
        for (var i in menu) {
            var $list="<li><a href='";
            if(i==0){
                $list="<li><a class='active' href='";
            }
            htmlArr.push($list);
            htmlArr.push(menu[i].url+"'");
            htmlArr.push("id='"+menu[i].id+"'");
            htmlArr.push(">");
            htmlArr.push(menu[i].title);
            htmlArr.push('</a>');
            htmlArr.push('</li>');
        }
    };
    //渲染
    var htmlArr = [];
    renderMenu(htmlArr, menu);
    $('.right-menu ul').append(htmlArr.join(""));

};