<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <div class="section">
      <div class="section__item">Item 1</div>
      <div class="section__item">Item 2</div>
      <div class="section__item">Item 3</div>
      <div class="section__item">Item 4</div>
      <div class="section__item">Item 5</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="less" scoped>
  .title {
    font-size: 16px
  }
  .section {
    display: flex;
    flex: none;
    white-space: nowrap;
    width: 100%;
    height: 100px;
    overflow-x: auto;
    background-color: pink
  }
  .section__item {
    width: 200px;
    white-space: nowrap;

  }
</style>
