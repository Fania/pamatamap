# Interactive map for pata.physics.wtf


## Links

<a xlink:href= "http://dr.physics.wtf/" xlink:title="PhD Thesis">
  <text x="150" y="150" >PhD Thesis Link</text>
</a>

[Grouping and Reusing](http://frontendbabel.info/articles/svg-grouping-and-reusing-elements/)


[SVG 'use' element](http://taye.me/blog/svg/a-guide-to-svg-use-elements/)
<svg viewBox="0 0 400 100">
    <rect id="original-rect"
        x="100" y="20"
        width="50" height="50"
        fill="#29e" />

    <use xlink:href="#original-rect" x="150" y="10" />
<!-- x/y of the <use> element are added to x/y of the referenced <rect> -->
</svg>