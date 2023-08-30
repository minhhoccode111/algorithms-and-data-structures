console.log('Hello, World!');

// simple solution with while loop
{
  const middleNode = (head) => {
    let length = 0;
    const arr = [];
    while (head !== null) {
      arr.push(head);
      head = head.next;
      length++;
    }
    return arr[Math.floor(length / 2)];
  };
}

// simple solution with recursion
{
  const middleNode = (h, length = 0, arr = []) => {
    if (h === null) return arr[Math.floor(length / 2)];

    return middleNode(h.next, length + 1, [...arr, h]);
  };
}
