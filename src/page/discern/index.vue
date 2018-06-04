<template>
  <div class="discern clearfix">
  <!-- 诊断 -->
    <div class="discern-control">
    <!-- 渲染dom后台返回数据 -->
      <div v-for="(item,index) in list" :key="index" class="row engine-state" @click="goRouter(item)">
        <p class="discern-title" v-cloak>{{item.title}}</p>
        <div class="item">
          <div class="item-img">
            <img :src="item.imge" alt="img">
          </div>
          <div class="item-form">
            <p class="form-title" v-cloak>{{item.formData[0].name+'：'+item.formData[0].value}}</p>
            <!--发送机故障报告-->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <th v-cloak>{{item.formData[0].name}}</th>
                <td v-cloak>{{item.formData[0].value}}</td>
                <th v-cloak>{{item.formData[1].name}}</th>
                <td v-cloak>{{item.formData[1].value}}</td>
              </tr>
              <tr>
                <th v-cloak>{{item.formData[2].name}}</th>
                <td v-cloak>{{item.formData[2].value}}</td>
                <th v-cloak>{{item.formData[3].name}}</th>
                <td v-cloak>{{item.formData[3].value}}</td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="table-col">
              <tr v-if="index > 3 ? true : false" v-for="(i,index) in item.formData" :key="index">
                <th v-cloak>{{i.name}}</th>
                <td v-cloak>{{i.value}}</td>
              </tr>
            </table>
          </div>
          <!--发送机故障概述-->
          <div class="item-detail">
            <div class="shares"  @click.stop="share(item)"><img :src="share_a" alt="分享"></div>
            <p class="engine-state-content-con" v-cloak>{{item.remark}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped src="./index.css"></style>