class WeekView
{
    constructor()
    {
        this.controller = null;
        this.cards = [];
    }

    init()
    {
        this.turn1CardRoot = document.getElementById("t1MemberCardRoot");
        this.turn1Form = document.getElementById("t1Form");
        this.turn1AddMemberBtn = document.getElementById("t1AddMemberBtn");

        //create first card
        this.cards.push(new PlayerWeeklyLootCard());
        this.cards[0].create(null);
    }

    bindController(controller)
    {
        this.controller = controller;
    }

    // Create an element with an optional CSS class
    createElement(tag, className)
    {
        const element = document.createElement(tag)
        if (className) element.classList += className;

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector)
    {
        const element = document.querySelector(selector)

        return element
    }

    addElementAttribute(elem, attribute, value)
    {
        elem.setAttribute(attribute, value);
    }

    displayMembers(memberCards)
    {
        console.log(memberCards);
        // while (this.turn1CardRoot.firstChild !== null)
        // {
        //     this.turn1CardRoot.removeChild(this.turn1CardRoot.firstChild);
        // }


    }

    addMemberCard(newCard)
    {
        this.cards.push(new PlayerWeeklyLootCard(this.cards.length - 1));
        let tmpCard = this.cards[this.cards.length - 1].create(null);
        this.turn1CardRoot.appendChild(tmpCard);
    }

    addLootToCard(cardIndex)
    {
    }

    //called by PlayerWeeklyLootCard
    lootRegisterToCard(lootDropdown)
    {

    }

    bindAddMember(handler)
    {
        this.turn1AddMemberBtn.addEventListener('click', event =>
        {
            event.preventDefault();

            handler();
        });
    }

    bindAddMemberLootSlot(handler)
    {
    }

    bindChangeMemberPlayerName(handler)
    {

    }
}