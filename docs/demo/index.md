# Demo

## In markdown

You can use classes of tailwindcss in your markdown.

### code

```markup
<div class="mx-2 text-red-700">red text!</div>
```

### result

<div class="mx-2 text-red-700">red text!</div>

## In components

You can also use them in the components.

### code

Definition:

```markup
<!-- .vuepress/components/RedText.vue -->

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
```

Use:

```markup
<RedText text="Red text in component!" />
```

### result

<RedText text="Red text in component!" />

## More complex example

### code

```markup
<div class="flex">
  <RedText text="Red flex 1!" />
  <RedText text="Red flex 2!" class="transform rotate-90 my-8" />
  <RedText text="Red flex 3!" class="bg-yellow-300"/>
</div>
```

### result

<div class="flex">
  <RedText text="Red flex 1!" />
  <RedText text="Red flex 2!" class="transform rotate-90 my-8" />
  <RedText text="Red flex 3!" class="bg-yellow-300"/>
</div>
