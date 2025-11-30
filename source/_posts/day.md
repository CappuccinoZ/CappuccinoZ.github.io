---
title: 星期几
tags: C Sharp
excerpt: 获取日期是星期几代码
abbrlink: 7635390d
date: 2023-8-1
---
```C#
static void getDay(int y, int m, int d)
{
    if (m < 3) y--;
    int[] a = { 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 };
    int t = (y + y / 4 - y / 100 + y / 400 + a[m - 1] + d) % 7;
    string day = "日一二三四五六";
    Console.WriteLine($"{y}年{m}月{d}日 星期{day[t]}");
}

getDay(2023, 8, 1);
```