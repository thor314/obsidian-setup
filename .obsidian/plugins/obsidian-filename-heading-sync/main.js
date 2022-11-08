'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function isExcalidraw(app, f) {
    if (f.extension === 'excalidraw' || /.*\.excalidraw\.md$/g.test(f.path)) {
        return true;
    }
    var fileCache = app.metadataCache.getFileCache(f);
    return (!!(fileCache === null || fileCache === void 0 ? void 0 : fileCache.frontmatter) && !!fileCache.frontmatter['excalidraw-plugin']);
}
function isExcluded(app, f) {
    if (isExcalidraw(app, f)) {
        return true;
    }
    return false;
}

var stockIllegalSymbols = /[\\/:|#^[\]]/g;
var DEFAULT_SETTINGS = {
    userIllegalSymbols: [],
    ignoredFiles: {},
    ignoreRegex: '',
    useFileOpenHook: true,
    useFileSaveHook: true,
};
var FilenameHeadingSyncPlugin = /** @class */ (function (_super) {
    __extends(FilenameHeadingSyncPlugin, _super);
    function FilenameHeadingSyncPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRenameInProgress = false;
        return _this;
    }
    FilenameHeadingSyncPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.registerEvent(this.app.vault.on('rename', function (file, oldPath) {
                            if (_this.settings.useFileSaveHook) {
                                return _this.handleSyncFilenameToHeading(file, oldPath);
                            }
                        }));
                        this.registerEvent(this.app.vault.on('modify', function (file) {
                            if (_this.settings.useFileSaveHook) {
                                return _this.handleSyncHeadingToFile(file);
                            }
                        }));
                        this.registerEvent(this.app.workspace.on('file-open', function (file) {
                            if (_this.settings.useFileOpenHook) {
                                return _this.handleSyncFilenameToHeading(file, file.path);
                            }
                        }));
                        this.addSettingTab(new FilenameHeadingSyncSettingTab(this.app, this));
                        this.addCommand({
                            id: 'page-heading-sync-ignore-file',
                            name: 'Ignore current file',
                            checkCallback: function (checking) {
                                var leaf = _this.app.workspace.activeLeaf;
                                if (leaf) {
                                    if (!checking) {
                                        _this.settings.ignoredFiles[_this.app.workspace.getActiveFile().path] = null;
                                        _this.saveSettings();
                                    }
                                    return true;
                                }
                                return false;
                            },
                        });
                        this.addCommand({
                            id: 'sync-filename-to-heading',
                            name: 'Sync Filename to Heading',
                            editorCallback: function (editor, view) {
                                return _this.forceSyncFilenameToHeading(view.file);
                            },
                        });
                        this.addCommand({
                            id: 'sync-heading-to-filename',
                            name: 'Sync Heading to Filename',
                            editorCallback: function (editor, view) {
                                return _this.forceSyncHeadingToFilename(view.file);
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FilenameHeadingSyncPlugin.prototype.fileIsIgnored = function (activeFile, path) {
        // check exclusions
        if (isExcluded(this.app, activeFile)) {
            return true;
        }
        // check manual ignore
        if (this.settings.ignoredFiles[path] !== undefined) {
            return true;
        }
        // check regex
        try {
            if (this.settings.ignoreRegex === '') {
                return;
            }
            var reg = new RegExp(this.settings.ignoreRegex);
            return reg.exec(path) !== null;
        }
        catch (_a) { }
        return false;
    };
    /**
     * Renames the file with the first heading found
     *
     * @param      {TAbstractFile}  file    The file
     */
    FilenameHeadingSyncPlugin.prototype.handleSyncHeadingToFile = function (file) {
        if (!(file instanceof obsidian.TFile)) {
            return;
        }
        if (file.extension !== 'md') {
            // just bail
            return;
        }
        // if currently opened file is not the same as the one that fired the event, skip
        // this is to make sure other events don't trigger this plugin
        if (this.app.workspace.getActiveFile() !== file) {
            return;
        }
        // if ignored, just bail
        if (this.fileIsIgnored(file, file.path)) {
            return;
        }
        this.forceSyncHeadingToFilename(file);
    };
    FilenameHeadingSyncPlugin.prototype.forceSyncHeadingToFilename = function (file) {
        var _this = this;
        this.app.vault.read(file).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var lines, start, heading, sanitizedHeading, newPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lines = data.split('\n');
                        start = this.findNoteStart(lines);
                        heading = this.findHeading(lines, start);
                        if (heading === null)
                            return [2 /*return*/]; // no heading found, nothing to do here
                        sanitizedHeading = this.sanitizeHeading(heading.text);
                        if (!(sanitizedHeading.length > 0 &&
                            this.sanitizeHeading(file.basename) !== sanitizedHeading)) return [3 /*break*/, 2];
                        newPath = file.parent.path + "/" + sanitizedHeading + ".md";
                        this.isRenameInProgress = true;
                        return [4 /*yield*/, this.app.fileManager.renameFile(file, newPath)];
                    case 1:
                        _a.sent();
                        this.isRenameInProgress = false;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Syncs the current filename to the first heading
     * Finds the first heading of the file, then replaces it with the filename
     *
     * @param      {TAbstractFile}  file     The file that fired the event
     * @param      {string}         oldPath  The old path
     */
    FilenameHeadingSyncPlugin.prototype.handleSyncFilenameToHeading = function (file, oldPath) {
        if (this.isRenameInProgress) {
            return;
        }
        if (!(file instanceof obsidian.TFile)) {
            return;
        }
        if (file.extension !== 'md') {
            // just bail
            return;
        }
        // if oldpath is ignored, hook in and update the new filepath to be ignored instead
        if (this.fileIsIgnored(file, oldPath.trim())) {
            // if filename didn't change, just bail, nothing to do here
            if (file.path === oldPath) {
                return;
            }
            // If filepath changed and the file was in the ignore list before,
            // remove it from the list and add the new one instead
            if (this.settings.ignoredFiles[oldPath]) {
                delete this.settings.ignoredFiles[oldPath];
                this.settings.ignoredFiles[file.path] = null;
                this.saveSettings();
            }
            return;
        }
        this.forceSyncFilenameToHeading(file);
    };
    FilenameHeadingSyncPlugin.prototype.forceSyncFilenameToHeading = function (file) {
        var _this = this;
        var sanitizedHeading = this.sanitizeHeading(file.basename);
        this.app.vault.read(file).then(function (data) {
            var lines = data.split('\n');
            var start = _this.findNoteStart(lines);
            var heading = _this.findHeading(lines, start);
            if (heading !== null) {
                if (_this.sanitizeHeading(heading.text) !== sanitizedHeading) {
                    _this.replaceLineInFile(file, lines, heading.lineNumber, "# " + sanitizedHeading);
                }
            }
            else
                _this.insertLineInFile(file, lines, start, "# " + sanitizedHeading);
        });
    };
    /**
     * Finds the start of the note file, excluding frontmatter
     *
     * @param {string[]} fileLines array of the file's contents, line by line
     * @returns {number} zero-based index of the starting line of the note
     */
    FilenameHeadingSyncPlugin.prototype.findNoteStart = function (fileLines) {
        // check for frontmatter by checking if first line is a divider ('---')
        if (fileLines[0] === '---') {
            // find end of frontmatter
            // if no end is found, then it isn't really frontmatter and function will end up returning 0
            for (var i = 1; i < fileLines.length; i++) {
                if (fileLines[i] === '---') {
                    // end of frontmatter found, next line is start of note
                    return i + 1;
                }
            }
        }
        return 0;
    };
    /**
     * Finds the first heading of the note file
     *
     * @param {string[]} fileLines array of the file's contents, line by line
     * @param {number} startLine zero-based index of the starting line of the note
     * @returns {LinePointer | null} LinePointer to heading or null if no heading found
     */
    FilenameHeadingSyncPlugin.prototype.findHeading = function (fileLines, startLine) {
        for (var i = startLine; i < fileLines.length; i++) {
            if (fileLines[i].startsWith('# ')) {
                return {
                    lineNumber: i,
                    text: fileLines[i].substring(2),
                };
            }
        }
        return null; // no heading found
    };
    FilenameHeadingSyncPlugin.prototype.regExpEscape = function (str) {
        return String(str).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    FilenameHeadingSyncPlugin.prototype.sanitizeHeading = function (text) {
        var _this = this;
        // stockIllegalSymbols is a regExp object, but userIllegalSymbols is a list of strings and therefore they are handled separately.
        text = text.replace(stockIllegalSymbols, '');
        var userIllegalSymbolsEscaped = this.settings.userIllegalSymbols.map(function (str) { return _this.regExpEscape(str); });
        var userIllegalSymbolsRegExp = new RegExp(userIllegalSymbolsEscaped.join('|'), 'g');
        text = text.replace(userIllegalSymbolsRegExp, '');
        return text.trim();
    };
    /**
     * Modifies the file by replacing a particular line with new text.
     *
     * The function will add a newline character at the end of the replaced line.
     *
     * If the `lineNumber` parameter is higher than the index of the last line of the file
     * the function will add a newline character to the current last line and append a new
     * line at the end of the file with the new text (essentially a new last line).
     *
     * @param {TFile} file the file to modify
     * @param {string[]} fileLines array of the file's contents, line by line
     * @param {number} lineNumber zero-based index of the line to replace
     * @param {string} text the new text
     */
    FilenameHeadingSyncPlugin.prototype.replaceLineInFile = function (file, fileLines, lineNumber, text) {
        if (lineNumber >= fileLines.length) {
            fileLines.push(text + '\n');
        }
        else {
            fileLines[lineNumber] = text;
        }
        var data = fileLines.join('\n');
        this.app.vault.modify(file, data);
    };
    /**
     * Modifies the file by inserting a line with specified text.
     *
     * The function will add a newline character at the end of the inserted line.
     *
     * @param {TFile} file the file to modify
     * @param {string[]} fileLines array of the file's contents, line by line
     * @param {number} lineNumber zero-based index of where the line should be inserted
     * @param {string} text the text that the line shall contain
     */
    FilenameHeadingSyncPlugin.prototype.insertLineInFile = function (file, fileLines, lineNumber, text) {
        if (lineNumber >= fileLines.length) {
            fileLines.push(text + '\n');
        }
        else {
            fileLines.splice(lineNumber, 0, text);
        }
        var data = fileLines.join('\n');
        this.app.vault.modify(file, data);
    };
    FilenameHeadingSyncPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    FilenameHeadingSyncPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FilenameHeadingSyncPlugin;
}(obsidian.Plugin));
var FilenameHeadingSyncSettingTab = /** @class */ (function (_super) {
    __extends(FilenameHeadingSyncSettingTab, _super);
    function FilenameHeadingSyncSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        _this.app = app;
        return _this;
    }
    FilenameHeadingSyncSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var regexIgnoredFilesDiv;
        var renderRegexIgnoredFiles = function (div) {
            // empty existing div
            div.innerHTML = '';
            if (_this.plugin.settings.ignoreRegex === '') {
                return;
            }
            try {
                var files = _this.app.vault.getFiles();
                var reg_1 = new RegExp(_this.plugin.settings.ignoreRegex);
                files
                    .filter(function (file) { return reg_1.exec(file.path) !== null; })
                    .forEach(function (el) {
                    new obsidian.Setting(div).setDesc(el.path);
                });
            }
            catch (e) {
                return;
            }
        };
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Filename Heading Sync' });
        containerEl.createEl('p', {
            text: 'This plugin will overwrite the first heading found in a file with the filename.',
        });
        containerEl.createEl('p', {
            text: 'If no header is found, will insert a new one at the first line (after frontmatter).',
        });
        new obsidian.Setting(containerEl)
            .setName('Custom Illegal Charaters/Strings')
            .setDesc('Type charaters/strings seperated by a comma. This input is space sensitive.')
            .addText(function (text) {
            return text
                .setPlaceholder('[],#,...')
                .setValue(_this.plugin.settings.userIllegalSymbols.join())
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.userIllegalSymbols = value.split(',');
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Ignore Regex Rule')
            .setDesc('Ignore rule in RegEx format. All files listed below will get ignored by this plugin.')
            .addText(function (text) {
            return text
                .setPlaceholder('MyFolder/.*')
                .setValue(_this.plugin.settings.ignoreRegex)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            try {
                                new RegExp(value);
                                this.plugin.settings.ignoreRegex = value;
                            }
                            catch (_b) {
                                this.plugin.settings.ignoreRegex = '';
                            }
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            renderRegexIgnoredFiles(regexIgnoredFilesDiv);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Use File Open Hook')
            .setDesc('Whether this plugin should trigger when a file is opened, and not just on save. Disable this when you notice conflicts with other plugins that also act on file open.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.useFileOpenHook)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.useFileOpenHook = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Use File Save Hook')
            .setDesc('Whether this plugin should trigger when a file is saved. Disable this when you want to trigger sync only manually.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.useFileSaveHook)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.useFileSaveHook = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        containerEl.createEl('h2', { text: 'Ignored Files By Regex' });
        containerEl.createEl('p', {
            text: 'All files matching the above RegEx will get listed here',
        });
        regexIgnoredFilesDiv = containerEl.createDiv('test');
        renderRegexIgnoredFiles(regexIgnoredFilesDiv);
        containerEl.createEl('h2', { text: 'Manually Ignored Files' });
        containerEl.createEl('p', {
            text: 'You can ignore files from this plugin by using the "ignore this file" command',
        });
        var _loop_1 = function (key) {
            var ignoredFilesSettingsObj = new obsidian.Setting(containerEl).setDesc(key);
            ignoredFilesSettingsObj.addButton(function (button) {
                button.setButtonText('Delete').onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                delete this.plugin.settings.ignoredFiles[key];
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                this.display();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        // go over all ignored files and add them
        for (var key in this.plugin.settings.ignoredFiles) {
            _loop_1(key);
        }
    };
    return FilenameHeadingSyncSettingTab;
}(obsidian.PluginSettingTab));

module.exports = FilenameHeadingSyncPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsImV4Y2x1c2lvbnMudHMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhjYWxpZHJhdyhhcHA6IEFwcCwgZjogVEZpbGUpIHtcbiAgaWYgKGYuZXh0ZW5zaW9uID09PSAnZXhjYWxpZHJhdycgfHwgLy4qXFwuZXhjYWxpZHJhd1xcLm1kJC9nLnRlc3QoZi5wYXRoKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGZpbGVDYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKTtcbiAgcmV0dXJuIChcbiAgICAhIWZpbGVDYWNoZT8uZnJvbnRtYXR0ZXIgJiYgISFmaWxlQ2FjaGUuZnJvbnRtYXR0ZXJbJ2V4Y2FsaWRyYXctcGx1Z2luJ11cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhjbHVkZWQoYXBwOiBBcHAsIGY6IFRGaWxlKSB7XG4gIGlmIChpc0V4Y2FsaWRyYXcoYXBwLCBmKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtcbiAgQXBwLFxuICBQbHVnaW4sXG4gIFBsdWdpblNldHRpbmdUYWIsXG4gIFNldHRpbmcsXG4gIFRBYnN0cmFjdEZpbGUsXG4gIFRGaWxlLFxuICBFZGl0b3IsXG4gIE1hcmtkb3duVmlldyxcbn0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgaXNFeGNsdWRlZCB9IGZyb20gJy4vZXhjbHVzaW9ucyc7XG5cbmNvbnN0IHN0b2NrSWxsZWdhbFN5bWJvbHMgPSAvW1xcXFwvOnwjXltcXF1dL2c7XG5cbmludGVyZmFjZSBMaW5lUG9pbnRlciB7XG4gIGxpbmVOdW1iZXI6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRmlsZW5hbWVIZWFkaW5nU3luY1BsdWdpblNldHRpbmdzIHtcbiAgdXNlcklsbGVnYWxTeW1ib2xzOiBzdHJpbmdbXTtcbiAgaWdub3JlUmVnZXg6IHN0cmluZztcbiAgaWdub3JlZEZpbGVzOiB7IFtrZXk6IHN0cmluZ106IG51bGwgfTtcbiAgdXNlRmlsZU9wZW5Ib29rOiBib29sZWFuO1xuICB1c2VGaWxlU2F2ZUhvb2s6IGJvb2xlYW47XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEZpbGVuYW1lSGVhZGluZ1N5bmNQbHVnaW5TZXR0aW5ncyA9IHtcbiAgdXNlcklsbGVnYWxTeW1ib2xzOiBbXSxcbiAgaWdub3JlZEZpbGVzOiB7fSxcbiAgaWdub3JlUmVnZXg6ICcnLFxuICB1c2VGaWxlT3Blbkhvb2s6IHRydWUsXG4gIHVzZUZpbGVTYXZlSG9vazogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVuYW1lSGVhZGluZ1N5bmNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBpc1JlbmFtZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2V0dGluZ3M6IEZpbGVuYW1lSGVhZGluZ1N5bmNQbHVnaW5TZXR0aW5ncztcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKCdyZW5hbWUnLCAoZmlsZSwgb2xkUGF0aCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VGaWxlU2F2ZUhvb2spIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTeW5jRmlsZW5hbWVUb0hlYWRpbmcoZmlsZSwgb2xkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oJ21vZGlmeScsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUZpbGVTYXZlSG9vaykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN5bmNIZWFkaW5nVG9GaWxlKGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW9wZW4nLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VGaWxlT3Blbkhvb2spIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTeW5jRmlsZW5hbWVUb0hlYWRpbmcoZmlsZSwgZmlsZS5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcblxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgRmlsZW5hbWVIZWFkaW5nU3luY1NldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3BhZ2UtaGVhZGluZy1zeW5jLWlnbm9yZS1maWxlJyxcbiAgICAgIG5hbWU6ICdJZ25vcmUgY3VycmVudCBmaWxlJyxcbiAgICAgIGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgICAgICBpZiAobGVhZikge1xuICAgICAgICAgIGlmICghY2hlY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuaWdub3JlZEZpbGVzW1xuICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpLnBhdGhcbiAgICAgICAgICAgIF0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3N5bmMtZmlsZW5hbWUtdG8taGVhZGluZycsXG4gICAgICBuYW1lOiAnU3luYyBGaWxlbmFtZSB0byBIZWFkaW5nJyxcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT5cbiAgICAgICAgdGhpcy5mb3JjZVN5bmNGaWxlbmFtZVRvSGVhZGluZyh2aWV3LmZpbGUpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1oZWFkaW5nLXRvLWZpbGVuYW1lJyxcbiAgICAgIG5hbWU6ICdTeW5jIEhlYWRpbmcgdG8gRmlsZW5hbWUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PlxuICAgICAgICB0aGlzLmZvcmNlU3luY0hlYWRpbmdUb0ZpbGVuYW1lKHZpZXcuZmlsZSksXG4gICAgfSk7XG4gIH1cblxuICBmaWxlSXNJZ25vcmVkKGFjdGl2ZUZpbGU6IFRGaWxlLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBjaGVjayBleGNsdXNpb25zXG4gICAgaWYgKGlzRXhjbHVkZWQodGhpcy5hcHAsIGFjdGl2ZUZpbGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBtYW51YWwgaWdub3JlXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaWdub3JlZEZpbGVzW3BhdGhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIHJlZ2V4XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmlnbm9yZVJlZ2V4ID09PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAodGhpcy5zZXR0aW5ncy5pZ25vcmVSZWdleCk7XG4gICAgICByZXR1cm4gcmVnLmV4ZWMocGF0aCkgIT09IG51bGw7XG4gICAgfSBjYXRjaCB7fVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmFtZXMgdGhlIGZpbGUgd2l0aCB0aGUgZmlyc3QgaGVhZGluZyBmb3VuZFxuICAgKlxuICAgKiBAcGFyYW0gICAgICB7VEFic3RyYWN0RmlsZX0gIGZpbGUgICAgVGhlIGZpbGVcbiAgICovXG4gIGhhbmRsZVN5bmNIZWFkaW5nVG9GaWxlKGZpbGU6IFRBYnN0cmFjdEZpbGUpIHtcbiAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZpbGUuZXh0ZW5zaW9uICE9PSAnbWQnKSB7XG4gICAgICAvLyBqdXN0IGJhaWxcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBjdXJyZW50bHkgb3BlbmVkIGZpbGUgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgdGhhdCBmaXJlZCB0aGUgZXZlbnQsIHNraXBcbiAgICAvLyB0aGlzIGlzIHRvIG1ha2Ugc3VyZSBvdGhlciBldmVudHMgZG9uJ3QgdHJpZ2dlciB0aGlzIHBsdWdpblxuICAgIGlmICh0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpICE9PSBmaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgaWdub3JlZCwganVzdCBiYWlsXG4gICAgaWYgKHRoaXMuZmlsZUlzSWdub3JlZChmaWxlLCBmaWxlLnBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb3JjZVN5bmNIZWFkaW5nVG9GaWxlbmFtZShmaWxlKTtcbiAgfVxuXG4gIGZvcmNlU3luY0hlYWRpbmdUb0ZpbGVuYW1lKGZpbGU6IFRGaWxlKSB7XG4gICAgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoJ1xcbicpO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmZpbmROb3RlU3RhcnQobGluZXMpO1xuICAgICAgY29uc3QgaGVhZGluZyA9IHRoaXMuZmluZEhlYWRpbmcobGluZXMsIHN0YXJ0KTtcblxuICAgICAgaWYgKGhlYWRpbmcgPT09IG51bGwpIHJldHVybjsgLy8gbm8gaGVhZGluZyBmb3VuZCwgbm90aGluZyB0byBkbyBoZXJlXG5cbiAgICAgIGNvbnN0IHNhbml0aXplZEhlYWRpbmcgPSB0aGlzLnNhbml0aXplSGVhZGluZyhoZWFkaW5nLnRleHQpO1xuICAgICAgaWYgKFxuICAgICAgICBzYW5pdGl6ZWRIZWFkaW5nLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgdGhpcy5zYW5pdGl6ZUhlYWRpbmcoZmlsZS5iYXNlbmFtZSkgIT09IHNhbml0aXplZEhlYWRpbmdcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQYXRoID0gYCR7ZmlsZS5wYXJlbnQucGF0aH0vJHtzYW5pdGl6ZWRIZWFkaW5nfS5tZGA7XG4gICAgICAgIHRoaXMuaXNSZW5hbWVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucmVuYW1lRmlsZShmaWxlLCBuZXdQYXRoKTtcbiAgICAgICAgdGhpcy5pc1JlbmFtZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jcyB0aGUgY3VycmVudCBmaWxlbmFtZSB0byB0aGUgZmlyc3QgaGVhZGluZ1xuICAgKiBGaW5kcyB0aGUgZmlyc3QgaGVhZGluZyBvZiB0aGUgZmlsZSwgdGhlbiByZXBsYWNlcyBpdCB3aXRoIHRoZSBmaWxlbmFtZVxuICAgKlxuICAgKiBAcGFyYW0gICAgICB7VEFic3RyYWN0RmlsZX0gIGZpbGUgICAgIFRoZSBmaWxlIHRoYXQgZmlyZWQgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICAgICAgICAgb2xkUGF0aCAgVGhlIG9sZCBwYXRoXG4gICAqL1xuICBoYW5kbGVTeW5jRmlsZW5hbWVUb0hlYWRpbmcoZmlsZTogVEFic3RyYWN0RmlsZSwgb2xkUGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5hbWVJblByb2dyZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmaWxlLmV4dGVuc2lvbiAhPT0gJ21kJykge1xuICAgICAgLy8ganVzdCBiYWlsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgb2xkcGF0aCBpcyBpZ25vcmVkLCBob29rIGluIGFuZCB1cGRhdGUgdGhlIG5ldyBmaWxlcGF0aCB0byBiZSBpZ25vcmVkIGluc3RlYWRcbiAgICBpZiAodGhpcy5maWxlSXNJZ25vcmVkKGZpbGUsIG9sZFBhdGgudHJpbSgpKSkge1xuICAgICAgLy8gaWYgZmlsZW5hbWUgZGlkbid0IGNoYW5nZSwganVzdCBiYWlsLCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgIGlmIChmaWxlLnBhdGggPT09IG9sZFBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBmaWxlcGF0aCBjaGFuZ2VkIGFuZCB0aGUgZmlsZSB3YXMgaW4gdGhlIGlnbm9yZSBsaXN0IGJlZm9yZSxcbiAgICAgIC8vIHJlbW92ZSBpdCBmcm9tIHRoZSBsaXN0IGFuZCBhZGQgdGhlIG5ldyBvbmUgaW5zdGVhZFxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaWdub3JlZEZpbGVzW29sZFBhdGhdKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNldHRpbmdzLmlnbm9yZWRGaWxlc1tvbGRQYXRoXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pZ25vcmVkRmlsZXNbZmlsZS5wYXRoXSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb3JjZVN5bmNGaWxlbmFtZVRvSGVhZGluZyhmaWxlKTtcbiAgfVxuXG4gIGZvcmNlU3luY0ZpbGVuYW1lVG9IZWFkaW5nKGZpbGU6IFRGaWxlKSB7XG4gICAgY29uc3Qgc2FuaXRpemVkSGVhZGluZyA9IHRoaXMuc2FuaXRpemVIZWFkaW5nKGZpbGUuYmFzZW5hbWUpO1xuICAgIHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBkYXRhLnNwbGl0KCdcXG4nKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5maW5kTm90ZVN0YXJ0KGxpbmVzKTtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSB0aGlzLmZpbmRIZWFkaW5nKGxpbmVzLCBzdGFydCk7XG5cbiAgICAgIGlmIChoZWFkaW5nICE9PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnNhbml0aXplSGVhZGluZyhoZWFkaW5nLnRleHQpICE9PSBzYW5pdGl6ZWRIZWFkaW5nKSB7XG4gICAgICAgICAgdGhpcy5yZXBsYWNlTGluZUluRmlsZShcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICAgIGhlYWRpbmcubGluZU51bWJlcixcbiAgICAgICAgICAgIGAjICR7c2FuaXRpemVkSGVhZGluZ31gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0aGlzLmluc2VydExpbmVJbkZpbGUoZmlsZSwgbGluZXMsIHN0YXJ0LCBgIyAke3Nhbml0aXplZEhlYWRpbmd9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIHN0YXJ0IG9mIHRoZSBub3RlIGZpbGUsIGV4Y2x1ZGluZyBmcm9udG1hdHRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBmaWxlTGluZXMgYXJyYXkgb2YgdGhlIGZpbGUncyBjb250ZW50cywgbGluZSBieSBsaW5lXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHN0YXJ0aW5nIGxpbmUgb2YgdGhlIG5vdGVcbiAgICovXG4gIGZpbmROb3RlU3RhcnQoZmlsZUxpbmVzOiBzdHJpbmdbXSkge1xuICAgIC8vIGNoZWNrIGZvciBmcm9udG1hdHRlciBieSBjaGVja2luZyBpZiBmaXJzdCBsaW5lIGlzIGEgZGl2aWRlciAoJy0tLScpXG4gICAgaWYgKGZpbGVMaW5lc1swXSA9PT0gJy0tLScpIHtcbiAgICAgIC8vIGZpbmQgZW5kIG9mIGZyb250bWF0dGVyXG4gICAgICAvLyBpZiBubyBlbmQgaXMgZm91bmQsIHRoZW4gaXQgaXNuJ3QgcmVhbGx5IGZyb250bWF0dGVyIGFuZCBmdW5jdGlvbiB3aWxsIGVuZCB1cCByZXR1cm5pbmcgMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmaWxlTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZpbGVMaW5lc1tpXSA9PT0gJy0tLScpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgZnJvbnRtYXR0ZXIgZm91bmQsIG5leHQgbGluZSBpcyBzdGFydCBvZiBub3RlXG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBmaXJzdCBoZWFkaW5nIG9mIHRoZSBub3RlIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gZmlsZUxpbmVzIGFycmF5IG9mIHRoZSBmaWxlJ3MgY29udGVudHMsIGxpbmUgYnkgbGluZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRMaW5lIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHN0YXJ0aW5nIGxpbmUgb2YgdGhlIG5vdGVcbiAgICogQHJldHVybnMge0xpbmVQb2ludGVyIHwgbnVsbH0gTGluZVBvaW50ZXIgdG8gaGVhZGluZyBvciBudWxsIGlmIG5vIGhlYWRpbmcgZm91bmRcbiAgICovXG4gIGZpbmRIZWFkaW5nKGZpbGVMaW5lczogc3RyaW5nW10sIHN0YXJ0TGluZTogbnVtYmVyKTogTGluZVBvaW50ZXIgfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRMaW5lOyBpIDwgZmlsZUxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmlsZUxpbmVzW2ldLnN0YXJ0c1dpdGgoJyMgJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgICAgIHRleHQ6IGZpbGVMaW5lc1tpXS5zdWJzdHJpbmcoMiksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsOyAvLyBubyBoZWFkaW5nIGZvdW5kXG4gIH1cblxuICByZWdFeHBFc2NhcGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuICB9XG5cbiAgc2FuaXRpemVIZWFkaW5nKHRleHQ6IHN0cmluZykge1xuICAgIC8vIHN0b2NrSWxsZWdhbFN5bWJvbHMgaXMgYSByZWdFeHAgb2JqZWN0LCBidXQgdXNlcklsbGVnYWxTeW1ib2xzIGlzIGEgbGlzdCBvZiBzdHJpbmdzIGFuZCB0aGVyZWZvcmUgdGhleSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc3RvY2tJbGxlZ2FsU3ltYm9scywgJycpO1xuXG4gICAgY29uc3QgdXNlcklsbGVnYWxTeW1ib2xzRXNjYXBlZCA9IHRoaXMuc2V0dGluZ3MudXNlcklsbGVnYWxTeW1ib2xzLm1hcChcbiAgICAgIChzdHIpID0+IHRoaXMucmVnRXhwRXNjYXBlKHN0ciksXG4gICAgKTtcbiAgICBjb25zdCB1c2VySWxsZWdhbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKFxuICAgICAgdXNlcklsbGVnYWxTeW1ib2xzRXNjYXBlZC5qb2luKCd8JyksXG4gICAgICAnZycsXG4gICAgKTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHVzZXJJbGxlZ2FsU3ltYm9sc1JlZ0V4cCwgJycpO1xuICAgIHJldHVybiB0ZXh0LnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZmllcyB0aGUgZmlsZSBieSByZXBsYWNpbmcgYSBwYXJ0aWN1bGFyIGxpbmUgd2l0aCBuZXcgdGV4dC5cbiAgICpcbiAgICogVGhlIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbmV3bGluZSBjaGFyYWN0ZXIgYXQgdGhlIGVuZCBvZiB0aGUgcmVwbGFjZWQgbGluZS5cbiAgICpcbiAgICogSWYgdGhlIGBsaW5lTnVtYmVyYCBwYXJhbWV0ZXIgaXMgaGlnaGVyIHRoYW4gdGhlIGluZGV4IG9mIHRoZSBsYXN0IGxpbmUgb2YgdGhlIGZpbGVcbiAgICogdGhlIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbmV3bGluZSBjaGFyYWN0ZXIgdG8gdGhlIGN1cnJlbnQgbGFzdCBsaW5lIGFuZCBhcHBlbmQgYSBuZXdcbiAgICogbGluZSBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlIHdpdGggdGhlIG5ldyB0ZXh0IChlc3NlbnRpYWxseSBhIG5ldyBsYXN0IGxpbmUpLlxuICAgKlxuICAgKiBAcGFyYW0ge1RGaWxlfSBmaWxlIHRoZSBmaWxlIHRvIG1vZGlmeVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBmaWxlTGluZXMgYXJyYXkgb2YgdGhlIGZpbGUncyBjb250ZW50cywgbGluZSBieSBsaW5lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lTnVtYmVyIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGxpbmUgdG8gcmVwbGFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgbmV3IHRleHRcbiAgICovXG4gIHJlcGxhY2VMaW5lSW5GaWxlKFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGZpbGVMaW5lczogc3RyaW5nW10sXG4gICAgbGluZU51bWJlcjogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgKSB7XG4gICAgaWYgKGxpbmVOdW1iZXIgPj0gZmlsZUxpbmVzLmxlbmd0aCkge1xuICAgICAgZmlsZUxpbmVzLnB1c2godGV4dCArICdcXG4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZUxpbmVzW2xpbmVOdW1iZXJdID0gdGV4dDtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGZpbGVMaW5lcy5qb2luKCdcXG4nKTtcbiAgICB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZpZXMgdGhlIGZpbGUgYnkgaW5zZXJ0aW5nIGEgbGluZSB3aXRoIHNwZWNpZmllZCB0ZXh0LlxuICAgKlxuICAgKiBUaGUgZnVuY3Rpb24gd2lsbCBhZGQgYSBuZXdsaW5lIGNoYXJhY3RlciBhdCB0aGUgZW5kIG9mIHRoZSBpbnNlcnRlZCBsaW5lLlxuICAgKlxuICAgKiBAcGFyYW0ge1RGaWxlfSBmaWxlIHRoZSBmaWxlIHRvIG1vZGlmeVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBmaWxlTGluZXMgYXJyYXkgb2YgdGhlIGZpbGUncyBjb250ZW50cywgbGluZSBieSBsaW5lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lTnVtYmVyIHplcm8tYmFzZWQgaW5kZXggb2Ygd2hlcmUgdGhlIGxpbmUgc2hvdWxkIGJlIGluc2VydGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoYXQgdGhlIGxpbmUgc2hhbGwgY29udGFpblxuICAgKi9cbiAgaW5zZXJ0TGluZUluRmlsZShcbiAgICBmaWxlOiBURmlsZSxcbiAgICBmaWxlTGluZXM6IHN0cmluZ1tdLFxuICAgIGxpbmVOdW1iZXI6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICkge1xuICAgIGlmIChsaW5lTnVtYmVyID49IGZpbGVMaW5lcy5sZW5ndGgpIHtcbiAgICAgIGZpbGVMaW5lcy5wdXNoKHRleHQgKyAnXFxuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVMaW5lcy5zcGxpY2UobGluZU51bWJlciwgMCwgdGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBmaWxlTGluZXMuam9pbignXFxuJyk7XG4gICAgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cblxuY2xhc3MgRmlsZW5hbWVIZWFkaW5nU3luY1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBGaWxlbmFtZUhlYWRpbmdTeW5jUGx1Z2luO1xuICBhcHA6IEFwcDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBGaWxlbmFtZUhlYWRpbmdTeW5jUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBsZXQgcmVnZXhJZ25vcmVkRmlsZXNEaXY6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3QgcmVuZGVyUmVnZXhJZ25vcmVkRmlsZXMgPSAoZGl2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgLy8gZW1wdHkgZXhpc3RpbmcgZGl2XG4gICAgICBkaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZ25vcmVSZWdleCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCk7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAodGhpcy5wbHVnaW4uc2V0dGluZ3MuaWdub3JlUmVnZXgpO1xuXG4gICAgICAgIGZpbGVzXG4gICAgICAgICAgLmZpbHRlcigoZmlsZSkgPT4gcmVnLmV4ZWMoZmlsZS5wYXRoKSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIG5ldyBTZXR0aW5nKGRpdikuc2V0RGVzYyhlbC5wYXRoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnRmlsZW5hbWUgSGVhZGluZyBTeW5jJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgICdUaGlzIHBsdWdpbiB3aWxsIG92ZXJ3cml0ZSB0aGUgZmlyc3QgaGVhZGluZyBmb3VuZCBpbiBhIGZpbGUgd2l0aCB0aGUgZmlsZW5hbWUuJyxcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgICdJZiBubyBoZWFkZXIgaXMgZm91bmQsIHdpbGwgaW5zZXJ0IGEgbmV3IG9uZSBhdCB0aGUgZmlyc3QgbGluZSAoYWZ0ZXIgZnJvbnRtYXR0ZXIpLicsXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdDdXN0b20gSWxsZWdhbCBDaGFyYXRlcnMvU3RyaW5ncycpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ1R5cGUgY2hhcmF0ZXJzL3N0cmluZ3Mgc2VwZXJhdGVkIGJ5IGEgY29tbWEuIFRoaXMgaW5wdXQgaXMgc3BhY2Ugc2Vuc2l0aXZlLicsXG4gICAgICApXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignW10sIywuLi4nKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VySWxsZWdhbFN5bWJvbHMuam9pbigpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJJbGxlZ2FsU3ltYm9scyA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdJZ25vcmUgUmVnZXggUnVsZScpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ0lnbm9yZSBydWxlIGluIFJlZ0V4IGZvcm1hdC4gQWxsIGZpbGVzIGxpc3RlZCBiZWxvdyB3aWxsIGdldCBpZ25vcmVkIGJ5IHRoaXMgcGx1Z2luLicsXG4gICAgICApXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignTXlGb2xkZXIvLionKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZ25vcmVSZWdleClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaWdub3JlUmVnZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZ25vcmVSZWdleCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHJlbmRlclJlZ2V4SWdub3JlZEZpbGVzKHJlZ2V4SWdub3JlZEZpbGVzRGl2KTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdVc2UgRmlsZSBPcGVuIEhvb2snKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdXaGV0aGVyIHRoaXMgcGx1Z2luIHNob3VsZCB0cmlnZ2VyIHdoZW4gYSBmaWxlIGlzIG9wZW5lZCwgYW5kIG5vdCBqdXN0IG9uIHNhdmUuIERpc2FibGUgdGhpcyB3aGVuIHlvdSBub3RpY2UgY29uZmxpY3RzIHdpdGggb3RoZXIgcGx1Z2lucyB0aGF0IGFsc28gYWN0IG9uIGZpbGUgb3Blbi4nLFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlRmlsZU9wZW5Ib29rKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZUZpbGVPcGVuSG9vayA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnVXNlIEZpbGUgU2F2ZSBIb29rJylcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICAnV2hldGhlciB0aGlzIHBsdWdpbiBzaG91bGQgdHJpZ2dlciB3aGVuIGEgZmlsZSBpcyBzYXZlZC4gRGlzYWJsZSB0aGlzIHdoZW4geW91IHdhbnQgdG8gdHJpZ2dlciBzeW5jIG9ubHkgbWFudWFsbHkuJyxcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZUZpbGVTYXZlSG9vaylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VGaWxlU2F2ZUhvb2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0lnbm9yZWQgRmlsZXMgQnkgUmVnZXgnIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgdGV4dDogJ0FsbCBmaWxlcyBtYXRjaGluZyB0aGUgYWJvdmUgUmVnRXggd2lsbCBnZXQgbGlzdGVkIGhlcmUnLFxuICAgIH0pO1xuXG4gICAgcmVnZXhJZ25vcmVkRmlsZXNEaXYgPSBjb250YWluZXJFbC5jcmVhdGVEaXYoJ3Rlc3QnKTtcbiAgICByZW5kZXJSZWdleElnbm9yZWRGaWxlcyhyZWdleElnbm9yZWRGaWxlc0Rpdik7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdNYW51YWxseSBJZ25vcmVkIEZpbGVzJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgICdZb3UgY2FuIGlnbm9yZSBmaWxlcyBmcm9tIHRoaXMgcGx1Z2luIGJ5IHVzaW5nIHRoZSBcImlnbm9yZSB0aGlzIGZpbGVcIiBjb21tYW5kJyxcbiAgICB9KTtcblxuICAgIC8vIGdvIG92ZXIgYWxsIGlnbm9yZWQgZmlsZXMgYW5kIGFkZCB0aGVtXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMucGx1Z2luLnNldHRpbmdzLmlnbm9yZWRGaWxlcykge1xuICAgICAgY29uc3QgaWdub3JlZEZpbGVzU2V0dGluZ3NPYmogPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0RGVzYyhrZXkpO1xuXG4gICAgICBpZ25vcmVkRmlsZXNTZXR0aW5nc09iai5hZGRCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnRGVsZXRlJykub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucGx1Z2luLnNldHRpbmdzLmlnbm9yZWRGaWxlc1trZXldO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRGaWxlIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUs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
