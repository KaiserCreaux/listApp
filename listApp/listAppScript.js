var output = document.getElementById("outputList");
   function addEntry()
	{
		input = document.getElementById("entryBox").value;
		document.getElementById("entryBox").value = ""; //Clears entry box for new text
		var li=document.createElement('li'); //Creates li
	    output.appendChild(li); //attaches li to the output list
		li.onclick = function() {this.parentNode.removeChild(this);} //provides list items removal function
	    li.innerHTML=li.innerHTML + input; //adds the entryBox value to the li
	}