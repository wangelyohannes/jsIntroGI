let userText = prompt("type a word");

if(userText === userText.toUpperCase()){
    alert("SHOUT");
}    
else if (userText === userText.toLowerCase()){
    alert("whisper");
}    
else{
    alert("neither");
}