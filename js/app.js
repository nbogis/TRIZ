var i = 0,j = 0,x = 0; 
var f=0;
var Obj = {"sys": [],"sup": [],"env": []};

document.getElementById('btn-1').addEventListener("click", function() {
	$('#adv-list').append('<li><h5>Advantage</h5>'+
	'<input type="text" class="form-control" id="adv1">'+
	'<h5>Disadvantage</h5>'+
	'<input type="text" class="form-control" id="adv1">'+
	'</li><br>');
});

$('#sys-0').change(function(){
	Obj.sys.push(this.value);
});
document.getElementById('btn-2').addEventListener("click", function() {
	i++;
	$('#str1-list').append('<li>'+
	'<input id="sys-'+i+ '" type="text" class="form-control">'+
	'</li><br>');
	$('#sys-'+i).change(function(){
		Obj.sys.push(this.value);
	});
});

$('#sup-0').change(function(){
	Obj.sup.push(this.value);
});
document.getElementById('btn-3').addEventListener("click", function() {
	j++;
	$('#str2-list').append('<li>'+
	'<input id="sup-'+j+ '" type="text" class="form-control">'+
	'</li><br>');
	$('#sup-'+j).change(function(){
		Obj.sup.push(this.value);
	});
});

$('#env-0').change(function(){
	Obj.env.push(this.value);
});
document.getElementById('btn-4').addEventListener("click", function() {
	x++;
	$('#str3-list').append('<li>'+
	'<input id="env-'+x+ '" type="text" class="form-control">'+
	'</li><br>');
	$('#env-'+x).change(function(){
		Obj.env.push(this.value);
	});
});
 


