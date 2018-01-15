function bouncer(arr) {
  return arr.filter(function(val){return val!==false && (val) &&  val!==0 && val!=="" && val!==undefined && !val.isNaN;});
}

bouncer([7, "ate", "", false, 9]);