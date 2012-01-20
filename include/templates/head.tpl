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
	<div id="logo">Abichecker</div>
	<div id="logo_sub">für dein Abitur 2012 in Rheinland-Pfalz</div>
	
	<div id="about">
		<div class="close">X</div>
		<div class="head">Was bringt mir der Abichecker?</div>
		Der Abichecker rechnet dir deine Abiturnote nach den MSS-Richtlinien für 2012 aus. Dazu fütterst du ihn einfach mit deinen Noten und am Ende spuckt er dir deine Durchschnittsnote aus.
		<br />Der Abichecker zeigt dir ebenfalls, wo dir noch Punkte zum bestandenen Abi fehlen.
	</div>