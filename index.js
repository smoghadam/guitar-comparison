/*eslint-env jquery*/
/* global document, window*/

$(document).ready(function() {
    
    // Initially hide most elements
    $('#video-1').hide();
    $('#video-2').hide();
    $('#video-button-2').hide();
    $('.pickups').hide();
    $('#toggle-div').hide();
    $('#buy-button').hide();
    
    // Global variables for which guitars are selected
    var mod1 = "";
    var mod2 = "";
    
    //window.console.log("TEST");
    
    // Toggle button logic: play one video, pause another
    $('.toggle-group').click(function() {
        var video1 = document.getElementById('video-1');        
        var video2 = document.getElementById('video-2');
        
        if (video1.paused && video2.paused) {
            return;
        }
        else if (video1.paused) {
            video1.play();
            video2.pause();
            $('#toggle-video').bootstrapToggle();
        }
        else if (video2.paused) {
            video2.play();
            video1.pause();
            $('#toggle-video').bootstrapToggle();
        }
    });
    
    // Video 1 click function
    $("#video-list-1 button").click(function(e){ 
        $('#video-1').show();
        $('.pickups').show();
        $('#video-button-2').show();
        
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        
        // Disable appropriate options
        if (selText == "Fender Jaguar") {
            $('#jag2').addClass("disabled");
            $('#jag2').attr('disabled', true);
            
            $('#jazz2').removeClass("disabled");
            $('#jazz2').attr('disabled', false);
            $('#mustang2').removeClass("disabled");
            $('#mustang2').attr('disabled', false);
        }
        
        if (selText == "Fender Jazzmaster") {
            $('#jazz2').addClass("disabled");
            $('#jazz2').attr('disabled', true);
            
            $('#jag2').removeClass("disabled");
            $('#jag2').attr('disabled', false);
            $('#mustang2').removeClass("disabled");
            $('#mustang2').attr('disabled', false);
        }
        
        if (selText == "Fender Mustang") {
            $('#mustang2').addClass("disabled");
            $('#mustang2').attr('disabled', true);
            
            $('#jazz2').removeClass("disabled");
            $('#jazz2').attr('disabled', false);
            $('#jag2').removeClass("disabled");
            $('#jag2').attr('disabled', false);
        }
        
        mod1 = selText;
        $("#video-button-1").text(selText);
        document.getElementById('video-2').pause();
        
        // Toggle styling
        $('#toggle-video').bootstrapToggle('off');
        
          var vidPlaying = "left";
        
        if (selText == "Fender Jaguar") {
            document.getElementById('video-1').setAttribute("src", "video/jaguar_neck_clean.mp4");
            document.getElementById('video-1').load();
            document.getElementById('video-1').play();
        }
        else if (selText == "Fender Jazzmaster") {
            document.getElementById('video-1').setAttribute("src", "video/jazzmaster_neck_clean.mp4");
            document.getElementById('video-1').load();
            document.getElementById('video-1').play();
        }
        else if (selText == "Fender Mustang") {
            document.getElementById('video-1').setAttribute("src", "video/mustang_neck_clean.mp4");
            document.getElementById('video-1').load();
            document.getElementById('video-1').play();
        }
        selectPickup(vidPlaying);
    });
    
    $("#video-list-2 button").click(function(e){
        $('#toggle-div').show();
        $('#video-2').show();
        $('#buy-button').show();
        
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        
        if (selText == "Fender Jaguar") {
            $('#jag1').addClass("disabled");
            $('#jag1').attr('disabled', true);
            
            $('#jazz1').removeClass("disabled");
            $('#jazz1').attr('disabled', false);
            $('#mustang1').removeClass("disabled");
            $('#mustang1').attr('disabled', false);
        }
        
        if (selText == "Fender Jazzmaster") {
            $('#jazz1').addClass("disabled");
            $('#jazz1').attr('disabled', true);
            
            $('#jag1').removeClass("disabled");
            $('#jag1').attr('disabled', false);
            $('#mustang1').removeClass("disabled");
            $('#mustang1').attr('disabled', false);
        }
        
        if (selText == "Fender Mustang") {
            $('#mustang1').addClass("disabled");
            $('#mustang1').attr('disabled', true);
            
            $('#jazz1').removeClass("disabled");
            $('#jazz1').attr('disabled', false);
            $('#jag1').removeClass("disabled");
            $('#jag1').attr('disabled', false);
        }
        
        mod2 = selText;
        $("#video-button-2").text(selText);
        document.getElementById('video-1').pause();
        
        // Toggle styling
        $('#toggle-video').bootstrapToggle('on');
        
        var vidPlaying = "right";
        
        if (selText == "Fender Jaguar") {
            document.getElementById('video-2').setAttribute("src", "video/jaguar_neck_clean.mp4");
            document.getElementById('video-2').load();
            document.getElementById('video-2').play();
        }
        else if (selText == "Fender Jazzmaster") {
            document.getElementById('video-2').setAttribute("src", "video/jazzmaster_neck_clean.mp4");
            document.getElementById('video-2').load();
            document.getElementById('video-2').play();
        }
        else if (selText == "Fender Mustang") {
            document.getElementById('video-2').setAttribute("src", "video/mustang_neck_clean.mp4");
            document.getElementById('video-2').load();
            document.getElementById('video-2').play();
        }
        selectPickup(vidPlaying);
    });
    
    var rad = document.myForm.optradio;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
            (prev)? window.console.log(prev.value):null;
             if(this !== prev) {
                 prev = this;
             }
            window.console.log(this.value)
        
            var video2 = document.getElementById('video-2');
            if (video2.paused) {
                var vidPlaying = "left";
            }
            else {
                vidPlaying = "right";
            }
            selectPickup(vidPlaying);
        };
    }

    function selectPickup (vPlaying) {
        var model1 = mod1;
        var model2 = mod2;
        var vidPlaying = vPlaying;

        var pickup = document.querySelector('input[name = "optradio"]:checked').value;
        window.console.log('m1: ' + model1);
        window.console.log('m2: ' + model2);
        
        var vid1 = document.getElementById('video-1');
        var vid2 = document.getElementById('video-2');

        switch (pickup) {
            case "Neck":
                if (model1 == "Fender Jaguar") {
                    vid1.setAttribute("src", "video/jaguar_neck_clean.mp4");
                }
                else if (model1 == "Fender Jazzmaster") {
                    vid1.setAttribute("src", "video/jazzmaster_neck_clean.mp4");
                }
                else if (model1 == "Fender Mustang") {
                    vid1.setAttribute("src", "video/mustang_neck_clean.mp4");
                }
                
                if (model2 == "Fender Jaguar") {
                    vid2.setAttribute("src", "video/jaguar_neck_clean.mp4");
                }
                else if (model2 == "Fender Jazzmaster") {
                    vid2.setAttribute("src", "video/jazzmaster_neck_clean.mp4");
                }
                else if (model2 == "Fender Mustang") {
                    vid2.setAttribute("src", "video/mustang_neck_clean.mp4");
                }
                      
                break;
            case "Both":
                if (model1 == "Fender Jaguar") {
                    vid1.setAttribute("src", "video/jaguar_both_clean.mp4");
                }
                else if (model1 == "Fender Jazzmaster") {
                    vid1.setAttribute("src", "video/jazzmaster_both_clean.mp4");
                }
                else if (model1 == "Fender Mustang") {
                    vid1.setAttribute("src", "video/mustang_both_clean.mp4");
                }
                
                if (model2 == "Fender Jaguar") {
                    vid2.setAttribute("src", "video/jaguar_both_clean.mp4");
                }
                else if (model2 == "Fender Jazzmaster") {
                    vid2.setAttribute("src", "video/jazzmaster_both_clean.mp4");
                }
                else if (model2 == "Fender Mustang") {
                    vid2.setAttribute("src", "video/mustang_both_clean.mp4");
                }
                    
                break;
            case "Bridge":
                if (model1 == "Fender Jaguar") {
                    vid1.setAttribute("src", "video/jaguar_bridge_clean.mp4");
                }
                else if (model1 == "Fender Jazzmaster") {
                    vid1.setAttribute("src", "video/jazzmaster_bridge_clean.mp4");
                }
                else if (model1 == "Fender Mustang") {
                    vid1.setAttribute("src", "video/mustang_bridge_clean.mp4");
                }
                
                if (model2 == "Fender Jaguar") {
                    vid2.setAttribute("src", "video/jaguar_bridge_clean.mp4");
                }
                else if (model2 == "Fender Jazzmaster") {
                    vid2.setAttribute("src", "video/jazzmaster_bridge_clean.mp4");
                }
                else if (model2 == "Fender Mustang") {
                    vid2.setAttribute("src", "video/mustang_bridge_clean.mp4");
                }
                
                break;
        }
        
        if (vidPlaying == "left") {
            document.getElementById('video-1').play();
            document.getElementById('video-2').pause();
        }
        else {
            document.getElementById('video-2').play();
            document.getElementById('video-1').pause();
        }
    }
    
    $('#buy-button').click(function() {
        var video1 = document.getElementById('video-1');        
        var video2 = document.getElementById('video-2');
        
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "OK": function() {
                    $(this).dialog("close");
                    if (video2.paused) {
                        if (mod1 == "Fender Jaguar") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-american-professional-jaguar-rosewood-fingerboard-electric-guitar/j46544000003000?rNtt=fender%20jaguar%20red&index=2";
                        }
                        else if (mod1 == "Fender Jazzmaster") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-american-original-60s-jazzmaster-rosewood-fingerboard-electric-guitar?rNtt=jazzmaster&index=2";
                        }
                        else if (mod1 == "Fender Mustang") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-mustang-90-pau-ferro-fingerboard";
                        }
                    }
                    
                    else if (video1.paused) {
                        if (mod2 == "Fender Jaguar") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-american-professional-jaguar-rosewood-fingerboard-electric-guitar/j46544000003000?rNtt=fender%20jaguar%20red&index=2";
                        }
                        else if (mod2 == "Fender Jazzmaster") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-american-original-60s-jazzmaster-rosewood-fingerboard-electric-guitar?rNtt=jazzmaster&index=2";
                        }
                        else if (mod2 == "Fender Mustang") {
                            window.location.href = "https://www.musiciansfriend.com/guitars/fender-mustang-90-pau-ferro-fingerboard";
                        }
                    }
                },
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });
    });
});