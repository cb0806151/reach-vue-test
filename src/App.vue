<template>
  <div id="container">
    <button v-on:click="connectWallet">Connect Wallet</button>
    <div>
      <input type="number" id="tokenAmount" name="tokenAmount" v-model="tokenAmount" :disabled="account === undefined">
      <label for="tokenAmount">
        <button :disabled="account === undefined" v-on:click="fundWallet">Add Tokens</button>
      </label>
    </div>
    <p>Wallet Balance: {{walletBalance}}</p>
  </div>
</template>

<script>
import * as reach from '@reach-sh/stdlib/ALGO';

export default {
  name: 'App',
  data: function() {
    return {
      account: undefined,
      tokenAmount: 0,
      walletBalance: 0,
    };
  },
  methods: {
    connectWallet: async function() {
      this.account = await reach.getDefaultAccount();
    },
    updateBalance: async function() {
      let balance = await reach.balanceOf(this.account);
      this.walletBalance = await reach.formatCurrency(balance, 4);
    },
    transferFundsToWallet: async function() {
      try {
        const faucet = await reach.getFaucet();
        await reach.transfer(faucet, this.account, reach.parseCurrency(this.tokenAmount));
      } catch {
        alert("wallet could not be funded");
      }
    },
    fundWallet: async function() {
      await this.transferFundsToWallet();
      await this.updateBalance();
    }
  }
}
</script>

<style>
body {
  background: gray;
}

button {
  margin: 10px 0px 10px 0px;
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
