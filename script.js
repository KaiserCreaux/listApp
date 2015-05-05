/* step one--tell computer you're readyState
 step two--read input
 step three--add input to array(or other storage)
 step four--display stored array
 step five--allow for deletion of items in array */
 
 
var list;
var output = document.getElementById("outputList");
var i = 0;


   function addEntry()
   {
		i ++; //This is used to count both the LIs and button ids
		input = document.getElementById("entryBox").value;
		var li=document.createElement('li');
		li.id = 'item'+i;
	    output.appendChild(li);
		var button = "<button class='listButton' id='button" + i + "' onclick='removeMe();'>Remove</button>";
	    li.innerHTML=li.innerHTML + input + button;
   }

	function removeMe()
	{
	
		document.getElementById("outputList");
		var target = this.parent;
		target.removeChild(button);

		//var remove = (this).parent.remove();
	}
	//var body = document.getElementsByTagName("body")[0];

	
	
	//element.remove()