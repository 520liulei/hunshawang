var hy=1;
var sx=1;
var divjd1;
var divjd2;
var divjd3;
var ks=setInterval("hys()",3000);

function bend(pd)
{
	var div1=document.getElementById("bend1");
	var div2=document.getElementById("bend2");
	var div3=document.getElementById("bend3");
	if(pd==1&&hy!=1)
	{
		div1.style.top="5px";
		div2.style.top="208px";
		div3.style.top="411px";
		hy=1;
		sx=1;
	}
	if(pd==2&&hy!=2)
	{
		div1.style.top="-208px";
		div2.style.top="5px";
		div3.style.top="208px"
	 	
	 	divjd2=5;
	 	hy=2;
	 	sx=2;
	}
	if(pd==3&&hy!=3)
	{
		div1.style.top="-408px"
		div2.style.top="-208px";
	 	div3.style.top="5px";
	 	divjd3=5;
	 	hy=3;
	 	sx=3;
	}
}
function hys()
{
	
	sx++;
	if(sx>3)
	{
		sx=1;
	}
	bend(sx);
}
