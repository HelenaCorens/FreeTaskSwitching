/* #########################################################################
Define a function that saves data to the server
######################################################################### */

// function that appends data to an existing file (or creates the file if it does not exist)
function appendData(filename, filedata) {
  $.ajax({ // make sure jquery-1.7.1.min.js is loaded in the html header for this to work
    type: 'post',
    cache: false,
    url: 'php/save_data_append.php', // IMPORTANT: change the php script to link to the directory of your server where you want to store the data!
    data: {
      filename: filename,
      filedata: filedata
    },
  });
};

/* #########################################################################
Define a function that shuffles two arrays in the same way
######################################################################### */

function shuffle(obj1, obj2) {
  var index = obj1.length;
  var rnd, tmp1, tmp2;

  while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp1 = obj1[index];
    tmp2 = obj2[index];
    obj1[index] = obj1[rnd];
    obj2[index] = obj2[rnd];
    obj1[rnd] = tmp1;
    obj2[rnd] = tmp2;
  }
}
