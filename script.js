/* step one--tell computer you're readyState
 step two--read input
 step three--add input to array(or other storage)
 step four--display stored array
 step five--allow for deletion of items in array */
 
 
var list;
var output = document.getElementById("outputList");

   function addEntry()
   {
		input = document.getElementById("entryBox").value;
		//alert(input); 
		var li=document.createElement('li');
	    output.appendChild(li);
	    li.innerHTML=li.innerHTML + input + "<button class='listButton' onclick='removeMe();'>Remove</button>";
   }

	function removeMe()
	{
		var parent = document.getElementById("outputList");
		var target = li.parent;
		var remove = parent.removeChild(target);
	}

	
	
	//element.remove()