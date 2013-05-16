$(document).ready(function() {
	$(".video_play").bind('click',function()
    {
		var videoID = $(this).attr('id');
		var url = 'http://www.youtube.com/embed/' + videoID;
		var windowwidth = $(window).width();
		var windowheight = $(window).height();
		var frameborder_value = "0";
		//var allowfullscreen_value = true;
		var frame = '<iframe ' + 
					'width="' + windowwidth  + '" ' + 
					'height="' + windowheight + '" ' +  
					'src="' + url + '" ' +  
					'frameborder="' + "0" + '" ' +
					'allowfullscreen' + '>' + 
					'</iframe>';
		$("#video_player_page").append(frame);
		window.location = "#video_player_page"
    });
	$(".back_button").bind('click',function(){})
});

