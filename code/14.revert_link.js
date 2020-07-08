// 链表反转
function reverseLinkTable(linkTable) {
    if (!linkTable.next) {
        return linkTable
    }
    let head = linkTable;
    let prev = null;

    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
let linkTable = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}