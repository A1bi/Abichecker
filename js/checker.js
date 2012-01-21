var checker = new function () {
	
	var _this = this;
	var subjects;
	
	var updateSteps = function () {
		
	}
	
	var updateSubjectSelects = function (selects, subs) {
		// go through all selects
		selects.each(function (index) {
			var _this = $(this);
			
			$.each(subs, function (id, subject) {
				// check it this subject hasn't been selected before
				var taken = false;
				for (var i = 0; i < index; i++) {
					if (selects.eq(i).find("option").val() == subject.name) {
						taken = true;
					}
				}

				if (!taken) _this.append($("<option>").html(subject.name));
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
		
	});

}