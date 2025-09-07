---
title: 24点
date: 2024-5-3
tags: CS
excerpt: 24点解题代码
---


```Python
import itertools

class Solve24():
    def __init__(self,num):
        self.numset=set(itertools.permutations(num))
        self.operate=['+','-','*','/']
        self.operatelist=list(itertools.product(self.operate,repeat=3))

    def solve(self):
        s1=['({}{}({}{}{})){}{}'.format(num[0],sign[0],num[1],sign[1],num[2],sign[2],num[3]) for num in self.numset for sign in self.operatelist]
        s2=['({}{}{}){}({}{}{})'.format(num[0],sign[0],num[1],sign[1],num[2],sign[2],num[3]) for num in self.numset for sign in self.operatelist]
        s3=['(({}{}{}){}{}){}{}'.format(num[0],sign[0],num[1],sign[1],num[2],sign[2],num[3]) for num in self.numset for sign in self.operatelist]
        s4=['{}{}({}{}({}{}{}))'.format(num[0],sign[0],num[1],sign[1],num[2],sign[2],num[3]) for num in self.numset for sign in self.operatelist]
        s5=['{}{}(({}{}{}){}{})'.format(num[0],sign[0],num[1],sign[1],num[2],sign[2],num[3]) for num in self.numset for sign in self.operatelist]
        solvelist=s1+s2+s3+s4+s5

        for item in solvelist:
            try:
                if abs(eval(item)-24)<0.01:
                    print(item)
            except:
                pass

if __name__=='__main__':
    a=[2,3,5,12]
    solve24=Solve24(a)
    solve24.solve()

```