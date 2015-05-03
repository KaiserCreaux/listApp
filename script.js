var list = [1,2]; //Holds the list array
var selection;
var remove;
var entryText;


    function addEntry() {
        var entry = document.getElementById('entryBox');
        list = list.concat(entry.value);
		alert(list);
		console.log(list);
    }
	
/*	
function addEntry(){ //adds text to $list array
	var entryBox=document.getElementById("entryBox").value;
	entryBox.textContent=entryText;
	list = list.concat(entryText);
	alert(list);
	
};
*/