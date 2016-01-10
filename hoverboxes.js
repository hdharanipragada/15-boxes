// Stores the current position
x=0;
y=0;

// Defines the boundaries of x and y
MAX_X=4;
MAX_Y=2;

// 2 D array to store the box IDs corresponding to the position
box=[[]];

box[0]= []
/*box[0][0]='box1';
box[0][1]='box2';
box[0][2]='box3';
box[0][3]='box4';
box[0][4]='box5';*/

box[1]= []
/*box[1][0]='box6';
box[1][1]='box7';
box[1][2]='box8';
box[1][3]='box9';
box[1][4]='box10';*/

box[2]= []
/*box[2][0]='box11';
box[2][1]='box12';
box[2][2]='box13';
box[2][3]='box14';
box[2][4]='box15';*/

window.onload=function(){
	var boxNum=1;
	for(y1=0;y1<=MAX_X;y1++){
		row = document.createElement('div');
		row.style.cssFloat="left";
		row.style.height = "100px";
		row.style.width="100px";
		row.style.border="1px solid red";
		row.style.marginLeft="25px";
		row.style.marginTop="25px";
		row.style.marginBottom="25px";
		row.style.background = "red";
		box[y1]=new Array();
		for(x1=0;x1<=MAX_Y;x1++){
			div = document.createElement('div');
			div.id='box'+boxNum;
			box[x1][y1]='box'+boxNum++;
			div.style.width = "100px";
			div.style.display = "inline-block";
			div.style.height = "100px";
			div.style.verticalAlign ="top";
			div.style.background = "red";
			div.style.color = "white";
			div.style.marginBottom="25px";
			div.innerHTML = box[x1][y1];
			row.appendChild(div);
		}
		document.body.appendChild(row);
	}
}

// functions that change the position when the key is pressed

   function leftArrowPressed() {
	   if(x<=0){
		errorMessage();
	   }
	   else{
		   x--;
	   }
	   move();
    }

    function rightArrowPressed() {
      if(x>=MAX_X){
	  		errorMessage();
	  	   }
	  	   else{
	  		   x++;
	   }
	   move();
    }
    function topArrowPressed() {
      if(y<=0){
	  		errorMessage();
	  	   }
	  	   else{
	  		  y--;
	   }
	   move();
    }

    function downArrowPressed() {
      if(y>=MAX_Y){
	  		errorMessage();
	  	   }
	  	   else{
	  		   y++;
	   }
	   move();
    }

	// Add the code here to highlight the box to which the user
	// has moved
    function move(){
		div = document.getElementById(box[y][x]);
		div.style.background = "blue";

			document.getElementById('errormessage').innerHTML = 'x='+x+",y="+y+" "+box[y][x];
	}

	// Show the error message but also have a way to remove it say after 5 seconds
    function errorMessage(){
		document.getElementById('errormessage').innerHTML = "Cannot move in this direction";
	}

	document.onkeydown = function(evt) {
		div = document.getElementById(box[y][x]);
		div.style.background = "red";
	 evt = evt || window.event;
	switch (evt.keyCode) {
			case 37:
			leftArrowPressed();
			break;

			case 38:
			topArrowPressed();
			break;

			 case 39:
			rightArrowPressed();
			break;

			case 40:
			downArrowPressed();
			break;

	}
};


