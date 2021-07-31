javascript:(async function() {
    var newsList = Array.from(document.getElementsByClassName('lst_scroll')[0].getElementsByTagName('tr'));
    for (news of newsList) {
        if (news.innerText.match(/사이클링|노히트노런|퍼펙트/)) {
            var json = await jQuery.getJSON('https://ya9.naver.com/gmc/newsreward.nhn?nno='+news.className.replace(/[^0-9]/g,""));
            if (json.result == 0) {
                console.log(json.combined_action_content);
            } else if (json.result == -1) {
                console.log("이미 수령하였습니다.");
            } else {
                console.log("수령에 실패하였습니다.");
            }
        }
    }
    console.log("완료!");
})();
