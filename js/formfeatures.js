// Autocomplete-feature 

var autocomplete;

function initialize() {
  var input1 = document.getElementById('autocomplete1');
  var input2 = document.getElementById('autocomplete2');
  var input3 = document.getElementById('autocomplete3');
  var input4 = document.getElementById('autocomplete4');
  var autocomplete1 = new google.maps.places.Autocomplete(input1);
  var autocomplete2 = new google.maps.places.Autocomplete(input2);
  var autocomplete3 = new google.maps.places.Autocomplete(input3);
  var autocomplete4 = new google.maps.places.Autocomplete(input4);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Slidebar-feature: show value

function showValue(nr, newValue)
{
	document.getElementById("range"+nr).innerHTML=newValue;
}

// Datepicker-feature

$(".date-picker").datepicker();
