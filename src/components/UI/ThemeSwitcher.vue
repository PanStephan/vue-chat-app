<template>
  <label class="switch">
    <input type="checkbox" @click="switchTheme" :checked="checked"/>
    <div class="slider round"/>
  </label>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  created() {
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme)
      if (currentTheme === 'dark') {
        this.checked = true
      }
    }
  },
  methods: {
                  switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    }
  }
}
</script>

<style lang="postcss">
  .switch {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 50px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: var(--bg-color);
    bottom: 5px;
    content: "";
    height: 15px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 15px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>