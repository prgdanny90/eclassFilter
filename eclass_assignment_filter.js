// Eclass-Assignment-Filter

 (function () {
   var btn = document.createElement("BUTTON");
   var t = document.createTextNode("미제출 보기");
   btn.appendChild(t);
   btn.onclick = function(){
	   var term = "미제출";
	   var tables = document.getElementsByClassName('list-table');
	   var table = tables[0];
	   var tr = table.getElementsByTagName('TR');
	   for (var i = tr.length - 1; i >= 1; i--) {
	       var td = tr[i].getElementsByTagName('TD');
		   if (td[4].innerText == term) {
		       //alert(td[2].innerText);
		       //tr[i].style.backgroundColor = "yellow";
		       //td[4].innerHTML = "찾았다.";
		   }
	       else
		   {
               table.parentNode.removeChild(tr[i]);
		       //for (var j = 1; j < td.length; j++) {
		       //    td[j].style.color = "white";
		       //}
		   }
		   //else
		   //{
		   //    alert(i + "번째 는 완료된 항목" + td[2]);
		   //}
	   }
	   };
   document.body.appendChild(btn);
 })();

//(function () {
//  var term = "미제출";
//  var tables = document.getElementsByClassName('list-table');
//  var table = tables[0];
//  var tr = table.getElementsByTagName('TR');
//  for(var i = 0; i < tr.length; i++){
//	  var td = tr[i].getElementsByTagName('TD');
//	  for(var j = 0; j < td.length; j++){
//		  if(td[j].innerHTML == term){
//			  td[j].innerHTML = "찾았다.";
//		  }
//	  }
//  }
//})();