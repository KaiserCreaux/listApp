var output = document.getElementById("outputList");
var list = [];
var entry = {};

   function addEntry()
	{
		input = document.getElementById("entryBox").value; //Reads value from form
		entry.j = {
			entryText: entry,
			entryIndex: j
		};
		j++;
		console.log(entry);
		}
		document.getElementById("entryBox").value = ""; //Clears entry box for new text
		list.push(input);
		while (outputList.firstChild) //clearing the old displayed list
		{
			outputList.removeChild(outputList.firstChild);
		}

		for (i=0; i<list.length; i++) //relating to HTML
		{
			var li=document.createElement('li'); //Creates li
		    output.appendChild(li); //attaches li to the output list
			li.onclick = function() //provides list items removal function
				{

				function remove() 
					{
					delete list[i]; //pulls it out of the array
					console.log(list);
					}

				remove();
				this.parentNode.removeChild(this); //pulls it out of the DOM
				} 

			li.innerHTML=li.innerHTML + list[i]; //adds the entryBox value to the li
		}

	}
	
	

	
