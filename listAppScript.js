var output = document.getElementById("outputList");
var list = [];
   function addEntry()
	{
		input = document.getElementById("entryBox").value;
		document.getElementById("entryBox").value = ""; //Clears entry box for new text
		list.push(input);
		while (outputList.firstChild) //clearing the old array
		{
			outputList.removeChild(outputList.firstChild);
		}
		for (i=0; i<list.length; i++)
		{
			var li=document.createElement('li'); //Creates li
		    output.appendChild(li); //attaches li to the output list
			li.onclick = function() //provides list items removal function
				{
				var remove = list.splice(i-1, 1); //pulls it out of the array
				this.parentNode.removeChild(this); //pulls it out of the DOM
				} 
			li.innerHTML=li.innerHTML + list[i]; //adds the entryBox value to the li
		}

	}
	
	

	
