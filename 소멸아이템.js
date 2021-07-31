javascript:(async function(){
    var itemArray = [];
    for (let i=1;;i++) {
        var data = await jQuery.get('https://ya9.naver.com/item/itemlist.nhn?itemCatg=&currentPage='+i);
        var html = new DOMParser().parseFromString(data,'text/html');
        for (let j=1;j<9;j++) {
            var itemData = html.getElementById('item_list_li' + j);
            if(itemData != null) {
                itemArray.push({"name":itemData.children[1].innerText, "date":itemData.children[2].children[3].innerText});
            }
        }
        if (i == html.getElementsByClassName('next1')[0].getAttribute('onclick').replace(/[^0-9]/g,'')) {break;}
    }
    for (let item of itemArray) {
        if (new Date(item.date + "T04:00:00.000+09:00") - new Date() < 86400000) {
            console.log(item.name);
        }
    }
    console.log("완료!");
})();
