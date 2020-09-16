<script lang="ts">
  import ProblemSet from "./ProblemSet.svelte";
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

  let section;
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
        params.data =
          params.data.length > 0
            ? params.data
            : Array.from(new Array(section.num_of_problems), () =>
                params.gen()
              );
        params.progress =
          params.progress.length > 0
            ? params.progress
            : Array.from(new Array(section.num_of_problems), () => {
                return {
                  result: Result.UNANSWERED,
                  tries: 0,
                  time: 0,
                  hints: 0,
                };
              });
      } else {
        page = Home;
      }
    }
  });
  router("/blog", () => (page = Blog));
  router("/discuss", () => {
    page = Discussions;
  });

  router(
    "/blog/:id",

    // Before we set the component
    (ctx, next) => {
      console.log(ctx);
      params = ctx.params;
      next();
    },

    // Finally set the component
    () => (page = SingleBlog)
  );

  router.start();
</script>

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

<nav><a href="/">Home</a> <a href="/blog">Blog</a></nav>
<main class="container">
  <svelte:component
    this={page}
    {params}
    title={params ? params.title : ''}
    data={params}
    on:save={() => {
      localStorage.setItem('save', JSON.stringify(merged));
      console.log('saving');
      let saved = localStorage.getItem('save');
    }} />
</main>

<!-- 

      progress={params ? params.progress : ''}
    reset_problems={params ? params.gen : null}
    problem_index={params ? params.problem_index : 0}
 -->
