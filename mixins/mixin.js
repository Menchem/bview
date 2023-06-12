export const mixin = {
    data(){
      return {
        zhCN: ['首页', '列表', '工具箱', '更多'],
        en: ['MY HOME', 'MY LISTS', 'MY TOOLS', 'MY MORE']
      }
    },
    methods: {
        getRouter(param){
          this.$router.push(param);
        },
        targetRouter(param){
          window.open('/detail/' + param);
        }
    } 
}