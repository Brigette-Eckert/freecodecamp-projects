$(document).ready(function() {
		var url = "http://crossorigin.me/http://catfacts-api.appspot.com/api/facts?number=1?callback=JSON_CALLBACK?";
		//twitter button js
		window.twttr = (function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0],
						t = window.twttr || {};
				if (d.getElementById(id)) return t;
				js = d.createElement(s);
				js.id = id;
				js.src = "https://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);

				t._e = [];
				t.ready = function(f) {
						t._e.push(f);
				};

				return t;
		}(document, "script", "twitter-wjs"));

		//fact call back
		$("#fact-btn").click(function() {
			$("#tweet-container").html("");	
				$.getJSON(url, function(data) {
						fact = data.facts[0];
						$("#fact-display").html(fact);

				twttr.widgets.createShareButton(
				  'http://goo.gl/lqo1gR',
				  document.getElementById('tweet-container'),
				  {
				    text: fact,
				    hashtags: "cats, random, facts",
				    via: "CatFacts101",
				    count: "none"

				  }
				);
				});

				});
		});

