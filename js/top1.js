var tp=0
var lij;
var qj;
var ys=2;
var jt=1;
var zt=0.5;
var as=0;
function show(pd)
{
	lij=document.getElementById("div1_topimgzy").getElementsByTagName("li");
	for(var i=0;i<lij.length;i++)
	{
		if(lij[i].style.opacity==1)
		{
			if(pd==11)
			{
				ys--;
				if(ys>=2){
					qj=ys;
					jtou(i);
				}else{
				ys=5
					qj=ys;
					jtou(i);
				}
				break;
			}
			if(pd==22)
			{
				ys++;
				if(ys<=5){
					qj=ys;
					jtou(i);
				}else{
				ys=2
					qj=ys;
					jtou(i);
				}
				break;
			}
			if(i!=pd-2){
				qj=pd;
				jtou(i);
				ys=pd;
				break;
			}
		}
	}
}
function jtou(sx)
{
	jt-=0.1;
	lij[sx].style.opacity=jt;
	if(jt<=0.6)
	{
		jt=1;
		zts(qj);
		lij[sx].style.opacity=0;
		return;
	}
	setTimeout("jtou("+sx+")",40);
}
function zts(kk)
{	
	zt+=0.1;
	lij[kk-2].style.opacity=zt;
	if(zt>=1)
	{
		zt=0.5;
		lij[kk-2].style.opacity=1;
		ks=0;
		return;
	}
	var a=kk;
	setTimeout("zts("+a+")",45);
}
function gd()
{
	var li_s=document.getElementsByClassName("div1_u2");
	if(tp==0)
	{
		var uls=document.getElementById("div1_topimgzy").getElementsByTagName("li");
		for(var a=0;a<uls.length;a++)
		{
			uls[a].style.opacity=0;
		}
		uls[0].style.opacity=1;
		tp++;
	}
	if(as==1){
		lij=document.getElementById("div1_topimgzy").getElementsByTagName("li");
		for(var i=0;i<lij.length;i++)
		{
			if(lij[i].style.opacity==1)
			{	ys++;
				if(ys<=5)
				{
				qj=ys;
				jtou(i);
				}else
				{
					ys=2;
					qj=ys;
					jtou(i);
				}
				break;
			}
			
		}
		}else{as++;}
		
	setTimeout("gd()",2000);
}
