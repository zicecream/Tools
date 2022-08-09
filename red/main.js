var n = [2,3,5];
var config = {
    win:20,
    lost:40,
    almostWin:100
};
//中奖
var playerWin = function(redPacketNum,moneyNum,rewardCodeList){
    var codeSum = 0;
    var remainder = 0;
    var moneyNumList = [];
    var tempMoneyNum = moneyNum*10;
    for(var i = 0;i<rewardCodeList.length;i++){
        codeSum+= rewardCodeList[i];
    }
    
    remainder = codeSum % 10;
    
    if(remainder == 0){
        redPacketNum = rewardCodeList.length;
    }else{
        redPacketNum = rewardCodeList.length + 1;
    }

    moneyNumList.push(Math.round(Math.random()*(tempMoneyNum- 0 - 2) + 0 + 1));

    for(var i = 0;i < redPacketNum - 1;i++){
        var subMoneyNum = tempMoneyNum - moneyNumList[moneyNumList.length-1];
        tempMoneyNum = subMoneyNum;
        moneyNumList.push(Math.round(Math.random()*(subMoneyNum- 0 - 2) + 0 + 1));
    }
    for(var i = 0;i<moneyNumList.length-1;i++){
        console.log(moneyNumList[i]);
        console.log(rewardCodeList[i]);
        moneyNumList[i] = 0.1*moneyNumList[i];
        moneyNumList[i]+=0.01*rewardCodeList[i];
        moneyNumList[moneyNumList.length-1] -= 0.01*rewardCodeList[i];
    }
    for(var i = 0;i<moneyNumList.length;i++){
        console.log(moneyNumList[i]);
    }
}

var playerLost = function(redPacketNum,moneyNum,rewardCodeList){
    var codeSum = 0;
    var remainder = 0;
    var moneyNumList = [];
    var tempMoneyNum = moneyNum*10;
    for(var i = 0;i<rewardCodeList.length;i++){
        rewardCodeList[i] = 10 - rewardCodeList[i];
        codeSum+= rewardCodeList[i];
    }
    
    remainder = codeSum % 10;
    
    if(remainder == 0){
        redPacketNum = rewardCodeList.length;
    }else{
        redPacketNum = rewardCodeList.length + 1;
    }

    moneyNumList.push(Math.round(Math.random()*(tempMoneyNum- 0 - 2) + 0 + 1));

    for(var i = 0;i < redPacketNum - 1;i++){
        var subMoneyNum = tempMoneyNum - moneyNumList[moneyNumList.length-1];
        tempMoneyNum = subMoneyNum;
        moneyNumList.push(Math.round(Math.random()*(subMoneyNum- 0 - 2) + 0 + 1));
    }
    for(var i = 0;i<moneyNumList.length-1;i++){
        console.log(moneyNumList[i]);
        console.log(rewardCodeList[i]);
        moneyNumList[i] = 0.1*moneyNumList[i];
        moneyNumList[i]+=0.01*rewardCodeList[i];
        moneyNumList[moneyNumList.length-1] -= 0.01*rewardCodeList[i];
    }
    for(var i = 0;i<moneyNumList.length;i++){
        console.log(moneyNumList[i]);
    }
}

var playerAlmostWin = function(redPacketNum,moneyNum,rewardCodeList){

}

var getResout = function(redPacketNum,moneyNum,rewardCodeList){
    var randomN = 21;//Math.floor(Math.random()*100);
    if(randomN < config.win){
        console.log("win")
        playerWin(redPacketNum,moneyNum,rewardCodeList);
    }else if(randomN > config.win && randomN<config.lost){
        console.log("lost")
        playerLost(redPacketNum,moneyNum,rewardCodeList);
    }else{
        playerAlmostWin(redPacketNum,moneyNum,rewardCodeList);
    }
}
getResout(30,100,[1,2,3])