<script type="ts">
  export let data;
  export let reset;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let input_answer = "";
  $: if (reset) {
    input_answer = "";
  }
  $: dispatch("update-check", function check_answer() {
    // using coersion here. might have to handle cases where evaluation of the expression needs to be done before checking answer
    // or force everyone to genereate the json evaluted??
    let is_correct = data.answer == input_answer;
    return is_correct;
  });
  $: dispatch("valid-input", input_answer.length > 0);
</script>

<div>
  <div>
    {@html data.question}
    {data.answer}
  </div>

  <input
    type="text"
    bind:value={input_answer}
    placeholder={data.input_answer_hint} />
</div>
