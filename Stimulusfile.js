// Cued Stroop
// HC: counterbalancing happens in this file // HC: set up stimulus list 

// target stimuli (e.g., lism = living and smaller than basketball)
lism_word = ["algae","ant","apple","apricot","asparagus","avocado","bacteria","banana","bean","bee","beetle",
"berry","blueberry","bug","butterfly","cabbage","carrot","caterpillar","cauliflower","celery","cherry",
"cockatoo","crab","crow","daisy","dove","flea","frog","fruit","germ","goldfish","grape","grasshopper",
"hamster","hornet","insect","kitten","leaf","lemon","lice","lily","lime","melon","mice","mosquito","moth",
"mushroom","newt","olive","onion","orange","parsley","peach","pear","peas","pigeon","plum","potato","radish",
"raspberry","rat","robin","rodent","rose","salamander","sardine","shrimp","snail","sparrow","spider","spinach",
"squirrel","strawberry","tick","toad","tomato","tulip","wasp","weasel","worm"
];

lila_word = ["aardvark","alligator","anaconda","antelope","ape","baboon","bear","beast","beaver","bobcat",
"buffalo","bull","camel","cedar","cheetah","chimpanzee","cougar","cow","coyote","crocodile","deer","dog",
"dolphin","donkey","dragon","eagle","elephant","elk","elm","fir","flamingo","gazelle","giraffe","goat",
"gorilla","hawk","hippo","hog","hyena","kangaroo","leopard","lion","llama","maple","monkey","moose","mule",
"oak","octopus","ostrich","otter","ox","panda","panther","peacock","penguin","pig","pony","porpoise",
"primate","ram","redwood","reindeer","rhinoceros","serpent","shark","sheep","shrub","stallion","stork",
"swan","tiger","tree","vulture","walrus","whale","wildebeest","wolf","wolverine","zebra"
];

nosm_word = ["ashtray","badge","bandage","beaker","bracelet","brick","button","calculator","candle","card",
"cassette","chalk","chopsticks","cigar","coin","comb","compass","cork","coupon","crayon","diamond","dice",
"dime","emerald","eraser","flask","fork","gem","glove","handcuffs","harmonica","jewel","keys","knob","knot",
"lock","marble","medal","mitten","mug","napkin","needle","neutron","nickel","paperclip","pebble","peg",
"penny","pin","pliers","postcard","puck","razor","receipt","ruby","sandal","sapphire","scalpel","scissors",
"screwdriver","shampoo","shoe","soap","sock","soda","softball","spoon","stamp","staple","syringe","tack",
"teapot","thimble","ticket","toothbrush","tweezers","wallet","whistle","wrench","zipper"
];

nola_word = ["alley","ambulance","anchor","asteroid","balcony","barrel","bathtub","bicycle","billboard",
"booth","boulder","cab","canal","cannon","canoe","cart","casket","castle","cavern","chimney","comet",
"couch","dorm","dryer","dungeon","escalator","ferry","fireplace","galaxy","garage","glacier","gym",
"hammock","hut","iceberg","igloo","jeep","jet","jupiter","keg","kite","limousine","locomotive",
"luggage","mall","mannequin","mansion","mattress","motel","motorcycle","oven","parachute","patio",
"pier","raft","rocket","rowboat","saturn","saxophone","shield","silo","sleigh","sofa","steamboat",
"stove","stretcher","surfboard","tank","taxi","tent","toilet","tomb","tower","treadmill","tuba","vault",
"volcano","windmill","windshield","yacht"
];

// make an array of objects from the target stimuli
var nola = [];
var nosm = [];
var lila = [];
var lism = [];

// HC: create for each block
for (i = 0; i < nola_word.length; i++) {
  nola[i] = {
    stimulus: '<div style="font-size:30px;">' + nola_word[i] + '</div>',
    data: {category: 'nola',},
  }; // make two variables for the category
  nosm[i] = {
    stimulus: '<div style="font-size:30px;">' + nosm_word[i] + '</div>',
    data: {category: 'nosm',},
  };
  lila[i] = {
    stimulus: '<div style="font-size:30px;">' + lila_word[i] + '</div>',
    data: {category: 'lila',},
  };
  lism[i] = {
    stimulus: '<div style="font-size:30px;">' + lism_word[i] + '</div>',
    data: {category: 'lism',},
  };
};

