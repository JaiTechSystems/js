  
    checkloadjscssfile("jquery/jquery-1.7.1.min.js","js");
    checkloadjscssfile("underscore/underscore-min.js","js");
    checkloadjscssfile("SearchBoxProtect.js", "js");
    
    
    function reloadMaterial(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
      	$( "#Material" ).empty();
        if(!$('#CategoryDD').val() == ""){
          
          //                parameter 01 - Label 
          //                parameter 02 - Integrify Report GUID
          //                parameter 03 - DIV TAG where to add component
          //                parameter 04 - ID of the component, so it can be refernced
          //                parameter 05 - Value to filter In case of filtering criteria (Optional)
          //                parameter 06 - Field to filter In case of filtering criteria (Required if parameter 5)
          //                parameter 07 - Column Index to use at the text on the select Object
          //                parameter 08 - Method to execute when onchage event triger (Optional)
          //                parameter 09 - width of the label column
          //                parameter 10 - Column Index to use at the value on the select Object
          //				parameter 11 - Display a default value or not (1 = yes, 0 = no)
          
          
          dropDownContent("Material*&nbsp", "5ab1ac07-bdac-4ff1-b62a-2e3a5becd30e", "Material", "MaterialDD",   $('#CategoryDD').val(), "@Category", DisplayColumnIndex,"reloadUM()",442, IDColumnIndex, 0,"required", "Material");
        }
		$('#Q4254_units').val("");        
    }
    
    
    function copyGLAccountValue(obj){
    	document.getElementById('GL_Acc').value = obj.value;
    }

    function reloadUM(){
      $( "#umSection" ).empty();
      if(!$('#MaterialDD').val() == ""){
      	dropDownContent("UM*&nbsp", "f902ac21-78a7-418c-ad41-31aec8f2d3cc", "umSection", "Q4254_units",   $('#MaterialDD').val(), "@Material", 2,"",50,2, 1,"required", "UM");
      }
    	
      	
    }
    
    function reloadProjectPhase(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
      	$( "#phaseSelection" ).empty();
        if(!$('#ProjectDD').val() == ""){
    		dropDownContent("Phase*&nbsp"  , "6a86edd4-039c-4cab-b990-27b958ecd3f5", "phaseSelection"    , "ProjectPhaseDD" , $('#ProjectDD').val(), "@Project",           DisplayColumnIndex+1,                 "",  0, IDColumnIndex+1, 0,"required", "Phase");
        }
    }

    function clean(){
        $( "#projectSelection" ).empty();
        $( "#phaseSelection" ).empty();
        $( "#facilitySelection" ).empty();
        $( "#Category" ).empty();
        $( "#Category" ).empty();
        $( "#Material" ).empty();
        dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
        dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
        dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
        $('#datefield-4155-inputEl').val('');
        $('#datefield-4155-inputEl-2').val('');
        $('#Q4254').val('');
        $('#Q4256').val('');
        $('#GL_Acc_Other').val('');
        $('#Q4224').val('');
        $('#Q4224_addr').val('');
        $('#Q4224_city').val('');
        $('#Q4224_state').val('');
        $('#Q4224_zip').val('');
        $('#Q4254_units').val('');              
    }

    
    
    onload = function(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
      $('#datefield-4155-inputEl').val('');
      $('#datefield-4155-inputEl-2').val('');
      dropDownContent("Project*&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
         
      dropDownContent("Facility*&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
      dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");

      $('input[name=Q4189]').click(function ()
         {

            if (this.id == "Q4189_1")
            {
              var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
                $( "#projectSelection" ).empty();
                $( "#phaseSelection" ).empty();
                $( "#facilitySelection" ).empty();
                $( "#Category" ).empty();
                $( "#Category" ).empty();
                $( "#Material" ).empty();
                dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
                dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
                dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
                $('#datefield-4155-inputEl').val('');
                $('#datefield-4155-inputEl-2').val('');
                $('#Q4254').val('');
                $('#Q4256').val('');
                $('#GL_Acc_Other').val('');
                $('#Q4224').val('');
                $('#Q4224_addr').val('');
                $('#Q4224_city').val('');
                $('#Q4224_state').val('');
                $('#Q4224_zip').val('');
                $('#Q4254_units').val('');              
                $("div#projectSelections").show();
                $("div#phaseSelections").show();
                $("div#facilitySelections").hide();
                $("div#otherSelections").hide();
              } else if (this.id == "Q4189_2")
                   {
                     var errorSection = document.getElementById("ValidationErrors");
                     errorSection.innerHTML = "";
                     $( "#projectSelection" ).empty();
                     $( "#phaseSelection" ).empty();
                     $( "#facilitySelection" ).empty();
                     $( "#Category" ).empty();
                     $( "#Category" ).empty();
                     $( "#Material" ).empty();
                     dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
                     dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
                     dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
                     $('#datefield-4155-inputEl').val('');
                     $('#datefield-4155-inputEl-2').val('');
                     $('#Q4254').val('');
                     $('#Q4256').val('');
                     $('#GL_Acc_Other').val('');
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

                   } else {
                     var errorSection = document.getElementById("ValidationErrors");
                       errorSection.innerHTML = "";
                       $( "#projectSelection" ).empty();
                       $( "#phaseSelection" ).empty();
                       $( "#facilitySelection" ).empty();
                       $( "#Category" ).empty();
                       $( "#Category" ).empty();
                       $( "#Material" ).empty();
                       dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
                       dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
                       dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
                       $('#datefield-4155-inputEl').val('');
                       $('#datefield-4155-inputEl-2').val('');
                       $('#Q4254').val('');
                       $('#Q4256').val('');
                       $('#GL_Acc_Other').val('');
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
         );
        
        $('input[name=Q4242]').click(function () {
           if (this.id == "Q4242_1")
              {
                var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
        $( "#projectSelection" ).empty();
        $( "#phaseSelection" ).empty();
        $( "#facilitySelection" ).empty();
        $( "#Category" ).empty();
        $( "#Category" ).empty();
        $( "#Material" ).empty();
        dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
        dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
        dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
        $('#datefield-4155-inputEl').val('');
        $('#datefield-4155-inputEl-2').val('');
        $('#Q4254').val('');
        $('#Q4256').val('');
        $('#GL_Acc_Other').val('');
        $('#Q4224').val('');
        $('#Q4224_addr').val('');
        $('#Q4224_city').val('');
        $('#Q4224_state').val('');
        $('#Q4224_zip').val('');
        $('#Q4254_units').val('');              $("span#delivery").html("Delivery Location");

              } else if (this.id == "Q4242_2")
              { 
                var errorSection = document.getElementById("ValidationErrors");
                errorSection.innerHTML = "";
        $( "#projectSelection" ).empty();
        $( "#phaseSelection" ).empty();
        $( "#facilitySelection" ).empty();
        $( "#Category" ).empty();
        $( "#Category" ).empty();
        $( "#Material" ).empty();
        dropDownContent("Project&nbsp;"  , "057bb99b-4f4f-437e-9856-35c758ecd3b5", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
        dropDownContent("Facility&nbsp;"  , "5220b5d5-104d-4705-9556-7f5158ecd395", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
        dropDownContent("Category*&nbsp;" , "0ab93b53-fd1f-4ae2-9e05-2d8858ecd3dd", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");
        $('#datefield-4155-inputEl').val('');
        $('#datefield-4155-inputEl-2').val('');
        $('#Q4254').val('');
        $('#Q4256').val('');
        $('#GL_Acc_Other').val('');
        $('#Q4224').val('');
        $('#Q4224_addr').val('');
        $('#Q4224_city').val('');
        $('#Q4224_state').val('');
        $('#Q4224_zip').val('');
        $('#Q4254_units').val('');                $("span#delivery").html("Pickup Location"); 
              }
        });   
      
    }
      