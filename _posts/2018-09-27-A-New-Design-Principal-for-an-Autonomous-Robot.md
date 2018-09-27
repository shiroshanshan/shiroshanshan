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
<br>一直怀疑中村给的题目到底能不能做出来。  
<br>根据佛教的观点，<b>欲求</b>是<b>痛苦</b>的根源<b>(頭おかしい)</b>。  
<br>那么是不是不应该对研究甚至对毕业都要做到<b>无欲无求</b>才能不痛苦呢。  
<br>或者应该沉浸到研究这件事中才能<b>好好享受</b>呢。  
<br>或许应该改变一下对现在所做的事的看法了。  
<br>最后做一点总结一下帮助自己理清一下思路吧。 
<br> 
<br>(以上前段时间是一边沉迷dota2一边做研究的口胡)
<br>
<br>也写一点最近的感受吧。中期发表结束后，老吴也暂时回国了，竟莫名感到一丝寂寥，可能是上年纪了吧，开始害怕孤独了哈哈哈。在被石黑怼之后，连续打了两天dota<b>（やばっ）</b>，今天决定到学校稍微更新一下博客。在meeting上还是可以感觉到中村对这个研究还是很感兴趣的，只是石黑应该和更希望我多做一点关于HRI的研究吧。<s>（石黑老贼吃我正方形打野哈哈哈）</s>
<br>由于会上还被Ogawa先生说到Alter应该是生物而不是机器人，所以打算重读一遍Ikegami先生写的关于Alter的论文<a href='http://cognet.mit.edu/pdfviewer/journal/ecal_a_080'>A New Design Principle for an Autonomos Robot</a>。</font>
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
<br><font size='3' color='grey'>写于周四空无一人的705的晚上<s>（电视还是挺好的看的）</s></font>