// randomize these arrays so that the first 20 stimuli are not always shown in the first block
// HC: take 1/4 of each, shuffle them and then put them in 
nola = jsPsych.randomization.repeat(nola, 1);
nosm = jsPsych.randomization.repeat(nosm, 1);
lila = jsPsych.randomization.repeat(lila, 1);
lism = jsPsych.randomization.repeat(lism, 1);

// assign the random stimuli to the cued or the free task switching phase / HC: only free stimuli but just wrong comment from earlier experiment
cued_stim = nola.concat(nosm,lila,lism); // HC: Concat(): merging arrays together (so nola+nosm+lila+lism) HC: the name is wrong but it's implemented everywhere
// HC: So, cued_stim = merging of the four categories; SOLUTION? instead of trowing it all together - make seperate categories for randomisation in categories itself
//console.log(cued_stim)
//console.log(cued_stim[240+5].stimulus)

var hand = [{
  left: 's',
  right: 'd',
}, {
  left: 'k',
  right: 'l',
}]

var location_offset = function() {return (window.innerHeight/100)}
//var location_offset = function() {return (window.screen.height/4)}
var hand = jsPsych.randomization.repeat(hand, 1); // HC: why randomisation on hand? counterbalancing? 
//console.log('hand',hand)
var task_hand_animacy = hand[0]; // HC: one task per hand
var task_hand_size = hand[1];

var living_sides = [task_hand_animacy.left,task_hand_animacy.right]
var living_sides = jsPsych.randomization.repeat(living_sides,1);
var task_hand_living = living_sides[0]
var task_hand_nonliving = living_sides[1];
var task_hand_smaller = task_hand_size.left;
var task_hand_larger = task_hand_size.right;

if (task_hand_living == "s" || task_hand_living == "k"){
  insert1 = task_hand_living
  insert2 = "animate"
  insert3 = task_hand_nonliving
  insert4 = "inanimate"
}else if (task_hand_living == "l" || task_hand_living == "d"){
  insert1 = task_hand_nonliving
  insert2 = "inanimate"
  insert3 = task_hand_living
  insert4 = "animate"
}
//console.log(insert1)
//console.log(insert2)

first_prac_task = ['LIVING','LARGER'];
var first_prac_task = jsPsych.randomization.repeat(first_prac_task, 1);

cued_stim = jsPsych.randomization.repeat(cued_stim, 1);

