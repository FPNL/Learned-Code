let VUE學到_更簡短的程式碼="";
var computed={
    篩選陣列裡_物件某鍵KEY特定的值_然後拿出符合條件的物件:function(){
        /*  解構賦值
        此處this=app=Vue ，因為我們把Vue命名為app。
        附註：物件的解構賦值規則是，要"相同名稱"才可以賦值。
        也就是stared=Vue.stared，但因為我們把Vue命名為app
        所以是stared=app.stared，等於stared=this.stared。*/
        const { data, stared, filter } = this; // 等於const { data, stared, filter } = app
        return data.filter(({County})=>County.indexOf(filter)>=0)
        //用index去尋找相符條件，最少見的是參數直接拿物件去塞，等於item.County，原本是 return data.filter((item)=>item.County.indexOf(filter)>=0)
    },
    排序要倒序或正序 () {
        //https://codepen.io/FPNL/pen/dQomga    JS-35
        let reverse=true; let reverse=false; //這其實不需要，只是為了之後要了解revrser是什麼
        return this.datas.sort((a, b) => {
            let sortFlag = a[this.sortBy] - b[this.sortBy]
            return (this.reverse ? sortFlag * -1 : sortFlag);
            //直接參考物件裡面的鍵key，由於是每個逐一比對，如果為負，a會放前面
            //這是排序寫法 this.datas.sort(function(a, b){return a-b}); 但如果要倒排序，是乘上-1，也就是變成相反值
        });
    },
};

let VUE自己寫的="";
var failcomputed={
    篩選陣列裡_物件某鍵KEY特定的值_然後拿出符合條件的物件: function () {
        var sort = {
		    price: function (data, reverse) {
		    let priceData = data.sort(function (a, b) {
		        return a.price - b.price
		    });
		    return (reverse ? priceData.reverse() : priceData);
		    },
		    date: function (data, reverse) {
		    let dateData = data.sort(function (a, b) {
		        return a.expiryDate - b.expiryDate
		    });
		    return (reverse ? dateData.reverse() : dateData);
		    },
		}
		return sort[this.sortBy](this.datas, this.reverse);
	},
    排序要倒序或正序:function(){
        let fc=[];
        let vm=this;
        if(vm.filter==''){
            return vm.data
        }else{
            return vm.data.filter(function(item){
            return vm.filter==item.County
            })
            return fc;
        }
    },
};
