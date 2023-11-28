// VOLUNTARY SWITCH TASK: ANIMACY - SIZE
// SHORT VERSION AS TRY-OUT

// target stimuli (e.g., lism = living and smaller than basketball)
lism_word = ["algae","ant","apple","apricot","asparagus","avocado","bacteria","banana"]; 
/* ,"bean","bee","beetle",
"berry","blueberry","bug","butterfly","cabbage","carrot","caterpillar","cauliflower","celery","cherry",
"cockatoo","crab","crow","daisy","dove","flea","frog","fruit","germ","goldfish","grape","grasshopper",
"hamster","hornet","insect","kitten","leaf","lemon","lice","lily","lime","melon","mice","mosquito","moth",
"mushroom","newt","olive","onion","orange","parsley","peach","pear","peas","pigeon","plum","potato","radish",
"raspberry","rat","robin","rodent","rose","salamander","sardine","shrimp","snail","sparrow","spider","spinach",
"squirrel","strawberry","tick","toad","tomato","tulip","wasp","weasel","worm"
]; */

lila_word = ["aardvark","alligator","anaconda","antelope","ape","baboon","bear","beast"];
/* ,"beaver","bobcat",
"buffalo","bull","camel","cedar","cheetah","chimpanzee","cougar","cow","coyote","crocodile","deer","dog",
"dolphin","donkey","dragon","eagle","elephant","elk","elm","fir","flamingo","gazelle","giraffe","goat",
"gorilla","hawk","hippo","hog","hyena","kangaroo","leopard","lion","llama","maple","monkey","moose","mule",
"oak","octopus","ostrich","otter","ox","panda","panther","peacock","penguin","pig","pony","porpoise",
"primate","ram","redwood","reindeer","rhinoceros","serpent","shark","sheep","shrub","stallion","stork",
"swan","tiger","tree","vulture","walrus","whale","wildebeest","wolf","wolverine","zebra"
]; */

nosm_word = ["ashtray","badge","bandage","beaker","bracelet","brick","button","calculator"];
/* ,"candle","card",
"cassette","chalk","chopsticks","cigar","coin","comb","compass","cork","coupon","crayon","diamond","dice",
"dime","emerald","eraser","flask","fork","gem","glove","handcuffs","harmonica","jewel","keys","knob","knot",
"lock","marble","medal","mitten","mug","napkin","needle","neutron","nickel","paperclip","pebble","peg",
"penny","pin","pliers","postcard","puck","razor","receipt","ruby","sandal","sapphire","scalpel","scissors",
"screwdriver","shampoo","shoe","soap","sock","soda","softball","spoon","stamp","staple","syringe","tack",
"teapot","thimble","ticket","toothbrush","tweezers","wallet","whistle","wrench","zipper"
];
 */
nola_word = ["alley","ambulance","anchor","asteroid","balcony","barrel","bathtub","bicycle"];
/* ,"billboard",
"booth","boulder","cab","canal","cannon","canoe","cart","casket","castle","cavern","chimney","comet",
"couch","dorm","dryer","dungeon","escalator","ferry","fireplace","galaxy","garage","glacier","gym",
"hammock","hut","iceberg","igloo","jeep","jet","jupiter","keg","kite","limousine","locomotive",
"luggage","mall","mannequin","mansion","mattress","motel","motorcycle","oven","parachute","patio",
"pier","raft","rocket","rowboat","saturn","saxophone","shield","silo","sleigh","sofa","steamboat",
"stove","stretcher","surfboard","tank","taxi","tent","toilet","tomb","tower","treadmill","tuba","vault",
"volcano","windmill","windshield","yacht"
]; */


// make an array of objects from the target stimuli
var nola = [];
var nosm = [];
var lila = [];
var lism = [];

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

// RANDOMISATION OF TRIALS
// HC: New way of randomisation but within each half-block: same amount of words per category
// var lists_list = [lism_word, lila_word, nosm_word, nola_word]; 
var lists_list = [lism, lila, nosm, nola]; 
var shuffled_list = []; // empty list of lists_list but shuffled later
lists_list.forEach((listi)=> {shuffled_list.push(jsPsych.randomization.repeat(listi,1));}); // each has 4 lists shuffled within each category
console.log(shuffled_list);

var blocklists_list = []; 
var n_blocks = 8 // in theory 4 blocks but within each block 2 parts (reward - masked) which we made into individual blocks for coding
for (var blocki = 0; blocki< n_blocks; blocki++){
  console.log(blocki);
  var blocklisti = [];
  shuffled_list.forEach((listi)=>{blocklisti.push(listi.slice((blocki * 1), ((blocki + 1) * 1)));}); //SHORT version exp: * 1 is in normal exp: * 10 / take 10 words of each category; already shuffled within category BUT still lism-lila... non shuffled
  blocklisti = blocklisti.flat(1);
  
  blocklists_list.push(jsPsych.randomization.repeat(blocklisti, 1)); //shuffle blocklist so you don't have each category next to another // blocklist_list n blocks long - each list in this should have same amount of words
};
console.log(blocklists_list);

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
var task_hand_animacy = hand[0]; // HC: each hand, one task
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

