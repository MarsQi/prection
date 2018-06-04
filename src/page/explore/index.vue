<template>
	<div class='explore'>
		<div class='topEcharts'>
			<div class="echart1">
				<!--标题-->
				<div class='title'>
					<div class='titTop'>
						<span class='span1'>发动机检测：桂KV8730</span>
					</div>
					<!--图片-->
					<img class='picture' src="../../assets/img/timg (3).jpg" alt="img">
					<div class='titBot'>
						2018年ECU数据表
					</div>
				</div>
				<!--echarts图表-->
				<div ref='tu' id="tu"></div>
				<!--echarts散点图表-->
				<div class='potit'>
					发动机转速-瞬时泵喷射量散点图
				</div>
				<div ref='pointers' id="pointers"></div>
				<div class='potit'>
					发动机转速-发动机实际扭矩百分比气泡图
				</div>
				<div ref='qipao' id="qipao"></div>
				<!--echarts折现图表-->
				<div class='potit'>
					海拔高度-车速-发动机转速曲线图
				</div>
				<div ref='zhexian' id="zhexian"></div>
				<!--echarts转速-有效扭矩-nox传感器-瞬时泵射量-->
				<div class='potit'>
					转速-有效扭矩-nox传感器-瞬时泵射量
				</div>
				<div ref='niuju' id="niuju"></div>
				
				<!--简介分享-->
				<!--<div class='share'>
          <img :src="share_a" alt="分享" @click.stop="share">
          <p class="share-con">玉柴翌能是玉柴机器“十一五”期间启动的项目通过几年努力和不断地实验，技术逐渐成熟。</p>
        </div>-->
			</div>
		</div>
	</div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>