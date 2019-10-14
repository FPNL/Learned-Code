<template>
<div>
  <div ref="porto" class="fl-porto">
    ...
  <a class="porto-button" @click="scrollMeTo('porto')">Porto, Portugal</a>
</div>
</template>

<script>
  methods: {
  scrollMeTo(refName) {
    // var element = this.$refs[refName];
    var element = this.$refs.porto;
    var top = element.offsetTop;

    window.scrollTo(0, top);
  }
}
</script>
