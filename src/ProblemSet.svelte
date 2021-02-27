<script lang="ts">
  import InputProblem from "./InputProblem.svelte";
  import ChoiceProblem from "./ChoiceProblem.svelte";
  import SelectProblem from "./SelectProblem.svelte";
  import { correct_answer_sound, wrong_answer_sound } from "./audio";
  import { Result } from "./CST";
  import { createEventDispatcher } from "svelte";
  import type { ProblemSet } from "./generate";

  export let data: ProblemSet;
  let generate = data.gen;
  //let progress = data.progress;
  /*   export let generate: null | Function; //function
  export let progress: {
    result: Result;
    tries: number;
    time: number;
    hints: number;
  }[];
  export let problem_index; */

  /* = [
    {
      type: "select",
      question: "Which of the following statements are true about computers",
      answer: [
        { text: "computers use 0 and 1s", correct: true },
        { text: "computers were invented in the stone era", correct: false },
        { text: "computers use electricity", correct: true },
      ],
      hints: [], //list of strings? or a string templates
    },
    {
      type: "input",
      question: "<h1>What is 2 + 2?</h1>",
      answer: 4,
      input_answer_hint: "Answer e.g 2 or instrunctions to round to the nearest int etc"
      hints: [], //list of strings? or a string templates
    },

    {
      type: "choice",
      question: "<h1>Who is the creator of linux?<h1>", //what if the question contains an image?
      answer: [
        { text: "bill gates", correct: false },
        { text: "linus torvalds", correct: true },
        { text: "john cena", correct: false },
      ],
      hints: [], //list of strings? or a string templates
    },
    {
      type: "input",
      question: "<h1>What is 2<sup>4</sup>?</h1>",
      answer: 16,
      hints: [], //list of strings? or a string templates
    },
  ]; */
  const dispatch = createEventDispatcher();

  let check_answer;
  let is_valid = false;
  let enable_next_button = false;
  $: status = "";
  /*  let problem_index =
    progress.indexOf(Result.UNANSWERED) !== -1
      ? progress.indexOf(Result.UNANSWERED)
      : 0; */
  $: all_problems = data.data;
  $: finished_all_problems = false;
  $: current_problem = data.data[data.problem_index];
  $: reset_input_answer = false;
  let reset_problems = false;

  //debug
  console.log(data.data);
</script>

<title>{data.title}</title>
<div>
  {#each all_problems as item, index}
    <span
      class={(index === data.problem_index ? 'current ' : '') + (item.result === Result.CORRECT ? 'dot correct' : item.result === Result.WRONG ? 'dot wrong' : 'dot')}
    >{item.result}</span>
  {/each}
  {#if all_problems.length <= 0}
    <h2>Could not fetch data :(</h2>
  {:else if current_problem.type === 'input'}
    <InputProblem
      reset={reset_input_answer}
      data={current_problem}
      on:update-check={(event) => {
        check_answer = event.detail;
      }}
      on:valid-input={(event) => {
        is_valid = event.detail;
      }}
    />
  {:else if current_problem.type === 'choice'}
    <ChoiceProblem
      data={current_problem}
      on:update-check={(event) => {
        check_answer = event.detail;
      }}
      on:valid-input={(event) => {
        is_valid = event.detail;
      }}
    />
  {:else if current_problem.type === 'select'}
    <SelectProblem
      data={current_problem}
      on:update-check={(event) => {
        check_answer = event.detail;
      }}
      on:valid-input={(event) => {
        is_valid = event.detail;
      }}
    />
  {/if}
  <div class="right-buttons">
    {#if enable_next_button}
      <button
        class="button"
        on:click={() => {
          if (data.problem_index < all_problems.length - 1) {
            data.problem_index += 1;
            enable_next_button = false;
            check_answer = null;
            is_valid = false;
          } else {
            finished_all_problems = true;
            if (finished_all_problems) {
              if (reset_problems) {
                if (generate) {
                  reset_problems = false;
                  all_problems = all_problems.map(() => {
                    return generate();
                  });
                  all_problems = all_problems;
                  data.problem_index = 0;
                  enable_next_button = false;
                  check_answer = null;
                  is_valid = false;
                  finished_all_problems = false;
                }
              } else {
                reset_problems = true;
              }
            }
            /*let got_one_wrong = data.progress.findIndex((el) => {
              return el.result === Result.WRONG;
            }); */

            //reset problems
          }
          dispatch('save');
          reset_input_answer = true;
        }}
      >{finished_all_problems ? 'Reset' : 'Next'}</button>
    {:else}
      <button
        class={is_valid ? 'button' : 'button disabled'}
        on:click={() => {
          reset_input_answer = false;
          if (check_answer()) {
            if (all_problems[data.problem_index].tries <= 0) {
              all_problems[data.problem_index].result = Result.CORRECT;
            }
            enable_next_button = true;
            correct_answer_sound.currentTime = 0;
            correct_answer_sound.play();
          } else {
            wrong_answer_sound.play();
            all_problems[data.problem_index].tries += 1;

            all_problems[data.problem_index].result = Result.WRONG;
          }
          dispatch('save');
        }}
        disabled={!is_valid}
      >Check</button>
    {/if}
  </div>
  <!-- <details>test</details> -->
</div>

<style>
  .button {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    margin: 0px !important;
    position: relative !important;
    display: -webkit-inline-box !important;
    display: -moz-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: -webkit-inline-flex !important;
    display: inline-flex !important;
    -webkit-align-items: center !important;
    align-items: center !important;
    -webkit-justify-content: center !important;
    justify-content: center !important;
    height: 40px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: pointer !important;
    outline: none !important;
    text-decoration: none !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
    -ms-touch-action: manipulation !important;
    touch-action: manipulation !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    background: #1865f2 !important;
    color: #ffffff !important;
    min-width: 140px !important;
    font-weight: bold;
  }
  .disabled {
    background: rgba(33, 36, 44, 0.32) !important;
  }
  .right-buttons {
    text-align: right;
  }
  :global(.dot) {
    height: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    background-color: grey; /* default is grey? */
    font-weight: bold;
    color: white;
    display: inline-block;
    text-align: center;
  }
  :global(.current) {
    border: 3px solid purple;
  }
  :global(.correct) {
    background-color: green;
  }
  :global(.wrong) {
    background-color: red;
  }
</style>
