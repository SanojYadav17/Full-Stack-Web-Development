const student ={
  name:"Sanoj",
  age:22,
  eng:89,
  math:98,
  phy:58,
  getAvg(){
    console.log(this);
    let avg = (this.eng + this.math + this.phy)/3;
    console.log(avg);
  }
}