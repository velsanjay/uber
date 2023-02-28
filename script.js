class person{
    constructor(firstname,lastname,qualification,address){
        this.firstName=firstname;
        this.lastName=lastname;
        this.Qualification=qualification;
        this.Address=address
    }
    detail(){
        return  `${this.firstName} ${this.lastName}
${this.Qualification}
${this.Address}`;

    }
}
var sanjay=new person("Sanjay","V","B.E","Chidambaram")
console.log(sanjay.detail());

class uber{
    constructor(km,time){
        this.kilometer=km
        this.Time=time
    }
    calculate(){
        return eval((this.kilometer+this.Time)*20)
    }
}

var sam=new uber("30","4")
console.log(sam.calculate());