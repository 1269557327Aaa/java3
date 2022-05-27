class Patient {
    constructor( f,i,o,d,s,sh){
        this.F=f;
        this.I=i;
        this.O=o;
        this.D=new Date(d);
        this.S=s;
        this.SH=sh;
    }
    setById(){
        document.getElementById("F").textContent=this.F;
        document.getElementById("I").textContent=this.I;
        document.getElementById("O").textContent=this.O;
        document.getElementById("Y").textContent=this.D.getFullYear();
        document.getElementById("S").textContent=this.S;
        document.getElementById("SH").textContent=this.SH;
    }
}
let Ivanov= new Patient("****", "Иван","Иванович",new Date(1980,6,10),"м","Назначено");
Ivanov.setById();
let Petrov = new Patien("Петров","Антон", "Николаевич", new Date( 1981,4,3),"м","назначено");
let Sidorov = new Patient("Сидиров","-", "-",new Date( 1986,6,8),"м","назначено");
Sidorov.setById();
