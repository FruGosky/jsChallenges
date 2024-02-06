# Challenge

**_I didn't create this task, I just extended it with file minification._**

I found this task and many more here: [codingame.com](https://www.codingame.com)

---

## Goal

Given a speed variable `s` in km/h and three points `A`, `B` and `C` representing distances in kilometers, you are tasked with calculating the time it takes to reach each of these distances in minutes. Finally, you need to square the sum of the minutes taken to reach `A`, `B` and `C`.

---

## Input

**Line 1:** An integer `s`, for speed.

**Line 2:** Three space-separated integers `A`, `B` and `C` for the distances.

---

## Output

**Line 1:** Output a single integer representing the squared sum of the minutes taken to reach `A`, `B` and `C`. If the result is a decimal value, it should be rounded down to the nearest integer. For example, if the result is `5.9`, it should be rounded to `5`

---

## Constraints

1 < `s` < 1000

1 < `A`, `B`, `C` < 100

---

## Example

### Input

```
80
10 30 20
```

> I changed Input to static variables at the beginning of the file because I'm out of the page

### Output

```
1936

```
