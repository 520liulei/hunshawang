var jg=1;
var r=setInterval("gb()",5);
function bend(pd)
{
	for(var i=1;i<=5;i++)
	{	
		document.getElementById("ul"+i).style.display="none";	
	}
	if(pd!==jg){
	document.getElementById("ul"+pd).style.display="block";
	for(var i=1;i<=5;i++)
	{
		if(i!=pd){
		document.getElementById("divbend"+i).style.backgroundImage="url(img/prod_jiant_03.png)";
		document.getElementById("p"+i).style.color="black";
		}else
		{
			jg=i;
			document.getElementById("divbend"+i).style.backgroundImage="url(img/libg16.gif)";
			document.getElementById("p"+i).style.color="white";
		}
	}
	jg=pd;
	}
	
}
function beny(pd2)
{
	for(var i=1;i<=5;i++)
	{
		if(i==pd2||jg==i){
		document.getElementById("divbend"+i).style.backgroundImage="url(img/libg16.gif)";
		document.getElementById("p"+i).style.color="white";
		document.getElementById("divbend"+i).style.cursor="pointer";
		}else
		{
		document.getElementById("divbend"+i).style.backgroundImage="url(img/prod_jiant_03.png)";
		document.getElementById("p"+i).style.color="black";
		}
	}
}
function gb()
{
	for(var i=1;i<=5;i++)
	{
		if(i!=1){
		document.getElementById("ul"+i).style.display="none";
		}else
		{
		document.getElementById("divbend"+i).style.backgroundImage="url(img/libg16.gif)";
		document.getElementById("p"+i).style.color="white";
		}
	}
	clearInterval(r);
}
