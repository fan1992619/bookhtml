// JavaScript Document
 var datatable = null;
  var db = openDatabase('MyData','','My Database',102400);
  
  //init()方法，用于页面下方表格元素的引用，并且显示所有的数据库记录
  function init(){
    //取得下方的表格元素，并且赋值给全局变量
     datatable = document.getElementById("datatable");
     showAllData();
     //显示所有已经在数据库中存储的记录
     
  }
  
  //removeAllData()方法，用于移除所有的表格中的当前显示数据（它并不去除数据库记录）
  function removeAllData(){
     //首先，它将<table>下面的所有子元素全部清除
     //所以，这里它对于datatable组件进行遍历

     
     //全部去除之后，现在需要显示这个表头部分<tr>里面有多个<th>
     //创建表头行到文档树中
     var tr= document.createElement('tr');
     //表头行的第一个表头
    var th1=document.createElement('th');
     //表头行的第二个表头
     var th2=document.createElement('th');
     //表头行的第三个表头
     var th3=document.createElement('th');
	  //表头行的第四个表头
     var th4=document.createElement('th');
     //设置这4个表头的文本
     th1.innerHTML="编号";
     th2.innerHTML="名称";
     th3.innerHTML="价格";
	  th4.innerHTML="产地";
     //将这些表头依次放在表头行中
    tr.appendChild(th1);
     tr.appendChild(th2);
     tr.appendChild(th3);
	  tr.appendChild(th4);
     //将这个新创建的表头行挂到表格中
     datatable.appendChild(tr);
  }
  
  //构建指定数据库行的数据对应的HTML文本。传入参数：数据库结果集中的某一行记录
  function showData(row){
      //构建一个表行用于取得当前所要的信息
      var tr= document.createElement('tr');
      //创建第一列，这一列是编号
      var td1=document.createElement('td');
      //填充第一列的信息为该行的num
      td1.innerHTML=row.num;
      //创建第二列，这一列是名称
      var td2=document.createElement('td');
      //填充第一列的信息为该行的name
      td2.innerHTML=row.name;
     //创建第三列，这一列是日期
      var td3=document.createElement('td');
	  //填充第一列的信息为该行的name
      td3.innerHTML=row.price;
      //创建一个日期对象
	  var td4=document.createElement('td');
//填充第一列的信息为该行的name
      td4.innerHTML=row.addr;
      //吧这三列挂到当前行中
     tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
	  tr.appendChild(td4);
      //让这个表格在后面加上这一行
      datatable.appendChild(tr);
  }
  
  //这个函数用于显示所有的行到表格中，这些行是从数据库中拿出来的
  function showAllData(){
    //开启SQLite数据库事务,它用一个回调函数作为参数表明要执行的语句
    db.transaction(function(tx){
         //首先它创建一个数据库表，里面有3个字段
        tx.executeSql('CREATE TABLE IF NOT EXISTS InfoData(num INT,name TEXT,price DOUBLE,addr TEXT)',[]);
        //创建一个查询语句用来查询数据库表的所有记录（这个由于是所有查询，所以不需要预编译语句和参数 (第二个参数)）
         //然后定义了一个回调函数，表明对于结果集的处理
         tx.executeSql('SELECT * FROM InfoData',[],function(tx,rs){
             
            //对于结果集，首先，在获取它之前移除页面上的<table>的所有数据
            removeAllData();
             //遍历结果集，对于每一行，依次调用showData来在table上创建对于的html文本
            for(var i=0;i<rs.rows.length;i++){
                 //对于item(i)，也就是某一行记录，我们显示其内容到页面的表格中（构建对应的HTML片断）
                 showData(rs.rows.item(i));
             }
        });
     }
 
     );
  }
  
  //这个函数用于添加一条记录到数据库中，这些信息有些是从页面获得的，有些是系统生成的。
  function addData(nun,name,price,addr){
     //开启一个数据库事务
    //回调函数是一个有参数的插入语句，可以看到我们插入到表InfoData中，插入的内容也就是参数传递进来的内容
     db.transaction(function(tx){
         
         //插入的语句是个模板语句
         //插入成功的回调就是在控制台上输入一行日志
         tx.executeSql('INSERT INTO InfoData VALUES(?,?,?,?)' , [nun,name,price,addr],function(tx,rs){
             console.log("成功保存数据!");
         },
         //插入失败的回调就是在控制台上输入一行错误日志
         function(tx,error){
             console.log(error.source+"::"+error.message);
         });
     }
     
    );
  }
 
  //保存用户的当前输入，这个是作为点击页面上”保存“按钮的事件处理函数
 function saveData(){
     //从HTML页面中取得2个输入框的文本
	 var name=document.getElementById('name').value;
     var num=document.getElementById('num').value;
	 var price=document.getElementById('price').value;
	 var addr=document.getElementById('addr').value;
     //得到当前的系统时间 www.2cto.com
     //将用户名，用户信息，当前时间存到数据库中
     addData(name,num,price,addr);
     //更新下方<p id="msg">的表格显示
     showAllData();
	 
  }