## Psuedo

*WIP*

It's likely that this shouldn't be a library. I'm not sure it provides any real
value over just writing the equations out yourself but it may provide your team
with a little comfort.

It will provide conveniences for the following common psuedo-classes:

```javascript
:first-child       i === 0
:last-child        i === arr.length - 1

:only-child        1 === arr.length

:nth-child(even)   i % 2
:nth-child(odd)    !(i % 2)

:nth-child(n)      i === n - 1
:nth-last-child(n) i === arr.length - n

:nth-child(-n+3)   i < 3
```
