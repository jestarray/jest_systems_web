<script type="ts">
  export let data;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let selected = [];
  $: dispatch("update-check", function check_answer() {
    let correct_indexes: number[] = data.answer
      .map((item, index) => {
        if (item.correct) {
          return index;
        }
      })
      .filter((item) => {
        if (item !== undefined) {
          return true;
        }
      });

    if (correct_indexes.length !== selected.length) {
      return false;
    } else {
      for (let item of correct_indexes) {
        if (!selected.includes(item)) {
          return false;
        }
      }
      return true;
    }
  });
  $: dispatch("valid-input", selected.length > 0);
</script>

<style>
  label {
    border: 1px solid grey;
    border-radius: 25px;
    padding: 1em;
    margin: 2px;
  }
</style>

<div>
  <div>
    {@html data.question}
  </div>
  {#each data.answer as option, index}
    <label>
      <!-- selected_radio_index = index -->
      <input
        type="checkbox"
        bind:group={selected}
        value={index}
        on:click={function () {}} />
      {option.text}
    </label>
  {/each}
</div>
