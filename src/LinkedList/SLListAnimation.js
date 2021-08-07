export default class SLListAnimation {
  static toNodeArray(list) {
    const arr = [];
    let ptr = list.head.next;
    while (ptr) {
      arr.push(ptr);
      ptr = ptr.next;
    }
    return arr;
  }
}
