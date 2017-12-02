# Interactive map for pata.physics.wtf

## TODO

- add exchange connectors separately, so the exchange blob can be associated with its line and on hover the connector can be hidden
- check if duplicate labels look weird, maybe change visibility until hovered over






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


## Rotate 

rect

<rect id="port-D-patanalysis" class="appendix-port"
    width=7 height=7 x=180 y=322
    transform="rotate(45)" />


<use xlink:href="#station-rect" x="20" y="80" fill="#54c6e9" />
<use xlink:href="#station-rect" x="20" y="90" fill="#54c6e9" 
    transform="rotate(-45, 20.67 91.1)" />
<use xlink:href="#station-rect" x="20" y="70" fill="#54c6e9" 
    transform="rotate(45, 20.67 71.1)" />
<use xlink:href="#station-rect" x="20" y="60" fill="#54c6e9" 
    transform="rotate(90, 20.67 61.1)" />





text

<text id="methodology-line-name" class="line-name"
    fill=#0055d4
    x=490 y=400 
    transform="rotate(90 490 400)"
    >
    Methodology
</text>


## Animation

[](https://codepen.io/SaraSoueidan/pen/ef9f0e1242263cf23067b09be894cfa9)