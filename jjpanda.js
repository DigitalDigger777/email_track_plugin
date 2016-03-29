(function($){
	$('document').ready(function(){
		var baseUrl = 'https://beta.jjpanda.com';

		$('.button.send').removeAttr('onclick');
		$('#statistic').click(function(e){
			var email 	= $('.username').text();
			window.location = baseUrl + '/web-mail/statistic/emails?email=' + email;
					
			e.preventDefault();
		});
		
		$('.button.send').click(function(e){
			console.log('test');
			console.log(this);
			console.log($(this));

			var self 		= this; 			
			var fromEmail 	= $('.username').text();
			var toStr   	= $('#_to').val();
			var toList  	= toStr.split(',');
			var toEmail 	= toList[0];

			$.ajax({
				url: baseUrl + '/web-mail/track/sent',
				dataType: 'jsonp',
				method: 'post',
				data: {
					to_email: toEmail,
					from_email: fromEmail	
				},
				success: function(data){
					var id = data.statisticId;
					var content = '';

					if (tinyMCE.activeEditor) {
						content = tinyMCE.activeEditor.getContent();
						tinyMCE.activeEditor.setContent(content + '<img src="' + baseUrl + '/web-mail/track/open?to_email=' + toEmail + '&statistic_id=' + id + '" />');
					} else {
						content = $('#composebody').val();
						$('#composebody').val(content + '<img src="' + baseUrl + '/web-mail/track/open?to_email=' + toEmail + '&statistic_id=' + id + '"/>');
					}
					rcmail.command('send','', this, e.originalEvent);
				},
				error: function(error){
					console.log(error);		
				}
			});

			for (var i = 0; i < toList.length; i++) {
				

			
			}
			
			e.preventDefault();
		});
	});
})(jQuery);
