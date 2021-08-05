# Request

通用的请求方法

## 简介

根据公司业务封装的请求接口， 默认会以`json`的方式请求接口。 会自动获取`userId`, `tenantId`放到请求中, 并且会自动添加
`access_token`到请求头中。

<code src="./demo/index.demo" />