function makestimlist(slice){ // HC: check line 228/ creates list per block (same amount of tasks) but not same amount of words per category --> work on this!!!

//non_word_array = ['WISSEL','HERHAAL'];
// Leslie sliced her stimlist in 0-80-160-240-320 (but than those 80, no equal amount of every category - arbitrary )

var ntrials = 80 // HC: Idea: I still want 80 trials but within these 80 trials --> 1/4 nola; 1/4 nosm; 1/4 lila; 1/4 lism & randomised within

current_trial_list = []

// fill it with the first properties you need: i'm doing transition and task now, but you should initialize all the others you need (but you can also do this as you work on it)
for (i =0; i < ntrials; i++){
current_trial_list.push({data: {task_hand_living:task_hand_living}}) // HC: is it correct that it is 2 times task_hand_living
}
//transition: transition_array[i],

//current_trial_list[0].data.phase = 'exp'
current_trial_list[0].choices = [task_hand_smaller, task_hand_larger,task_hand_living,task_hand_nonliving];
//console.log(current_trial_list[0].choices)
if (cued_stim[slice].data.category=='nola'){
  current_trial_list[0].data.correct_size = task_hand_larger;
  current_trial_list[0].data.correct_animacy= task_hand_nonliving;
}else if (cued_stim[slice].data.category=='nosm'){
  current_trial_list[0].data.correct_size = task_hand_smaller;
  current_trial_list[0].data.correct_animacy = task_hand_nonliving;
}else if (cued_stim[slice].data.category=='lila'){
  current_trial_list[0].data.correct_size= task_hand_larger;
  current_trial_list[0].data.correct_animacy = task_hand_living;
}else if (cued_stim[slice].data.category=='lism'){
  current_trial_list[0].data.correct_size= task_hand_smaller;
  current_trial_list[0].data.correct_animacy = task_hand_living;
}
current_trial_list[0].stimulus = cued_stim[slice].stimulus; //HC: slice creates all the functions - slice 0-80-160 --> line 226// I should shuffle within category (Leslie shuffles everything and takes first 80 than next slice of another 80 - )
//console.log(current_trial_list[0].stimulus)
current_trial_list[0].rewnr = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,5,6,7,8,9,10],1)[0] // HC: I changed it since leslie only had 1 - 5 (20%)// if its 1 --> 10% if number is higher than 1: 90% of reward
current_trial_list[0].data.rewnr = current_trial_list[0].rewnr
current_trial_list[0].data.trialnr = 1;
current_trial_list[0].trialnr = 1;
current_trial_list[0].data.blocknr = slice/80; //!!! change this of 80 within 1/4 of each category
current_trial_list[0].data.category = cued_stim[slice].data.category;
current_trial_list[0].data.transition = "first";
if (task_hand_living == task_hand_animacy.left){
  if (cued_stim[slice].data.category == 'lism' || cued_stim[slice].data.category == 'nola'){
    current_trial_list[0].data.congruency = 'congruent'
  }else{
    current_trial_list[0].data.congruency = 'incongruent'
  }
}else if (task_hand_living == task_hand_animacy.right){
  if (cued_stim[slice].data.category == 'nosm' || cued_stim[slice].data.category == 'lila'){
    current_trial_list[0].data.congruency = 'congruent'
  }else{
    current_trial_list[0].data.congruency = 'incongruent'
  }
};
// which hand is correct with response key
for (i = 1; i<ntrials; i++){
current_trial_list[i].stimulus = cued_stim[i+slice].stimulus;
//console.log(current_trial_list[i].stimulus)
current_trial_list[i].choices = [task_hand_smaller, task_hand_larger,task_hand_living,task_hand_nonliving];
if (cued_stim[i+slice].data.category=='nola'){
  current_trial_list[i].data.correct_size = task_hand_larger;
  current_trial_list[i].data.correct_animacy= task_hand_nonliving;
}else if (cued_stim[i+slice].data.category=='nosm'){
  current_trial_list[i].data.correct_size = task_hand_smaller;
  current_trial_list[i].data.correct_animacy = task_hand_nonliving;
}else if (cued_stim[i+slice].data.category=='lila'){
  current_trial_list[i].data.correct_size= task_hand_larger;
  current_trial_list[i].data.correct_animacy = task_hand_living;
}else if (cued_stim[i+slice].data.category=='lism'){
  current_trial_list[i].data.correct_size= task_hand_smaller;
  current_trial_list[i].data.correct_animacy = task_hand_living;
}
current_trial_list[i].rewnr = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,5,6,7,8,9,10],1)[0]; // randomise number and if it's 1: you have 20% change 80%-20%: randomisation 20% --> increase this: 1 to 10 (so in 10% of the times its one)
current_trial_list[i].data.rewnr = current_trial_list[i].rewnr
current_trial_list[i].data.trialnr = i+1;
current_trial_list[i].data.blocknr = slice/80; // HC: within this 80, I have to make sure that an equal amount of words of each category used
current_trial_list[i].data.category = cued_stim[i+slice].data.category; // HC: probably have to change this too
current_trial_list[i].data.transition = "nonfirst";
if (task_hand_living == task_hand_animacy.left){
  if (cued_stim[i+slice].data.category == 'lism' || cued_stim[i+slice].data.category == 'nola'){
    current_trial_list[i].data.congruency = 'congruent'
  }else{
    current_trial_list[i].data.congruency = 'incongruent'
  }
}else if (task_hand_living == task_hand_animacy.right){
  if (cued_stim[i+slice].data.category == 'nosm' || cued_stim[i+slice].data.category == 'lila'){
    current_trial_list[i].data.congruency = 'congruent'
  }else{
    current_trial_list[i].data.congruency = 'incongruent'
  }
}
}

