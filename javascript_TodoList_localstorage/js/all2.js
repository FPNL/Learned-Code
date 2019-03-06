//因為localstorage 本身是個儲存字串的地方，我們存放在此的字串是符合陣列格式，所以取出來轉型後就會是陣列。要是沒有陣列就創一個
var items=JSON.parse(localStorage.getItem('事項')) || []; 
//因為HTML沒有寫LI內容，所以先執行一次把陣列裡的東西給 '抖' 出來~
additem(); 
//設置監聽器在按鈕上。
document.querySelector('.content').addEventListener('click',btnf);  

function additem(){ //為了儲存資料的函式
    var stringdata=JSON.stringify(items);   //把陣列改成JSON字串
    localStorage.setItem('事項' , stringdata); //設定JSON進去
    var str=''; //宣告字串變數
    for(i=0; i<items.length;i++){  //把陣列裡面的東西給刷新，避免data-item 固定
        str+= '<li ><a class="link" href="" data-item="'+i+'">刪除</a> '+items[i].item+'</li>';
    } //把陣列資料列出來，依序 <li><a> </a></li>
    document.querySelector('.list').innerHTML=str;  // 放進去 ul，展示陣列items的內容
}

function btnf(e){ //button function -> btn
    var target= e.target.nodeName;   //取得節點名稱，通常是Element的名稱 ，且大寫。
    var targetclass=e.target.className;  //取得Class名稱，由於此網頁設定上，只放上一個class。
    var titlevalue=document.querySelector('.text').value;  //取得輸入資料的內容
    var targetnum=e.target.dataset.item;  //取得我們自訂的data-item 的內容，在additem()設定是數字，從0開始
    // ----------上面把變數命名好了，接著是要發生的事了 --------------
    if(targetclass == 'send' && titlevalue != ""){ //如果按了 按鈕class="send" ，以及 內容有填寫任何內容 就....
        items.push({item: titlevalue}); //把資料內容放進去陣列items的最後面
        titlevalue = ''; //然後清空input內容
    }else if(target == 'A'){  //如果是按刪除，也就是我們設定的<a>
        items.splice(targetnum,1);  //會移除該項所在的陣列位置，由於每按下按鈕會刷新data-item的內容，且內容由0開始，完全符合陣列格式
        e.preventDefault();  //由於這裡使用的是a href效果，會有刷新作用，需要停用。
    }else{
        return //這設爽的，可有可無
    }
    additem();  //每按下按鈕，必執行這個函式，為了更新內容
}
