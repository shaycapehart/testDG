/**
 * Copyright 2018 Joseph W. May. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Base configuration of webapp.
 */
var Configuration = {
  /**
   * The name of the sheet containing the database.
   */
  databaseSheetName: 'Member Tracker',

  /**
   * The starting roster id number.
   */
  startingRosterId: 1001,

  /**
   * Name of the add-on/webapp
   */
  pluginName: 'CLUB TRACKER',

  /**
   * Some menu options are only available when in debug mode
   */
  debug: true,

  dialog: {
    // set dimensions of dialogs here
    settings: {
      height: 500,
      width: 900,
    },
  },

  /**
   * An object containing the row positions for top rows of the database sheet.
   */
  layout: {
    sections: 1,
    fields: 2,
    fieldMeta: 3,
    dataStart: 4,
  },

  /**
   * The name of the sheet containing the settings.
   */
  settingsSheetName: 'Settings - DO NOT EDIT OR DELETE THIS SHEET',
}