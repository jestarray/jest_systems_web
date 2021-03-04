<script lang="ts">
  import ProblemSet from "./ProblemSet.svelte";
  import type { ProblemSet as ProblemSetData } from "./generate";
  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";
  import SingleBlog from "./routes/SingleBlog.svelte";

  import router from "page";
  import { convert_to_title, TOC, convert_to_hash } from "./generate";
  import { Result } from "./CST";
  import Discussions from "./Discussions.svelte";
  let problem_index = 0;
  let enable_next = false;
  let page;
  let params;

  let section: ProblemSetData | undefined;
  let merged = TOC;

  router("/", (ctx, next) => {
    let hash: string = ctx.hash;
    if (hash.includes("discuss")) {
      page = Discussions;
      let slash_index = hash.indexOf("/") + 1;
      let path = hash.slice(slash_index, hash.length);
      console.log(path);
      let title = convert_to_title(path);
      params = { title: title };
    } else {
      //problem pages
      let saved = JSON.parse(localStorage.getItem("save"));

      if (saved) {
        merged = TOC.map((curr, index) => {
          return Object.assign(curr, saved[index]);
        });
      }

      section = merged.find((item) => {
        return convert_to_hash(item.title) === hash;
      });

      if (section !== undefined) {
        page = ProblemSet;
        params = section;
        console.log(params.data);
        params.data =
          params.data.length > 0
            ? params.data
            : Array.from(new Array(section.num_of_problems), () =>
                params.gen()
              );
      } else {
        page = Home;
      }
    }
  });
  router("/discuss", () => {
    page = Discussions;
  });

  router.start();
</script>

<nav><a href="/">Home</a></nav>
<main class="container">
  <svelte:component
    this={page}
    {params}
    title={params ? params.title : ""}
    data={params}
    on:save={() => {
      localStorage.setItem("save", JSON.stringify(merged));
      console.log("saving");
      let saved = localStorage.getItem("save");
    }}
  />
</main>

<!-- 

      progress={params ? params.progress : ''}
    reset_problems={params ? params.gen : null}
    problem_index={params ? params.problem_index : 0}
 -->
<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
