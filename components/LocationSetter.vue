<template>
  <div id="locationSetBar" class="flex gap-8 items-center">
    <div class="flex gap-4">
      <a-input-number
        style="width: 8em"
        :size="'small'"
        :min="-180"
        :max="180"
        :step="0.0001"
        :placeholder="'Latitude'"
        string-mode
      />

      <a-input-number
        style="width: 8em"
        :size="'small'"
        :min="-180"
        :max="180"
        :step="0.0001"
        :placeholder="'Longtitude'"
        string-mode
      />
    </div>
    <a-button type="primary">Set location</a-button>
    <div class="rounded border-2 text-center p-1">
      Current location: Tan Binh, Ho Chi Minh
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
