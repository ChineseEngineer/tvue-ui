<template>
  <div class="tv-cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cell'
}
</script>

<style lang="postcss">
  @component-namespace tv {
    @component cell {
      color: lightcoral;
      @descendent element {
      }
      @modifier modifier {
      }
      @when active {
      }
    }
  }
</style>
