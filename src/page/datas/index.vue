<template>
	<div class="datas">
			<div class="tit">
				<div class="left">
					<div class="title">
						发动机检测：桂KV8730
					</div>					
				</div>			
			</div>
		<div class="charttop">		
			<div class="midimg">
				<img :src="imgurl" alt="" />
			</div>
			<div class="sutit">
				最近七天引擎震动分值表...
			</div>
			<div ref='echo' class="a1" @click="alertprop" style="background: white;"></div>
			<div class="hide" :class="{'topswip':flag}">
				<i class="iconfont icon-guanbi" @click="flag=false">X</i>
				<div class="item" v-for="(item,index) in yingqing" :key="index">
					<div class="month">
						<h3 v-cloak>{{item.month}}</h3>
						<span>{{item.daydur}}</span>
					</div>
					<div class="towd div1">
						<span v-cloak>{{item.second}}</span>
					</div>
					<div class="threed div1">
						<span v-cloak>{{item.third}}</span>
					</div>
					<div class="fourd div1">
						<span v-cloak>{{item.four}}</span>
					</div>
				</div>
				<div class="item">
					<div class="month1">
						<h3>总计</h3>
					</div>
					<div class="towd div1">
						<span>3010</span>
					</div>
					<div class="threed div1">
						<span>3819.0</span>
					</div>
					<div class="fourd div1">
						<span>-3819.0</span>
					</div>
				</div>
			</div>
			<!-- <div class="chfooter">
				<div class="inner">
					<img :src="shareimg" alt="分享" @click=.stop="share">
          <p class="share-con">震动感知器是利用加速度传感器来量测发动机的加速度变化，也就是震动。工程师在调校震动感知器时会把震动的震动模式写入ECU中，一旦震动感知器侦测出该震动模式，ECU则判定发动机震动，随即延后点火提前角。目前较先进的震动感知器甚至能判定是哪一个汽缸震动，而针对该汽缸个别延后点火提前预警</p>
				</div>
			</div> -->
		</div>
		<!--<div class="charttop">
			<div class="tit">
				<div class="left">
					<div class="title">
						其他车辆传感器原始数据-->
		<!--</div>-->
		<!--<div class="sectitle">
						2018年三月其他车辆传感器原始数据图例...
					</div>-->
		<!--</div>-->
		<!--<div class="rig">
					<img :src="imgurl" alt="" @click="share"/>
				</div>-->
		<!--</div>
			<div ref='echo2' class="a1"></div>
			<div class="footer1">
				<div class="item" >
						<div class="month1">
							  <h3>总计</h3>							  
						</div>
						<div class="towd div1">
							<span>0.0</span>
						</div>
						<div class="threed div1">
							<span>3819.0</span>
						</div>
						<div class="fourd div1">
							<span>-3819.0</span>
						</div>
					</div>
			</div>			
		</div>-->
		<div class="echarts_one">
			<div id="echarts"></div>
		</div>
		<div class="echarts_two">
			<div id="echartst"></div>
		</div>
		<div class="echarts_three">
			<div id="echartsthird"></div>
		</div>
		<div class="echarts_four">
			<div id="echartsfour"></div>
		</div>
	</div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less"></style>