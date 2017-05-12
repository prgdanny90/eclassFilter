// Eclass-Assignment-Filter

// (function () {
  // var btn = document.createElement("BUTTON");
  // var t = document.createTextNode("미제출 보기");
  // btn.appendChild(t);
  // btn.onclick = function(){
	  // var term = "미제출";
	  // var tables = document.getElementsByClassName('list-table');
	  // var table = table[0];
	  // var tr = table.getElementsByTagName('TR');
	  // for(var i = 0; i < tr.length; i++){
		  // var td = tr[i].getElementsByTagName('TD');
		  // for(var j = 0; j < td.length; j++){
			  // if(td[j].innerHTML == term){
				  // td[j].innerHTML = "찾았다.";
			  // }
		  // }
	  // }
	  // };
  // document.body.appendChild(btn);
// })();

(function () {
  var term = "미제출";
  var tables = document.getElementsByClassName('list-table');
  var table = tables[0];
  var tr = table.getElementsByTagName('TR');
  for(var i = 0; i < tr.length; i++){
	  var td = tr[i].getElementsByTagName('TD');
	  for(var j = 0; j < td.length; j++){
		  if(td[j].innerHTML == term){
			  td[j].innerHTML = "찾았다.";
		  }
	  }
  }
})();