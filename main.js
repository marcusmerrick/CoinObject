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
        let Heads = document.createTextNode("Heads")
        let Tails = document.createTextNode("Tails")
        let p1 = document.createElement("p1")
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state = 0) {
               p1.appendChild(Heads)
           } else {
               p1.appendChild(Tails)
           }
    },
    toHTML: function() {
        let img = document.createElement('img');
        let img1 = document.createElement('img1')
        img.src = './images/heads.jpg'
        img1.src = './images/tails.jpg'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
       
        if (this.state = 0) {
            document.body.append(img)
        } else {
            document.body.appendChild(img1)
        }
    }
};

coin.flip()
console.log(coin)