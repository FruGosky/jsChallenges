# Challenge

**_I didn't create this task, I just extended it with file minification._**

I found this task and many more here: [codingame.com](https://www.codingame.com)

---

## Goal

Print `N` right triangles next to each other. They will have specified **Left side**, **Right side**, **Bottom side** and **Fill** as an **ASCII** character in this order.

---

## Input

**Line 1:** `Width` (and height) of the triangle

**Line 2:** `Number` of triangles

**Line 3:** `Left side character`, `Right side character`, `Bottom character`, `Fill character`

---

## Output

`N` ASCII triangles

---

## Constraints

1 <= `Width` <= 30

1 <= `Number` <= 10

> I changed min Width value to 3 because for me personally it doesn't make any sense for 1 and 2

---

## Example

### Input

```
5
3
# & 0 *
```

> I changed Input to static variables at the beginning of the file because I'm out of the page

### Output

```
    #
    #&
    #*&
    #**&
    #000&
```
