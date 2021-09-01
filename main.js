function search(){
    if(document.getElementById("music_name").value==""){
        window.alert("Fill in a song name.");
    }
    else{
        window.alert("Click on ok to proceed to next page");
        window.location = "find_song_page.html";
    }
}