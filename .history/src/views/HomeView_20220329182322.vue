<template>
  <div class="home">
    <HeaderBar />
    <SearchBar />
    <UserCard />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderBar,
    SearchBar,
    UserCard
  }
}
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home {
  padding: 31px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
