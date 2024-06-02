const giveParcel = (peopleWaiting) => {
    alert (`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}
const leaveQueueWithoutParcel = (peopleWaiting) => {
    peopleWaiting.shift();
    for (let i = 0;  i < peopleWaiting.length;) {
        alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди`);
    }
}
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
