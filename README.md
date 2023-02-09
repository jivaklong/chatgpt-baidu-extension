# ChatGPT for baidu

Goole浏览器扩展插件，用于显示ChatGPT响应以及百度和其他搜索引擎结果
<img width="1481" alt="image" src="https://user-images.githubusercontent.com/10142906/217600014-7b4429f4-69e9-4825-abd6-03e1fd55dfa9.png">

# 基于谷歌,火狐浏览器插件，用于显示ChatGPT响应以及百度搜索引擎插件下载
<p dir="auto"><a href="https://www.evdian.com/plug/browser/chromium.zip" rel="nofollow">安装Chrome浏览器插件,已编绎好插件</a></p>
<p dir="auto"><a href="https://www.evdian.com/plug/browser/firefox.zip" rel="nofollow">安装火狐浏览器插件,已编绎好插件</a></p>

## 支持搜索引擎

Baidu, Google, Bing, DuckDuckGo, Brave, Yahoo, Naver, Yandex, Kagi, Searx

## 特征

-支持所有流行的搜索引擎
-支持官方OpenAI API
-标记渲染
-代码亮点
-黑暗模式
-提供反馈以改进ChatGPT
-复制到剪贴板
-自定义触发模式
-切换语言


### 浏览器参数配置
<img width="1374" alt="image" src="https://user-images.githubusercontent.com/10142906/217600248-b216bfdf-57c3-45fe-a539-e4f46373176d.png">

### OpenAI账号注册

前往 [OpenAI注册页面](https://beta.openai.com/signup) 创建账号，参考这篇 [教程](https://blog.csdn.net/jiva123/article/details/128946869?spm=1001.2014.3001.5502) 可以通过虚拟手机号来接收验证码。创建完账号则前往 [API管理页面](https://beta.openai.com/account/api-keys) 创建一个 API Key 并保存下来，后面需要在项目中配置这个key。

> 项目中使用的对话模型是 davinci，计费方式是每1k字 (包含请求和回复) 消耗 $0.02，图片生成是每张消耗 $0.016，账号创建有免费的 $18 额度，使用完可以更换邮箱重新注册。


## 浏览器API配置,用API key更稳定 🤖

1. 首先，需要按照以下步骤获你的 ChatGPT 的 OPENAI_API_KEY.

> 获取你的 OPENAI_API_KEY:
>
> - 打开 [https://platform.openai.com/overview](https://platform.openai.com/overview) 并登录注册，进入网页。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413138418-d5df2543-bd37-41cc-a16c-505c5a38e88d.png)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413190188-4cf10947-ea7f-479d-9550-0dec9d40c0e2.png?x-oss-process=image%2Fresize%2Cw_1500%2Climit_0)

2. 把 OPENAI_API_KEY 填入配置参数API key进行保存。
<img width="889" alt="image" src="https://user-images.githubusercontent.com/10142906/217688641-da36bc8a-a2bc-4b64-8324-4ae31a2a5e78.png">

### 2.运行环境

支持 Linux、MacOS、Windows 系统（可在Linux服务器上长期运行)，同时需安装 `nodejs`。 
我这边使用的是HBuilder编辑器编译

## 克隆项目代码：

```bash
git clone https://github.com/jivaklong/chatgpt-baidu-extension
cd chatgpt-baidu-extension/
```
## 编泽源码
2. 安装 `npm`
3. `npm run build`
4. 加载 `build/chromium/` or `build/firefox/` 目录到你的浏览器插件

## 灵感

这个项目的灵感来自[ZohaibAhmed/ChatGPT Google](https://github.com/ZohaibAhmed/ChatGPT-Google)
