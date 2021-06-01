/**
 * Called when an add-on is installed.
 */
function onInstall(e) {
  onOpen(e)
}

/**
 * Called when an application that is associated with this add-on is opened.
 * Constructs the plugin menu that is displayed in the 'Add-ons' dropdown
 * availabe in Google Docs, Sheets, or Slides.
 */
function onOpen(e) {

  // Add the plugin add-on menu to the user interface with additional menues
  // available only in debug mode.
  const ui = SpreadsheetApp.getUi()
    .createMenu(Configuration.pluginName)
    .addItem('Settings', 'showWebappDialog')
    .addItem('Settings Sidebar', 'showSettingsSidebar')

  // If debug, display menu options for testing and to clear the
  // property storage.
  if (Configuration.debug) {
    ui.addSeparator()
      .addItem('Clear user properties', 'onClearUserProperties')
      .addItem('Refresh Menu', 'onRefresh')
      .addItem('Feature test', 'onFeatureTest')
  }

  ui.addToUi()
}

function showWebappDialog() {
  showDialog(
    'views/core/app',
    Configuration.dialog.settings.width,
    Configuration.dialog.settings.height,
    'Club Tracker'
  )
}

/**
 * Refreshes menu by calling onOpen to mimic reloading window
 */
function onRefresh(e) {
  onOpen(e)
}

/**
 * Shows the settings page as a sidebar
 */
function showSettingsSidebar() {
  showSidebar('views/core/app.sidebar', 'Club Tracker')
}

/**
 * Clears the user properties storage.
 * This function is only available in debug mode.
 */
function onClearUserProperties() {
  let storage = new PropertyStore()
  storage.clean()
}

function showAlert(title, message) {
  let ui = SpreadsheetApp.getUi()
  ui.alert(title, message, ui.ButtonSet.OK)
}

/**
 * Displays an alert with 'Yes' and 'No' buttons. Returns the user selection
 * as true ('yes') or false ('no').
 */
function showConfirmation(title, message) {
  let ui = SpreadsheetApp.getUi()
  let result = ui.alert(title, message, ui.ButtonSet.YES_NO)
  if (result === ui.Button.YES) return true
  return false
}

/**
 * Opens a dialog window using an HTML template with the given dimensions
 * and title.
 */
function showDialog(source, width, height, title) {
  let template = HtmlService.createTemplateFromFile(source)

  template.uiType = 'dialog'

  let ui = template.evaluate().setWidth(width).setHeight(height)
  // [bug] this comment is needed to avoid 'You do not have permission to call
  //       Ui.showModalDialog' error (it seems the word 'Ui' must be present)
  SpreadsheetApp.getUi().showModalDialog(ui, title)
}

/**
 * Displays a prompt and return the user's response.
 */
function showPrompt(message) {
  let ui = SpreadsheetApp.getUi()
  let response = ui.prompt(message)

  // Process the user's response.
  if (response.getSelectedButton() === ui.Button.OK) {
    return response.getResponseText()
  } else {
    return null
  }
}

/**
 * Opens a sidebar using an HTML template.
 */
function showSidebar(source, title) {
  var template = HtmlService.createTemplateFromFile(source)

  template.uiType = 'sidebar'

  let htmlOutput = template.evaluate().setTitle(title)
  // [bug] this comment is needed to avoid 'You do not have permission to call
  //       Ui.showModalDialog' error (it seems the word 'Ui' must be present)
  var ui = SpreadsheetApp.getUi()

  ui.showSidebar(htmlOutput)
}


// test feature here
function onFeatureTest() {
  var dashboard = new Dashboard()

  console.log(dashboard.getMain())
}