# Ember-newton-cradle-loader

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

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
