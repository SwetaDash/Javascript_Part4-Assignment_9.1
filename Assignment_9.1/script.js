var me;
function createObject(name,height){
    this.name= name ;
    this.height = height;
    this.aboutYourSelf = function (){
        return "I am " +this.name + ". I am " +this.height + " cm height";
    }
}
me = new createObject("bala",180);
console.log(me.aboutYourSelf());