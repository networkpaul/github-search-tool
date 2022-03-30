<template>
  <div class="home" :class="{ 'darkTheme': darkThemeOn }">
    <HeaderBar @darkThemeToggle="darkThemeOn = !darkThemeOn" :themeDark="darkThemeOn"/>
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
  },

  data () {
    return {
      darkThemeOn: false
    } 
  }
}
</script>

<style lang='scss'>

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

*, *::before, *::after {
  font-family: 'Space Mono';
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.darkTheme {
  &.home {
    background: #141D2F;
  }
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F6F8FF;
  width: 100vw;
  height: 100vh;
  min-height: 100%;
}
</style>
