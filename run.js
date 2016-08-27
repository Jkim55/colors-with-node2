let songs = require("./main.js")
let colors = require("colors")


function prettyPrint(list){
  console.log("Songs sorted by difficulty...")

  let sortedList = sortList(list)
  for (let song in sortedList){
    let songString = createString(sortedList, song)
    let level = sortedList[song].difficulty
    if (level < 3){
      console.log(songString.green)
    } else if (level >= 3 && level < 4){
      console.log(songString.yellow);
    } else {
      console.log(songString.red);
    }
  }
}

// helper function: sort given list by difficulty
function sortList(list){
  list.sort(function(a, b){ //sort returns a new sorted array
    return a.difficulty - b.difficulty //`a - b` ascending,; `b - a` is descending
  })
  return list
}

// helper function: create the string
function createString(list, index){
  return songString =`${list[index].title} by ${list[index].artist} [${list[index].difficulty}]`
}

prettyPrint(songs)
