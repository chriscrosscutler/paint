# paint
We included a paper.js library that included all the functions we need to turn the page into a paint canvas. We included CSS to style the legend at the bottom of the page and JavaScript to change behavior.

We had trouble animating the path and the color. We wanted the color to be animated, but the drawing tool would only accept "rgb()" or previously defined values. We figured out that the paper.js package included a Color object that contains RGB as well as HSV variables, so we can cycle through hues by incrementing the hue variable.
