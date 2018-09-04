/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run()}),function(){function getRandomData(){for(data.length>0&&(data=data.slice(1));data.length<totalPoints;){var prev=data.length>0?data[data.length-1]:50,y=prev+10*Math.random()-5;y<0?y=0:y>100&&(y=100),data.push(y)}for(var res=[],i=0;i<data.length;++i)res.push([i,data[i]]);return res}function update(){plot.setData([getRandomData()]),plot.draw(),setTimeout(update,updateInterval)}if($.isFunction($.fn.plot)&&0!==$("#exampleFlotRealtime").length){var data=[],totalPoints=250,labelColor=Config.colors("grey",600),updateInterval=30,plot=$.plot($("#exampleFlotRealtime"),[{data:getRandomData()}],{colors:[Config.colors("grey",200)],series:{shadowSize:0,lines:{show:!0,lineWidth:0,fill:!0,fillColor:Config.colors("grey",200)}},legend:{show:!1},xaxis:{show:!1,font:{color:labelColor}},yaxis:{tickColor:"#edeff2",color:"#474e54",min:0,max:100,font:{size:14,color:labelColor,weight:"300"}},grid:{color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:"#eef0f2"}});update()}}(),function(){var b=[[1262304e6,0],[12649824e5,500],[12674016e5,700],[127008e7,1300],[1272672e6,2600],[12753504e5,1300],[12779424e5,1700],[12806208e5,1300],[12832992e5,1500],[12858912e5,2e3],[12885696e5,1500],[12911616e5,1200]],a=[{label:"Fish values",data:b}];$.plot("#exampleFlotFullBg",a,{xaxis:{min:new Date(2009,12,1).getTime(),max:new Date(2010,11,2).getTime(),mode:"time",tickSize:[1,"month"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tickLength:0,color:"#474e54",font:{size:14,weight:300}},yaxis:{tickColor:"#edeff2",color:"#474e54",font:{size:14,weight:"300"}},series:{shadowSize:0,lines:{show:!0,lineWidth:1.5},points:{show:!0,fill:!0,fillColor:Config.colors("primary",600),radius:3,lineWidth:1}},colors:[Config.colors("primary",500)],grid:{hoverable:!0,clickable:!0,backgroundColor:{colors:["#fcfdfe","#fcfdfe"]},borderWidth:0},legend:{show:!1}})}(),function(){for(var dt1=[],i=0;i<2*Math.PI;i+=.25)dt1.push([i,Math.sin(i)]);var dt2=[];for(i=0;i<2*Math.PI;i+=.25)dt2.push([i,Math.cos(i)]);var f_chart=$("#exampleFlotCurve");$.plot(f_chart,[{label:"sin(x)",data:dt1,color:Config.colors("primary",400),points:{show:!0,fill:!0,radius:3,fillColor:Config.colors("primary",400)}},{label:"cos(x)",data:dt2,yaxis:2,color:Config.colors("green",400),points:{show:!0,fill:!0,radius:3,fillColor:Config.colors("green",600)}}],{series:{shadowSize:0,lines:{show:!0,lineWidth:1.5},points:{show:!0,radius:3,lineWidth:1}},xaxes:[{ticks:[0,[Math.PI/2,"π/2"],[Math.PI,"π"],[3*Math.PI/2,"3π/2"],[2*Math.PI,"2π"]]}],yaxes:[{ticks:5,min:-2,max:2,tickDecimals:3},{ticks:5,min:-1,max:1,tickLength:0,tickDecimals:2,position:"right"}],grid:{hoverable:!0,color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:1,right:1,bottom:1,left:1},borderColor:"#eef0f2"},legend:{show:!1}})}(),function(){for(var b1=[],i=0;i<14;i+=.5)b1.push([i,Math.cos(i)+1]);var b2=[[2,3],[4,8],[6,5],[9,13]],b3=[];for(i=0;i<14;i+=.5)b3.push([i,Math.cos(i)+Math.sin(i)-1]);var b4=[];for(i=0;i<14;i+=.1)b4.push([i,Math.sqrt(10*i)-4*Math.cos(i)]);var b5=[];for(i=0;i<14;i+=1.5)b5.push([i,Math.cos(i)+2*Math.sin(i)+6]);var b6=[];for(i=0;i<14;i+=.5+Math.random())b6.push([i,Math.sqrt(i+2*Math.cos(i))-Math.sin(i)-3]);$.plot("#exampleFlotMix",[{data:b2,bars:{show:!0,align:"center",fill:!0,fillColor:Config.colors("grey",200)}},{data:b1,lines:{show:!0,fill:!0,fillColor:"rgba(251,213,181,.1)"}},{data:b3,points:{show:!0,fill:!0,fillColor:Config.colors("green",600),radius:2}},{data:b4,lines:{show:!0},points:{show:!1}},{data:b5,lines:{show:!0},points:{show:!0,fill:!0,fillColor:Config.colors("primary",600),radius:2}},{data:b6,lines:{show:!0,steps:!0}}],{xaxis:{tickLength:0,color:"#474e54",font:{size:14,weight:300}},yaxis:{tickColor:"#edeff2",color:"#474e54",font:{size:14,weight:"300"}},grid:{color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:"#eef0f2"},series:{shadowSize:0},colors:[Config.colors("grey",200),Config.colors("orange",200),Config.colors("green",600),Config.colors("yellow",600),Config.colors("primary",600),Config.colors("purple",200)]})}(),function(){for(var a1=[],i=1;i<=4;i+=1)a1.push([i,parseInt(30*Math.random())]);var a2=[];for(i=1;i<=4;i+=1)a2.push([i,parseInt(30*Math.random())]);var a3=[];for(i=1;i<=4;i+=1)a3.push([i,parseInt(30*Math.random())]);var a4=[];for(i=1;i<=4;i+=1)a4.push([i,parseInt(30*Math.random()-10)]);$.plot("#exampleFlotStackBar",[{data:a1,bars:{fill:!0,fillColor:Config.colors("light-green",500)}},{data:a2,bars:{fill:!0,fillColor:Config.colors("grey",400)}},{data:a3,bars:{fill:!0,fillColor:Config.colors("primary",500)}},{data:a4,bars:{fill:!0,fillColor:Config.colors("purple",500)}}],{series:{stack:!0,shadowSize:0,lines:{show:!1,fill:!0,steps:!1},bars:{show:!0,align:"center",barWidth:.38}},colors:[Config.colors("light-green",500),Config.colors("grey",400),Config.colors("primary",500),Config.colors("purple",500)],xaxis:{tickLength:0,color:"#474e54",min:0,max:5.5,ticks:[1,2,3,4],font:{size:14,weight:300}},yaxis:{tickColor:"#edeff2",color:"#474e54",min:-10,font:{size:14,weight:"300"}},grid:{color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:"#eef0f2"}})}(),function(){for(var a11=[],i=1;i<=5;i+=1)a11.push([parseInt(30*Math.random()),i]);var a22=[];for(i=1;i<=5;i+=1)a22.push([parseInt(30*Math.random()),i]);var a33=[];for(i=1;i<=5;i+=1)a33.push([parseInt(30*Math.random()),i]);$.plot("#exampleFlotHorizontalBar",[{data:a11,bars:{fill:!0,fillColor:Config.colors("primary",500)}},{data:a22,bars:{fill:!0,fillColor:Config.colors("grey",400)}},{data:a33,bars:{fill:!0,fillColor:Config.colors("red",500)}}],{series:{stack:!0,lines:{show:!1,fill:!0},bars:{show:!0,barWidth:.55,align:"center",horizontal:!0}},colors:[Config.colors("primary",500),Config.colors("grey",400),Config.colors("red",500)],xaxis:{color:"#474e54",font:{size:14,weight:300}},yaxis:{tickLength:0,tickColor:"#edeff2",color:"#474e54",min:0,max:6,ticks:[1,2,3,4,5],font:{size:14,weight:"300"}},grid:{color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:1,right:1,bottom:1,left:1},borderColor:"#eef0f2"}})}(),function(){function labelFormatter(label,series){return"<div style='font-size: 8pt; text-align: center; padding: 2px; color: #747474;'>"+label+"<br/>"+Math.round(series.percent)+"%</div>"}for(var pieData=[],series=2,i=0;i<series;i++)pieData[i]={label:"Example Pie S"+(i+1),data:Math.floor(100*Math.random())+1};var placeholder=$("#exampleFlotPie");$("#btnPieDefault").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{show:!0}},colors:[Config.colors("primary",500),Config.colors("grey",300)]})}),$("#btnPieWithoutLegend").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{show:!0,label:{show:!0}}},colors:[Config.colors("primary",500),Config.colors("grey",300)],legend:{show:!1}})}),$("#btnPieLabelRadius").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{show:!0,radius:1,label:{show:!0,radius:.75,formatter:labelFormatter}}},colors:[Config.colors("primary",500),Config.colors("grey",300)],legend:{show:!1}})}),$("#btnPieRectangular").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{show:!0,radius:500,label:{show:!0,formatter:labelFormatter,threshold:.1}}},colors:[$.colors("primary",500),$.colors("grey",300)],legend:{show:!1}})}),$("#btnPieDonutHole").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{innerRadius:.5,show:!0}},colors:[Config.colors("primary",500),Config.colors("grey",300)]})}),$("#btnPieInteractivity").click(function(){placeholder.unbind(),$.plot(placeholder,pieData,{series:{pie:{show:!0}},colors:[Config.colors("primary",500),Config.colors("grey",300)],grid:{hoverable:!0,clickable:!0}}),placeholder.bind("plothover",function(event,pos,obj){if(obj){var percent=parseFloat(obj.series.percent).toFixed(2);$("#hover").html("<span style='font-weight:bold; color:"+obj.series.color+"'>"+obj.series.label+" ("+percent+"%)</span>")}}),placeholder.bind("plotclick",function(event,pos,obj){obj&&(percent=parseFloat(obj.series.percent).toFixed(2),alert(""+obj.series.label+": "+percent+"%"))})}),$("#btnPieDefault").click()}(),function(){function weekendAreas(axes){var markings=[],d=new Date(axes.xaxis.min);d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+1)%7),d.setUTCSeconds(0),d.setUTCMinutes(0),d.setUTCHours(0);var i=d.getTime();do markings.push({xaxis:{from:i,to:i+1728e5}}),i+=6048e5;while(i<axes.xaxis.max);return markings}for(var d=[[11964636e5,0],[119655e7,0],[11966364e5,0],[11967228e5,77],[11968092e5,3636],[11968956e5,3575],[1196982e6,2736],[11970684e5,1086],[11971548e5,676],[11972412e5,1205],[11973276e5,906],[1197414e6,710],[11975004e5,639],[11975868e5,540],[11976732e5,435],[11977596e5,301],[1197846e6,575],[11979324e5,481],[11980188e5,591],[11981052e5,608],[11981916e5,459],[1198278e6,234],[11983644e5,1352],[11984508e5,686],[11985372e5,279],[11986236e5,449],[119871e7,468],[11987964e5,392],[11988828e5,282],[11989692e5,208],[11990556e5,229],[1199142e6,177],[11992284e5,374],[11993148e5,436],[11994012e5,404],[11994876e5,253],[1199574e6,218],[11996604e5,476],[11997468e5,462],[11998332e5,448],[11999196e5,442],[1200006e6,403],[12000924e5,204],[12001788e5,194],[12002652e5,327],[12003516e5,374],[1200438e6,507],[12005244e5,546],[12006108e5,482],[12006972e5,283],[12007836e5,221],[120087e7,483],[12009564e5,523],[12010428e5,528],[12011292e5,483],[12012156e5,452],[1201302e6,270],[12013884e5,222],[12014748e5,439],[12015612e5,559],[12016476e5,521],[1201734e6,477],[12018204e5,442],[12019068e5,252],[12019932e5,236],[12020796e5,525],[1202166e6,477],[12022524e5,386],[12023388e5,409],[12024252e5,408],[12025116e5,237],[1202598e6,193],[12026844e5,357],[12027708e5,414],[12028572e5,393],[12029436e5,353],[120303e7,364],[12031164e5,215],[12032028e5,214],[12032892e5,356],[12033756e5,399],[1203462e6,334],[12035484e5,348],[12036348e5,243],[12037212e5,126],[12038076e5,157],[1203894e6,288]],i=0;i<d.length;++i)d[i][0]+=36e5;var options={series:{lines:{show:!0,lineWidth:1},shadowSize:0},colors:[Config.colors("primary",600)],selection:{mode:"x",color:[Config.colors("primary",300)]},xaxis:{tickLength:0,mode:"time",color:"#474e54",font:{size:14,weight:300}},yaxis:{tickColor:"#edeff2",color:"#474e54",font:{size:14,weight:"300"}},grid:{markings:weekendAreas,color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:0,right:0,bottom:1,left:0},borderColor:"#eef0f2"}},_plot=$.plot("#exampleFlotVisitors",[d],options),overview=$.plot("#exampleFlotVisitorsOverview",[d],{series:{lines:{show:!0,lineWidth:1},shadowSize:0},colors:[Config.colors("primary",600)],xaxis:{ticks:[],mode:"time"},yaxis:{ticks:[],min:0,autoscaleMargin:.1},selection:{mode:"x",color:[Config.colors("primary",300)]},grid:{color:"#474e54",tickColor:"#e3e6ea",backgroundColor:{colors:["#fff","#fff"]},borderWidth:{top:1,right:1,bottom:1,left:1},borderColor:"#eef0f2"}});$("#exampleFlotVisitors").bind("plotselected",function(event,ranges){$.each(_plot.getXAxes(),function(_,axis){var opts=axis.options;opts.min=ranges.xaxis.from,opts.max=ranges.xaxis.to}),_plot.setupGrid(),_plot.draw(),_plot.clearSelection(),overview.setSelection(ranges,!0)}),$("#exampleFlotVisitorsOverview").bind("plotselected",function(event,ranges){_plot.setSelection(ranges)})}(),function(){$("<div class='flot-tooltip'></div>").css({position:"absolute",color:"#fff",display:"none",border:"1px solid #777",padding:"2px","background-color":"#777",opacity:.8}).appendTo("body"),$("#exampleFlotCurve").bind("plothover",function(event,pos,item){if(item){var x=item.datapoint[0].toFixed(2),y=item.datapoint[1].toFixed(2);$(".flot-tooltip").html(item.series.label+" of "+x+" = "+y).css({top:item.pageY+5,left:item.pageX+5}).fadeIn(200)}else $(".flot-tooltip").hide()}),$("#exampleFlotFullBg").bind("plothover",function(event,pos,item){if(item){var x=item.datapoint[0].toFixed(2),y=item.datapoint[1].toFixed(2);$(".flot-tooltip").html(item.series.label+" of "+x+" = "+y).css({top:item.pageY+5,left:item.pageX+5}).fadeIn(200)}else $(".flot-tooltip").hide()}),$("#exampleFlotRealtime").bind("plothover",function(event,pos,item){if(item){var x=item.datapoint[0].toFixed(2),y=item.datapoint[1].toFixed(2);$(".flot-tooltip").html("x | "+x+", y | "+y).css({top:item.pageY+5,left:item.pageX+5}).fadeIn(200)}else $(".flot-tooltip").hide()})}()}(document,window,jQuery);