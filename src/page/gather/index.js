import share_a from '@/assets/img/share_a.png'
import timgOne from '@/assets/img/timg (2).jpg'
import timgTwo from '@/assets/img/timg (3).jpg'
import timgThree from '@/assets/img/timg (4).jpg'
import axios from '@/axios.js'
import bus from '@/bus.js'
export default {
    data() {
        return {
            //模拟后台数据
            resdata: [],
            //分享icon
            share_a: share_a,
            timgOne,
            timgTwo
        }
    },
    beforeMount() {
        this.indexDBinit();
    },
    mounted() {
        if (navigator.onLine) {
            //执行在线状态时的任务
            this.ajaxData();
        } else {
            //执行离线状态时的任务
            let that = this;
            setTimeout(function() {
                dbObject.select(1); //1为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.resdata = data.data
            })
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISOO";
            dbParams.db_store_name = "gather";
            dbObject.init(dbParams);
        },
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
        //进入详情
        enteritem(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: item.id,
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
                "imageurl": item.imge ? item.imge : ""
            };
            let url = null;
            let className = null;
            this.SharePlugins(className, url, opts);
        },
        ajaxData() {
            axios.get('/article/getDataByPage?type=1').then(res => {
                this.resdata = res.data.data;
                dbObject.put({ data: this.resdata }, 1); //eg
                this.$nextTick(function() {
                    //dom已更新
                    var con = document.getElementsByClassName('engine-state-content-con');
                    for (var i = 0; i < con.length; i++) {
                        $clamp(con[i], {
                            clamp: 2,
                            useNativeClamp: false
                        });
                    }
                })
            })
        },
    },
    watch: { //监听
        $route(to, from) { //检测路由变化

        },
    }
}