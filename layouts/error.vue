<template>
  <div class="error-wrapper">
    <a-result status="500" title="500" sub-title="服务器发生了一些错误，请重试！">
      <template #extra>
        <a-button type="primary" @click="refreshTab"> 刷新页面 </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  methods: {
    refreshTab() {
      window.location.reload();
    }
  }
};
</script>
