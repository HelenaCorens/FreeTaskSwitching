// instructions (uses the sprinf function in the experiment.html file to fill in the correct variables, e.g., sprintf(instructions_text, ll, key_options[0], lr...))
var instructions_text = [
  // first page: general instructions
  // testing git insertion
  '<div> Welcome to this experiment and thank you for your participation.<br>' + '<br>' +
  'We will first explain the procedure to you, so please read carefully. </div>'
  ,
  'In this experiment you will perform two different tasks <b>between which you can choose freely</b>.' + '<br>' +
  'At the start of each trial, a fixation cross will appear in the center of the screen, ' + '<br>' +
  'followed by the target word which you will have to categorize.'+'<br>'+'<br>'+
  'For each word, you can either choose to categorize it by its animacy or by its size.'+'<br>'+
  'If you want to categorize it by its animacy, press "%s" if the word is %s and "%s" if the word is %s.'+'<br>'+
  'Please note that animate refers to any kind of organism: animal, tree, plant, nut, fruit or vegetable. '+'<br>'+'<br>'+
  'If you want to categorize it by its size, press "%s" if the word is smaller and "%s" if the word is larger than a basketball.</div>'
  ,
  'You will now do a few practice trials to familiarize yourself with the tasks.'+'<br><br>'+
  'Click on "Next" when you are ready to begin.'+'<br>'+'<br>'+
  'Reminder:'+'<br>'+
  'You can choose to do either task at each trial.<br>'+
  '"%s" button %s, "%s" button %s'+'<br>'+
  '"%s" button smaller, "%s" button larger</div>'
];

/*var startmain_text = [
  '<div>You are finished with the practice trials and will move on to the main part of the experiment which consists of 4 blocks in total.'+'<br>'+'<br>'+
  'In this main part, you will get the chance to earn points in the first half of each block'+'<br>'+
  'which will determine a monetary bonus paid on top of your fee:'+'<br>'+
  'Specifically, for each trial, if you categorize the word correctly according to the chosen task, you will have an extra chance to win either 5&#162; or &#xa3;2.'+'<br>'+
  'At the end of the experiment, the computer will randomly draw one trial per rewarded half of each block,'+'<br>'+
  'and pay out the reward that you received on that particular trial.'+'<br>'+
  'In other words, you can win up to an additional &#xa3;8!'+'<br><br>'+
  'In the second half of each block, the reward feedback will be masked. In other words, if you respond correctly on those trials, you will not see the amount earned but hashtags.<br>'+
  'However, we will still register your responses and pay out those trials, too.<br>'+
  //'than simple performance feedback.<b>'+
  'Thus, we encourage you to respond as accurately and fast as possible in both halves of each experimental block.<br><br>Click on "Next" when you are ready to begin. '+ '<br>'+ '<br>'+
  'Reminder:'+'<br>'+
   '"%s" button animate, "%s" button inanimate'+'<br>'+
   '"%s" button smaller, "%s" button larger</div>'
 ];*/

 var startmain_text = [
   '<div>You are finished with the practice trials and will move on to the main part of the experiment!'+'<br><br>'+
   'In this main part, you will get the chance to earn additional money'+'<br>'+
   'that we will pay you on top of your fee if you perform particularly well relative to the other participants:'+'<br>'+
   'Specifically, for each trial, if you respond correctly to the target word, you will gain either 1&#162; or 5&#162.'+'<br><br>'+
   'At the end of the experiment, we will determine whether you are among the 10 percent that gained the most reward,'+'<br>'+
   'and if so, effectivley pay you the total reward you received across all trials in all blocks.'+'<br>'+
   'This means that you can win up to an additional &#xa3;13.4!</div>'
   ,
   '<div>Please note that in the second half of each block, the reward feedback will be masked.<br> Thus, if you respond correctly on those trials, you will not see the amount earned but hashtags.<br>'+
   'We will, however, still register your responses and count them for the payout.<br>'+
   'We encourage you to respond as accurately and fast as possible.<br><br>Click on "Next" when you are ready to begin. '+ '<br>'+ '<br>'+
   'Reminder:'+'<br>'+
   'You can choose to do either task at each trial.<br>'+
   '"%s" button %s, "%s" button %s'+'<br>'+
   '"%s" button smaller, "%s" button larger</div>'
  ];

//var startbaseline_text = [
//'<div>Je bent nu klaar met de oefenbeurten en we gaan verder met een volledig oefenblok inclusief beurten met vrije keuze.'+'<br>'+
//'Ter herinnering, op deze beurten bent u vrij om te kiezen welke taak u wilt uitvoeren door de klinker te kiezen voor de levend/niet-levend taak of de medeklinker voor de groter/kleiner taak.</div>'
//];

//var endexp_text = [
//'<div>You reached the end of the experiment.<br><br>Thanks again for your participation!<br><br>Click on "End" to be redirected to Prolific.</div>'
//];

//var breaks = [
//'<div>You are now finished with the %s block.'+'<br><br>'+
//'You can take a short break and start with the next block as soon as you are ready.'+'<br>'+'<br>'+
//'Reminder:'+'<br>'+
// '"%s" button animate, "%s" button inanimate'+'<br>'+
// '"%s" button smaller, "%s" button larger</div>'
//];

//console.log(instructions_text)

// informed consent text (you can use commas within the array to group strings as multiple pages that can be navigated, delimited by the commas)
var informed_consent_text = [];

// trial by trial feedback messages
var incorrect_msg = "<div style=font-size:60px;> WRONG! </div>"
var too_slow_msg = "<div style=font-size:60px;> TOO SLOW! </div>"

// block feedback (a combination of the following messages will be presented dependendent on the block: first block after practice, the last block, all other blocks

// other text in the experiment
var label_next_button = 'Next';
var label_previous_button= 'Previous';
var label_end_button= 'End';
