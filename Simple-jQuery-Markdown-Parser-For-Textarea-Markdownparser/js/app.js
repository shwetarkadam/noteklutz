jQuery(document).ready(function($){

	$(document).on('keyup', '#text', function(){
		
		$('#output1').html( $('#text').parseAsMarkdown() );
		$('#output2').html( $('#text').parseAsMarkdown() );

	});

	$('#output1').html( $('#text').parseAsMarkdown() )
	$('#output2').html( $('#text').parseAsMarkdown() )

});