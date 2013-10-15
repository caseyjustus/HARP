require([
	'lib/backbone'
], function(){

	var harLog = function(har){
		//$('#panelWrapper').html(har.creator.name);
		require(['harpInit'],
			function(){

			}
		);
	};

	if (chrome.devtools){ // load browser's HAR in extension
		$('#environ').html('extension dev');

		chrome.devtools.network.getHAR(harLog);

	}else{
		require(['sample.js'], function(){ // load static HAR for local
			$('#environ').html('local dev');

			harLog(sampleHar.log);
		});
	}
});
