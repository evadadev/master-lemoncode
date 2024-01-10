<template>
    <div class="app-container" id="app">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
  </template>
  
  <style>
  html {
    overflow: hidden;
  }

  body {
    margin: 0;
  }

  main {
    overflow: auto;
  }
  
  .app-container {
    height: 100vh;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
  }
  </style>