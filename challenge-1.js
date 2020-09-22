var lines = 4;
var hashtag = "#";
for (var i = 0; i < lines+1; i++){
  document.write(hashtag);
  hashtag += "#";
  document.write("<br>");
}
for (var i = 0; i < lines; i++){
  for(var j = 0; j < lines-i; j++){
    document.write("#");
  }
  document.write("<br>");
}
