var triangle={
	ab:3,
	bc:4,
	ac:function(){
		sss = (this.ab*this.ab)+(this.bc*this.bc);
		return Math.sqrt(sss);
	}
};
console.log(triangle.ac());

var gipotenuza=(function(a,b){aaa=(a*a)+(b*b); return Math.sqrt(aaa);}(3,4));
console.log(gipotenuza);

var storona=function cc(aa,bb) {
	gip=(aa*aa)+(bb*bb);
	return Math.sqrt(gip);
}
console.log(storona(3,4));