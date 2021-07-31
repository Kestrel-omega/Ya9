javascript:(function(){  
    var teamIndex = 1;
    var team = document.getElementById('aiTeamTable').getElementsByTagName('tr')[teamIndex];
    var teamNumber = team.getAttribute('onclick').split(",")[1].replace(/[^0-9]/g,"");
    var teamName = team.getElementsByTagName('em')[0].innerText;
    var time = 3000;
    async function challenge(state,end) {
        if (!end) {
            switch(state) {
                case "A":
                    if (document.getElementsByClassName('txt_n org')[0].innerText >= 10 && document.getElementsByClassName('txt_n org')[1].innerText == "0") {
                        console.log("가능한 경기를 모두 진행하였습니다.");
                        end=true;
                    } else {
                        console.log(teamName + " 팀과 경기 시작");  
                        goToMenu('challengelive',{aiTeamNo:teamNumber});   
                        state="B";
                        time=10000;
                    }
                    break;
                case "B":
                    var data = await jQuery.getJSON('https://ya9.naver.com/gmc/ischeckchallenge.nhn');
                    if (data.running) {
                        console.log("경기 중");
                    } else {
                        console.log("경기 종료");
                        state="C";
                        time=3000;
                    }
                    break;
                case "C":
                    var aiScore = Number(document.getElementsByClassName('l_line')[3].innerText);
                    var myScore = Number(document.getElementsByClassName('l_line')[5].innerText);
                    console.log("결과: "+myScore+"-"+aiScore+(myScore>aiScore?" 승리":" 무승부/패배"));
                    viewChallengePlayer();
                    document.getElementById('giveChallengeRewardButton').click();
                    state="D";
                    break;
                case "D": 
                    if (document.getElementsByClassName('alertbtn').length>3) {
                        console.log("종료된 리그 경기 있음");
                        state="E";
                    } else {
                        state="A";
                    }
                    break;
                case "E": 
                    if (document.getElementsByClassName('alertbtn').length>3) {
                        document.getElementsByClassName('alertbtn')[3].children[0].click();
                    } else {
                        console.log("리그 경기 확인 중");
                        state="F";
                    }
                    break;
                case "F": 
                    if (document.getElementsByClassName("bn_ty ty_blue")[0].innerText == "빠른확인") {
                        var gameSeq = document.getElementsByClassName("bn_ty ty_blue")[0].getAttribute("onclick").split(/\(|\)/)[1];
                        await readAndApplyGameResult(gameSeq);
                        console.log("리그 경기 확인 완료");
                        state="G";
                    }
                    break;
                case "G":
                    goToMenu('challenge');
                    state="A";
                    break;
            }
            setTimeout(function(){challenge(state,end);},time);
        } else {
            console.log("완료!");
        }
    }
    challenge("A",false);
})();
