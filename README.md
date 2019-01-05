# Ember-newton-cradle-loader

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[ember-newton-cradle-loader is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/ember-newton-cradle-loader.svg)](http://badge.fury.io/js/ember-newton-cradle-loader)
[![npm](https://img.shields.io/npm/dm/ember-newton-cradle-loader.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-newton-cradle-loader.svg)](http://emberobserver.com/addons/ember-newton-cradle-loader)
[![Build Status](https://travis-ci.org/shipshapecode/ember-newton-cradle-loader.svg)](https://travis-ci.org/shipshapecode/ember-newton-cradle-loader)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-newton-cradle-loader/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-newton-cradle-loader)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-newton-cradle-loader/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-newton-cradle-loader/coverage)

[![Demo](http://i.imgur.com/hDPxb2H.gif)](http://shipshapecode.github.io/ember-newton-cradle-loader/)
[http://shipshapecode.github.io/ember-newton-cradle-loader/](http://shipshapecode.github.io/ember-newton-cradle-loader/)

# Installation
`ember install ember-newton-cradle-loader`

# Usage

This addon automatically creates an `application-loading.hbs` template for you, and drops a nice newton cradle loading animation in it, so that whenever your model hooks are waiting to resolve, the loader will show up. If you use pods for your routes and loading states, you may need to delete this template and manually create another one.

You can also use this loader as a component, wherever you like, by simply including `{{newton-cradle-loader}}` in your template.


# Styles

Ember-Newton-Cradle-Loader uses Sass for styles. The default styles for the cradle loader are stored in an overridable Sass map. This is accomplished by supplying a `$ember-newton-cradle-loader` map with any or all of the keys found in the defaults map below.

```scss
$ember-newton-cradle-loader: (
  'cradle-size': 1em,
  'swing-distance': 2.5,
  'shadow-distance': 1.5,
  'animation-duration': .425s,
  'gradient-start': #385c78,
  'gradient-end': #db412c
);
```

There are seven more keys (in the form of `cradle-bg-n`) in the map available for customizing the background of the individual cradles, as well as seven more for customizing the shadow for each cradle (`cradle-shadow-n`), where `n` is the position of the cradle you want to customize. The individual cradle configurations will override the gradient on that cradle, even if it was manually specified. Customizing a cradle with its corresponding background could look like this:

```scss
$ember-newton-cradle-loader: (
  'cradle-bg-1': blue,
  'cradle-shadow-1': darkblue
);
```

Under the hood, the addon will merge the default settings and any settings supplied in an `$ember-newton-cradle-loader` map and use those to style the cradle loader.

Be sure to `@import` the styles into your project *after* the map if you're using it to customize the look:

```scss
@import 'ember-newton-cradle-loader';
```
