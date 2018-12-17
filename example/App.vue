<template>
  <the-app-layout />
</template>

<script>
import TheAppLayout from '@/index.js'

export default {
  name: 'App',
  components: {
    TheAppLayout
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: #f0f2f5;
    display: flex;
    padding: 24px 16px;
  }

  .aside {
    .logo {
      height: 64px;
      line-height: 64px;
      white-space: 5px;
      background-color: #ff9800;
      color: white;
      font-size: 30px;
      font-style: italic;
      font-weight: 900;
      text-align: center;
    }
  }

  .router-view {
    background-color: #ffffff;
    width: 100%;
    padding: 20px;
  }
</style>
