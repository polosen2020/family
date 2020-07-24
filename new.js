var Family =function (firstname,middlename,birthyear,birthday,birthplace,job) {
	this.firstname = firstname;
	this.middlename = middlename;
	this.birthyear = birthyear;
	this.birthday  = birthday;
	this.birthplace = birthplace;
	this.job       = job;

};

Family.prototype.calAge = function(year) {
	age = year - this.birthyear;
	console.log(age);
};


Family.prototype.lastname = 'Sen';

var Bolai = new Family('Bolai','chad',1938,'September','Kolakata','Service Man');


var one = (Bolai.firstname +' '+Bolai.middlename + ' '+Bolai.lastname+ ' was born on '+Bolai.birthday+'in the year of '+Bolai.birthyear+' in '+Bolai.birthplace + '.'+ 'He was an '+ Bolai.job+ ' He had one son and one daughter. His wife is Nomita Sen.');

document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("p1").textContent = one;
});



var Nomita = new Family('Nomita ','',1944,'15th April','Kolakata','House Wife');



var two = (Nomita.firstname +' '+Nomita.lastname+ ' was born on '+Nomita.birthday+' in the year of '+Nomita.birthyear+' in '+Nomita.birthplace + '.'+ 'She was a '+ Nomita.job+'She is the wife of Bolai Chad Sen.' );

document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("p2").textContent = two;
});



var Pradip = new Family('Pradip','kumar',1964,'1st Augst','Kolakata','Service Man');
Pradip.calAge(2020);

var retire = 60-age;




var three= (Pradip.firstname +' '+Pradip.middlename+' '+ Pradip.lastname+ ' was born on '+Pradip.birthday+ ' in the year of '+Pradip.birthyear+' and in '+Pradip.birthplace+'He is the eldest Son of Bolai Chad Sen And Nomita Sen.'+' He is a '+Pradip.job +' He will be retiring in '+ retire + ' Years'+'His wife is Krishna Sen') ;
 
 document.getElementById("button3").addEventListener("click", function(){
  document.getElementById("p3").textContent = three;
});



var Krishna = new Family('Krishna','',1974,'8th Octobar','New Barakpur',' SchoolTeacher');
Krishna.calAge(2020);


var four= (Krishna.firstname +' '+ Krishna.lastname+ ' was born on '+Krishna.birthday+ ' in the year of '+Krishna.birthyear+' and in '+Krishna.birthplace+'.She is a '+Krishna.job +'She is '+age+ 'years old now. She will be retiring in '+ (60-age) + '. Years she is the wife of Pradip Kumar Sen.') ;
 
 document.getElementById("button4").addEventListener("click", function(){
  document.getElementById("p4").textContent = four;
});


var Mousumi = new Family('Mousumi','',1972,'18th May','Kolakata','House Wife');
Mousumi.calAge(2020);
Mousumi.lastname = 'Adhyya'

var five = (Mousumi.firstname +' '+Mousumi.lastname+ ' was born on '+Mousumi.birthday+' in the year of '+Mousumi.birthyear+' in '+Mousumi.birthplace + '.'+ 'She is a '+Mousumi.job + ' She is '+ age + ' Years old now. She is the daughter of Bolai Chad Sen and Nomita Sen. Her husband is SUmit kumar Adhyya');

document.getElementById("button5").addEventListener("click", function(){
  document.getElementById("p5").textContent = five;
});


var Sumit = new Family('Sumit','Kumar',1964,'14th September','Kolakata','Service Man');
Sumit.calAge(2020);
Sumit.lastname = 'Adhyya';

var six = (Sumit.firstname +' '+Sumit.middlename+' '+Sumit.lastname+ ' was born on '+Sumit.birthday+' in the year of '+Sumit.birthyear+' in '+Sumit.birthplace + '.'+ 'He is a '+Sumit.job + ' .He is '+ age + ' Years old now. He will be retiring in '+ (60-age) + ' years');
document.getElementById("button6").addEventListener("click", function(){
  document.getElementById("p6").textContent = six;
});

var Poulomi = new Family('Poulomi','',1998,'21st December','Kolakata','Web developer');
Poulomi.calAge(2020);

var seven = (Poulomi.firstname +' '+Poulomi.lastname+ ' was born on '+Poulomi.birthday+' in the year of '+Poulomi.birthyear+' in '+Poulomi.birthplace + '.'+ 'She is a '+Poulomi.job + ' .She is '+ age + ' Years old now. She is the only daughter of Pradip Kumar Sen And Krishna Sen');
document.getElementById("button7").addEventListener("click", function(){
  document.getElementById("p7").textContent = seven;
});











