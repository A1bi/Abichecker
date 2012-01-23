var checker = new function () {
	
	var _this = this;
	var subjects = {};
	subjects.user = {};
	
	var updateSteps = function () {
		
	}
	
	var cloneSample = function (sample) {
		return sample.clone().removeClass("sample");
	}
	
	var updateSubjectSelects = function (selects, subs) {
		selects = $(".subject:not(.sample) select", selects);
		
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
	
	var getSelectedSubjects = function(selector) {
		var subs = {};
		subs.subjects = [];
		$(".subject:not(.sample) .name", selector).each(function (index, subject) {
			var val;
			var select = $("select", subject);
			// is there a select ? -> normal subject
			if (select.length) {
				val = select.val();
			// static text -> forced GK
			} else {
				// get hidden id
				val = $("div", subject).html();
			}
			subs.subjects.push(val);
			// checkbox checked ?
			if ($(subject).parent().find("input").is(":checked")) {
				subs.checked = val;
			}
		});
		
		return subs;
	}
	
	
	// -- LKs
	
	var prepareLKs = function () {
		// create the two missing selects for LKs
		// first get the empty one as an example to clone
		var row = $("#lks tr").eq(1);
		var lastRow = row;
		for (var i = 1; i <= 3; i++) {
			var newRow = cloneSample(row);
			$("td", newRow).first().html(i);
			lastRow.after(newRow);
			lastRow = newRow;
		}
		
		// register events only for the first two rows because it is not needed to check the last subject
		$("#lks select:not(:last)").change(updateLKs);
		
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
		updateSubjectSelects($("#lks"), subjects.lks);
	}
	
	var finishLKs = function () {
		// save chosen LKs by user
		var subs = getSelectedSubjects($("#lks"));
		subjects.user.lks = subs.subjects;
		subjects.user.lower = subs.checked;
		
		prepareGKs();
	}
	
	
	// -- GKs
	
	var prepareGKs = function () {
		// insert forced GKs
		var forcedSample = $("#gks .sample.forced");
		var i = 1;
		subjects.gks = {};
		subjects.user.gks = [];
		$.each(subjects.all, function (id, subject) {
			if ($.inArray(id, subjects.user.lks) == -1) {
				// forced GK -> add to table
				if (subject.forced) {
					var row = cloneSample(forcedSample);
					var cells = $("td", row);
					// row number
					cells.eq(0).html(i);
					// subject name and hidden id
					cells.eq(1).html(subject.name).append($("<div>").html(id));
					forcedSample.before(row);
					i++;
				// not forced -> add to available GKs
				} else {
					subjects.gks[id] = subject;
				}
			}
		});
		// add a select
		addGK();
		
		// add event listener
		$("#gks select").change(updateGKs);
		
		updateGKs();
	}
	
	var updateGKs = function () {
		// insert LKs into selects
		updateSubjectSelects($("#gks"), subjects.gks);
	}
	
	var addGK = function () {
		// insert new GK row
		var rows = $("#gks tr:not(.sample)");
		var newRow = cloneSample($("#gks .sample:not(.forced)")).change(updateGKs);
		// correct row number and add event listener
		$(".nr", newRow).html(rows.length);
		rows.last().after(newRow);
		
		updateGKs();
	}
	
	var finishGKs = function () {
		var subs = getSelectedSubjects($("#gks"));
		$.merge(subjects.user.gks, subs.subjects);
		subjects.user.oral = subs.checked;
		
		prepareQuali();
	}
	
	// -- qualifications
	
	var addQualiSubjects = function (table, subs, sample) {
		var sampleRow = $(sample, table);
		$.each(subs, function (id, subject) {
			var newRow = cloneSample(sampleRow);
			$(".name", newRow).html(subjects.all[subject].name).append($("<div>").html(subject));
			$(".sum", table).last().before(newRow);
		});
	}
	
	var prepareQuali = function () {
		// LKs
		addQualiSubjects($("#quali-lk"), subjects.user.lks, ".sample");
		
		// GKs
		var gk = $("#quali-gk");
		addQualiSubjects(gk, subjects.user.gks, ".sample");
		// correct forced semesters and remove 13th semester for oral exam
		$(".subject:not(.sample)", gk).each(function (index, subject) {
			var id = $(".name div", subject).html();console.log(id);
			if (subjects.user.oral == id) {
				$(".semester", subject).eq(3).html("mündl.");
			}
		});
		
		// exams
		var exams = $("#quali-exam");
		addQualiSubjects(exams, subjects.user.lks, ".sample.written");
		// oral
		addQualiSubjects(exams, [subjects.user.oral], ".sample.oral");
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
		$("#lks :submit").click(finishLKs);
		$("#gks .add").click(addGK);
		$("#gks :submit").click(finishGKs);
		
	});

}