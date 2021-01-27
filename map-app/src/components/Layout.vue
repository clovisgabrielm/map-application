<template>
  <div>
    <Header />
    <section>
        <router-view />
    </section>

  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: 'Layout',
  components: {
    Header
  }
};
</script>