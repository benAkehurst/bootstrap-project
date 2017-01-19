(function(){

	"use strict";
	
	// Start of jQuery Self Invoked
	$(function(){

		// The following are all the AJAX requests regarding the weather data in each location
		// Pulls weather data for London
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {        
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#londonSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);
		        }
		    });
		});

		// Pulls weather data for Barcelona
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Barcelona,ES&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {        
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#barcelonaSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       
		        }
		    });
		});

		// Pulls weather data for NYC
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Manhattan,US&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {     
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#nycSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       
		        }
		    });
		});

		// Pulls weather data for Paris
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {        
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#parisSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       	
		        }
		    });
		});

		// Pulls weather data for Sydney
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {      
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#sydneySpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       
		        }
		    });
		});

		// Pulls weather data for Tel Aviv
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Tel%20Aviv,IL&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {     
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#telAvivSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       
		        }
		    });
		});

		// Pulls weather data for Tokyo
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {  
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#tokyoSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       	
		        }
		    });
		});

		// Pulls weather data for Toronto
		$(".img-responsive").mouseenter(function() {
			$.ajax({
		        type: "GET",
		        url: 'http://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
		        error: function (err) {
		            alert("Error: " + err.status + ", " + err.statusText);
		        },

		        success: function (response) {          
		        	var arr = response;
		        	var temp = parseInt(arr.main.temp);
		        	var conditions = arr.weather[0].description;
		        	var conditionsCapitalLetter = capitalizeFirstLetter(conditions);

		        	$("#torontoSpan").html("Temp: " + temp + " " + "&deg" + "C" + '<br />' + "Current Conditions: " + conditionsCapitalLetter);       	
		        }
		    });
		});
		// End of AJAX Requests for Weather Conditions

		
		// Contact Form Validation

		$( "#textareaMessage" ).keyup(function() {
		  $("#btnSendInfo").removeAttr('disabled');
		});

		// This will dispaly the user submitted info in a modal window
		$("#btnSendInfo").click(function(){

			var textboxFullName = $("#textboxFullName").val();
			$("#spanModalName").text(textboxFullName);
			var userEmail = $("#userEmail").val();
			$("#modalEmail").text(userEmail);
			var spanDate = $("#date").val();
			$("#spanDate").text(spanDate);
	
		});

		// These are the rules for the gallery on the about us page
		$('.gallerySlick').slick({
			dots: true,
		  	infinite: false,
		  	speed: 300,
		  	slidesToShow: 4,
		  	slidesToScroll: 4,
		  	responsive: [{
		      breakpoint: 1024,
		      settings: {
		      slidesToShow: 3,
		      slidesToScroll: 3,
		      infinite: true,
		      dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      slidesToShow: 2,
		      slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		      }
		    }
		  ]
		});

	// End of jQuery Self Invoked
    });

	// Function to capitalize the first letter of the weather conditions
	function capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}
// End of self-invoked site.js
})();