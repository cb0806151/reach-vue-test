<template>
  <div id="container">
    <button v-on:click="connectWallet">Connect Wallet</button>
    <button :disabled="account === undefined" v-on:click="fundWallet">Add 10 tokens to wallet</button>
    <div id="pane-container">
      <div class="pane">
        <button>Deploy contract</button>
        <textarea></textarea>
        <button>Copy Invite</button>
      </div>
      <div class="pane">
        <button>Join Contract</button>
        <textarea></textarea>
        <button>Submit Invite</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as reach from '@reach-sh/stdlib/ETH';

export default {
  name: 'App',
  data: function() {
    return {
      account: undefined,
    };
  },
  methods: {
    connectWallet: async function() {
      this.account = await reach.getDefaultAccount();
    },
    fundWallet: async function() {
      try {
        const faucet = await reach.getFaucet();
        await reach.transfer(faucet, this.account, reach.parseCurrency(10));
      } catch {
        alert("wallet could not be funded");
      }
    }
  }
}
</script>

<style>
body {
  background: darkgray;
}

button {
  margin: 10px;
}
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#pane-container {
  display: flex;
  flex-direction: row;
}

.pane {
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 2px solid black;
  margin: 10px;
}
</style>
