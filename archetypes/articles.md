{{- $created := .Date | time | dateFormat "2006-01-02" -}}
---
title: {{ .Name }}
description: ''
author: Aly W.
published: {{ $created }}
updated: {{ $created }}
translated: {{ $created }}
translators:
  - Bersella AI
draft: true
---