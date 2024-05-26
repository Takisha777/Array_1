const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = (peopleWaiting) => {
    alert (`${peopleWaiting[0]} получил(а) посылку. В очереди осталось ${peopleWaiting.length - 1} человек.`);
    return peopleWaiting.shift();
}
const leaveQueueWithoutParcel = (peopleWaiting) => {
    peopleWaiting.shift();
    for (let leavePeople of peopleWaiting){
        alert(`${leavePeople} не получил(а) посылку и ушел(ла) из очереди`);
    }
}
console.log(giveParcel(peopleWaiting));
console.log(giveParcel(peopleWaiting));
console.log(leaveQueueWithoutParcel(peopleWaiting));