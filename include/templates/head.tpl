<!DOCTYPE html>
<html>
<head>
	<title>Abichecker{if $title != ""} - {$title}{/if}</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="/css/main.css{fileVersion file="/css/main.css"}" />
	<script src="http://system.albisigns.de/js/lib/jquery.js"></script>
{if $css != ""}
	<style type="text/css">
{include file=$css}

	</style>
	
{/if}
{if $cssfile != ""}
	<link rel="stylesheet" type="text/css" href="/css/{$cssfile}.css{fileVersion file="/css/{$cssfile}.css"}" />	  
{/if}
{if $jsfile != ""}
	<script src="/js/{$jsfile}.js{fileVersion file="/js/{$jsfile}.js"}"></script>
{/if}
{if $head != ""}
{include file=$head}
	
{/if}
</head>

<body>
	