first_prac_task = ['LIVING','LARGER'];
var first_prac_task = jsPsych.randomization.repeat(first_prac_task, 1);

// cued_stim = jsPsych.randomization.repeat(cued_stim, 1);

function makestimlist(blocki){
  
  current_trial_list = blocklists_list[blocki]
  var ntrials = current_trial_list.length 

  // fill it with the first properties you need: 
  for (i =0; i < ntrials; i++){
      current_trial_list[i].data.task_hand_living = task_hand_living;

      if (current_trial_list[i].data.category=='nola'){
        current_trial_list[i].data.correct_size = task_hand_larger;
        current_trial_list[i].data.correct_animacy = task_hand_nonliving;
      }else if (current_trial_list[i].data.category=='nosm'){
        current_trial_list[i].data.correct_size = task_hand_smaller;
        current_trial_list[i].data.correct_animacy = task_hand_nonliving;
      }else if (current_trial_list[i].data.category=='lila'){
        current_trial_list[i].data.correct_size = task_hand_larger;
        current_trial_list[i].data.correct_animacy = task_hand_living;
      }else if (current_trial_list[i].data.category=='lism'){
        current_trial_list[i].data.correct_size = task_hand_smaller;
        current_trial_list[i].data.correct_animacy = task_hand_living;
      }
     // HC NEW: 'blocklists_list' was previously: "cued_stim[slice] 
      // HC OLD: slice creates all the functions - slice 0-80-160 --> I shuffle within category so not working with slice
      // console.log(current_trial_list[0].stimulus)

      current_trial_list[i].rewnr = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,5,6,7,8,9,10],1)[0] // HC: Leslie had 1 - 5 (20%)// if its 1 --> 10: each number is 10%; if number is higher than 1: 90% of reward
      current_trial_list[i].data.rewnr = current_trial_list[i].rewnr;
      current_trial_list[i].data.trialnr = i+(ntrials*blocki); // to make sure you don't overwrite the data

      current_trial_list[i].trialnr = i;
      current_trial_list[i].blocknr = blocki;
      current_trial_list[i].data.blocknr = blocki;

    
      if (i == 0){
        current_trial_list[i].data.transition = "first";
       }else{
        current_trial_list[i].data.transition = "nonfirst";
       }
      
      if (task_hand_living == task_hand_animacy.left){
        if (current_trial_list[i].data.category == 'lism' || current_trial_list[i].data.category == 'nola'){ 
          current_trial_list[i].data.congruency = 'congruent'
        }else{
          current_trial_list[i].data.congruency = 'incongruent'
        }
      }else if (task_hand_living == task_hand_animacy.right){
        if (current_trial_list[i].data.category == 'nosm' || current_trial_list[i].data.category == 'lila'){ 
          current_trial_list[i].data.congruency = 'congruent'
        }else{
          current_trial_list[i].data.congruency = 'incongruent'
        }
      };

    }
    
  //transition: transition_array[i],
  //current_trial_list[0].data.phase = 'exp'
  current_trial_list.choices = [task_hand_smaller, task_hand_larger,task_hand_living,task_hand_nonliving];
  console.log(current_trial_list[0])
  console.log(current_trial_list[1])
  console.log(current_trial_list.choices)

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
// HC NEW: Best block loop: for blocki in n_block // by making 8 blocks instd of 4 -> uneven blocks: rewardfeedback; even blocks: masked
// HC PROB SOLUTION REWARD DISPLAY PROBLEM: CHANGE 8 N_BLOCKS TO 4: REJOIN REWARD PHASE & MASKED PHASE

current_trial_list_block1 = makestimlist(0) // reward block 1
current_trial_list_block2 = makestimlist(1) // masked block 1
current_trial_list_block3 = makestimlist(2) // reward block 2
current_trial_list_block4 = makestimlist(3) // masked block 2
current_trial_list_block5 = makestimlist(4) // reward block 3
current_trial_list_block6 = makestimlist(5) // masked block 3
current_trial_list_block7 = makestimlist(6) // reward block 4
current_trial_list_block8 = makestimlist(7) // masked block 4

console.log(current_trial_list_block1);

var nola_practice = ['car']; // ,'closet','train']; // HC short version
var lila_practice = ['cow']; // ,'dinosaur','hedge']; 
var nosm_practice = ['smartphone']; // ,'sunglasses','book']; 
var lism_practice = ['egg']; // ,'date','mussel']; 
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

practice_list = [];
for (i =0; i < 4; i++){ // HC: Real exp: 12 instead of 4 (4 stim short version)
practice_list.push({phase: 'training',data: {phase:'training'}})
}

for (i = 0; i < 4; i++){// note: start at 1! // HC: Real exp: 12 instead of 4 (4 stim short version)
practice_list[i].stimulus = practice_stim[i].stimulus;
practice_list[i].data.correct_size=practice_stim[i].data.correct_size;
practice_list[i].data.correct_animacy=practice_stim[i].data.correct_animacy;
practice_list[i].data.firsttask=first_prac_task[0];
practice_list[i].choices = [task_hand_smaller, task_hand_larger,task_hand_living,task_hand_nonliving];

//practice_list2 = jsPsych.randomization.repeat(practice_list, 1);
}

//console.log(practice_list)
//console.log(practice_list2)