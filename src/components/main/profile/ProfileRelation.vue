<template>
  <div class="relation">
    <div>
      <h4>4</h4>
      <span>动态</span>
    </div>
    <div class="hr"></div>
    <div>
      <h4>147</h4>
      <span>动态</span>
    </div>
    <div class="hr"></div>
    <div>
      <h4>2</h4>
      <span>动态</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileRelation"
}
</script>

<style lang="less" scoped>
.relation {
  box-sizing: border-box;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  //background-color: #e74c3c;

  .hr {
    height: 20px;
    border-left: 1px solid #a5a5a5;
  }

  div {
    font-size: 16px;
    text-align: center;
    h4 {
      margin: 0;
      font-weight: 600;
    }
    span {
      color: #95a5a6;
    }
  }

}
</style>
