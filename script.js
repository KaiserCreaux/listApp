var output = document.getElementById("outputList");
   function addEntry()
	{
		input = document.getElementById("entryBox").value;

			document.getElementById("entryBox").value = "";

		var li=document.createElement('li');
	    output.appendChild(li);
		li.onclick = function() {this.parentNode.removeChild(this);}
	    li.innerHTML=li.innerHTML + input;
	}