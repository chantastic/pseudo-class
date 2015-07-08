## Psuedo

*WIP*

A small set of functions for pseudo-class-like logic logic in JavaScript. I'm
using it with React and inline-styles in mind. I don't see why you couldn't use
it elsewhere.

## Why?

These are pretty simple expressions. I see this being more useful as a resource
than a library. Cheat-sheets are boring. This is living.

## Usage in React

In React render function, it can be used like so:

```javascript
{this.props.item.map((item, i, arr) => {
  return (
    <li style={Object.assign{
     {},
     lastChild(i,arr): { backgroundColor: "#eee" }
    }}>
      {item}
    </li>
  );
})};
```

*If you're not familiar with `Object.assign`, it's just a way of merging objects
from right to left. `_.extend` could serve the same purpose.*

## Capabilities

This is a map of pseudo-classes to available functions.

```javascript
:first-child         firstChild(i)
:last-child          lastChild(i, arr)

:only-child          onlyChild(i, arr)

:nth-child(even)     evenChildren(i)
:nth-child(odd)      oddChildren(i)

:nth-child(n)        nthChild(n, i)
:nth-last-child(n)   nthLastChild(n, i, arr)

:nth-child(-n+3)     firstChildren(n, i, arr)
```

### Why not use the same names?

`:nth-child` is a pretty overloaded selector. I really don't want to get into
parsing.

### Is this exhaustive?

Nope. I've added those most common me. Happy to add more if useful.