/*if (current_trial_list[i].data.rewnr == 1){
  current_trial_list[i].rewdisplayswitch = '<div style="font-size:30px;">' +'<p>+5&#162;</p>' + '</div>'
  current_trial_list[i].rewardswitch = 0.05
  current_trial_list[i].rewdisplayrep = '<div style="font-size:30px;">' +'<p>+&#xa3;2</p>' + '</div>'
  current_trial_list[i].rewardrep = 2.00
}else{
  current_trial_list[i].rewdisplayswitch = '<div style="font-size:30px;">' + '<p>+&#xa3;2</p>' + '</div>'
  current_trial_list[i].rewardswitch = 2.00
  current_trial_list[i].rewdisplayrep = '<div style="font-size:30px;">' +'<p>+5&#162;</p>' + '</div>'
  current_trial_list[i].rewardrep = 0.05
};*/
return current_trial_list
};

current_trial_list_block1 = makestimlist(0) // slices --> change this
current_trial_list_block2 = makestimlist(80)
current_trial_list_block3 = makestimlist(160)
current_trial_list_block4 = makestimlist(240)
//current_trial_list_baseline =current_trial_list_baseline.slice(0,10)
//current_trial_list_block1 =current_trial_list_block1.slice(0,10)
//current_trial_list_block2 =current_trial_list_block2.slice(0,10)
//current_trial_list_block3 =current_trial_list_block3.slice(0,10)
//current_trial_list_block4 =current_trial_list_block4.slice(0,10)
//console.log(current_trial_list_block1)
//console.log(current_trial_list_block2)
//console.log(current_trial_list_block3)
//console.log(current_trial_list_block4)
//console.log(current_trial_list_baseline)


var nola_practice = ['car','closet','train'];//
var lila_practice = ['cow','dinosaur','hedge'];//
var nosm_practice = ['smartphone','sunglasses','book'];//
var lism_practice = ['egg','date','mussel'];//
var nola_practice_stim = [];
var lila_practice_stim = [];
var nosm_practice_stim = [];
var lism_practice_stim = [];

for (i = 0; i < nola_practice.length; i++) {
  nola_practice[i] = {
    stimulus: '<div style="font-size:30px;">' + nola_practice[i] + '</div>',
    data: {category: 'nola',correct_size: task_hand_larger,correct_animacy: task_hand_nonliving},
  }; // make two variables for the category
  nosm_practice[i] = {
    stimulus: '<div style="font-size:30px;">' + nosm_practice[i] + '</div>',
    data: {category: 'nosm',correct_size: task_hand_smaller,correct_animacy: task_hand_nonliving},
  };
  lila_practice[i] = {
    stimulus: '<div style="font-size:30px;">' + lila_practice[i] + '</div>',
    data: {category: 'lila',correct_size: task_hand_larger,correct_animacy: task_hand_living},
  };
  lism_practice[i] = {
    stimulus: '<div style="font-size:30px;">' + lism_practice[i] + '</div>',
    data: {category: 'lism',correct_size: task_hand_smaller,correct_animacy: task_hand_living},
  };
};

practice_stim = nola_practice.concat(nosm_practice,lila_practice, lism_practice);
practice_stim = jsPsych.randomization.repeat(practice_stim, 1);
//console.log(practice_stim)
////console.log(consonant_practice)

practice_list = [];
for (i =0; i < 12; i++){
practice_list.push({phase: 'training',data: {phase:'training'}})
}

for (i = 0; i<12; i++){// note: start at 1!
practice_list[i].stimulus = practice_stim[i].stimulus;
practice_list[i].data.correct_size=practice_stim[i].data.correct_size;
practice_list[i].data.correct_animacy=practice_stim[i].data.correct_animacy;
practice_list[i].data.firsttask=first_prac_task[0];
practice_list[i].choices = [task_hand_smaller, task_hand_larger,task_hand_living,task_hand_nonliving];

//practice_list2 = jsPsych.randomization.repeat(practice_list, 1);
}

//console.log(practice_list)
//console.log(practice_list2)
