var checker = new function () {
	
	var _this = this;
	var subjects;
	
	var updateSteps = function () {
		
	}
	
	var updateSubjectSelects = function (selects, subs) {
		// make a temp working copy of all subjects
		var subsAvail = subs;
		
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
		
		// insert LKs
		updateLKs();
	}
	
	var updateLKs = function () {
		// gather all LKs
		var lks = {};
		$.each(subjects, function (id, subject) {
			if (subject.lk) {
				lks[id] = subject;
			}
		});
		// insert LKs into selects
		updateSubjectSelects($("#lks select"), lks);
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
		$.each(subjects, function (id, subject) {
			if ($.inArray(id, chosenLKs) == -1 && subject.forced) {
				var row = firstRow.clone();
				var cells = $("td", row);
				// row number
				cells.eq(0).html(i);
				// subject name
				cells.eq(1).html(subject.name);
				firstRow.before(row);
				i++;
			}
		});
		// finally correct the row number for the last row
		$("td", firstRow).first().html(i);
	}
	
	var updateGKs = function () {
		
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
			subjects = data.subjects;
			prepareLKs();
		});
		
		// register events
		$("#lks select").change(updateLKs);
		$("#lks :submit").click(finishLKs);
		
	});

}