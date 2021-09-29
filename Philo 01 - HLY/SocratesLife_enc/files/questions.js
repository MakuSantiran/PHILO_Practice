var items = new Array;
var question;
var answer;
var group;
var picture;

var DontIncludeFromRemix1 = [""];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = [""];

var identificationMode = false;
var drainBy = -0.005;
var examMode = false;
var PanicMode = false;
var noMusic = true;

//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["What does Philo mean"];
answer = ["Love"];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

question = ["What does Sophos mean"];
answer = ["Wisdom"];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

question = ["Based on Socrates, knowledge is what?"];
answer = ["Virtue"];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});


question = ["The guy who believed everything is water who used reason"];
answer = ["Thales of Miletus"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["Said that there's no permanent and there's always change"];
answer = ["Heraclitus"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["Said that change is only an illusion"];
answer = ["Parmenides"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["The father of western Philosophy" ,"Just BE sKEPticAL meN.","Said that knowledge is virtue"];
answer = ["Socrates"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["Is the student of Socrates","The person who made academy"];
answer = ["Plato","HugASAn"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["Is the student of Plato","The person who made the golden mean"];
answer = ["Aristotle"];
group = "People";
picture = "";
items.push({question,answer,group,picture});

question = ["Is called the theory of knowledge"];
answer = ["Epistemology"];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

question = ["Is the study of being, what is existing and nothingness"];
answer = ["Metaphysics"];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

/*
question = [""];
answer = [""];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});
*/

//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

var bgmusic0_PF = '../../casualSoundtrack/bgmusic0.mp3';
var bgmusic1_PF = '../../casualSoundtrack/bgmusic1.mp3';
var bgmusic2_PF = '../../casualSoundtrack/bgmusic2.mp3';
var bgmusic3_PF = '../../casualSoundtrack/bgmusic3.mp3'; 
var bgmusic4_PF = '../../casualSoundtrack/bgmusic4.mp3'; 

function convertSpecialChars(){
	var size = items.length-1;
    console.log(size);
	
    
    for (i= 0; i<=size; i++){
        var question_size = items[i].question.length-1;
        var question_content = items[i].question;
        var answer_size = items[i].answer.length-1;
        var answer_content = items[i].answer;

        
        for (i2=0; i2<=question_size; i2++){
            question_content[i2] = question_content[i2].replace(/'/g,"\u0027");
            question_content[i2] = question_content[i2].replace(/’/g,"\u2019");           
        }
        for (i3=0; i3<=answer_size; i3++){
            //answer_content[i3] =  answer_content[i3].replace(/⟐/g,"\u27D0");
        }

		///array[size] = array[size].replace("'", "\u0027");
	}
    
}