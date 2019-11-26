var memberObj = { name: "", lootNum: 0, loot: [""] }

class WeekModel
{
    constructor()
    {
        this.memberNumber = 1;
        this.memberCard = [];
        // this.memberCard = JSON.parse(localStorage.getItem('members')) || []
    }

    init()
    {

    }

    bindTodoListChanged(callback)
    {
        this.bindWeekChanged = callback
    }

    addMemberCard()
    {
        ++this.memberNumber;
        console.log("new member!" + this.memberNumber);
        this.memberCard.push({ name: "", lootNum: 1, loot: [""] });

        // this.onTodoListChanged(this.memberCard);

        return this.memberNumber;
    }

    editMemberCard(memberIndex)
    {

    }

    deleteMemberCard(memberIndex)
    {
        this.memberNumber--;
        //do not let it go below 0
        if (this.memberNumber < 0)
            this.memberNumber = 0;
    }

    getMemberCard(memberIndex)
    {
        return memberIndex >= this.memberCard.length ? null : this.memberCard[memberIndex];
    }

    editMemberName(memberIndex, newName)
    {
        let mc = this.getMemberCard(memberIndex);

        if (mc)
        {
            mc.name = newName;
        }

        console.log(mc.name);

    }

    addMemberLootSlot(memberIndex)
    {
        let tmp = this.getMemberCard(memberIndex);
        if (tmp !== null)
        {
            tmp.lootNum++;
        }
    }

    _commit(todos)
    {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

