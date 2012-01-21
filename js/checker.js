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
	
	var updateSubjects = function () {
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
	
	var update = new function () {
		updateSteps();
		//updateSubjects();
	}
	
	$(function () {
		// load subjects from server
		$.get("/cache/subjects.json", function(data) {
			subjects = data.subjects;
			updateSubjects();
		});
		
		// register events
		$("#lks select").change(updateSubjects);
		
	});

}