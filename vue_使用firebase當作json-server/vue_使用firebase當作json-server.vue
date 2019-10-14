<script>

// /Terminal，安裝他的js，記得要cd到你專案的資料夾
npm install firebase --save

// /main.js
import firebase from 'firebase';
// ##自定義外部插件 做全域採用的方式
Vue.prototype.$firebase = firebase;
// ##Set the configuration for your app
// ##TODO: Replace with your project's config object
var config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

//  /檔案.vue

// ##使用firebase的real  time database的方法
// ##要先寫好路徑
const msgRef = this.$firebase.database().ref('/list/')

// ##直接覆蓋內容
msgRef.set(this.todo);

// ##一次性得到東西，如果用on()，就會啟動socket技術
// ##使用firebase.js提供的val()取得資料
msgRef.once('value').then(function(snapshot){
  let val = snapshot.val();
  console.log(typeof val, val);
})

// ##新增data
msgRef.push(this.todo);

// ##更新data、刪除 data，要加入child就是他的ID拉~
msgRef.child('LTDioW6ID4EbaCemurR').update(this.todo);
// ##刪除 data
msgRef.child('LTDioW6ID4EbaCemurR').remove(this.todo);


</script>
