<script>
export let inputHandler
export let inputValue


</script>

<input type="text" id="input-cur" class='currency-form' on:input={inputHandler} value={inputValue} >

<style>
    .currency-form{
        border-radius: 10px;
        height: 100%;
    }
</style>