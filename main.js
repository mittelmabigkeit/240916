var triangle={
	ab:3,
	bc:4,
	ac:function(){
		return (this.ab*this.ab)+(this.bc*this.bc);
	}
};
console.log(triangle.ac());