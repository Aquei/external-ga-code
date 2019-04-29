(function(){
	"use strict";

	var regex = /^UA\-\d+\-\d+$/,
		sended = false,
		count = 0,
		timer;

	function find_id(){
		if(sended){
			return;
		}
		var selectors = "#ga-id,.ga-id,[name='ga-id'],[data-ga-id]",
			nodes = document.querySelectorAll(selectors),
			t, elm, i, c, d;
		for(i=0;i<nodes.length;i++){
			elm = nodes[i];

			t = elm.textContent;
			if(t && regex.test(t)){
				return t;
			}

			c = elm.content;
			if(c && regex.test(c)){
				return c;
			}

			d = elm.getAttribute("data-ga-id");
			if(d && regex.test(d)){
				return d;
			}
		}
		return false;
	}

	function send(id){
		if(sended){
			return;
		}else{
			sended = true;
		}

		window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
		ga('create', id, 'auto');
		ga('send', 'pageview');
	}

	function main(){
		if(sended || count > 100){
			return;
		}
		var id = find_id();
		if(id){
			send(id);
		}else{
			window.clearTimeout(timer);
			timer = window.setTimeout(main, 100);
			++count;
			return;
		}
	}

	main();
})();
