/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
  function ListNode(val) {
     this.val = val;
     this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var listNode = new ListNode(null);
    var curr = listNode;
    var p = l1;
    var q = l2;
    var carry = 0;
    while( p|| q) {
      var x = p ? p.val : 0;
      var y = q ? q.val : 0;
      var val = x + y + carry;
      carry = Math.floor(val/10);
      curr.val = Math.floor(val%10);
      p = p ? p.next : null;
      q = q ? q.next : null;
      if (p || q) {
        curr.next = new ListNode(null);
        curr = curr.next;
      } 
    };
    if (carry === 1) {
      curr.next = new ListNode(carry);
    }
    return listNode;
};
