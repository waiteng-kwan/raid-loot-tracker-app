class Controller
{
    constructor()
    {
        // this.model = model;
        // this.view = view;
        this.weekController = new WeekController();
        this.weekModel = new WeekModel();
        this.weekView = new WeekView();
        this.weekController.bindModelView(this.weekModel, this.weekView);
    }

    init()
    {
        this.weekController.init();
    }
}

const app = new Controller();
$(document).ready(function()
{
    app.init();
});
