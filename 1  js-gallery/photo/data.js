var data = [];

var datastr = '1.凯尔经的秘密<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
2.火星救援<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
3.龙虾<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
4.毒液<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
5.黑暗骑士<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
6.剪刀手爱德华<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
7.海洋深处<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
8.幽灵公主<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
9.奇异博士<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
10.南国野兽<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
11.西部世界<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
12.警探哈里<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
13.V字仇杀队<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
14.分裂<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
15.饥饿游戏3：嘲笑鸟<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
16.加勒比海盗<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
17.铁道飞虎<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
18.黄飞鸿<br>\
<br>\
基本介绍: <br>\
<br>\
<br>\
19.美国队长2<br>\
<br>\
基本介绍: <br>\
';
var d = datastr.split('<br><br><br>');
for(var i = 0; i< d.length; i++){
    var c = d[i].split('<br><br>');
    data.push({
        img: c[0].replace('.' + ' ') + '.jpg',
        caption: c[0].split('.')[1],
        desc: c[1]
    });
    console.log(c[0].replace('.' , ' ') + '.jpg');
}