console.log("Running");

/*"Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"*/

/*let set1 = new Set();

set1.add("abcadeecfb");
console.log(set1);

for(let key of set1.keys()){
    console.log(key);
    if(set1[])
}

let STR = "abcadeecfb";

let N = length.STR;
 console.log(N);*/

 function removeDuplicateCharacters(string) {
    return string.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('abcadeecfb'));


var s = "abcadeecfb";
function prCharWithFreq(s)
{

	var d = new Map();

	s.split('').forEach(element => {

		if(d.has(element))
		{
			d.set(element, d.get(element)+1);
		}
		else
		{
			d.set(element , 1);
		}
	});



s.split('').forEach(element => {

	if(d.has(element) && d.get(element)!=0)
	{
		document.write(element + d.get(element) + " ");
		d.set(element, 0);
	}
});

}
prCharWithFreq(s);