---
title: 四人过桥问题
tags: 
  - Python
  - 算法
excerpt: 使用随机选择解决四人过桥问题
abbrlink: 5468ce14
date: 2025-3-16
---
## 问题描述
有四个人需要在夜间过桥，过桥时必须携带手电筒。他们只有一个手电筒，手电筒必须由人携带过桥。他们单独过桥的时间分别为`[1, 2, 5, 10]`分钟，两人同行时以较慢者的速度为准。桥每次最多只能承受2个人。问：如何在最短的时间内让所有人都过桥？

![crossing-bridge-1.gif](https://imgs.977958.xyz/uploads//68bda8b51506b_crossing-bridge-1.gif)


## 随机选择算法
在这个问题中，我们将随机选择过桥和返回的组合，寻找用时最短的方案。  
以下是随机选择解法的Python代码：

```python
from itertools import combinations
from random import choice


def solve(a):
    # 初始化左岸和右岸的人员列表
    left, right = sorted(a), []
    torch_state = True  # 手电筒状态，True在左岸, False在右岸
    time = 0  # 总时间
    steps = []  # 记录步骤

    while left:
        if torch_state:
            # 随机选择两个人过桥
            move = choice(list(combinations(left, 2)))
            time += max(move)  # 过桥时间取决于较慢的人
            steps.append(f"{move}过桥")
            for p in move:
                left.remove(p)
                right.append(p)
        else:
            # 随机选择一个人返回
            p = choice(right)
            time += p
            steps.append(f"{p}返回")
            right.remove(p)
            left = sorted(left + [p])
        torch_state = not torch_state  # 切换手电筒状态

    return time, " ".join(steps)


if __name__ == "__main__":
    store = {}  # 存储方案
    min_time = float("inf")  # 最小时间初始化为无穷大
    for i in range(10000):
        time, steps = solve([1, 2, 5, 10])
        if time <= min_time and steps not in store:
            store[steps] = min_time = time
            print(f"第{i+1}次循环 {time}分钟")
    print("")

    i = 1
    print(f"最短用时：{min_time}分钟")
    for k, v in store.items():
        if v == min_time:
            print(f"方案{i}：{k}")
            i += 1

```

### 代码解释

1. **初始化**：
   - `left`：左岸的人员列表，初始为 `[1, 2, 5, 10]`。
   - `right`：右岸的人员列表，初始为空。
   - `torch_state`：手电筒的状态，`True` 表示在左岸，`False` 表示在右岸。
   - `time`：总时间，初始为0。
   - `steps`：记录每一步的操作。

2. **过桥逻辑**：
   - 当手电筒在左岸时，随机选择两个人过桥，并计算过桥时间（取决于较慢的那个人）。

3. **返回逻辑**：
   - 当手电筒在右岸时，随机选择一个人返回，并计算返回时间。

4. **循环与状态切换**：
   - 重复上述步骤，直到左岸没有人。
   - 每次操作后切换手电筒的状态。

5. **主程序**：
   - 使用 `store` 字典存储用时较短的解决方案。
   - 进行10000次随机尝试，找到用时最短的方案。

### 示例输出
运行代码后，程序会输出所有用时最短的方案。例如：
```txt
第1次循环 20分钟
第5次循环 20分钟
第11次循环 19分钟
第28次循环 19分钟
第41次循环 19分钟
第76次循环 17分钟
第158次循环 17分钟

最短用时：17分钟
方案1：(1, 2)过桥 1返回 (5, 10)过桥 2返回 (1, 2)过桥
方案2：(1, 2)过桥 2返回 (5, 10)过桥 1返回 (1, 2)过桥
```

## 常规算法
### 算法思路
1. 优先让最快的两人过桥，减少总时间。
2. 让最快的两人交替返回，确保手电筒能高效传递。
3. 让最慢的两人一起过桥，避免时间浪费。

```python
def solve(a):
    left, right = sorted(a), []
    time, state, steps = 0, 1, []

    while left:
        if state % 2:
            move = left[:2] if state % 4 == 1 else left[-2:]
            time += max(move)
            steps.append(f"{move}过桥")
            for p in move:
                left.remove(p)
                right.append(p)
        else:
            p = min(right)
            time += p
            steps.append(f"{p}返回")
            right.remove(p)
            left = sorted(left + [p])
        state += 1

    return time, " ".join(steps)


if __name__ == "__main__":
    time, steps = solve([1, 2, 5, 10])
    print(f"最短用时：{time}分钟\n方案：{steps}")
```

### 动画演示
![crossing-bridge-2.gif](https://imgs.977958.xyz/uploads//68bda8bc5ce89_crossing-bridge-2.gif)

## 总结
通过随机选择算法，我们成功找到了四人过桥问题的解决方案，最短用时是17分钟。

虽然这种方法在理论上能够找到解，但其效率较低，且依赖于大量的随机尝试，因此仅供娱乐和学习使用，并不建议在实际问题中应用。对于类似的组合优化问题，建议使用更加系统化和高效的算法来解决。
