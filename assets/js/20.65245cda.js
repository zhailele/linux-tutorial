(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{474:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iostat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iostat"}},[t._v("#")]),t._v(" iostat")]),t._v(" "),a("p",[t._v("监视系统输入输出设备和 CPU 的使用情况")]),t._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),a("p",[a("strong",[t._v("iostat 命令")]),t._v(" 被用于监视系统输入输出设备和 CPU 的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出 CPU 使用情况。同 vmstat 一样，iostat 也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iostat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("-c：仅显示CPU使用情况；\n-d：仅显示设备利用率；\n-k：显示状态以千字节每秒为单位，而不使用块每秒；\n-m：显示状态以兆字节每秒为单位；\n-p：仅显示块设备和所有被使用的其他分区的状态；\n-t：显示每个报告产生时的时间；\n-V：显示版号并退出；\n-x：显示扩展状态。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("间隔时间：每次报告的间隔时间（秒）；")]),t._v(" "),a("li",[t._v("次数：显示报告的次数。")])]),t._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("p",[t._v("用"),a("code",[t._v("iostat -x /dev/sda1")]),t._v("来观看磁盘 I/O 的详细情况：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iostat -x /dev/sda1\nLinux "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v(".18-164.el5xen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localhost.localdomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("年03月26日\n\navg-cpu:  %user   %nice %system %iowait\n%steal   %idle\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.18")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99.31")]),t._v("\n\nDevice:         tps   Blk_read/s    Blk_wrtn/s\nBlk_read   Blk_wrtn\nsda1                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2014")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),a("p",[t._v("详细说明：第二行是系统信息和监测时间，第三行和第四行显示 CPU 使用情况（具体内容和 mpstat 命令相同）。这里主要关注后面 I/O 输出的信息，如下所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("标示")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Device")]),t._v(" "),a("td",[t._v("监测设备名称")])]),t._v(" "),a("tr",[a("td",[t._v("rrqm/s")]),t._v(" "),a("td",[t._v("每秒需要读取需求的数量")])]),t._v(" "),a("tr",[a("td",[t._v("wrqm/s")]),t._v(" "),a("td",[t._v("每秒需要写入需求的数量")])]),t._v(" "),a("tr",[a("td",[t._v("r/s")]),t._v(" "),a("td",[t._v("每秒实际读取需求的数量")])]),t._v(" "),a("tr",[a("td",[t._v("w/s")]),t._v(" "),a("td",[t._v("每秒实际写入需求的数量")])]),t._v(" "),a("tr",[a("td",[t._v("rsec/s")]),t._v(" "),a("td",[t._v("每秒读取区段的数量")])]),t._v(" "),a("tr",[a("td",[t._v("wsec/s")]),t._v(" "),a("td",[t._v("每秒写入区段的数量")])]),t._v(" "),a("tr",[a("td",[t._v("rkB/s")]),t._v(" "),a("td",[t._v("每秒实际读取的大小，单位为 KB")])]),t._v(" "),a("tr",[a("td",[t._v("wkB/s")]),t._v(" "),a("td",[t._v("每秒实际写入的大小，单位为 KB")])]),t._v(" "),a("tr",[a("td",[t._v("avgrq-sz")]),t._v(" "),a("td",[t._v("需求的平均大小区段")])]),t._v(" "),a("tr",[a("td",[t._v("avgqu-sz")]),t._v(" "),a("td",[t._v("需求的平均队列长度")])]),t._v(" "),a("tr",[a("td",[t._v("await")]),t._v(" "),a("td",[t._v("等待 I/O 平均的时间（milliseconds）")])]),t._v(" "),a("tr",[a("td",[t._v("svctm")]),t._v(" "),a("td",[t._v("I/O 需求完成的平均时间")])]),t._v(" "),a("tr",[a("td",[t._v("%util")]),t._v(" "),a("td",[t._v("被 I/O 需求消耗的 CPU 百分比")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);