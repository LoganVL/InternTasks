<script>
import {getCurrency} from './utils/exchangeApiConvertorcall'

export let cur
let promise = (getCurrency(cur))
export let changeHandler

</script>
<select class='currency-picker-btn' on:change={changeHandler}>
{#await promise}
    <p>pending..</p>
{:then data} 
    {#each Object.keys(data) as cur}
        <option value="{cur}">{cur}</option>
    {/each}
{:catch err}
{console.log(err)}
{/await}
</select>

<style>
.currency-picker-btn {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    border-radius: 10px;
}
</style>