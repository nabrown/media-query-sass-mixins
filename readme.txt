# SASS Media Query Mixins

Inspired by : 

- IE Fallbacks: http://jakearchibald.github.io/sass-ie/ (https://github.com/jakearchibald/sass-ie)
- Breakpoint mixin: https://css-tricks.com/media-queries-sass-3-2-and-codekit/
- Breakpoint mixin with breakpoints map: http://www.sitepoint.com/managing-responsive-breakpoints-sass/

Three mixins for outputting breakpoints in SASS. `min-width` (most commonly used in a mobile-first approach),
`max-width`, and `min-width` to `max-width`. Mixin names and breakpoint names design to make it more intuitive
to write responsive styles.

h2. Testing Media Queries

A `.breakpoint-tester` class which displays the current breakpoint.

Various show and hide utility classes that take effect at different breakpoints.