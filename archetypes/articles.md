{{- $date := time .Date -}}
{{- $created := $date.Format "2006-01-02" -}}
---
title: {{ .Name }}
author: Aly
published: {{ $created }}
updated: {{ $created }}
translated: {{ $created }}
translators: [Bersella AI]
draft: true
---

## 译者按 {#notice}

1. TODO
1. TODO

--------

--------

## 译文修订历史 {#revise-history}

```csv
时间,备注
{{ $date.Format "2006 年 1 月 2 日" }},首次翻译。
```
