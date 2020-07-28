(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1104:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("上一篇题目的难度可能对很多同学引起了不适，今天将回归一道比较简单的题目，大概耗时2-3分钟即可学习！")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("有兴趣回顾上一篇题目的：")]),s._v(" "),n("br"),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/1.8.位运算系列/learning/1.8/805.html"}},[s._v("只出现一次的数字Ⅱ(137)")])],1),s._v(" "),n("h2",{attrs:{id:"_01、题目示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目示例"}},[s._v("#")]),s._v(" 01、题目示例")]),s._v(" "),n("blockquote",[n("p",[s._v("本题比较简单哈~尽可能多的给出解法吧！")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("第268题：缺失数字")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。")])])])]),s._v(" "),n("br"),s._v(" "),n("p",[n("strong",[s._v("示例 1:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入: [3,0,1]\n输出: 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("示例 2:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入: [9,6,4,2,3,5,7,0,1]\n输出: 8\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("说明:")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?")]),s._v(" "),n("br"),s._v(" "),n("p",[n("strong",[s._v("PS：建议大家停留个两分钟先想一想...直接拉下去看题解就没什么意思了。")])]),s._v(" "),n("h2",{attrs:{id:"_02、题目分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题目分析"}},[s._v("#")]),s._v(" 02、题目分析")]),s._v(" "),n("blockquote",[n("p",[s._v("说高斯公式，估计大家听着懵逼，其实就是那个  1 2 3 ... n = (1 n) * n / 2，即：")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(744),alt:"PNG"}})]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("首先求出数组的和，然后再利用公式求出前n 1项之和，最终求差值，即为缺失的值！比如下面长度为4的数组，缺失4。")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(745),alt:"PNG"}}),s._v(" "),n("ul",[n("li",[s._v("2 + 3  + 1 + 5 = 11")]),s._v(" "),n("li",[s._v("(1 5) * 5 / 2=15")]),s._v(" "),n("li",[s._v("15 - 11 = 4")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("根据分析完成题解：（翻一个CPP牌子吧）")]),s._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//CPP ")]),s._v("\nclass Solution "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    public"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("missingNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" length"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n            result"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("时间复杂度O(N)，空间复杂度O(1)")]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("执行结果：")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(746),alt:"PNG"}}),s._v(" "),n("h2",{attrs:{id:"_03、位运算求解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、位运算求解"}},[s._v("#")]),s._v(" 03、位运算求解")]),s._v(" "),n("blockquote",[n("p",[s._v("位运算的方式，本质和数学法一样，都是通过与无序序列抵消，然后找到缺失值。所以不能说哪个更好，都掌握最好~")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("直接使用“异或”进行求解。这个其实讲了好多次了，就是利用“"),n("strong",[s._v("两个相同的数，使用异或可以相消除")]),s._v("”的原理。")]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("先给一个Go语言的示例：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Go")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("missingNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" i\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("再给一个Java的版本：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//java")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("missingNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("为了照顾各语言大爷们的情绪，我还是会尽可能的多给出几种语言示例，但是，请记住："),n("strong",[s._v("算法思想才是最重要的。")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("最后再补一个python的吧，毕竟这种语言，对于这种短短的题目，往往都可以弄出来一行代码求解的骚操作....")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#python")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" missingNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("所以，今天的问题你学会了吗？评论区留下你的想法！")])])}),[],!1,null,null,null);t.default=r.exports},744:function(s,t){s.exports="data:image/jpeg;base64,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"},745:function(s,t){s.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAACKCAMAAAAqozUCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACmlBMVEX////o6Oj7+/u/v786OjpAQEA/Pz8wMDAPDw8QEBCurq4AAACPj4+8vLznx6WEYUI5JAAAABgpQWNznrXe7////+/etpRrVTkhAAAYLEJSaZS12+/eploYAABSpuf//86EGAAAVaXn////886UVSEAGEqMz/f/78aEQRhCfb3v///3x4Q5AAD/46VSAAD//96lXRg5YZStz97v7+/v386tkmNCGAAAADmMz/+MOABKeaW91+fez62MVSE5hs73///vw4T/w3sAAEJ7qr29vr29y+fvsms5gsb315QASZze///nplJapt4AAEqc2///++e9hkremkIAAHvG/////+elVQAAMIzO///OijGcRQD/25xCAABaquf///fnvoxSJAC9dQAAXa3/77VrAAAxjs7/x4SEx/+lfWtSRTlCjs4Yhs4YQXOtvpyMMAD/36VjRUJCLBgAACFSir3n+///561aAABzuvcAADG1dRj/y4xagq3W7/+UvsalimtSQSkhOFJrkrX/88Z7MAD/+/fex6WEVSHeolIAGEKEw+/Ggjn//8aEAAAAJFKMvudjkq3O3+/n172lglKEx/cYXaUhSXOl0++1eUJCQSkYOITG7/8AOIzeqmMAOITG8///9+fOz97OjjneoloAOGu13/9aGAAAGHO98/8AgsbGhkIAOHu96//enkprsu//+96lYSEYTYzO8/8hYaXe+//3+///971zAAAAdb2EOAD/26VCLCH/z4wxAABCmt5Kjs4Ydb3GgjG9dRi1aRjvunsYXa29eRgxgsYAAFKMtr3O4/dSgqWccUIAJGOt3///461CcZyUZUL/361rOAAYQXv/37XO7/+1aQD/++/OrowAGClCYXOctt5rVUIpGACcvufNrLBIAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAABalJREFUeNrtnfd3FGUUhjdls5Ar6qIrURmjooiaXdRVogYVEcUGGLvgKiau3SD2rrGhYMFeQCliL9gL2HvvUiz/iyc7sxs3G8j99nw33Jvz3p/mMAnPe79n6jdzJrFYedXE+q/aWm8rwPDA0JABDD5DQwYw+AwNGcDgMzRkAIPP0JABDD5DQwYw+AwNGcDgMzRkAIPP0JABDD5DQwYw+AwNGcDgMzRkAIPP0JABDD5DQwYw+AwNGcDgMzRkAIPP0JABDD4jqrr6eP/V0OBtRWLY8AQYvBXx+nhdH4Fl1UgoZdVYJqjv/kUUl64EGPwiqtvo8XCA9T5qMzDYNZAP+NLFgC9bDPiyxYAvWwz4ssWAL1sM+LLFgC9bDPiyxYAvWwz4ssWAL1sM+LLFgC9bDPiyxYAvWwz4ssWAL1sM+LLFgC9bDPiyxaj0UVtWI4ZIn0OFUUc0okwQfKlmVPqqWD8k+hwqDJy/bDHgyxYDvmwx4MsWA75sMeDLFgO+bDHgyxYDvmwx4MsWA75sMeDLFgO+bDHgyxbDt6/Nt9iSkiO32lqwz9Q2o5po2+22d+qzmrEcHewgyGjesfQFlJ12Zv+WX19jdokS7DpWrM/dxoWI5O57iDEKtWcLSfpKZza5r/F7Ee29T3bf/SZQ6/5CfTYfQMkD27ITDyI6+BCpseypSRNI1NehNPmwKWEdzm/Eq68jAppaQB+ZoaOOlunzGEoeGwu3jWnT+aPj6mvGcQHJ+mqn409w+u8L5dPXiSfRyaeEi6fSZP5guvQ5/rTiljBzFp3O79NtLHNnnFk4UAn6ys2ms/iHwVL59NXRSWdHi3mic0T6HHPueeeHS+kMXcDv081XnoguvCgj6av54tJguZRPX11zLik2KOartyT3rzzNvfSytKivy6+gK92blrr/aqer+BccVflKXS14/rrm2usKO7CgrzxNu/6GGwO66Wanex+Z90W7bymdybyPZaFuve326LpDjiHr647S1fy8Ox0YIu+L5u5yOlU7j+X8BUR09z1iYxmWqK/cbKJ5996XXXh/E7U+wGeIvC86OqAH+Zfz7mPZ0dmzXT70sNBYRiXqK/XIo489Xlia1EJP8I9FEuevRU20+EmhPgv11JLwntxhu9Tm63+1lByuPAR8LQto+dPyfXatoGeelWQMlq+Zs+g59g9795V6PqAXXhyMPl8ielmSMVi+5i9wmED07euVV4lWvuYWuMo+u1xumOGr3+oeR/T6G46Bq+wznXE4jqjzlcu+GS299Ta9w57w9eur+12iqS6POZz7fG/O+8WJk1Wr6QMRRlSivvK9dzyrVjtwfD9PSX7o8JCjij7TGfooJOQ+Fp5DEfXV0Vmct8594jJR49XXUoqep7iV033Lp9Qazgd81kKf8ye4tfnKfVGcn1kW0Jeb5vlXOkNffT2lWN+I9NlzGT/327bswu8C+v4HmbHsbUfw/PXjCkr+1Jad+HPgdLPq01d72Z9l4ffqNpa//BoBfnO5a1DnK/Z7sY+VfzgwPPpK/TkovmJr1o5qonXr/3K6rtHnK7Zm7d//0Lr1/zqdQfA+my0GfNliwJctBnzZYsCXLQZ82WLAly0GfNliwJctBnzZYsCXLQa+L2qLge+L2mLg+6K2GDh/2WLAly0GfNliwJctBnzZYsCXLQZ82WLAly0GfNliwJctBnzZYsCXLQZ82WLAly0GfNliwJctBnzZYsCXLQZ82WLAly0GfNliwJctBsNXXLoSYPCrwldNWTUSSlk1lgnqu3/Vb8BzQ4O3FYlhwxNg8FbE6+MbP+bWbODfK94Ern4FGB4YGjKAwWdoyAAGn6EhAxh8hoYMYPAZGjKAwWdoyAAGn6EhAxh8hoYMYPAZGjKAwWdoyAAGn6EhAxh8hoYMYPAZGjKAwWdoyAAGn6EhAxh8hoYMYAzM+A8kHTJLXh1BAQAAAABJRU5ErkJggg=="},746:function(s,t){s.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAkIAAABhCAAAAAAfa5FtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAABd3SURBVHja7V1tVBRXmn5aCFjQatFq1IAfjagoxLEjxokfGTOimSSQyZiEySRmjDnplZllD+yedYh/dmfnnD3KyclGdtgEp7MTiZlEwZlN0p0vbRKNkGBs08rQwmiHVj5EAZsCW0qwm94f9dFV1dVNkwrGTO7zh65bt27de+u5733vW8V9dMMgINCCCd92BQi+6yAUItAIQiECjSAUItAIQiECjSAUItAIQiECjSAUItAIQiECjSAUItAIQiECjSAUItAIQqHvEYaZ8XipHn+Tas9+/CkzYc5Dd+rElHO/H6L/dfpNuv13HB3lA1SxkT8IvvkpVm6JC50NfvXeWX9S1oN3AGDKvGJ6fh5Yq6M/fuGjaVy+mrP/kvDNV+4mUaizshsYOf/yPU8JNwwcG8IPCYNiQvDoAJbOEY46T4G6T8Ig/8EjQWDwxOmCNTrFhd6XfVuWXPvTS7+eDwBfnXx0yjjULjSROXcwAJgdTslZp2UMRXme90Q61ftKN9cXnx8SktoaQa/5JlviKbEpUmzbLPyZbUI7LC+wX7d8m/qlnhKnIoV9QZkzPCVyeWroPAX9BoE0waMDWD5PcvbQkSAAYHi/Q3Fd8IOLj2bp9D9P2u8DMPz+rLtUChcqZ9nBjNLB/6GeIaoVYqqz2Forf5BRRMEiq2R+Xqx9cKwHk5/OHn7vcPDoCs7yBOtY3D0t1utjgQtZkiOLA8jZw5z5AwsYfkszLAUAHtcWSss92Ao398NQSvNJM1PtmWMoky/BUJrYvJi7TDr1qPdq8OgAlqUJR52noF8nMTfM50Hdqk3J3fvO+Q9nJQl1G9x9IXHR1bOT5gOYknb6fDZw2m1Wq2hLZzEFgGldTSsayaHQJPzqqzGrNUlJoT7p0KgxPErlyVqUYwbgrC6lAbZCaH6oPyPgmgtxBUsx8ad9J5jzHIU6TmFKmN39mhDavEtIoIqNXE3pvomcC0GzL3B5KoU8oUpzjcgxx3Qv7gE7q8UEKrfqkjGmSyUlOKsxNMgznt4pOWmzIjXsio4vJaQJfiLlE4COK1j6ZDxmPPdid/dlsSbuDhjndl2dQQHQTQ10A75DmYvDa+MpZ7ELyM+r81qtvKHgGmlrLqIApkzMasy1e9RaGs0KWZiiUcdXoUnanxFw4xqmLAAQv/wELnMd8akPK29XZGt6AxuyD57x07n3xXf82T2sX5nP3f/i+65B3aT0DfPVOUdtB2CzF0d7ktR2AM4qlTwWR6EJ8NSP1ggOVs4oGwCbYJ4F6qoZZadA2RJlFs/FXUIHimAr3CrDMXjEJyFNh8IIIftl7i89p5sVZ5rAZwHcLXedj195Uu1hTyw2gq0AU19oAmBRn6uE2WcXVCyGUKrNCpRS+VYWlfwwhqW1dKjCPIqBAQCcrBbuoD6WxYHmF1I6T2HySiUhbvSh6X0fwBxsN/5lGPDVNpZMA3Di9WEgOHDq1LznIvrfTH2WEWDKCkyICKY6N5xBttYyGoBxFEticQAl1D9IrFBeOGNEVomEMe0BALYCksHo2bMNuG7PKKJggbS/POWsWv+dPykhTeCwT26ERFy9hGSD0NWX3KAXImWSl6WAwOW423HlE5kDpUSdITNa8yX1CrMYAoXy8pzVpTTWe/ZsM8JZBcDJ/Btl6+yLhULL1/NdM8pzGDwK3R0AEDw+gGWpKjnOcH+OH+f+9rxZmIDLNUI0o3cgIoXq2Fx5gsMBoFBW+xqvVerYcY/NvkWahyn/ZagNllkhlpjNtuYiKswBtuSYANiQJymWJwxbEa0rujqpIYWJtzio51U6MPAJKyFNW6PCCPEIdld3YJZo189cRfY0TF52uMMA9F5InRc8MpwbxW9gXAVf20mMPJGZTGDqtyja5OAsWikAYHGkS+WjToT/wDnMXggAvV9Af69ai3TLf5Hc9mo3QD2+EscO+lvOZsPVj/Rnp4/0fHji8fkRu6BeaWByzGDKgOv8LFNogs0hjiVbs5DNlRp19IUhNJEBgMWVYgKQvq959ClfDntOF8Ayki60OTJUC2lrxIS/FY3M2bSI59OE3/frVz48Ud7hbgD6TcL1gyeQ+EMdcP9X+6fM6d0beELf0fCjGVGqQ+902vIAgKZCjSyJrSlSCnneLaaZ65KEmnRTaMZHRhGldKc599QApz2GLgx+dBz6J/QAUMdgWRps1jD/YfYv9Jj71MtDuvzVwDrvoUBrNgaBrOmYMGPLz5Iill2DCAGCicVGtmJxHgCbPSX8NNtMx/7s+yuelrnTbIX3tzQADLFXfqe6pAitYPnHkbOZ++vFY6/30UNeqSWmHlOrSuAjFiM9wPn/fmYF0HoKGAB8tW2/DuuMCU+II8zdgdlpAJKK3v2f/viF/5wWOJS0NnrjWHuq6AOou9ORIFLIU8Xaf1NrX0OlAKBSAMDmyOdnfE/5lgg+BudOJ3prpVygtqtldbwfjOda2dOgbo2BO/UA5qa26jMB6LKPDF8G4oCWtVMATI7YCqcjI5Eju+jJKWGzF9sd4hPNGLVjwuEuL6X5hplMAJgyQ+m+PCMAR8o262/VbmrmzJ7EKvNToaE0Mcll7AuO7ia08nM7/AfnTQ/UDvFH5z76mTLnyH4Dz6HAZwEsowBgYkEBl73x8QhRRc5ML8Yqb7Uxcm0ckmiOQXFOoJCFKbCaqbzUyoxE4ZTHHnPvLimoyhptZfvVfr/uwRwAwHEmgkvIRzon4LZkAEiIA4A7Px449xsgIe3+pRHe6DHV4NzbyO60p05Y6EM2kUlhs3KLjowiCp5yFoA1REeLI6OopTKUOWezJd3MXrebAY9ry0yz5eDY5jJqcRdcU2eOli3YMISUp7KGj77rZ85Ov3gOulWbkjv3nYdrY7KksO3B7uom34ESzjRdPAd6mbSU4UOpd8H/2Qd9SLlvnXyhxq/IgPXNNZHiGiwjmS0iutNmOAEgM8Ndwi8zPeVrIkabw2ByuEahUO9rPqy8XwcAzHFQY4gJpW582w9guPWVmf+kHoysMSwPqyo3bhgdP3sZd6leSQlBR3AkFN1p4265O23JmdXMra/4eRHYDlCPlTtNsFNGcEsrNz9fcX8WA0zZ6lAZtnputqNSGACp9ZeE6GIUXHUj7sk7MXGj7xD6cM6HRU8kIO3ZF/uv3ZDl083YWt7W0ZoNADjtQ7asp067zZR/n+OxtThe496qflMqt8oTS4DLpBykCnf6UmchXd6ZyvbVNS/IXa9cU7CMO5I7PVpgbnBvDxb8nLvbiW7JG5/Rodsw39rmA4BLH2xWY57nYnFdWE3z88CUodOQGL3wnBgDg2Z0SukjwLilioZLXNTFtCLj3U0j9vQ9Nup9R4YxZQ4AXToADAILEgBMnt4fllO/qC3Qng0Ag42IM0k7yncoczFOHF+9TodVnR+fukf9ViaHayazGBjyKt1puc+mhIJCdspI74ZnIoD7w5ewQ978PIU7HSP8B85h+jOcmWVPhVbt1vrRItsAkF4M4Pp7h4MXr6uNIOO/hyUNeVMBeiccMm9ZxRfKTB3LBMT1pdUaiq+ZOnchRxiXeaM7hNR22LxlpTsBerU1f0xh7Zjh7kBaujTh+JUn49EczNYBugW1TREoBDPnqfWxhSa5Ox3dZ5NTyOkQIildaiuVPjaMjZUq/lX4oj740XHot37NV2LBJqMewMTVDQP9slhKlEAU32imtUCaquILUeay35XSgNMRywsOj7fTJA9Ds82gcmO4MgSmPr+rrJQG24z6NaOOn0Ta67tIA8EmIAkzgPP+eKD3EhIEv7Dp5UBWYQLg+xviZoN3pldI12tcVDEQcwWhrFV0n01GIWclN6BmTj3JqPWLnQp7ZJIXHLJ4gAxBu7gYGztG3rdNemj5pGD/OwMwyIgZpWX8qVFirgBA77SVAkAhdyQ1aGGkYu1r6+VxJIuDeh7lqWPxpGsM61FRVooyQ5mlLGSD2WZKJegAamHr8OtPZQ3bG6BfgHk00/TmpuT2vT5kTOJzpE3tPrP/YbpnfxumpkHFmeajiuLnIXGR6zbkTQVrT1V0KxvdZxMo5KxEDqr58UXlVmbIeophAcDjylXwk97J+1eechYQ7bLShvd/7If/1VcBAPl54lmVuJAKzh0KDrz1FgBAZ5J5Nl3Slr13GBBeo1KFXKM99ggv5rukB3kxf3DwBh5dXR560J5y1lBGA7s9O9jCSC9WpH6FAYCltZSCudZTmWPGdktpoUmMDBaqmqS1J3v6OJfhrjRMu9carK8HgMn36eApZzOKKPon+/i0+IdpAHD4YJRODJ1cVHHxF03LdAg26eQRYWFRz7WIpdHiLlR0Wq036lc5AoVMewCI74y5VzscmDIvkJEJgEldL+k9GCQFG3fH+hjGjEUl/9vL/dKt+5H0BMM8Ljl6SOqaegbXAIA9V+XBespZoHCs4XyLA/ktraWUcbfNetEKICenUlzwG3fDUgk1Fslfw9cDltZSGqDTq543AjDnljvMkdwmDtOefWUAAHQ5j+qgu7/38yAATH4mFBS5h7GNAED8IzkAMNiMuFUSSyNEFVe0NKStxbGGlStk5QuLeo7G+UZ0iq4dnJVARibbXBB1vtXdjC2qFF9jil2qsELOSu5YfGHNv3ccOXPs7CD0GZHe1P+dg7U6+ifMeSRTBwDBlnfa/fwnDJwVAtBhPTOckMF/3tpYGZhbInGFWiofXw0AfFzogVXf9IeqN4VCBN8iPAOLx+GDaQkIhQg0gvwTEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAoRaAShEIFGEAp9z/DNa5LdJDGp/teb+A2iRho/bPfrcx6QbRbBWh39E25/cIWU0EyZV6JX1v9fl7gt+YWNypKW/tQQ693/nsDtIwooFBuCLe+0+0N90vFnt7hRw3hrkt0cCrn2DvC/Bl9rBOA78uUzEt2eC6/0ASOX/ujYKt9MmTm1Qfh55rKiyMGG00+s/F7u9KEGXpOsoWlrNoCg/W0/MHzm7CO5uvHXJFNOZBa5Ahmzw6Y46fk9y2uXcWJloqyWp2RbSYQtYpk3BAb5DzRyPwb2doiney193I/GGsVubl/4+B/DDcGwUtl9TdFa5tymFAqzbLPxZ/gfYF8Yi+CaHN+iPlk4jvKaZL7XLwNwvM2Jnfjfdt4ETbJRrJCHlRgLNqdqRynlfYPbQI6pBsPPRp5yFsjYGWXbp5S1h7mN0pyYsPF+qn1v58An4u6tx3ow9bl5w/YP/CdXLZBd1v5XfmvJVgk5C00A/Gfe7POfuDNK1R0Gya5+bIUbyN/T5awEkLGb4rc5a+kcfc/VaPh29MnCU5gjQd2qTcltr3b3H96MwcN+3PVzumd/k//DTP+4a5JFphAvnRDarznHbMqsqDEXl1nMAFiLoYhyVgIoQf5uMGW5UTouK9/L7WP3tyGsekSHOVt3+9xX+d3sr7mQ+Mt0THyor27ILadQsGF5AgAEjgwpSoxfmvDy0BVW9Z7CQygVEgyliVy/z7rEP+tZQh6xeSEBjFtenywcHVew6IkEzH22nD1/Lbm9C3Oe0mP60y929/Zg3DXJ4qXlAAAcXKfTeXnhAl7UdoAuqGYAtKCIgmkPf5fooDeDH1ndwEIdgGkz3cMj/Nkb15A8E4Auuw4diis9FxaA24EyDDOThyLdbieEHekEsKp5bGpbFt/y+mQqYAPcftQzZ7Veu4HBYdyu5xTKrnlla45x0SSLl5Uj7M3NjyrWriaLwG1/booi/BUZs4Czd+uA/m4k36Y86Q/PP1SbHgcERZ9Igp5rvMCCKritRaPrWymEpDjc+vpkuHGolhGXWAAAca0hc22DI8BN0CSL6gu1dD4W0rLJ5xTLZGDKvEAJt22lozIGtdZMiv1M/0Bi+94BZEk0JK710ECwBZDvmxsXN3zu4myg9wtQ8Vdlp0bO/mlId3fk5amdUuxSarUCVLE0hT3IipoaYvcoaOV5vTh0eGvokwEfAvCfOft0lAVpz2AS0N+BhKTx1yRTCihckbjPTHWWkdey8ZRTa0AbSvPzeFNcCiCjiN4JW3MR5dwGID20S2wEPTIA8zZYRz78EACmi+JGiQbv0FvPzB6yNyDxB7LcU0y1Psds4BSDJX0ihcTnrti7VAqPS2lg8vPg2QN4OQeJKjbiDbfI+NC67NbXJxPg3z8tgp4RTbFtBzfpe/Z3Y9bs8dckU1DI1Vce8n5qvPze8WyFO8cMGLc7q7JC02BoC3nTHjBlObH0lG59M+fW3FYg7oVPLXOj8z8BAMa58uzLTjIn7506eALUmvfCykoviGhC2YORmGAopXm5IIvrO6lPBiDlySUTmvYNsEci7ICbOreF34kaK5LGX5NM/hQ89nzsEhw6p9BetsLNp5lMkEU9LA4AJWGrl8j7KPvf4h3jG9V3iBxa3dTCVyZXMTNNz67r+XLD6TZkzg0vq/UP2yJp3NW6cyjuce2KpGBtaX1+n6iziZj4r8C3o0/G7/C9tOC1QPtVdYW2hJ9e5ONwM+++CZpkMgoxf8jKQ2olN7I8VWtdgjQ3KkPLXq+4Vs6A2ewR1QMclYr1hBoaHYh/IDexfW9nz0Gz4Awn/eORWkZ/Wx8WLVJk1/3wxNCJFQ3BuFUSP7HQBGCkvaqz5f+eVB+GHjv/uCK7085WYaEP2UQmhcXBzdg5Ztwy+mQi5k9ixDWtEuk73vnyRgrL6u6VcGbcNMmkFLJZ8/MAU2ElUgHYc9e4OHMSklCyNRcpJjIXK/S1xBeKiMDnft2DD+ow51cvXXFfEq12wsaNYF5E/H1h7nH6EmeH3QPjAuWJCXN/9dKVxo2qcr/swazwRKsVoELiUiYT1ILBMn0ysznkTt8q+mShDoj2gtywdSsaKzFDalzHTZMsRKHru/gFgKmwag0AM8LiA+GeAtu19lhFkdkcoy90tROTV+gATF9yzNcrC5rVdSMrPOwVt6oxcBi6NeFrH0ybe+XqZVUKtWDzG4qkIW+hCZ496gJHUtzq+mQxg/0ooNsoMULjp0mmiAtx5ZicJ1UzD3lz5RMZWkBnTKyI3WSLb7omKk5caUDij1Xc44y0C8D0CFrUgRuqySohq74gDRh3yZY84qpD6gt9Z/TJRqSzmPh0Q4lNHsyWrm/HT5NsTG/qPSwN2UTG1uW58FyLyCHe1Edc1FNTvQN/XQ/Aexp6mTzZ5z3IVFujJq24AKxUq33vBSTI3ekogUReYFMWs4CaL3Sr65Ph4wPYuEkHdFyVBGdviwuc98cDl7pAczM1eySgW6cPXTaOmmRjopBDqVRVO9Hoko36rugFJP7gXPDtkbWJ7Xu7MUc6CfUcUzdCwIpPu+mV4ckj7VVXYJgVYyvhSKcBwD5/1HEu1ycz3mr6ZFig932csibe9WZAEpxNm9rd9Oam5LY/sljI3frUVzIjNJ6aZOGPjSnzAvm09JCXjWJa06XFdNFUSPgu0dBpEkUIIy/qV58+N3zwIADoH0oAW+HmVzh1DJYsUL2Cfv5GnF6WIi6DdBvli1qZPhkfguHe6BRyFXO6ilXvwTLSMXdr65PdsfQz/4ED4IOzfA/S97zLR4KmrAIADH4S1P1Y0m3jqUkmUkiUUA69KaZ3yl8ce7yiTKWzEkAhNovnqMVWKy9bFg1Jz+45z+V/WiqSePlzJK6PMDKSI5WlWye3TnJ9MrPUZjgNmQBY+xYVI+SsBKgx+7Hfmj5Z3OM+7pOrFLPEE9g4wH0wpP8lF392tmGOxAiNqybZzVICEl8Z+h0fdI9MMT1AQxxDCP7lEFZuUVCIKfNKYoJCVjG+m5D+k8zv50eLIyfe7x6hVz5ASbpF8eGrr7wtbquEJuOqSUbEpL4PGFdNMkIhAo0g/wREoBGEQgQaQShEoBGEQgQaQShEoBGEQgQaQShEoBGEQgQaQShEoBGEQgQaQShEoBGEQgQaQShEoBH/DxC5iccu8PoEAAAAAElFTkSuQmCC"}}]);