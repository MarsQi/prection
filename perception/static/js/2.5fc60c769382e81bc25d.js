webpackJsonp([2],{"QKo+":function(t,e,a){t.exports=a.p+"static/img/timg (3).1a4e742.jpg"},a3Yh:function(t,e,a){"use strict";e.__esModule=!0;var i,n=a("liLe"),o=(i=n)&&i.__esModule?i:{default:i};e.default=function(t,e,a){return e in t?(0,o.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},adMp:function(t,e,a){a("pBXl");var i=a("UusJ").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},eHTp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("a3Yh"),n=a.n(i),o=a("XMw0"),s=a.n(o),r=a("f5re"),l=a.n(r),d={data:function(){return{share_a:l.a}},components:{},mounted:function(){this.drawEchart1(),this.drawEchart2(),this.drawEchart3(),this.drawEchart4(),this.drawEchart5();for(var t=document.getElementsByClassName("share-con"),e=0;e<t.length;e++)$clamp(t[e],{clamp:2,useNativeClamp:!1})},methods:{drawEchart1:function(){s.a.init(this.$refs.tu).setOption({title:{text:"档位-车速柱形图",textStyle:{fontSize:12}},legend:{x:"center",y:"bottom",data:["车速：0","车速：10","车速：20","车速：30","车速：40","车速：50"]},xAxis:{type:"category",name:"档位",data:[""]},yAxis:{name:"车速频率",type:"value",axisLabel:{formatter:"{value} %"}},grid:{left:"3%",right:"14%",bottom:"18%",containLabel:!0},series:[{name:"车速：0",type:"bar",itemStyle:{color:"#ff7e50"},data:[14]},{name:"车速：10",type:"bar",itemStyle:{color:"#87cffb"},data:[10]},{name:"车速：20",type:"bar",itemStyle:{color:"#db70d7"},data:[11]},{name:"车速：30",type:"bar",itemStyle:{color:"#32cd32"},data:[17]},{name:"车速：40",type:"bar",itemStyle:{color:"#6495ed"},data:[28]},{name:"车速：50",type:"bar",itemStyle:{color:"#ff68b5"},data:[21]}]})},drawEchart2:function(){var t=s.a.init(this.$refs.pointers),e={legend:{x:"center",y:"bottom"},xAxis:{type:"category",name:"发动机转速",nameLocation:"middle",nameGap:30},yAxis:{name:"瞬时泵喷射量",nameLocation:"middle",nameGap:55},grid:{top:"10%",left:"8%",right:"14%",bottom:"18%",containLabel:!0},series:[n()({symbolSize:20,data:[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[289.45,55278],[304.91,55755],[324.98,52311],[390.44,56347],[204.47,68470],[222.08,69795],[28.65,106458],[43.96,106688],[58.77,105156],[81.2,104065],[106.33,103452],[124.69,108269],[175.51,159536],[198.09,159978],[136.08,159980]],type:"scatter"},"symbolSize",2)]};t.setOption(e)},drawEchart3:function(){var t=s.a.init(this.$refs.zhexian),e=["#5793f3","#32de7f","red"],a={color:e,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{top:"15%",left:"10%",right:"10%",bottom:"18%",containLabel:!0},xAxis:[{type:"category",nameLocation:"middle",nameGap:30,axisTick:{alignWithLabel:!0},data:["10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00"]}],yAxis:[{type:"value",name:"车速",nameLocation:"middle",nameGap:30,min:0,max:250,position:"right",offset:0,axisLine:{lineStyle:{color:e[0]}}},{type:"value",name:"发动机转速",nameLocation:"middle",nameGap:30,min:0,max:150,position:"right",offset:40,axisLine:{lineStyle:{color:e[1]}}},{type:"value",name:"海拔高度",min:0,max:25,splitNumber:5,position:"left",axisLine:{lineStyle:{color:e[2]}}}],series:[{name:"车速",type:"line",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"发动机转速",type:"line",yAxisIndex:1,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]};t.setOption(a)},drawEchart4:function(){var t=s.a.init(this.$refs.niuju),e=["#32de7f","Gold","red","blue"],a={color:e,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{top:"8%",left:"3%",right:"12%",bottom:"15%",containLabel:!0},xAxis:[{type:"category",nameLocation:"middle",nameGap:30,axisTick:{alignWithLabel:!0},data:["10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00"]}],yAxis:[{type:"value",name:"NOx传感器ppm值",nameLocation:"middle",nameGap:28,min:0,max:250,position:"right",offset:5,axisLine:{lineStyle:{color:e[0]}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"dashed"}}},{type:"value",name:"瞬时泵喷射量",nameLocation:"middle",nameGap:24,min:0,max:150,position:"right",offset:50,axisLine:{lineStyle:{color:e[1]}}},{type:"value",name:"有效扭矩",min:600,max:2e3,interval:100,position:"right",axisLabel:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:e[3]}}},{type:"value",name:"发动机转速",min:600,max:2e3,interval:100,position:"left",axisLine:{lineStyle:{color:e[2]}}}],series:[{name:"NOx传感器ppm值",type:"line",yAxisIndex:0,data:[20,60,70,80]},{name:"瞬时泵喷射量",type:"line",yAxisIndex:1,data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3,8.8]},{name:"发动机转速",type:"line",yAxisIndex:3,data:[600,800,900,1400,1745,1900],markLine:{symbol:1700}},{name:"有效扭矩",type:"line",yAxisIndex:2,symbol:"none",data:[1700,1700,1700,1700,1700,1700,1700,1700]}]};t.setOption(a)},drawEchart5:function(){var t={grid:{top:"8%",left:"10%",right:"12%",bottom:"15%",containLabel:!0},xAxis:{name:"发动机转速",nameLocation:"middle",nameGap:30,splitLine:{lineStyle:{type:"dashed"}},axisLine:{onZero:!1},type:"value",min:700,max:1200,interval:100},yAxis:{name:"发动机实际扭矩百分比",nameLocation:"middle",nameGap:30,type:"value",min:-40,max:40,interval:5,splitLine:{lineStyle:{type:"dashed"}},scale:!0},series:[{data:[[900,-23,16],[1200,30,36],[820,20,25],[100,23,16],[1100,25,36],[1e3,-10,25],[750,-5,25]],type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[2]+"%"},position:"top"}},itemStyle:{}}]};s.a.init(this.$refs.qipao).setOption(t)},share:function(){}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[a("div",{staticClass:"topEcharts"},[a("div",{staticClass:"echart1"},[t._m(0),t._v(" "),a("div",{ref:"tu",attrs:{id:"tu"}}),t._v(" "),a("div",{staticClass:"potit"},[t._v("\n\t\t\t\t\t发动机转速-瞬时泵喷射量散点图\n\t\t\t\t")]),t._v(" "),a("div",{ref:"pointers",attrs:{id:"pointers"}}),t._v(" "),a("div",{staticClass:"potit"},[t._v("\n\t\t\t\t\t发动机转速-发动机实际扭矩百分比气泡图\n\t\t\t\t")]),t._v(" "),a("div",{ref:"qipao",attrs:{id:"qipao"}}),t._v(" "),a("div",{staticClass:"potit"},[t._v("\n\t\t\t\t\t海拔高度-车速-发动机转速曲线图\n\t\t\t\t")]),t._v(" "),a("div",{ref:"zhexian",attrs:{id:"zhexian"}}),t._v(" "),a("div",{staticClass:"potit"},[t._v("\n\t\t\t\t\t转速-有效扭矩-nox传感器-瞬时泵射量\n\t\t\t\t")]),t._v(" "),a("div",{ref:"niuju",attrs:{id:"niuju"}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"titTop"},[e("span",{staticClass:"span1"},[this._v("发动机检测：桂KV8730")])]),this._v(" "),e("img",{staticClass:"picture",attrs:{src:a("QKo+"),alt:"img"}}),this._v(" "),e("div",{staticClass:"titBot"},[this._v("\n\t\t\t\t\t\t2018年ECU数据表\n\t\t\t\t\t")])])}]};var m=a("Z0/y")(d,c,!1,function(t){a("oTy3")},"data-v-4ba49a26",null);e.default=m.exports},liLe:function(t,e,a){t.exports={default:a("adMp"),__esModule:!0}},oTy3:function(t,e){},pBXl:function(t,e,a){var i=a("MITN");i(i.S+i.F*!a("M7ni"),"Object",{defineProperty:a("qRYU").f})}});
//# sourceMappingURL=2.5fc60c769382e81bc25d.js.map