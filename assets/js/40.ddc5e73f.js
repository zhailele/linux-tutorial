(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{493:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-典型运维应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-典型运维应用"}},[t._v("#")]),t._v(" Linux 典型运维应用")]),t._v(" "),s("blockquote",[s("p",[t._v("💡 如果没有特殊说明，本文的案例都是针对 Centos 发行版本。")])]),t._v(" "),s("h2",{attrs:{id:"网络操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络操作"}},[t._v("#")]),t._v(" 网络操作")]),t._v(" "),s("h3",{attrs:{id:"无法访问外网域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无法访问外网域名"}},[t._v("#")]),t._v(" 无法访问外网域名")]),t._v(" "),s("p",[t._v("（1）在 hosts 中添加本机实际 IP 和本机实际域名的映射")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.1 hostname"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts\n")])])]),s("p",[t._v("如果不知道本机域名，使用 "),s("code",[t._v("hostname")]),t._v(" 命令查一下；如果不知道本机实际 IP，使用 "),s("code",[t._v("ifconfig")]),t._v(" 查一下。")]),t._v(" "),s("p",[t._v("（2）配置信赖的 DNS 服务器")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("vi /etc/resolv.conf")]),t._v(" ，添加以下内容：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("nameserver "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.114")]),t._v(".114.114\nnameserver "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.8")]),t._v(".8.8\n")])])]),s("blockquote",[s("p",[t._v("114.114.114.114 是国内老牌 DNS")]),t._v(" "),s("p",[t._v("8.8.8.8 是 Google DNS")]),t._v(" "),s("p",[t._v("👉 参考："),s("a",{attrs:{href:"https://www.zhihu.com/question/32229915",target:"_blank",rel:"noopener noreferrer"}},[t._v("公共 DNS 哪家强"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("（3）测试一下能否 ping 通 www.baidu.com")]),t._v(" "),s("h3",{attrs:{id:"配置网卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置网卡"}},[t._v("#")]),t._v(" 配置网卡")]),t._v(" "),s("p",[t._v("使用 root 权限编辑 "),s("code",[t._v("/etc/sysconfig/network-scripts/ifcfg-eno16777736X")]),t._v(" 文件")]),t._v(" "),s("p",[t._v("参考以下进行配置：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Ethernet                        # 网络类型：Ethernet以太网")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("BOOTPROTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("none                       # 引导协议：自动获取、static静态、none不指定")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DEFROUTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes                         # 启动默认路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV4_FAILURE_FATAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("no                # 不启用IPV4错误检测功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6INIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes                         # 启用IPV6协议")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_AUTOCONF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes                    # 自动配置IPV6地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_DEFROUTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes                    # 启用IPV6默认路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_FAILURE_FATAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("no                # 不启用IPV6错误检测功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_PEERDNS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_PEERROUTES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPV6_PRIVACY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"no"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("eno16777736                     # 网卡设备的别名（需要和文件名同名）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("UUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("90528772-9967-46da-b401-f82b64b4acbc  # 网卡设备的UUID唯一标识号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DEVICE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("eno16777736                   # 网卡的设备名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ONBOOT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("yes                           # 开机自动激活网卡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPADDR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.1.199                 # 网卡的固定IP地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("PREFIX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("24                            # 子网掩码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("GATEWAY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.1.1                  # 默认网关IP地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DNS1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("8.8.8.8                         # DNS域名解析服务器的IP地址")]),t._v("\n")])])]),s("p",[t._v("修改完后，执行 "),s("code",[t._v("systemctl restart network.service")]),t._v(" 重启网卡服务。")]),t._v(" "),s("h2",{attrs:{id:"系统维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统维护"}},[t._v("#")]),t._v(" 系统维护")]),t._v(" "),s("h2",{attrs:{id:"自动化脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化脚本"}},[t._v("#")]),t._v(" 自动化脚本")]),t._v(" "),s("h3",{attrs:{id:"linux-开机自启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-开机自启动脚本"}},[t._v("#")]),t._v(" Linux 开机自启动脚本")]),t._v(" "),s("p",[t._v("（1）在 "),s("code",[t._v("/etc/rc.local")]),t._v(" 文件中添加命令")]),t._v(" "),s("p",[t._v("如果不想将脚本粘来粘去，或创建链接，可以在 "),s("code",[t._v("/etc/rc.local")]),t._v(" 文件中添加启动命令")]),t._v(" "),s("ol",[s("li",[t._v("先修改好脚本，使其所有模块都能在任意目录启动时正常执行;")]),t._v(" "),s("li",[t._v("再在 "),s("code",[t._v("/etc/rc.local")]),t._v(" 的末尾添加一行以绝对路径启动脚本的行;")])]),t._v(" "),s("p",[t._v("例：")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("vim /etc/rc.local")]),t._v(" 命令，输入以下内容：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This script will be executed *after* all the other init scripts.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can put your own initialization stuff in here if you don't")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# want to do the full Sys V style init stuff.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /var/lock/subsys/local\n/opt/pjt_test/test.pl\n")])])]),s("p",[t._v("（2）在 "),s("code",[t._v("/etc/rc.d/init.d")]),t._v(" 目录下添加自启动脚本")]),t._v(" "),s("p",[t._v("Linux 在 "),s("code",[t._v("/etc/rc.d/init.d")]),t._v(" 下有很多的文件，每个文件都是可以看到内容的，其实都是一些 shell 脚本或者可执行二进制文件。")]),t._v(" "),s("p",[t._v("Linux 开机的时候，会加载运行 "),s("code",[t._v("/etc/rc.d/init.d")]),t._v(" 目录下的程序，因此我们可以把想要自动运行的脚本放到这个目录下即可。系统服务的启动就是通过这种方式实现的。")]),t._v(" "),s("p",[t._v("（3）运行级别设置")]),t._v(" "),s("p",[t._v("简单的说，运行级就是操作系统当前正在运行的功能级别。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("不同的运行级定义如下:\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 - 停机（千万不能把initdefault 设置为0 ）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 - 单用户模式       　　进入方法#init s = init 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 - 多用户，没有 NFS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3 - 完全多用户模式(标准的运行级)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4 - 没有用到")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5 - X11 多用户图形模式（xwindow)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6 - 重新启动 （千万不要把initdefault 设置为6 ）")]),t._v("\n")])])]),s("p",[t._v("这些级别在 "),s("code",[t._v("/etc/inittab")]),t._v(" 文件里指定，这个文件是 init 程序寻找的主要文件，最先运行的服务是放在/etc/rc.d 目录下的文件。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("/etc")]),t._v(" 目录下面有这么几个目录值得注意：rcS.d rc0.d rc1.d ... rc6.d (0，1... 6 代表启动级别 0 代表停止，1 代表单用户模式，2-5 代表多用户模式，6 代表重启) 它们的作用就相当于 redhat 下的 rc.d ，你可以把脚本放到 rcS.d，然后修改文件名，给它一个启动序号，如: S88mysql")]),t._v(" "),s("p",[t._v("不过，最好的办法是放到相应的启动级别下面。具体作法:")]),t._v(" "),s("p",[t._v("（1）先把脚本 mysql 放到 /etc/init.d 目录下")]),t._v(" "),s("p",[t._v("（2）查看当前系统的启动级别")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ runlevel\nN "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("（3）设定启动级别")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  98 为启动序号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  2 是系统的运行级别，可自己调整，注意不要忘了结尾的句点")]),t._v("\n$ update-rc.d mysql start "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("现在我们到 /etc/rc2.d 下，就多了一个 S98mysql 这样的符号链接。")]),t._v(" "),s("p",[t._v("（4）重启系统，验证设置是否有效。")]),t._v(" "),s("p",[t._v("（5）移除符号链接")]),t._v(" "),s("p",[t._v("当你需要移除这个符号连接时，方法有三种：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("直接到 "),s("code",[t._v("/etc/rc2.d")]),t._v(" 下删掉相应的链接，当然不是最好的方法；")])]),t._v(" "),s("li",[s("p",[t._v("推荐做法："),s("code",[t._v("update-rc.d -f s10 remove")])])]),t._v(" "),s("li",[s("p",[t._v("如果 update-rc.d 命令你不熟悉，还可以试试看 rcconf 这个命令，也很方便。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("👉 参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/linuxshine/article/details/50717272",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux 添加开机自启动脚本示例详解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/ssooking/p/6094740.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux 设置开机自启动"),s("OutboundLink")],1)])])]),t._v(" "),s("h3",{attrs:{id:"定时执行脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时执行脚本"}},[t._v("#")]),t._v(" 定时执行脚本")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"设置-linux-启动模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-linux-启动模式"}},[t._v("#")]),t._v(" 设置 Linux 启动模式")]),t._v(" "),s("ol",[s("li",[t._v("停机(记得不要把 initdefault 配置为 0，因为这样会使 Linux 不能启动)")]),t._v(" "),s("li",[t._v("单用户模式，就像 Win9X 下的安全模式")]),t._v(" "),s("li",[t._v("多用户，但是没有 NFS")]),t._v(" "),s("li",[t._v("完全多用户模式，准则的运行级")]),t._v(" "),s("li",[t._v("通常不用，在一些特殊情况下可以用它来做一些事情")]),t._v(" "),s("li",[t._v("X11，即进到 X-Window 系统")]),t._v(" "),s("li",[t._v("重新启动 (记得不要把 initdefault 配置为 6，因为这样会使 Linux 不断地重新启动)")])]),t._v(" "),s("p",[t._v("设置方法：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/id:5:initdefault:/id:3:initdefault:/'")]),t._v(" /etc/inittab\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/moxiaoan/p/5683743.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS7 使用 firewalld 打开关闭防火墙与端口"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/z_yong_cool/article/details/79288397",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux 定时执行脚本"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);