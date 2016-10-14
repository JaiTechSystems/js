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
          //        parameter 11 - Display a default value or not (1 = yes, 0 = no)
          
          
          dropDownContent("Material*&nbsp", "85e5d3a9-9b45-4b8a-b0d2-cfb2e1bad3e5", "Material", "MaterialDD",   $('#CategoryDD').val(), "@Category", DisplayColumnIndex,"reloadUM()",442, IDColumnIndex, 0,"required", "Material");
        }
    $('#Q4254_units').val("");        
    }
    
    function copyGLAccountValue(obj){
      document.getElementById('GL_Acc').value = obj.value;
    }

    function reloadUM(){
      
        var field = "@Material_Description";
        var searchValue = $('#MaterialDD').val();
        console.log(searchValue);
        $.ajax({
          url: "/reports/348858dd-95a0-4c82-9de9-10914be2d372",
          type: "POST",
          dataType: "json",
          data: {
              "start": 0,
              "filters": [{ "field": field, "data": { "comparison": "eq", "type": "integer", "value": searchValue } }],
              "persist": true     },
          success: function (data) {
            var rowcount = 0;
              _.each(data.Items, function (item) {
                if(rowcount > 0){
                  console.log(item[7]);
                  $('#Q4254_units').val(item[7]);
                }
                rowcount++;
              });
                  },
              error: function () {
                      alert("Error loading data!");
                  }
       });  //.ajax
        
    }
    
    function reloadProjectPhase(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;
        $( "#phaseSelection" ).empty();
        if(!$('#ProjectDD').val() == ""){
        dropDownContent("Phase*&nbsp"  , "441d57f3-27f3-40dd-ac10-cee28bd6d307", "phaseSelection"    , "ProjectPhaseDD" , $('#ProjectDD').val(), "@Project",           DisplayColumnIndex+1,                 "",  0, IDColumnIndex+1, 0,"required", "Phase");
        }
    }

    onload = function(){
      var DisplayColumnIndex = 2;
      var IDColumnIndex = 1;

      dropDownContent("Project*&nbsp;"  , "b0947f33-e6cb-45ae-9d04-e8b38fd2d32a", "projectSelection"  , "ProjectDD" ,  "",        "", DisplayColumnIndex, "reloadProjectPhase()",  0, IDColumnIndex, 0,"required", "Project");
         
      dropDownContent("Facility*&nbsp;"  , "ee872e4c-f4bc-4bf5-82b1-b5ea90d2d366", "facilitySelection" , "FacilityDD",  "", "",           DisplayColumnIndex,                 "",  0, IDColumnIndex, 0,"required", "Facility");
      dropDownContent("Category*&nbsp;" , "f8a7474c-f613-487f-93ba-fac1aec2d36e", "Category"               , "CategoryDD",  "1200", "@Category",           DisplayColumnIndex, "reloadMaterial()",442, IDColumnIndex, 0,"required", "Category");

      $('input[name=Q4189]').click(function ()
         {
            if (this.id == "Q4189_1")
            {
              
               $("div#projectSelections").show();
               $("div#phaseSelections").show();
               $("div#facilitySelections").hide();
               $("div#otherSelections").hide();
            } else if (this.id == "Q4189_2")
                   {
            
                      $("div#projectSelections").hide();
                      $("div#phaseSelections").hide();
                      $("div#facilitySelections").show();
                      $("div#otherSelections").hide();
                   } else {
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
              $("span#delivery").html("Delivery Location");
              } else if (this.id == "Q4242_2")
              { 
                $("span#delivery").html("Pickup Location");          
              }
        });   
      
    }
      