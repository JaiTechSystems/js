
    //Setting value of date to today's date
      $(document).ready( function() {
        //Define today
        var now = new Date();
        var month = (now.getMonth() + 1);               
        var day = now.getDate();
        if(month < 10) 
            month = "0" + month;
        if(day < 10) 
            day = "0" + day;
        var today = now.getFullYear() + '-' + month + '-' + day;
          
        console.log(today);
        //Add id_names
        $('#datefield-4155-inputEl').val(today);
        $('#datefield-4155-inputEl-2').val(today);
        setTimeout(function(){$('input[type="date"]').val(today)},1000);
    });
