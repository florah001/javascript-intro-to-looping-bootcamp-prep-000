function forLoop(array) {
    for(var i = 0; i < 25; i++) {
     var oneStrangeLoop = "I am 1 strange loop.";
     var strangeLoops = "I am " + i + " strange loops.";
     
      if (i === 1) {
      array.push(oneStrangeLoop);
    }
     else {
      array.push(strangeLoops);
    }
 }
 return array;
}

var text = "done";
const countdown = true;
function whileLoop(n) {
 while (countdown > 0) {
  console.log("done"); 
  n--;
  if (n===0) {
    console.log('done');
    break;
}
}
/*
// Set a condition to true


// Initiate infinite loop
while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  // Terminate infinite loop when following condition is true
  if (polarBears === 0) {
    console.log("There are no polar bears left.");
    break;
  }
}


  1) loops
       whileLoop(n)
         counts down from n to 0:

      AssertionError: expected { Spy, 1 call } to have been called 7 times but got 1
      + expected - actual

      -1
      +7



  //while (countdown > 0) {
    //const n = Math.floor(Math.random() * 100)
   //console.log("done");
}
   return ((popLimit - n) +"done")
  describe('whileLoop(n)', () => {
    it('counts down from n to 0', () => {
      const spy = chai.spy.on(console, 'log')
      const n = Math.floor(Math.random() * 100)

      expect(whileLoop(n)).to.equal('done')
      expect(spy).to.have.been.called.exactly(n)

      console.log.reset()
    })
  })
  */
}

function doWhileLoop(array){
    function incrementVariable() {
      var i = 0
      i = i + 1
  }
   do {
    array.pop()
    incrementVariable()
    return array
  } while (array.length > 0 && incrementVariable())
}