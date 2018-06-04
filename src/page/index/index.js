import initcordova from '@/plugins/initCordova'
export default {
    data() {
        return {
            index: ''
        }
    },
    mounted() {
        let liWidth = $('.tab_ul li').width();
        let kongWidth = $('.kong').width();
        $('.tab_ul li').click(function() {
            let index = $(this).index()
            $('.kong').animate({
                left: index * liWidth + (liWidth - kongWidth) / 2
            }, 100);
        });
        let index = $('.tab_ul li.router-link-exact-active').prevAll().length;
        $('.kong').animate({
            left: index * liWidth + (liWidth - kongWidth) / 2
        }, 100);
        this.cid()
    },
    methods: {
        cid() {
            let that = this;
            setTimeout(() => {
                cordova.exec((function(data) {
                        console.log(data, 22222)
                        that.axios.get(`user/saveCid?cid=${data}`)
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        return data;
                    }), (function(err) {
                        console.log(err);
                    }),
                    'CommonPlugin', 'getClientId', ['', '', '']
                );
            }, 1000);

        }
    },
    watch: {
        $route(to, from) {
            // this.cid()
            setTimeout(() => {
                let liWidth = $('.tab_ul li').width();
                let kongWidth = $('.kong').width();
                let index = $('.tab_ul li.router-link-exact-active').prevAll().length;
                $('.kong').animate({
                    left: index * liWidth + (liWidth - kongWidth) / 2
                }, 100);
            }, 0);
        }
    },
}