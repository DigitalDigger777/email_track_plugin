(function($){
	$('document').ready(function(){
		$('.button.send').removeAttr('onclick');
		$('#statistic').click(function(e){
			var email 	= $('.username').text();
			window.location = 'https://beta.jjpanda.com/web-mail/statistic/emails?email=' + email;
					
			e.preventDefault();
		});
		
		$('.button.send').click(function(e){
			console.log('test');
			console.log(this);
			console.log($(this));
			
			var toList = $('#_to').val();
			
			for (var i = 0; i < toList.length; i++) {
				
				if (tinyMCE.activeEditor) {
					var content = tinyMCE.activeEditor.getContent();
					tinyMCE.activeEditor.setContent(content + '<img src="http://dev.panda/web-mail/track/open?to_email='+toList[i]+'&statistic_id=3" />');
				} else {
					var text = $('#composebody').val();
					$('#composebody').val(text + '<img src="http://dev.panda/web-mail/track/open?to_email='+toList[i]+'&statistic_id=3"/>');
				}
			
			}
			
			if (tinyMCE.activeEditor) {
				var content = tinyMCE.activeEditor.getContent();
				tinyMCE.activeEditor.setContent(content + '<img src="http://dev.panda/web-mail/track/open?to_email=korman_@mail.ru&statistic_id=3" />');
			} else {
				var text = $('#composebody').val();
				$('#composebody').val(text + '<img src="http://dev.panda/web-mail/track/open?to_email=korman_@mail.ru&statistic_id=3"/>');
			}
			return rcmail.command('send','', this, e.originalEvent);
		});
	});
})(jQuery);
