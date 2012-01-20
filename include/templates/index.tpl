{include file="head.tpl"}
<div class="step subjects" id="lks">
	<div class="head">Leistungskurse <span class="edit">- ändern</span></div>
	<div class="content">
		Wähle hier deine drei Leistungskurse und markiere dabei in der dritten Spalte den abgestuften Kurs.
		<table>
			<tr>
				<td class="nr"></td>
				<td class="subject">Leistungskurs</td>
				<td class="lower">abgestuft</td>
			</tr>
			{section name="lks" loop=3}
			<tr>
				<td class="nr">{$smarty.section.lks.iteration}</td>
				<td class="subject"><select name="lk"><option>Deutsch</option></td>
				<td class="lower"><input type="radio" name="lower" value="{$smarty.section.lks.iteration}" /></td>
			</tr>
			{/section}
		</table>
		<div class="next">
			<input type="submit" value="ok, weiter" />
		</div>
	</div>
</div>
<div class="step subjects" id="gks">
	<div class="head">Grundkurse <span class="edit">- ändern</span></div>
	<div class="content">
		Füge hier deine Grundkurse hinzu und wähle dabei auch das mündliche Prüfungsfach aus.
		<table>
			<tr>
				<td class="nr"></td>
				<td class="subject">Grundkurs</td>
				<td class="lower">mündliche Prüfung</td>
			</tr>
			{section name="gks" loop=3}
			<tr>
				<td class="nr">{$smarty.section.gks.iteration}</td>
				<td class="subject"><select name="lk"><option>Deutsch</option></td>
				<td class="lower"><input type="radio" name="lower" value="{$smarty.section.gks.iteration}" /></td>
			</tr>
			{/section}
		</table>
		<div class="next">
			<input type="submit" value="ok, weiter" />
		</div>
	</div>
</div>
<div class="step quali" id="quali-lk">
	<div class="head">Leistungsfachbereich</div>
	<div class="content">
		Trage hier bitte deine Halbjahresnoten der einzelnen Kurse ein und wähle anschließend aus, welche Grundkurse du für deine Qualifikation einreichen möchtest. Pflichtkurse werden automatisch eingereicht.
		<table>
			<tr>
				<td class="subject">Leistungskurs</td>
				<td class="semester">11/2</td>
				<td class="semester">12/1</td>
				<td class="semester">12/2</td>
				<td class="points">Summe</td>
				<td class="points">Summe zweifach</td>
			</tr>
			<tr>
				<td class="subject">Geschichte</td>
				<td class="semester"><select name="112"><option>15</option></select></td>
				<td class="semester"><select name="112"><option>15</option></select></td>
				<td class="semester"><select name="112"><option>15</option></select></td>
				<td class="points">45</td>
				<td class="points">90</td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points">90</td>
			</tr>
		</table>
	</div>
</div>
<div class="step quali" id="quali-gk">
	<div class="head">Grundfachbereich</div>
	<div class="content">
		Trage hier bitte deine Halbjahresnoten der einzelnen Kurse ein und wähle anschließend aus, welche Grundkurse du für deine Qualifikation einreichen möchtest. Pflichtkurse werden automatisch eingereicht.
		<table>
			<tr>
				<td class="subject">Grundkurs</td>
				<td class="semester">11/2</td>
				<td class="semester">12/1</td>
				<td class="semester">12/2</td>
				<td class="semester">13</td>
				<td class="points">eingereichte Kurse</td>
				<td class="points">Summe</td>
			</tr>
			<tr>
				<td class="subject">Deutsch</td>
				<td class="semester"><select name="112"><option>15</option></select> <input type="checkbox" checked="checked" /></td>
				<td class="semester"><select name="112"><option>15</option></select> <input type="checkbox" checked="checked" /></td>
				<td class="semester"><select name="112"><option>15</option></select> <input type="checkbox" checked="checked" /></td>
				<td class="semester"><select name="112"><option>15</option></select> <input type="checkbox" checked="checked" /></td>
				<td class="points">4</td>
				<td class="points">105</td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points">4</td>
				<td class="points">105</td>
			</tr>
		</table>
	</div>
</div>
<div class="step quali" id="quali-exam">
	<div class="head">Prüfungsbereich</div>
	<div class="content">
		Trage hier deine Noten aus den 13er LKs, den schriftlichen und mündlichen Prüfungen ein.
		<table>
			<tr>
				<td class="subject">Prüfung</td>
				<td class="semester">13</td>
				<td class="semester">schriftlich</td>
				<td class="semester">mündlich</td>
				<td class="points">Prüfung vierfach</td>
				<td class="points">Summe</td>
			</tr>
			<tr>
				<td class="subject">Geschichte</td>
				<td class="semester"><select name="112"><option>15</option></select></td>
				<td class="semester"><select name="112"><option>15</option></select></td>
				<td class="semester">-</td>
				<td class="points">60</td>
				<td class="points">75</td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points">105</td>
			</tr>
		</table>
	</div>
</div>
<div class="step" id="summary">
	<div class="head">Deine Abi-Note</div>
	<div class="content">
		Du hast dein Abi geschafft!<br />
		Deine Durchschnittsnote ist:
		<div class="average">2,0</div>
	</div>
</div>
{include file="foot.tpl"}