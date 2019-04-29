# これは
[google analyticsのデフォルトスニペット](https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced?hl=ja#alternativeSnippet)を外部にまとめたもの トラッカーidはdocumentから適当に見つけるかタイムアウト(10秒)するまで探す

ga-idというidやclass、nameをもつ要素やdata-ga-idという属性をもつ要素のテキストノードや属性を探します

## usage
例1
```
<script async src="//www.google-analytics.com/analytics.js"></script>
<script async src="path/to/ga.js" data-ga-id="UA-12345678-9"></script>
```

例2
```
<head>
	<meta name="ga-id" content="UA-12345678-9">
	<script async src="//www.google-analytics.com/analytics.js"></script>
	<script async src="path/to/ga.js"></script>
</head>
```

例3
```
<script async src="//www.google-analytics.com/analytics.js"></script>
<script async src="path/to/ga.js"></script>
<div class="ga-id foo bar" hidden>UA-12345678-9</div>
```

例4
```
<script async src="//www.google-analytics.com/analytics.js"></script>
<script async src="path/to/ga.js"></script>
<span id="ga-id" hidden>UA-12345678-9</span>
```
