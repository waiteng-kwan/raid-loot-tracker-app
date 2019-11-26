class PlayerWeeklyLootCard
{
    constructor(index)
    {
        this.cardHTMLElem = null;
        this.lootSectionRoot = null;
        this.index = 0;
    }

    create(cardInfo)
    {
        this.createCard(cardInfo);
        this.createLoot(cardInfo);
        // app.weekView.lootRegisterToCard(this);

        return this.cardHTMLElem;
    }

    createCard(cardInfo)
    {
        //big card
        let card = this.createElement("div", "card col-md-12 p-0 my-1");
        // this.addElementAttribute(card, "style", "border-left: 0px; border-right: 0px;")
        this.cardHTMLElem = card;

        //header
        let cardHeader = this.createElement("div", "card-header input-group");
        card.appendChild(cardHeader);

        //input group
        let memberNameInput = this.createElement("input", "form-control");
        this.addElementAttribute(memberNameInput, "type", "text");
        this.addElementAttribute(memberNameInput, "aria-label", "Member Name");
        this.addElementAttribute(memberNameInput, "placeholder", "Member Name");
        cardHeader.appendChild(memberNameInput);

        memberNameInput.addEventListener("change", event =>
        {
            // console.log(event);
            app.weekController.handleChangePlayerName(this.index, event.target.value);
        });

        let memberNameDropdown = this.createElement("div", "input-group-append");
        cardHeader.appendChild(memberNameDropdown);

        let memberNameDropdownButton = this.createElement("button", "btn btn-outline-secondary dropdown-toggle");
        this.addElementAttribute(memberNameDropdownButton, "type", "button");
        this.addElementAttribute(memberNameDropdownButton, "data-toggle", "dropdown");
        this.addElementAttribute(memberNameDropdownButton, "aria-haspopup", "true");
        this.addElementAttribute(memberNameDropdownButton, "aria-expanded", "false");
        memberNameDropdownButton.innerHTML = "Select from List";
        memberNameDropdown.appendChild(memberNameDropdownButton);

        //dropdown list div
        let memberNameDropdownList = this.createElement("div", "dropdown-menu week-saved-member-list");
        memberNameDropdown.appendChild(memberNameDropdownList);

        //end of header

        //card body
        let cardBody = this.createElement("div", "card-body");
        card.appendChild(cardBody);
        this.lootSectionRoot = cardBody;

        let cardBodyTitleWrapper = this.createElement("div", "row");
        cardBody.appendChild(cardBodyTitleWrapper);

        let cardBodyTitleCol = this.createElement("div", "col-md-8");
        cardBodyTitleWrapper.appendChild(cardBodyTitleCol);

        //title text
        let cardBodyTitle = this.createElement("h5", "card-title");
        cardBodyTitle.innerHTML = "Loot List";
        cardBodyTitleCol.appendChild(cardBodyTitle);

        let cardBodyAddLootBtnDiv = this.createElement("div", "col-md-4 text-right");
        cardBodyTitleWrapper.appendChild(cardBodyAddLootBtnDiv);

        let cardBodyAddLootBtn = this.createElement("button", "btn btn-primary");
        this.addElementAttribute(cardBodyAddLootBtn, "style", "margin-top:-10px;");
        cardBodyAddLootBtn.innerHTML = '<span class="fa fa-plus-circle"></span> Add Loot Item';
        cardBodyAddLootBtnDiv.appendChild(cardBodyAddLootBtn);

        cardBodyAddLootBtn.addEventListener("click", event =>
        {
            event.preventDefault();
            app.weekController.handleAddMemberLootSlot(this.index);
            this.createLoot(null);
        });
        //end of body title
    }

    createLoot(lootInfo)
    {
        let cardBody = this.lootSectionRoot;

        //wrapper row
        let row = this.createElement("div", "row");
        cardBody.appendChild(row);

        //turn dropdown
        let turnDropdown = this.createElement("select", "form-control col-md-3");
        row.appendChild(turnDropdown);

        turnDropdown.innerHTML = '<option value="T1">Turn 1</option>';
        turnDropdown.innerHTML += '<option value="T2">Turn 2</option>';
        turnDropdown.innerHTML += '<option value="T3">Turn 3</option>';
        turnDropdown.innerHTML += '<option value="T4">Turn 4</option>';

        let lootDropdown = this.createElement("select", "form-control col-md-9");
        row.appendChild(lootDropdown);

        lootDropdown.innerHTML = '<option disabled selected value="0">Loot...</option>';
        lootDropdown.innerHTML += '<option value="Head">Head</option>';
        lootDropdown.innerHTML += '<option value="Body">Body</option>';
        lootDropdown.innerHTML += '<option value="Hands">Hands</option>';
        lootDropdown.innerHTML += '<option value="Chest">Chest</option>';
        lootDropdown.innerHTML += '<option value="Belt">Belt</option>';
        lootDropdown.innerHTML += '<option value="Legs">Legs</option>';
        lootDropdown.innerHTML += '<option value="Feet">Feet</option>';
        lootDropdown.innerHTML += '<option value="Earring">Earring</option>';
        lootDropdown.innerHTML += '<option value="Necklace">Necklace</option>';
        lootDropdown.innerHTML += '<option value="Bracelet">Bracelet</option>';
        lootDropdown.innerHTML += '<option value="Ring">Ring</option>';
        lootDropdown.innerHTML += '<option value="Weapon">Weapon</option>';
        lootDropdown.innerHTML += '<option value="Solvent">Solvent (Weapon)</option>';
        lootDropdown.innerHTML += '<option value="Oil">Oil (Accessory)</option>';
        lootDropdown.innerHTML += '<option value="Twine">Twine (Armor)</option>';
        lootDropdown.innerHTML += '<option value="Mount">Mount</option>';
        lootDropdown.innerHTML += '<option value="Song">Song</option>';

    }

    // Create an element with an optional CSS class
    createElement(tag, className)
    {
        const element = document.createElement(tag)
        if (className) element.classList += className;

        return element
    }

    addElementAttribute(elem, attribute, value)
    {
        elem.setAttribute(attribute, value);
    }

    playerNameEventListener(event)
    {
        this.playerName = event.value;
    }
}