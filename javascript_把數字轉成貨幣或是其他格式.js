
return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 2,
}).format(number);

/*new Intl.NumberFormat('在地化、語系', {
        style: '格式化',
        currency: '貨幣單位',
        minimumFractionDigits: '小數點幾位',
    }).format(數字);

        *'在地化、語系'：
        如果寫zh-TW，那currency寫台幣TWD的話，他就會只有一個$，但如果currency寫美金的話，他就會變成US$，變成當地人會一眼就了解的符號。

        *'貨幣單位'：
        寫入USD或是TWD的貨幣代表名稱。
        參考此文件： https://www.currency-iso.org/dam/downloads/lists/list_one.xml。

        *'格式化'：
        有十進位decimal、貨幣currency、百分比percent，預設是十進位。

        *數字：
        便是要格式化的數字了


        還有其他參數；
        Google：
        Intl.NumberFormat
        參考MDN：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
        */
