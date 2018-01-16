function song(title, fileURL) {

	this.title = title;
	this.fileURL = fileURL;
}

c= 0;

s1 = new song("Led Zeppelin-Stairway To Heaven", "audio/Led Zeppelin-Stairway To Heaven.mp3");
s2 = new song("Pink Floyd-Us and Then", "audio/Pink Floyd-Us and Then.mp3");
s3 = new song("USA FOR AFRICA -We Are The World","audio/USA FOR AFRICA -We Are The World.mp3");

var songList = [s1,s2,s3];


function play() {

	var x = document.getElementById("f-audio")
	x.load();
	showSong(songList[c]);
	x.play();


}


function pause() {
	var x = document.getElementById("f-audio")
	x.pause();
}

function next() {
	c = c+1;
	if(c>songList.length) {
		c = 0;
	}

	document.getElementById("f-Song").innerHTML = "<audio id = \"f-audio\" src=\"" + songList[c].fileURL + "\"></audio>"

	play();
}

function previuos() {
	c = c -1;
	if(c<0) {
		c = songList.length-1;
	}

	document.getElementById("f-Song").innerHTML = "<audio id = \"f-audio\" src=\"" + songList[c].fileURL + "\"></audio>"
	play();
}


function showSong(song) {
	document.getElementById("playing").innerText = song.title;
}


function shuffle() {

	var r = Math.floor((Math.random() * 3) + 1);
	c = r;
	document.getElementById("f-Song").innerHTML = "<audio id = \"f-audio\" src=\"" + songList[c].fileURL + "\"></audio>"
	play();


}



