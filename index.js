const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = (peopleWaiting) => {
    alert (`${peopleWaiting[0]} получил(а) посылку. В очереди осталось ${peopleWaiting.length - 1} человек.`);
    return peopleWaiting.shift();
}
const leaveQueueWithoutParcel = (peopleWaiting) => {
    peopleWaiting.shift();
    for (let i = 0; i < peopleWaiting.length;) {
        alert(`${peopleWaiting[0]} не получил(а) посылку и ушел(ла) из очереди`);
        peopleWaiting.shift();
    }
}
console.log(giveParcel(peopleWaiting));
console.log(giveParcel(peopleWaiting));
console.log(leaveQueueWithoutParcel(peopleWaiting));
console.log(peopleWaiting);
