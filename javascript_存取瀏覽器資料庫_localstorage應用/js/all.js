
//localstorage 只會保存 string 資料

var arrydata = [
    {farmer:'卡斯伯'},{farmer:'卡斯伯2'},{farmer:'卡斯伯3'},{farmer:'卡斯伯4'}
];


// 1.將 array 轉為 String     JSON.stringify()
var stringdata=JSON.stringify(arrydata);
//Storage
localStorage.setItem('country1',stringdata);


//--------------------------------


//get item  , and now its type is string !
stringdata = localStorage.getItem('country1');

// 2.將 sring 轉為 array      JSON.parse( )
arrydata=JSON.parse(stringdata);


//print it
console.log(arrydata[3].farmer);

