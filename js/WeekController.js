class WeekController
{
    constructor()
    {
    }

    bindModelView(model, view)
    {
        this.view = view;
        this.model = model;
    }

    init()
    {
        this.view.init();
        this.model.init();
        this.view.bindController(this);

        this.onWeekChanged(this.model.memberCard);
        this.view.bindAddMember(this.handleAddMemberCard);
        this.view.bindAddMemberLootSlot(this.handleAddMemberLootSlot);
        //this.model.bindWeekChanged(this.onWeekChanged)
    }

    onWeekChanged = cards =>
    {
        this.view.displayMembers(cards);
    }

    handleAddMemberCard = () =>
    {
        this.model.addMemberCard();
        this.view.addMemberCard();
    }

    handleAddMemberLootSlot = (memberIndex) =>
    {
        this.model.addMemberLootSlot(0);
        this.view.addLootToCard(0);
    }

    handleChangePlayerName = (cardIndex, newName) =>
    {
        this.model.editMemberName(cardIndex, newName);
    }

}