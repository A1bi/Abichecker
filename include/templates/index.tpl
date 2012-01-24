{include file="head.tpl" jsfile="checker"}
<div class="step subjects" id="lks">
	<div class="head">Leistungskurse <span class="edit">- ändern</span></div>
	<div class="content">
		Wähle hier deine drei Leistungskurse und markiere dabei in der dritten Spalte den abgestuften Kurs.
		<table>
			<tr>
				<td class="nr"></td>
				<td class="name">Leistungskurs</td>
				<td class="lower">abgestuft</td>
			</tr>
			<tr class="subject sample">
				<td class="nr">1</td>
				<td class="name"><select name="lk"></select></td>
				<td class="lower"><input type="radio" name="lower" value="" title="Diesen LK abstufen" /></td>
			</tr>
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
				<td class="name">Grundkurs</td>
				<td class="lower">mündliche Prüfung</td>
			</tr>
			<tr class="subject sample">
				<td class="nr">1</td>
				<td class="name"><select name="lk"></select></td>
				<td class="lower"><input type="radio" name="oral" value="" title="Diesen Grundkurs als mündliches Prüfungsfach auswählen" /></td>
			</tr>
			<tr class="subject sample forced">
				<td class="nr">1</td>
				<td class="name"></td>
				<td class="lower"><input type="radio" name="oral" value="" title="Diesen Grundkurs als mündliches Prüfungsfach auswählen" /></td>
			</tr>
		</table>
		<div class="add">
			weiteren Grundkurs hinzufügen
		</div>
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
				<td class="name">Leistungskurs</td>
				<td class="semester">11/2</td>
				<td class="semester">12/1</td>
				<td class="semester">12/2</td>
				<td class="points">Summe</td>
				<td class="points">Summe zweifach</td>
			</tr>
			<tr class="subject sample">
				<td class="name">Geschichte</td>
				<td class="semester"><select name="112" title="Punkte in der 11/2"><option>15</option></select></td>
				<td class="semester"><select name="112" title="Punkte in der 12/1"><option>15</option></select></td>
				<td class="semester"><select name="112" title="Punkte in der 12/2"><option>15</option></select></td>
				<td class="points"></td>
				<td class="points"></td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points"></td>
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
				<td class="name">Grundkurs</td>
				<td class="semester">11/2</td>
				<td class="semester">12/1</td>
				<td class="semester">12/2</td>
				<td class="semester">13</td>
				<td class="points">eingereichte Kurse</td>
				<td class="points">Summe</td>
			</tr>
			<tr class="subject sample">
				<td class="name">Deutsch</td>
				<td class="semester"><select name="112" title="Punkte in der 11/2"><option>15</option></select> <input type="checkbox" checked="checked" title="Kurs einreichen" /></td>
				<td class="semester"><select name="112" title="Punkte in der 12/1"><option>15</option></select> <input type="checkbox" checked="checked" title="Kurs einreichen" /></td>
				<td class="semester"><select name="112" title="Punkte in der 12/2"><option>15</option></select> <input type="checkbox" checked="checked" title="Kurs einreichen" /></td>
				<td class="semester"><select name="112" title="Punkte in der 13"><option>15</option></select> <input type="checkbox" checked="checked" title="Kurs einreichen" /></td>
				<td class="points"></td>
				<td class="points"></td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points"></td>
				<td class="points"></td>
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
				<td class="name">Prüfung</td>
				<td class="semester">13</td>
				<td class="semester">schriftlich</td>
				<td class="semester">mündlich</td>
				<td class="points">Prüfung vierfach</td>
				<td class="points">Summe</td>
			</tr>
			<tr class="subject sample written">
				<td class="name">Geschichte</td>
				<td class="semester"><select name="112" title="Punkte in der 13"><option>15</option></select></td>
				<td class="semester"><select name="112" title="Punkte in der schriftlichen Prüfung"><option>15</option></select></td>
				<td class="semester">-</td>
				<td class="points"></td>
				<td class="points"></td>
			</tr>
			<tr class="subject sample oral">
				<td class="name">Geschichte</td>
				<td class="semester"><select name="112" title="Punkte in der 13"><option>15</option></select></td>
				<td class="semester">-</td>
				<td class="semester"><select name="112" title="Punkte in der mündlichen Prüfung"><option>15</option></select></td>
				<td class="points"></td>
				<td class="points"></td>
			</tr>
			<tr class="sum">
				<td class="requires" colspan="5">Summe</td>
				<td class="points"></td>
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