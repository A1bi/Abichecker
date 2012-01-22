var checker = new function () {
	
	var _this = this;
	var subjects = {};
	
	var updateSteps = function () {
		
	}
	
	var updateSubjectSelects = function (selects, subs) {
		// make a temp working copy of all subjects
		var subsAvail = $.extend(true, {}, subs);
		
		// go through all selects
		selects.each(function (index, select) {
			
			// first save the current value to restore it later and then clear this select
			var oldValue = $(select).val();
			$(select).empty();
			
			// remove subjects already chosen
			for (var i = 0; i < index; i++) {
				subsAvail[selects.eq(i).val()] = null;
				delete subsAvail[selects.eq(i).val()];
			}
			
			$.each(subsAvail, function (id, subject) {
				var option = $("<option>").html(subject.name).val(id);
				if (oldValue == id) {
					option.attr("selected", "selected");
				}
				
				$(select).append(option);
			});
			
		});
	}
	
	
	// -- LKs
	
	var prepareLKs = function () {
		// create the two missing selects for LKs
		// first get the empty one as an example to clone
		var row = $("#lks tr").eq(1);
		for (var i = 2; i <= 3; i++) {
			var newRow = row.clone();
			$("td", newRow).first().html(i);
			row.after(newRow);
			row = newRow;
		}
		
		// gather all LKs
		subjects.lks = {};
		$.each(subjects.all, function (id, subject) {
			if (subject.lk) {
				subjects.lks[id] = subject;
			}
		});
		
		// insert LKs
		updateLKs();
	}
	
	var updateLKs = function () {
		// insert LKs into selects
		updateSubjectSelects($("#lks select"), subjects.lks);
	}
	
	var finishLKs = function () {
		prepareGKs();
	}
	
	
	// -- GKs
	
	var prepareGKs = function () {
		// insert forced GKs
		// first gather LKs chosen before
		var chosenLKs = [];
		$("#lks select").each(function (index, select) {
			chosenLKs[index] = $(select).val();
		});
		
		var firstRow = $("#gks table tr").eq(1);
		var i = 1;
		subjects.gks = {};
		$.each(subjects.all, function (id, subject) {
			if ($.inArray(id, chosenLKs) == -1) {
				// forced GK -> add to table
				if (subject.forced) {
					var row = firstRow.clone();
					var cells = $("td", row);
					// row number
					cells.eq(0).html(i);
					// subject name
					cells.eq(1).html(subject.name);
					firstRow.before(row);
					i++;
				// not forced -> add to available GKs
				} else {
					subjects.gks[id] = subject;
				}
			}
		});
		// finally correct the row number for the last row
		$("td", firstRow).first().html(i);
		
		updateGKs();
	}
	
	var updateGKs = function () {
		// insert LKs into selects
		updateSubjectSelects($("#gks select"), subjects.gks);
	}
	
	var finishGKs = function () {
		
	}
	
	var update = new function () {
		updateSteps();
		//updateSubjects();
	}
	
	$(function () {
		// load subjects from server
		$.get("/cache/subjects.json", function(data) {
			subjects.all = data.subjects;
			prepareLKs();
		});
		
		// register events
		$("#lks select").change(updateLKs);
		$("#lks :submit").click(finishLKs);
		
	});

}