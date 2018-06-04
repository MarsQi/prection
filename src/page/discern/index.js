import share_a from '@/assets/img/share_a.png';
import axios from '@/axios.js'
import img from '@/assets/img/timg (2).jpg'
export default {
    data() {
        return {
            //分享icon
            share_a: share_a,
            list: [{
                id: 12,
                title: "引擎故障预警",
                remark: "亮起了大大的红灯，可能意味着火花塞拥塞，油滤器堵塞，引擎计算机设置了错误的电子驱动指更多问题",
                day: "22",
                date: "2018.13",
                imge: img,
                formData: [{
                    value: "P0016",
                    name: "故障代码"
                }, {
                    value: "曲轴和凸轮信号偏差过大",
                    name: "故障名称"
                }, {
                    value: "Ⅱ级",
                    name: "故障等级"
                }, {
                    value: "2018年3月20日",
                    name: "更新日期"
                }, {
                    value: "发动机无法启动或启动后不能正常运转",
                    name: "故障症状"
                }, {
                    value: "发动机启动及运行过程中，需同时监测到凸轮轴、曲轴信号，系统才能计算出各缸工作上止点，以准确的7、提供喷油时刻。",
                    name: "故障原理"
                }, {
                    value: "曲轴传感器与凸轮轴传感器信号不同步",
                    name: "故障原因"
                }, {
                    value: "检查同步信号，确认曲轴和凸轮轴信号轮的初始安装位置。",
                    name: "维修建议"
                }, {
                    value: "memo",
                    name: "备注"
                }]
            }],
            dataList: []
        }
    },
    mounted() {
        var con = document.getElementsByClassName('engine-state-content-con');
        for (var i = 0; i < con.length; i++) {
            $clamp(con[i], {
                clamp: 2,
                useNativeClamp: false
            });
        }
    },
    methods: {
        /*分享调取*/
        SharePlugins(className, url, opts) {
            cordova.exec(
                function(request) {},
                function(e) {
                    // alert(e);
                },
                "SharePlugin", "start", [className, url, opts]
            );
        },
        //跳入详情
        goRouter(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: 12,
                    callback: true
                }
            })
        },
        //分享
        share(item) {
            let opts = {
                "title": item.title,
                "content": item.remark,
                "url": 'http://suneee.dcp.weilian.cn/perception/index.html#/detail?id=' + item.id + "&callback=" + false,
                "imageurl": item.imge ? 'http://suneee.dcp.weilian.cn/perception' + item.imge : ""
            };
            let url = null;
            let className = null;
            this.SharePlugins(className, url, opts);
        },
        //获取数据
        ajaxData() {
            this.axios.get('msg').then(res => {
                this.dataList = res.data.articles;
                this.$nextTick(function() {
                    //dom已更新
                    var con = document.getElementsByClassName('engine-state-content-con');
                    for (var i = 0; i < con.length; i++) {
                        $clamp(con[i], {
                            clamp: 4,
                            useNativeClamp: false
                        });
                    }
                })
            })
        },
    }
}