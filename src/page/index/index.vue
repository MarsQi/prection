<template>
  <div class="index_content">
      <div class="nav_box">
      <div class="tab_box">
        <ul class="tab_ul">
          <router-link to="/" tag="li">数据</router-link>
          <router-link to="/explore" tag="li">工况</router-link>
          <router-link to="/discern" tag="li">诊断</router-link>
          <router-link to="/relevance" tag="li">维保</router-link>
          <router-link to="/gather" tag="li">知识</router-link>
        </ul>
        <div class="kong"></div>
      </div>
      </div>
      <div class="content_box">
        <router-view></router-view>
      </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>

