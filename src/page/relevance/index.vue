<template>
<!-- 维保模块 -->
  <div class="relation-control">
    <h3>玉柴翌能系统车辆维修服务</h3>
     <!-- <div v-if="onLine" id="container" tabindex="0"></div> -->
     <div class="container">
       <img class="mapone" v-show="show" src="../../assets/img/map.png" alt="">
       <img class="maptwo" v-show="!show" src="../../assets/img/tomap.png" alt="">
     </div>
     <div class="name_box">
       <div class="names">广西创思特汽车服务有限责任公司</div>
       <div class="xingji"><img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt=""> <span><i class="iconfont icon-detail"></i>反馈</span>
       </div>
       <div class="path" @touchstart='path'>
         <img src="../../assets/img/path.png" alt="">
       </div>
     </div>
     <div class="weizhi">
       <div class="weizhi_box">
         <div class="icon"> <img src="../../assets/img/3-23_03.png" alt=""></div>
         <div class="cont" @click="loadmap">南宁市南站大道与沙井互通式立交桥跨线桥交叉口北</div>
         <div class="photo"><img src="../../assets/img/phone.png" alt=""></div>
       </div>
     </div>
     <div class="fuwucont_box">
       <h4>服务范围</h4>
       <p>更换机油机滤  检查防冻液  检查前部皮带   检查雨刮喷水情况</p>
     </div>
     <div class="fuwupingjia">
       <p class="tit">服务评分</p>
       <div class="fenshu_box">
         <div class="fenshu">
           <span>4.7</span>分
         </div>
         <div class="img_box">
           <img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt=""><img :src="xing" alt="">
         </div>
         <span class="pinlun">43条评论</span>
       </div>
       <div class="xingji">
         <div>5 <i class="iconfont icon-shoucang"></i><span></span></div>
         <div>4 <i class="iconfont icon-shoucang"></i><span></span></div>
         <div>3 <i class="iconfont icon-shoucang"></i><span></span></div>
         <div>2 <i class="iconfont icon-shoucang"></i><span></span></div>
         <div>1 <i class="iconfont icon-shoucang"></i><span></span></div>
       </div>
     </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>