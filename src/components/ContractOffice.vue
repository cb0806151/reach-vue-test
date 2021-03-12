<template>
  <div id="container">
    <button>Connect Wallet</button>
    <button>Add 1 token to wallet</button>
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
export default {
  name: 'ContractOffice',
  props: {
    msg: String,
    account: Object,
  }
}
</script>

<style>
button {
  margin: 10px;
}
#container {
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
