let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           let state = Math.random()
           if (state < .5) {
               this.state = 0
           } else {
               this.state = 1
           }
    },
    toString: function() {
         /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
         if (this.state === 0) {
             return "Heads" + "<br>"
         } else {
             return "Tails" + "<br>"
         }
    },
    toHTML: function() {
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img')
        img1.src = './images/heads.jpg'
        img2.src = './images/tails.jpg'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
       
        if (this.state === 0) {
            img3 = img1
        } else {
            img3 = img2
        } return img3
    },
    display20Flips: function() {
       for (let index = 0; index < 20; index = index + 1){
           coin.flip()
           document.write(coin.toString())
       }
    },
    display20Images: function() {
        for (let i = 0; i < 20; i = i + 1){
            coin.flip()
            coin.toHTML
            document.body.appendChild(img3)
            
        }
    }
};

coin.flip()
console.log(coin.toString())
document.body.append(coin.toHTML())
console.log(coin.display20Flips())
console.log(coin.display20Images())