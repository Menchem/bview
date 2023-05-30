<template>
  <a-menu mode="horizontal">
            <a-menu-item @click="getRouter('/')"><a-icon type="home" />{{zhCN[0]}}</a-menu-item>
            <a-menu-item><a-icon type="profile" />{{zhCN[1]}}</a-menu-item>
            <a-menu-item><a-icon type="tool" />{{zhCN[2]}}</a-menu-item>
            <a-menu-item><a-icon type="bars" />{{zhCN[3]}}</a-menu-item>
  </a-menu>
</template>

<script>
import {mixin} from '@/mixins/mixin';
export default {
    name: "MenuList",
    mixins: [mixin]
}
</script>

<style>

</style>