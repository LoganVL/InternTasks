<script>
import Input from "./Form.svelte";
import {getCurrency} from './utils/exchangeApiConvertorcall'
import CurrencyPicker from './CurrencyPicker.svelte'
import {exchangeFirst, exchangeSecond} from './utils/inputData'

let firstCurName = exchangeFirst.curName
let secondCurName = exchangeSecond.curName
let rate = 0


async function updateRate() {
  const res = await getCurrency(exchangeFirst.curName);
    rate = res[exchangeSecond.curName];
}


// @ts-ignore
function handleFirstCurChange(event) {
  exchangeFirst.curName = event.target.value
  updateRate()
}


// @ts-ignore
function handleSecondCurChange(event) {
  exchangeSecond.curName = event.target.value
  updateRate()
}

// @ts-ignore
function convertCurrencySecond(event) {
  exchangeFirst.value = event.target.value
  updateRate()
  exchangeSecond.value = parseFloat((exchangeFirst.value * rate).toFixed(3))
}

// @ts-ignore
function convertCurrencyFirst(event) {
  exchangeSecond.value = event.target.value
  updateRate()
  exchangeFirst.value = parseFloat((exchangeSecond.value / rate).toFixed(3))
}


</script>

<main>

<div class="main-container">
  <div class="convert-box">
    <p>Enter currency:</p>
    <div class="convert-row">
      <CurrencyPicker cur={firstCurName} changeHandler={handleFirstCurChange}/>
      <Input inputHandler={convertCurrencySecond} inputValue={exchangeFirst.value}/>
    </div>
  </div>  
  <div class="convert-box">
    <p>Converted:</p>
    <div class="convert-row">
      <CurrencyPicker cur={secondCurName} changeHandler={handleSecondCurChange} />
      <Input inputHandler={convertCurrencyFirst} inputValue={exchangeSecond.value}/>
    </div>
  </div>
</div>
<div class="api-attribution">
  <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
</div>


</main>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.convert-box {
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 0px 0px 5px green;
  height: 100px;
  width: 400px;
}

.convert-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.api-attribution {
  margin-top: 15px;
  font-size: 20px;
}
</style>
