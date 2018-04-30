// Budget Controller
var budgetController = (function()
{
    
})();

// UI Controller
var UIController = (function()
{
    var DOMstrings = 
    {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };
    
    return {
        getInput: function()
        {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function()
        {
            return DOMstrings;
        }
    };
})();

// App Controller
var controller = (function(budgetCtrl, UICtrl)
{
    var setupEventListeners = function()
    {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(e)
        {
           if (e.keyCode === 13 || e.which === 13)
           {
               ctrlAddItem();
           }
        });
    };
    
    var ctrlAddItem = function()
    {
        // Get the filled input data
        var input = UICtrl.getInput();
        
        // Add the item to the budget controller
        
        // Add the item to the UI
        
        // Calculate the budget
        
        // Display the budget on the UI
    };
    
    return {
        init: function()
        {
            console.log("app started");
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

controller.init();