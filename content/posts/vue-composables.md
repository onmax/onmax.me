---
title: 'Stop Writing Bad Composables: A Quick Handbook'
description: 'Key takeaways from Alexander Lichter talk at Vue.js Amsterdam 2025'
publishedAt: 2025-01-15
---

Vue 3's Composition API has become the go-to for building modern components—but that doesn't mean every composable is good by default. At **Vue.js Amsterdam 2025**, [Alexander Lichter](https://lichter.io) shared what makes composables clean, predictable, and reusable.

> Follow [@TheAlexLichter](https://github.com/TheAlexLichter) for more Vue insight. Check out the [DejaVue podcast](https://dejavue.fm/)

This post summarizes the key takeaways from his talk: ["**The Composable Handbook: Stop Writing Bad Composables**"](https://github.com/TheAlexLichter/talk-composables-vue-ams-25/tree/main).

---

## Why Composables?

The Options API still works, but the Composition API gives you:

- **Future-proof design** (e.g., upcoming [Vapor](https://github.com/vuejs/rfcs/discussions/472))
- **Stronger TypeScript support**
- **Cleaner code-sharing** (hooks, watchers, and reactive state in one place)
- **Better separation of concerns**
- **A more "JavaScript-like" structure**

Downside: without patterns, Composition API can be harder to get right.

---

## What *is* a Composable?

> "A composable is a function that uses Vue's Composition API to encapsulate and reuse **stateful** logic."

### A function is a composable if it:
- Uses **another composable**
- Uses **lifecycle hooks** (`onMounted`, `onUnmounted`, etc.)
- Uses the **Reactivity API** (`ref`, `reactive`, `computed`)
- Uses **dependency injection** (`provide` / `inject`)

If none of those apply, it's probably just a plain old utility function.

---

## Organizing Your Composables

Think like a vanilla JS dev:

- **Colocate** logic by concern or feature
- **Encapsulate** logic in functions
- **Compose** those into more complex behavior
- Build **layers of abstraction**

Even **inline composables** (functions declared inside components) are fine when scoped properly.

---

## 5 Rules for Better Composables

### 1. Don't Reinvent the Wheel
Use [VueUse](https://vueuse.org/)—it has over 200 proven composables.

### 2. Don't Make Composables Async
You can `await` them in your component, but **not inside another composable**. Otherwise, you risk losing lifecycle context.

### 3. Don't Call Them in the Wrong Place
Composables must be called at the top level of:
- `setup()`
- another composable

Don't use them in:
- event handlers
- inside conditionals
- on the server

### 4. Use `readonly()`
Prevent consumers from mutating internal state directly:

```ts
return {
  user: readonly(user),
  fetchUser
}
```

### 5. Avoid Global Refs in SSR

Instead of this (bad for SSR):

```ts
const user = ref(null)
```

Use this (Nuxt example):

```ts
const user = useState(() => null)
```

## Next Steps

- Read [Vue's Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- Explore [VueUse](https://vueuse.org/)
- Try extracting a composable from one of your components today

Good composables are predictable, reusable, and often boring—and that's a good thing.
