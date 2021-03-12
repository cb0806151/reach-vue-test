<template>
  <div>
    <button>Connect Wallet</button>
    <button>Add 1 token to wallet</button>
    <div>
      <button>Deploy contract</button>
      <textarea><textarea>
      <button>Copy Invite<button>
    </div>
    <div>
      <button>Join Contract</button>
      <textarea><textarea>
      <button>Submit Invite</button>
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
