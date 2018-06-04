import timefive from '@/assets/img/666666.jpg'
import xing from '@/assets/img/xing.png'
import share_a from '@/assets/img/share_a.png'
// import AMap from 'AMap'
export default {
    data() {
        return {
            //分享icon
            share_a: share_a,
            xing: xing,
            onLine: true,
            show: true
        }
    },
    mounted() {
        if (navigator.onLine) {
            //在线状态
            this.onLine = true;
        } else {
            //离线状态
            this.onLine = false;
        }
    },
    methods: {
        path() {
            this.show = false;
            //     const map = new AMap.Map('container', {
            //         resizeEnable: true,
            //         zoom: 14,
            //         center: [108.2908770000002, 22.765673]
            //     });
            //     //加载公交换乘插件
            //     AMap.service(["AMap.Transfer"], function() {
            //         var transOptions = {
            //             map: map,
            //             city: '南宁市', //公交城市
            //             //cityd:'乌鲁木齐',
            //             policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
            //         };
            //         //构造公交换乘类
            //         var trans = new AMap.Transfer(transOptions);
            //         //根据起、终点坐标查询公交换乘路线
            //         trans.search([{ keyword: '南宁市政府' }, { keyword: '广西创思特汽车服务有限责任公司' }], function(status, result) {});
            //     });
        },
        loadmap() {
            this.show = true
                // const map = new AMap.Map('container', {
                //     resizeEnable: true,
                //     zoom: 14,
                //     center: [108.2908770000002, 22.765673]
                // });
                // const marker = new AMap.Marker({
                //     position: [108.2908770000002, 22.765673],
                //     map: map,
                //     // clickable: true,
                // });
                // var circle = new AMap.Circle({
                //         center: [108.2908770000002, 22.765673],
                //         redius: 100,
                //         fillOpacity: 0.1,
                //         fillColor: '#09f',
                //         strokeColor: '#09f',
                //         strokeWeight: 1,
                //         map: map
                //     })
                // circle.setMap(map);
                // AMap.event.addListener(marker, 'click', function() {
                //     infoWindow.open(map, marker.getPosition());
                // });

            // var content = '<div class="info_box">' +
            //     `<img class="timefive" src="${timefive}" alt="">` +
            //     '<p class="name_tit">修理厂名称：</p>' +
            //     '<p class="name">广州创思特汽车服务有限责任公司</p>' +
            //     '<div class="xingji">' +
            //     '<img src=' + xing + ' alt="">' +
            //     '<img src=' + xing + ' alt="">' +
            //     '<img src=' + xing + ' alt="">' +
            //     '<img src=' + xing + ' alt="">' +
            //     '</div>' +
            //     '<div class="pingjia">评价：四星</div>' +
            //     '</div>'
            // let infoWindow = new AMap.InfoWindow({
            //     content: content,
            //     autoMove: true,
            //     closeWhenClickMap: true,
            //     offset: {
            //         x: -0,
            //         y: -20
            //     }
            // });
            //关闭信息窗体
            // function closeInfoWindow() {
            //     map.clearInfoWindow();
            // }
        },
        //分享
        share() {},
    },

    watch: { //监听
        $route(to, from) { //检测路由变化

        },
    }
}