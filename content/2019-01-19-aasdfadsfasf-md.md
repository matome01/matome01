---
title: aasdfadsfasf
date: 2019-01-18T16:52:01.327Z
cover: /assets/1.jpg
slug: rf2asdf
category: asdf
tags:
  - asdfa
---
<style>

.read-more-state {

  display: block;

}



.read-more-target {

  opacity: 0;

  max-height: 0;

  font-size: 0;

  transition: .25s ease;

}



.read-more-state:checked ~ .read-more-wrap .read-more-target {

  opacity: 1;

  font-size: inherit;

  max-height: 999em;

}



.read-more-state ~ p .read-more-trigger:before {

  content: 'Show more';

}



.read-more-state:checked ~ p .read-more-trigger:before {

  content: 'Show less';

}



.read-more-trigger {

  cursor: pointer;

  display: inline-block;

  padding: 0 .5em;

  color: #666;

  font-size: .9em;

  line-height: 2;

  border: 1px solid #ddd;

  border-radius: .25em;

}



/\* Other style \*/ 

body {

  padding: 2%;

}



p {

  padding: 2%;

  background: #fff9c6;

  color: #c7b27e;

  border: 1px solid #fce29f;

  border-radius: .25em;

}

</style>

<div>

<input type="checkbox" class="read-more-state" id="post-1" />

<p class="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="read-more-target">Libero fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore minus beatae voluptatem!</span></p>

<label for="post-1" class="read-more-trigger"></label>

</div>
<div>

<input type="checkbox" class="read-more-state" id="post-2" />

<ul class="read-more-wrap">
<li>lorem</li>
<li>lorem 2</li>
<li class="read-more-target">lorem 3</li>
<li class="read-more-target">lorem 4</li>
</ul>

<label for="post-2" class="read-more-trigger"></label>

</div>
