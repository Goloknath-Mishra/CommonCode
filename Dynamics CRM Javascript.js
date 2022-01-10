var formContext = executionContext.getFormContext();

//Count the number of records in sub-grid, where <subgridName> is the logical name of the sub-grid :

formContext.getControl("<subgridName>").getGrid().getTotalRecordCount();

//Remove the blank option in an option set, where <optionsetName> is the logical name of the option set:

formContext.getControl("<optionsetName>").removeOption("");

//Get the option set’s selected value , where <optionsetName> is the logical name of the option set:

formContext.getAttribute("<optionsetName>").getValue();

//Set the selected value of an option set, where <optionsetName> is the logical name of the option set and <value> is the value the option set will be set to:

formContext.getAttribute("<optionsetName>").setValue("<value>");

//Enable/Disable a field, where <fieldName> is the logical name of the field and <Boolean> can be true or false (i.e. true disables field and false enables it):

formContext.getControl("<fieldName>").setDisabled(<Boolean>);

//Hide/Unhide section, where <nameOfTab> is the name of the tab containing the section, <nameOfSection> is the name of the section and <Boolean> can be true or false (i.e. true makes the section visible and false hides the section):

formContext.ui.tabs.get("<nameOfTab>").sections.get("<nameOfSection>").setVisible( <Boolean>);