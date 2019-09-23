var category = {
    // 查看
    show: function(callBack) {
        $.get(URLIST.category_show, function(res) {
            callBack(res);
        });
    }
}