<script lang="ts">
  import ProblemSet from "../ProblemSet.svelte";
  import { Result } from "../CST";
  import { TOC, convert_to_hash } from "../generate";
  $: search_text = "";
  $: filtered =
    search_text.length > 0
      ? TOC.filter((item) => {
          let res = item.title
            .toLowerCase()
            .includes(search_text.toLowerCase());
          return res;
        })
      : TOC;
  function calculate_progress(progress) {
    let solved = 0;
    for (let item of progress) {
      if (item.result === "+") {
        solved++;
      }
    }
    let res = `${solved}/${progress.length}`;
    return res;
  }
</script>

<div>
  <input type="text" placeholder="Search" bind:value={search_text} />
  <table>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Progress</th>
      <th scope="col">Discuss</th>
      <th scope="col">Resources</th>
    </tr>

    {#each filtered as item}
      <tr>
        <td>{item.id}</td>
        <td><a href={"#" + convert_to_hash(item.title)}>{item.title}</a></td>
        <td>{calculate_progress(item.data)}</td>
        <td><a href={"/#discuss/" + convert_to_hash(item.title)}>Github</a></td>
        <td>
          {#each item.resources as res}<a
              href={res.url}
              title={res.url}
              target="_blank"
              >{res.kind}
            </a>{/each}
        </td>
      </tr>
    {/each}
  </table>
  <a href="https://github.com/jestarray/jest_systems_web">Source Code</a>
  |
  <a href="https://www.patreon.com/jestarray/">Support my work on Patreon!</a>
</div>
