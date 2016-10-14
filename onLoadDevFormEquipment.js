    
    checkloadjscssfile("jquery/jquery-1.7.1.min.js","js");
    checkloadjscssfile("underscore/underscore-min.js","js");
    checkloadjscssfile("SearchBoxProtect.js", "js");

    function reloadMaterial(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
      $( "#Material" ).empty();
      if(!$('#CategoryDD').val() == ""){
    	dropDownContent("Category *", "345955E8-028C-406E-8C21-D91F58ECD3DB", "Material", "MaterialDD",   $('#CategoryDD').val(), "@Category", 1,"",442, 0,0,"required", "Category");
      }
		$('#Q4254_units').val("");
    }
    
    function copyGLAccountValue(obj){
    	document.getElementById('GL_Acc').value = obj.value;
    }
    
    function reloadProjectPhase(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
      	$( "#phaseSelection" ).empty();
		if(!$('#ProjectDD').val() == ""){
    		dropDownContent("Phase  "  , "6A86EDD4-039C-4CAB-B990-27B958ECD3F5", "phaseSelection"    , "ProjectPhaseDD" , $('#ProjectDD').val(), "@Project",           DisplayColumnIndex+1,                 "",  0, IDColumnIndex+1, 0,"required", "Phase");
        }    
    }
    
    function reloadEquipmentCategory(){
      //CategoryGroup
      $( "#EquipmentCategory" ).empty();
      dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  $('#EquipmentCategoryGroupDD').val(), "@CategoryGroup", 1, "",100, 0, 0,"required", "Category");
    }

    onload = function(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;

      dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
     
      dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
      
      dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");
      
      dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");
      
      dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");
      
      
        $('input[name=Q4189]').click(function () {
            hide();
		});
        
        $('input[name=Q4242]').click(function () {
			hide();
        });      
    }
	
	function hide(){
		console.log("hide");
		if(document.getElementById("Q4242_1").checked){ //New Rental
			$(".GL_ACC").show();
			$("span#delivery").html("Delivery Location");        
			document.getElementById('MainEquipmentCategoryGroup').style.display = "";
			document.getElementById('EquipmentCategoryGroup').style.visibility = "visible"
			document.getElementById('MainEquipmentCategory').style.display = "";
			document.getElementById('EquipmentCategory').style.visibility = "visible"
			document.getElementById('MainEquipment').style.display = "";
			document.getElementById('Equipment').style.display = "none"
	
			if(document.getElementById("Q4189_1").checked){ //Project
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
              
              
				console.log("Project");
				$("div#projectSelections").show();
				$("div#projectSelection").show();
				$("div#phaseSelection").show();
				$("div#facilitySelections").hide();
				$("div#otherSelections").hide();
			}
			if(document.getElementById("Q4189_2").checked){
				console.log("Facility");
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
				$("div#projectSelections").hide();
				$("div#phaseSelections").hide();
				$("div#facilitySelections").show();
				$("div#otherSelections").hide();
			}    
			if(document.getElementById("Q4189_3").checked){
				console.log("Other");
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
				$("div#projectSelections").hide();
				$("div#phaseSelections").hide();
				$("div#facilitySelections").hide();
				$("div#otherSelections").show();				
			}    
			
		}
		if(document.getElementById("Q4242_2").checked){ //End Rental
			$(".GL_ACC").hide();
			document.getElementById('MainEquipmentCategoryGroup').style.display = "none";
			document.getElementById('EquipmentCategoryGroup').style.visibility = "collapse"
			document.getElementById('MainEquipmentCategory').style.display = "none";
			document.getElementById('EquipmentCategory').style.visibility = "collapse"
			document.getElementById('MainEquipment').style.display = "";
			document.getElementById('Equipment').style.visibility = "visible"
			document.getElementById('Equipment').style.display = "block"			
			$("span#delivery").html("Pickup Location");
			if(document.getElementById("Q4189_1").checked){
				console.log("Project");
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
				$("#projectSelections").show();
				$("div#projectSelection").show();
				$("div#phaseSelection").hide();
				$("div#facilitySelections").hide();
				$("div#otherSelections").hide();
			}
			if(document.getElementById("Q4189_2").checked){
				console.log("Facility");
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
				$("div#projectSelection").hide();
				$("div#phaseSelection").hide();
				$("div#facilitySelections").show();
				$("div#otherSelections").hide();
			}
			if(document.getElementById("Q4189_3").checked){
				console.log("Other");
              	$( "#Material" ).empty();
              	$( "#phaseSelection" ).empty();
              	$( "#EquipmentCategory" ).empty();
              	$( "#projectSelection" ).empty();
              	$( "#facilitySelection" ).empty();
              	$( "#EquipmentCategoryGroup" ).empty();
              	$( "#Equipment" ).empty();
                var DisplayColumnIndex = 2;
                var IDColumnIndex = 1;                
                dropDownContent("Project&nbsp;"  , "057BB99B-4F4F-437E-9856-35C758ECD3B5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");                
                dropDownContent("Facility&nbsp;"  , "5220B5D5-104D-4705-9556-7F5158ECD395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");                
                dropDownContent("Category Group*&nbsp;" , "46A7DD57-09E2-4874-8EDD-3E3958ECD3B0", "EquipmentCategoryGroup", "EquipmentCategoryGroupDD",  "", "", 1, "reloadEquipmentCategory()",100, 1, 0,"required", "Category Group");                
                dropDownContent("Category*&nbsp;" , "345955E8-028C-406E-8C21-D91F58ECD3DB", "EquipmentCategory", "EquipmentCategoryDD",  "", "", 1, "",100, 0, 0,"required", "Category");                
                dropDownContent("Equipment*&nbsp;" , "E4B38333-549C-4078-B0AF-A30858ECD341", "Equipment", "EquipmentDD",  "", "", 2, "",100, 0, 0,"required", "Equipment");              
              	$( "#Q4254" ).val("");
                $( "#datefield-4155-inputEl" ).val("");
                $( "#datefield-4155-inputEl-2" ).val("");

				var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#GL_Acc_Facility').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');  
				$("div#projectSelection").hide();
				$("div#phaseSelection").hide();
				$("div#facilitySelections").hide();
				$("div#otherSelections").show();
			}
		  }		
	}
