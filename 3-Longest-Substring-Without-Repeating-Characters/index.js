/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var queue = [];
    var temp = [];
    var i = 1;
    if(s === '') {
         return 0;
      }
    queue.push(s.charAt(0));
    while( i > 0 && i<s.length) {
        var char = s.charAt(i);
        i++;        
        var index = queue.indexOf(char);
        if(index === -1) {
            queue.push(char);
        } else if(index === 0) {
            queue.shift();
            queue.push(char);
        } else {
            temp = queue.length > temp.length ? queue : temp;
            i = s.slice(0,i).lastIndexOf(queue.join('')) + index;            
            queue = [s[i]];
        }
    }
    return queue.length > temp.length ? queue.length : temp.length;
};
console.log(lengthOfLongestSubstring('abcabcabcbb'))
console.log(lengthOfLongestSubstring('bbbbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));//3
console.log(lengthOfLongestSubstring("jbpnbwwd"));//4
console.log(lengthOfLongestSubstring("ohvhjdml"));//6