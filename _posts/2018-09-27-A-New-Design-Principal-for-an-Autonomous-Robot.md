---
layout: post
title: "A new design principle for an autonomous robot"
author: "Fan Yuanxiang"
categories: journal
tags: [Alter, Artificial Life, Recognition Science]
image: lancelot.jpg
---
# Recent

<HR>
<font face="微软雅黑">最近很是苦恼啊。
<br>中村给的题目到底能不能做出来! 
<br>根据佛教的观点，<b>欲求</b>是<b>痛苦</b>的根源。
<br>那么是不是不应该要对研究做到<b>无欲无求</b>才能不痛苦呢。
<br>或者应该沉浸到研究这件事中才对呢。
<br>或许应该思考一下这个问题了了。
<br>最后做一点总结一下帮助自己理清一下思路吧。
<br>
<br>最近的中期发表结束了，在会上被Ogawa先生说到Alter应该是生物而不是机器人，所以打算重读一遍Ikegami先生写的关于Alter的论文<a href='http://cognet.mit.edu/pdfviewer/journal/ecal_a_080'>A New Design Principle for an Autonomos Robot</a>。</font>
# Body

<HR>
## Abstract

Alter learned two tasks in this study, that is, raising hand when people approach and moving smoothgly. There are two strategies to control Alter in this study, CPG and SNN. The input of SNN is enviroment value (robot status and distance sensor). To achieve the first task, robot will recieve stimulus when people approaches and its hand is low than shoulder. For the seconf task, stimulus is evaluated by the diiference of the value of potentionmeters and the output of SNN.
## Terminology

* **internal dynamics:**In this study, two antonomous systems (SNN and CPG) are used as internal dynamics.
* **CPG (central pattern generator):**how to implement CPG by python? <a href='https://www.researchgate.net/publication/265304330_How_to_Build_Spiking_CPG_Models_Using_Python'>it can be find in this page</a>. The principle, derivative equation and how to integrate by computer is introduced in this article. And part of python code is appended in the end of this page.
* **Behavior-based robots (BBR):**it is well explained in this <a href='https://en.wikipedia.org/wiki/Behavior-based_robotics'>page</a>.
* **STDP (spike-timing-dependent plasticty):**that is, network weight can change depending on time.
* **LSA (learning by stimulus avoidance):**it is well explained in this paper.
* **hebbian learning:**it is well explained in this <a href='https://blog.csdn.net/jyl1999xxxx/article/details/75104930'>page</a>

# Some idea

<HR>
Maybe we can use reinforcement learning to learn the parameter of CPG like <a href='https://github.com/bnurbekov/Humanoid_Robot_Learning_To_Walk'>this</a>.
# Summerize

<HR>
<font face="微软雅黑">晚上找王逸飞去吃了个饭，似乎他现在很讨厌现在的研究，看来大家都不容易。最近也是一直在迷茫研究到底该怎么进行下去，又是要做模型又是要找到objective function又是要预测动作又是要用CPG又是要学motion planning又是要改之前写的程序还不知道能不能做出来，做出来还不知道石黑会不会满意，真TM绝望。不读博了说啥也不读了。</font>
<br>
<br>
<font size='3' color='grey'>写于周四空无一人的705的晚上<s>（电视还是挺好的看的）</s></font>
