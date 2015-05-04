
   var list=["1"]
   function addEntry()
   {
    var output=document.getElementById("outputList");
     list.push(document.getElementById("entryBox").value);
    output.innerHTML=list.join('<br/>'); 
   }