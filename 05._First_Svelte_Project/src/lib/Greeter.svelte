<script>
    export let name = "simonski";
    export let greeting = "Hi there";
  
    function changeGreeting() {
      if (greeting === "Hi there") {
        greeting = "Goodbye";
      } else {
        greeting = "Hi there";
      }
    }
  </script>

<h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name}</h1>

<style>
    h1{
      color: pink;
      user-select: none;
    }
  </style>
  