<template>
  <div class="mx-2 text-red-700">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true }
  }
}
</script>
