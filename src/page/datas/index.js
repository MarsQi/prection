import echarts from 'echarts';
import bgimg from '@/assets/img/timg.jpg'
import share_b1 from '@/assets/img/share_a.png'
export default {
  data() {
    return {
      imgurl: bgimg,
      shareimg: share_b1,
      flag: false,
      yingqing: [{
          month: '3月',
          daydur: '03.01-03.31',
          second: '3200',
          third: '75.00',
          four: '-75.00'
        },
        {
          month: '2月',
          daydur: '02.01-02.28',
          second: '3560',
          third: '1839.00',
          four: '-1839.00'
        },
        {
          month: '1月',
          daydur: '01.01-01.31',
          second: '2720',
          third: '75.00',
          four: '-75.00'
        }
      ]
    }
  },
  methods: {
    indexDBinit() {
      var dbParams = new Object();
      dbParams.db_name = "SISOO";
      dbParams.db_version = 1;
      dbObject.init(dbParams);
    },
    alertprop() {
      //				alert('出弹窗！')
      this.flag = true;
    },
    share() {},
    drawechart1() {
      let myChart = echarts.init(this.$refs.echo);
      var option = {
        title: {
          //						text: '引擎震动',
          //						textStyle: {
          //							color: "#644"
          //						},
          //						subtextStyle: {
          //							color: '#ccc',
          //							fontSize:14,	
          //							lineHeight:-20
          //						},
          //						show: true,
          //						subtext: '最近七天引擎震动分值表...'
        },
        xAxis: {
          type: 'category',
          data: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '今天'],
          //					 boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ccc',
              width: 1, //这里是坐标轴的宽度
            }
          },
          nameLocation: 'end',
          axisLabel: {
            rotate: 0
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false,

        },
        grid: {
          left: '0%',
          right: '0%',
          top: '5%',

          //                  bottom: '20%',
          // containLabel: true
        },
        series: [{
          data: [0, 0, 0, 0, 0, 45, 2],
          type: 'line',
          smooth: true,
          symbolSize: 8,
          color: ['#ffc400'], //折线条的颜色
          label: {
            normal: {
              show: true,
              formatter: '{c}' + '分'
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgb(254,231,223)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'white' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            origin: 'auto',
            opacity: .8,
          }
        }],
      };
      myChart.setOption(option);
    },
    addecharto() {
      let myChart = echarts.init(document.getElementById('echarts'));
      let option = {
        title: {
          text: '发动机实际扭矩百分比2D柱形图',
          top: '3%',
          left: '2%',
          textStyle: {
            fontSize: 14,
            color: '#c0c0c0',
            fontWeight: 400
          }
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '发动机实际扭矩百分比',
          nameGap: 50,
          nameLocation: 'middle',
          boundaryGap: ['20%', '20%'],
          data: ['0', '0-10%', '10-20%', '20-30%', '30-40%', '40-50%', '50-60%', '60-70%', '70-80%'],
          axisTick: {
            alignWithLabel: true,
            interval: 0,
            length: 5
          },
          axisLabel: {
            rotate: 50,
            textStyle: {
              rotate: 60,
              interval: 0,
              fontSize: 12,
              color: '#666', //坐标值得具体的颜色
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '频次百分比%',
          nameLocation: 'middle',
          nameGap: 30
        }],
        series: [{
          name: '频次百分比',
          type: 'bar',
          barWidth: '60%',
          data: [8.4, 31.4, 28.1, 2.3, 2.5, 11.0, 10.9, 5.2, 3]

        }]
      };
      myChart.setOption(option);
    },
    addechartt() {
      let myChart = echarts.init(document.getElementById('echartst'));
      let option = {
        title: {
          text: '油门开度2D柱形图',
          top: '3%',
          left: '2%',
          textStyle: {
            fontSize: 14,
            color: '#c0c0c0',
            fontWeight: 400
          }

        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '油门开度',
          nameGap: 30,
          nameLocation: 'middle',
          boundaryGap: ['20%', '20%'],
          data: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
          axisTick: {
            alignWithLabel: true,
            interval: 0,
            length: 5
          },
          axisLabel: {
            rotate: 50,
            textStyle: {
              rotate: 60,
              interval: 0,
              fontSize: 12,
              color: '#666', //坐标值得具体的颜色
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '频次百分比%',
          nameLocation: 'middle',
          nameGap: 30
        }],
        series: [{
          name: '频次百分比',
          type: 'bar',
          barWidth: '60%',
          data: [69, 5.4, 4.4, 3.3, 3.2, 2.8, 4.3, 4.4, 3, 4.3]

        }]
      };
      myChart.setOption(option);
    },
    addechartd() {
      let myChart = echarts.init(document.getElementById('echartsthird'));
      let option = {
        title: {
          text: '瞬时泵喷射量2D柱形图',
          top: '3%',
          left: '2%',
          textStyle: {
            fontSize: 14,
            color: '#c0c0c0',
            fontWeight: 400
          }
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '瞬时泵喷射量',
          nameGap: 50,
          nameLocation: 'middle',
          boundaryGap: ['20%', '20%'],
          data: ['0-200', '200-600', '600-1000', '1000-1400'],
          axisTick: {
            alignWithLabel: true,
            interval: 0,
            length: 5
          },
          axisLabel: {
            rotate: 20,
            textStyle: {
              rotate: 30,
              interval: 0,
              fontSize: 12,
              color: '#666', //坐标值得具体的颜色
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '频次百分比%',
          nameLocation: 'middle',
          nameGap: 30
        }],
        series: [{
          name: '频次百分比',
          type: 'bar',
          barWidth: '80%',
          color: ['rgb(51,152,219)'], //折线条的颜色
          label: {
            normal: {
              show: true,
              formatter: '{c}' + '%',
              position: 'top',
              color: 'black'
            }
          },
          data: [74, 14.8, 10.9, 0.3]

        }]
      };
      myChart.setOption(option);
    },
    addechartf() {
      let myChart = echarts.init(document.getElementById('echartsfour'));
      let option = {
        title: {
          text: '车速2D柱形图',
          top: '3%',
          left: '2%',
          textStyle: {
            fontSize: 14,
            color: '#c0c0c0',
            fontWeight: 400
          }
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '车速',
          nameGap: 30,
          nameLocation: 'middle',
          boundaryGap: ['20%', '20%'],
          data: ['0', '10', '20', '30', '40', '50'],
          axisTick: {
            alignWithLabel: true,
            interval: 0,
            length: 5
          },
          axisLabel: {
            rotate: 40,
            textStyle: {
              rotate: 30,
              interval: 0,
              fontSize: 12,
              color: '#666', //坐标值得具体的颜色
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '频次百分比%',
          nameLocation: 'middle',
          nameGap: 30
        }],
        series: [{
          name: '频次百分比',
          type: 'bar',
          barWidth: '40%',
          color: ['rgb(51,152,219)'], //折线条的颜色
          label: {
            normal: {
              show: true,
              formatter: '{c}' + '%',
              position: 'top',
              color: 'black'
            }
          },
          data: [13.8, 9.7, 11.1, 16.7, 27.6, 21.1]

        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.indexDBinit();
    this.addecharto();
    this.addechartt();
    this.addechartd();
    this.addechartf();
    this.drawechart1();
    var con = document.getElementsByClassName('share-con');
    for (var i = 0; i < con.length; i++) {
      $clamp(con[i], {
        clamp: 3,
        useNativeClamp: false
      });
    }
    //			this.drawechart2();
    //			if (!dpr && !scale) {  
    //var isAndroid = win.navigator.appVersion.match(/android/gi);  
    //var isIPhone = win.navigator.appVersion.match(/iphone/gi);  
    //var devicePixelRatio = win.devicePixelRatio;  
    //if (isIPhone) {  
    //  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案  
    //  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                  
    //    dpr = 3;  
    //  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){  
    //    dpr = 2;  
    //  } else {  
    //    dpr = 1;  
    //  }  
    //} else {  
    //  // 其他设备下，仍旧使用1倍的方案  
    //  dpr = 1;  
    //}  
    //scale = 1 / dpr;  
    //}

  }
}
