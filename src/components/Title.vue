<template>
  <div id="title">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.title = this.$route.name;
  },
};
</script>
<style lang="less" scoped>
#title {
  width: 100%;
  height: 143px;
  background: url("../assets/img/title.jpg");
  align-items: center;
  background-color: #34495e;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0;
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  span {
    color: #fff;
    font-size: 23px;
    font-weight: 900;
    line-height: 1;
    margin: 0;
    position: relative;
  }
}
</style>