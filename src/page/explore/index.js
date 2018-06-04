import echarts from 'echarts';
import share_a from '@/assets/img/share_a.png';
export default {
	data() {
		return {
			//分享icon
			share_a: share_a,
		}
	},
	components: {

	},
	mounted() {
		this.drawEchart1();
		this.drawEchart2();
		this.drawEchart3();
		this.drawEchart4();
		this.drawEchart5();
		var con = document.getElementsByClassName('share-con');
		for(var i = 0; i < con.length; i++) {
			$clamp(con[i], {
				clamp: 2,
				useNativeClamp: false
			});
		};
		var that = this;
	},
	methods: {
		// 柱状图
		drawEchart1() {
			let chart = echarts.init(this.$refs.tu);
			var option = {
				title: {
					text: '档位-车速柱形图',
					textStyle: {
						fontSize: 12
					}
				},
				legend: {
					x: 'center',
					y: 'bottom',
					data: ['车速：0', '车速：10', '车速：20', '车速：30', '车速：40', '车速：50'],
					// itemWidth: 6,
					// itemHeight: 4,
					// textStyle: {
					//   fontSize: 6
					// },
					// width: '250',
					// itemGap: 0,
					// borderColor: '#ccc',
					// borderWidth: 1
				},
				xAxis: {
					type: 'category',
					name: '档位',
					data: ['']
				},
				yAxis: {
					name: '车速频率',
					type: 'value',
					axisLabel: {
						formatter: '{value} %'
					}
				},
				grid: {
					left: '3%',
					right: '14%',
					bottom: '18%',
					containLabel: true
				},
				series: [{
						name: '车速：0',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#ff7e50'
						},
						data: [14]
					},
					{
						name: '车速：10',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#87cffb'
						},
						data: [10]
					},
					{
						name: '车速：20',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#db70d7'
						},
						data: [11]
					},
					{
						name: '车速：30',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#32cd32'
						},
						data: [17]
					},
					{
						name: '车速：40',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#6495ed'
						},
						data: [28]
					},
					{
						name: '车速：50',
						type: 'bar',
						itemStyle: {
							// 更改柱状图颜色
							color: '#ff68b5'
						},
						data: [21]
					}
				]
			};
			chart.setOption(option);

		},
		// 散点图
		drawEchart2() {
			let pointerChart = echarts.init(this.$refs.pointers);
			var option = {
				legend: {
					x: 'center',
					y: 'bottom',
				},
				xAxis: {
					type: 'category',
					name: '发动机转速',
					nameLocation: 'middle',
					nameGap: 30
				},
				yAxis: {
					name: '瞬时泵喷射量',
					nameLocation: 'middle',
					nameGap: 55
					// type: 'value',
					// axisLabel: {
					//     formatter: '{value}'
					// }
				},
				grid: {
					top: '10%',
					left: '8%',
					right: '14%',
					bottom: '18%',
					containLabel: true
				},
				series: [{
					symbolSize: 20,
					data: [
						[10.0, 8.04],
						[8.0, 6.95],
						[13.0, 7.58],
						[9.0, 8.81],
						[11.0, 8.33],
						[14.0, 9.96],
						[6.0, 7.24],
						[289.45, 55278],
						[304.91, 55755],
						[324.98, 52311],
						[390.44, 56347],
						[204.47, 68470],
						[222.08, 69795],
						[28.65, 106458],
						[43.96, 106688],
						[58.77, 105156],
						[81.2, 104065],
						[106.33, 103452],
						[124.69, 108269],
						[175.51, 159536],
						[198.09, 159978],
						[136.08, 159980],
					],
					type: 'scatter',
					symbolSize: 2,
				}]
			};
			pointerChart.setOption(option);
		},
		drawEchart3() {
			let zhexianChart = echarts.init(this.$refs.zhexian);
			var colors = ['#5793f3', '#32de7f', 'red'];
			var option = {
				color: colors,
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				grid: {
					top: '15%',
					left: '10%',
					right: '10%',
					bottom: '18%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					nameLocation: 'middle',
					nameGap: 30,
					axisTick: {
						alignWithLabel: true
					},
					data: ['10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00']
				}],
				yAxis: [{
						type: 'value',
						name: '车速',
						nameLocation: 'middle',
						nameGap: 30,
						min: 0,
						max: 250,
						position: 'right',
						offset: 0,
						axisLine: {
							lineStyle: {
								color: colors[0]
							}
						},
						// axisLabel: {
						//     formatter: '{value}'
						// }
					},
					{
						type: 'value',
						name: '发动机转速',
						nameLocation: 'middle',
						nameGap: 30,
						min: 0,
						max: 150,
						position: 'right',
						offset: 40,
						axisLine: {
							lineStyle: {
								color: colors[1]
							}
						},
						// axisLabel: {
						//     formatter: '{value}'
						// }
					},
					{
						type: 'value',
						name: '海拔高度',
						min: 0,
						max: 25,
						splitNumber: 5,
						position: 'left',
						axisLine: {
							lineStyle: {
								color: colors[2]
							}
						},
						// axisLabel: {
						//     formatter: '{value} °C'
						// }
					}
				],
				series: [{
						name: '车速',
						type: 'line',
						data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
					},
					{
						name: '发动机转速',
						type: 'line',
						yAxisIndex: 1,
						data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
					}
				]
			};
			zhexianChart.setOption(option);

		},
		drawEchart4() {
			let zhexianChart = echarts.init(this.$refs.niuju);
			var colors = ['#32de7f', 'Gold', 'red', 'blue'];
			var option = {
				color: colors,
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				grid: {
					top: '8%',
					left: '3%',
					right: '12%',
					bottom: '15%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					nameLocation: 'middle',
					nameGap: 30,
					axisTick: {
						alignWithLabel: true
					},
					data: ['10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00']
				}],
				yAxis: [{
						type: 'value',
						name: 'NOx传感器ppm值',
						nameLocation: 'middle',
						nameGap: 28,
						min: 0,
						max: 250,
						position: 'right',
						offset: 5,
						axisLine: {
							lineStyle: {
								color: colors[0]
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#ccc'],
								width: 1,
								type: 'dashed',
							},
						},
					},
					{
						type: 'value',
						name: '瞬时泵喷射量',
						nameLocation: 'middle',
						nameGap: 24,
						min: 0,
						max: 150,
						position: 'right',
						offset: 50,
						axisLine: {
							lineStyle: {
								color: colors[1]
							}
						},
					},
					{
						type: 'value',
						name: '有效扭矩',
						min: 600,
						max: 2000,
						//                      splitNumber: 10,
						interval: 100,
						position: 'right',
						axisLabel: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: colors[3]
							}
						},
					},
					{
						type: 'value',
						name: '发动机转速',
						min: 600,
						max: 2000,
						interval: 100,
						position: 'left',
						axisLine: {
							lineStyle: {
								color: colors[2]
							}
						},
					}
				],
				series: [{
						name: 'NOx传感器ppm值',
						type: 'line',
						yAxisIndex: 0,
						data: [20, 60, 70, 80]
					}, {
						name: '瞬时泵喷射量',
						type: 'line',
						yAxisIndex: 1,
						data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 8.8]
					},
					{
						name: '发动机转速',
						type: 'line',
						yAxisIndex: 3,
						data: [600, 800, 900, 1400, 1745, 1900],
						markLine: {
							symbol: 1700
						},
					},

					{
						name: '有效扭矩',
						type: 'line',
						yAxisIndex: 2,
						symbol: 'none',
						data: [1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700]
					},
				]
			};
			zhexianChart.setOption(option);
		},
		// 柱状图
		drawEchart5() {
			let chart = echarts.init(this.$refs.qipao);
			var data = [
				[
					[900, -23, 16],
					[1200, 30, 36],
					[820, 20, 25],
					[100, 23, 16],
					[1100, 25, 36],
					[1000, -10, 25],
					[750, -5, 25]
				],

			];
			var option = {
				//backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
				//      offset: 0,
				//      color: '#f7f8fa'
				//  }, {
				//      offset: 1,
				//      color: '#cdd0d5'
				//  }]), 
				grid: {
					top: '8%',
					left: '10%',
					right: '12%',
					bottom: '15%',
					containLabel: true
				},
				xAxis: {
					name: '发动机转速',
					nameLocation: 'middle',
					nameGap: 30,
					splitLine: {
						lineStyle: {
							type: 'dashed'
						}
					},
					axisLine: {
						onZero: false
					},
					type: 'value',
					min: 700,
					max: 1200,
					//splitNumber: 10,
					interval: 100,
				},
				yAxis: {
					name: '发动机实际扭矩百分比',
					nameLocation: 'middle',
					nameGap: 30,
					type: 'value',
					min: -40,
					max: 40,
					//                      splitNumber: 10,
					interval: 5,
					splitLine: {
						lineStyle: {
							type: 'dashed'
						}
					},
					scale: true,

				},
				series: [{					
					data: data[0],
					type: 'scatter',
					symbolSize: function(data) {
						return data[2];
					},
					label: {
						emphasis: {
							show: true,
							formatter: function(param) {
								return param.data[2]+'%';
							},
							position: 'top'
						}
					},
					itemStyle: {
						//          normal: {
						//              shadowBlur: 10,
						//              shadowColor: 'rgba(120, 36, 50, 0.5)',
						//              shadowOffsetY: 5,
						//              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
						//                  offset: 0,
						//                  color: 'rgb(251, 118, 123)'
						//              }, {
						//                  offset: 1,
						//                  color: 'rgb(204, 46, 72)'
						//              }])
						//          }
					}
				}]
			};
			chart.setOption(option);

		},
		share() {}
	}
}