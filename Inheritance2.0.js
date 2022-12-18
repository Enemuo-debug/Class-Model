// The Correct Assignment
// Bro, I'm sorry but I cant alter this code
// I understand what ur trying to say but I have an explanation to this
/*
    One of the reasons I left it like this is that Ezeh Livinus while in the QnA session was asked a questionby one girl
    Her name I dont remember but she asked Livinus on how it will be grouped and Livinus told her that the nemesis of Sec. school
    has come back to her that she needs to recall thos stuff done in secondary school and use itto create the classes 
    So bear with me
    I think I'll leave it like this
    Apart from that, Do you have any other changes that you dim fit for this code ??
*/
class BiologicalOrganism {
    constructor () {
        if(this.constructor === BiologicalOrganism){
            throw new Error('This is an ABSTRACT Class (i.e. Cannot be Instantiated)')
        }
    }
    hasBackBone = () => {
        throw new Error('Invalid Approach');
    }
}
class Vertebratae  extends BiologicalOrganism {
    constructor(){
        super()
    }
    hasBackBone = () => {
        console.log('This biological organism has a backbone');
    }
    coldBlooded = undefined
}
class Invertebrae extends BiologicalOrganism {
    constructor(){
        super()
    }
    hasBackBone = () => {
        console.log('This organism has no backbone')
    }
    coldBlooded = undefined
}
class Insecta extends Invertebrae {
    constructor(name){
        super()
        this.coldBlooded = true
        this.name = name
    }
}
class Pisces extends Vertebratae {
    constructor(name){
        super()
        this.coldBlooded = true
        this.name = name
    }
}
class Amphibians extends Vertebratae {
    constructor(name){
        super()
        this.coldBlooded = true
        this.name = name
    }
}
class Reptilia extends Vertebratae {
    constructor(name){
        super()
        this.coldBlooded = true
        this.name = name
    }
}
class Aves extends Vertebratae {
    constructor(name){
        super()
        this.coldBlooded =  false
        this.name = name
    }
}
class Mamalia extends Vertebratae {
    constructor(name){
        super()
        this.coldBlooded = false
        this.name = name
    }
}
const animal1 = new Insecta('Butterfly')
console.log(animal1.name)
animal1.hasBackBone()
console.log(animal1.coldBlooded)
const animal2 = new Pisces('Fish')
console.log(animal2.name)
animal2.hasBackBone()
console.log(animal2.coldBlooded)
const animal3 = new Amphibians('Frog')
console.log(animal3.name)
animal3.hasBackBone()
console.log(animal3.coldBlooded)
const animal4 = new Reptilia ('Lizard')
console.log(animal4.name)
animal4.hasBackBone()
console.log(animal4.coldBlooded)
const animal5 = new Aves('Vulture')
console.log(animal5.name)
animal5.hasBackBone()
console.log(animal5.coldBlooded)
const animal6 = new Mamalia('Cat')
console.log(animal6.name)
animal6.hasBackBone()
console.log(animal6.coldBlooded)