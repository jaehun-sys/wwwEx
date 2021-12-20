document.write("Hello World");

// var myVar, myVar2 = null;
// alert(myVar+", " + myVar2);
// alert(myVar == myVar2);
// alert(myVar === myVar2);
var v2 = null;
function func(){
    v1 = "hello javascript";    //전역변수
    v2 = "hello javascript2";    //지역변수
}

func();
//alert("v1: "+v1);
//alert("v2: "+v2);

//for문 실습
for(var i = 0; i < 3; i++) {
    document.write( i + "<br>" );
}

//별을 찍자
for(var k=0; k<5; k++){
    //document.write("<p>");
    for(var l=0; l<5-k; l++){
        document.write( "*" );
    }
    //document.write("</p>");
    document.write("<br>");
}



//구구단을 짜자
document.write("<table class=\"tbl-ex\">");
document.write("<tr>");
for(var i=0; i<8; i++){
    document.write("<th>"+(i+2)+"단</th>")
}
document.write("</tr>");
document.write("<tr>");
for(var i=2; i<10; i++){
    document.write("<td>");
    for(var j=1; j<10; j++){
        document.write(i + " * " + j + " = " + i*j);
        document.write("<br>");
    }
    document.write("</td>");
}
document.write("</tr>");
document.write("</table>");






document.write("JSON 객체의 생성 6-1");
document.write("<br>")
var employee1 = {};
employee1.name = "홍길동";
employee1.title = "과장";
employee1.showInfo = function() {
document.write( "이름 : " + this.name );
document.write( "<br>" );
document.write( "직책 : " + this.title ); 
} 
employee1.showInfo();

document.write("<br>")
document.write("<br>")

document.write("JSON 객체의 생성 6-2");
document.write("<br>")
var employee1 = {
    name: "홍길동",
    title: "과장",
    showInfo: function() {
        document.write( "이름 : " + this.name );
        document.write( "<br>" );
        document.write( "직책 : " + this.title ); 
    }
}
employee1.showInfo();
//alert( employee1.name + " " + employee1.title );

document.write("<br>")
document.write("<br>")

document.write("JSON 객체의 생성 6-3");
document.write("<br>")
var foo = {
    name:"bar",
    nick:"buzz",
    aNumber:5,
    doStuff : function() {
        alert( "I'm" + this.name );
    }
}
//foo.doStuff();


document.write("<br>")
document.write("<br>")


document.write("JSON 객체의 생성 6-3 생성자 사용");
var Foo = function() {
    this.name = "bar";
    this.nick = "buzz";
    this.aNumber = 5;
    this.doFoo = function() {
        alert( "I'm " + this.name );
    };
}
var foo = new Foo();
foo.doFoo();


document.write("<br>")
document.write("<br>")


document.write("JSON 객체의 생성 6-4 prototype 기반의 상속을 통해 객체지향 구현");
var Foo = function( name, nick ) {
    this.name = name;
    this.nick = nick;
}

Foo.prototype.aNumber = 5;
Foo.prototype.doFoo = function() {
    alert( "I'm " + this.name );
};
var foo1 = new Foo( "foo1", "nick1" );
foo1.doFoo();
var foo2 = new Foo( "foo2", "nick2" );
foo2.doFoo();
    

document.write("<br>")
document.write("<br>")

document.write("JSON 객체의 생성 6-4");



var r1 = new Rectangle(100,100,199,299,"#ddd");
r1.show();
