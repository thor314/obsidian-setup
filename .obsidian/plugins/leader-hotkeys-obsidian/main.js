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

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

// endregion
// region Fundamental Domain
var PressKind;
(function (PressKind) {
    PressKind[PressKind["ModifierOnly"] = 0] = "ModifierOnly";
    PressKind[PressKind["SpecialKey"] = 1] = "SpecialKey";
    PressKind[PressKind["NormalKey"] = 2] = "NormalKey";
})(PressKind || (PressKind = {}));
var KeyPress = /** @class */ (function () {
    function KeyPress(key, shift, alt, ctrl, meta) {
        var _this = this;
        this.text = function () {
            var metaRepr = _this.meta ? '⌘ + ' : '';
            var altRepr = _this.alt ? 'Alt + ' : '';
            var ctrlRepr = _this.ctrl ? 'Ctrl + ' : '';
            var shiftRepr = _this.shift ? '⇧ + ' : '';
            return metaRepr + ctrlRepr + altRepr + shiftRepr + _this.key;
        };
        this.kbd = function () {
            var result = document.createElement('kbd');
            result.addClass('setting-hotkey');
            result.setText(_this.text());
            result.style.padding = '2px';
            result.style.margin = '5px';
            result.style.border = '1px solid rgba(255,255,255,.25)';
            result.style.borderRadius = '3px';
            return result;
        };
        this.asHash = function () {
            return _this.text();
        };
        this.kind = function () {
            if (_this.key === null ||
                _this.key === undefined ||
                ['Alt', 'Control', 'Shift', 'Meta', 'AltGraph'].includes(_this.key)) {
                return PressKind.ModifierOnly;
            }
            if (['Enter', 'Escape', 'Backspace'].includes(_this.key)) {
                return PressKind.SpecialKey;
            }
            return PressKind.NormalKey;
        };
        this.key = key;
        this.shift = shift;
        this.alt = alt;
        this.ctrl = ctrl;
        this.meta = meta;
    }
    // region static constructors
    KeyPress.ctrl = function (key) {
        return new KeyPress(key, false, false, true, false);
    };
    KeyPress.alt = function (key) {
        return new KeyPress(key, false, true, false, false);
    };
    KeyPress.shift = function (key) {
        return new KeyPress(key, true, false, false, false);
    };
    KeyPress.meta = function (key) {
        return new KeyPress(key, false, false, false, true);
    };
    KeyPress.just = function (key) {
        return new KeyPress(key, false, false, false, false);
    };
    KeyPress.ctrlAlt = function (key) {
        return new KeyPress(key, false, true, true, false);
    };
    KeyPress.fromEvent = function (event) {
        var key = event.key;
        var shift = event.shiftKey;
        var ctrl = event.ctrlKey;
        var alt = event.altKey;
        var meta = event.metaKey;
        return new KeyPress(key, shift, alt, ctrl, meta);
    };
    KeyPress.fromCustom = function (binding) {
        var modifiers = binding.modifiers;
        var key = binding.key;
        var shift = modifiers.contains('Shift');
        var ctrl = modifiers.contains('Ctrl');
        var alt = modifiers.contains('Alt');
        var meta = modifiers.contains('Meta');
        return new KeyPress(key, shift, ctrl, alt, meta);
    };
    KeyPress.of = function (keyPressLike) {
        return new KeyPress(keyPressLike.key, keyPressLike.shift, keyPressLike.alt, keyPressLike.ctrl, keyPressLike.meta);
    };
    return KeyPress;
}());
var KeyMap = /** @class */ (function () {
    function KeyMap(commandID, sequence) {
        var _this = this;
        this.text = function () {
            return (_this.commandID +
                ' = ' +
                _this.sequence.map(function (press) { return press.text(); }).join(' => '));
        };
        this.sequence = sequence;
        this.commandID = commandID;
    }
    KeyMap.of = function (keyMapLike) {
        // FIXME : Theoretically possible to create a keymap without a commandID.
        var sequence = keyMapLike.sequence || [];
        var presses = sequence.map(KeyPress.of);
        var command = keyMapLike.commandID;
        return new KeyMap(command, presses);
    };
    KeyMap.prototype[Symbol.iterator] = function () {
        return this.sequence.values();
    };
    return KeyMap;
}());
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
    }
    TrieNode.prototype.child = function (key) {
        return this.children.get(key);
    };
    TrieNode.prototype.addChild = function (key, child) {
        this.value = null;
        this.children.set(key, child);
    };
    TrieNode.prototype.leaves = function () {
        if (this.isLeaf()) {
            return [this];
        }
        var result = [];
        this.children.forEach(function (child, _) {
            result = result.concat(child.leaves());
        });
        return result;
    };
    TrieNode.prototype.leafValues = function () {
        return this.leaves().map(function (node) { return node.value; });
    };
    TrieNode.prototype.isLeaf = function () {
        return this.children.size === 0;
    };
    TrieNode.prototype.setValue = function (value) {
        this.value = value;
    };
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.from = function (iter) {
        var trie = new Trie();
        trie.addAll(iter);
        return trie;
    };
    Trie.prototype.addAll = function (iter) {
        var e_1, _a;
        try {
            for (var iter_1 = __values(iter), iter_1_1 = iter_1.next(); !iter_1_1.done; iter_1_1 = iter_1.next()) {
                var item = iter_1_1.value;
                this.add(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Trie.prototype.add = function (composite) {
        var e_2, _a;
        // FIXME : Honestly, very sus implementation
        var lastSeenNode = this.root;
        try {
            for (var composite_1 = __values(composite), composite_1_1 = composite_1.next(); !composite_1_1.done; composite_1_1 = composite_1.next()) {
                var component = composite_1_1.value;
                var key = component.asHash();
                var child = lastSeenNode.child(key) || new TrieNode();
                lastSeenNode.addChild(key, child);
                lastSeenNode = child;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (composite_1_1 && !composite_1_1.done && (_a = composite_1.return)) _a.call(composite_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (lastSeenNode.value !== undefined) {
            throw new Error('Duplicate keymap');
        }
        lastSeenNode.setValue(composite);
        return this;
    };
    Trie.prototype.bestMatch = function (sequence) {
        var e_3, _a;
        var lastNode = this.root;
        try {
            for (var sequence_1 = __values(sequence), sequence_1_1 = sequence_1.next(); !sequence_1_1.done; sequence_1_1 = sequence_1.next()) {
                var keyPress = sequence_1_1.value;
                var key = keyPress.asHash();
                var child = lastNode.child(key);
                if (!child) {
                    return null;
                }
                lastNode = child;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (sequence_1_1 && !sequence_1_1.done && (_a = sequence_1.return)) _a.call(sequence_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return lastNode;
    };
    return Trie;
}());
var MatchKind;
(function (MatchKind) {
    MatchKind[MatchKind["NoMatch"] = 0] = "NoMatch";
    MatchKind[MatchKind["PartialMatch"] = 1] = "PartialMatch";
    MatchKind[MatchKind["FullMatch"] = 2] = "FullMatch";
})(MatchKind || (MatchKind = {}));
var MatchState;
(function (MatchState) {
    MatchState[MatchState["EmptyMatch"] = 0] = "EmptyMatch";
    MatchState[MatchState["StartedMatch"] = 1] = "StartedMatch";
    MatchState[MatchState["RetainedMatch"] = 2] = "RetainedMatch";
    MatchState[MatchState["ImprovedMatch"] = 3] = "ImprovedMatch";
    MatchState[MatchState["SuccessMatch"] = 4] = "SuccessMatch";
    MatchState[MatchState["InvalidMatch"] = 5] = "InvalidMatch";
})(MatchState || (MatchState = {}));
var MatchStateKind;
(function (MatchStateKind) {
    MatchStateKind[MatchStateKind["Initial"] = 0] = "Initial";
    MatchStateKind[MatchStateKind["Flow"] = 1] = "Flow";
    MatchStateKind[MatchStateKind["Terminal"] = 2] = "Terminal";
})(MatchStateKind || (MatchStateKind = {}));
var MatchMachine = /** @class */ (function () {
    function MatchMachine(trie) {
        var _this = this;
        this.advance = function (keypress) {
            var macroState = _this.stateKind();
            var wasAlreadySearching = macroState === MatchStateKind.Flow;
            if (macroState === MatchStateKind.Terminal) {
                // Reset and try again.
                _this.currentState = MatchState.EmptyMatch;
                _this.currentSequence = [];
                _this.currentMatches = [];
                return _this.advance(keypress);
            }
            if (keypress.kind() === PressKind.ModifierOnly) {
                _this.currentState = [MatchState.EmptyMatch, MatchState.InvalidMatch, MatchState.SuccessMatch].includes(_this.currentState)
                    ? MatchState.EmptyMatch
                    : MatchState.RetainedMatch;
                return _this.currentState;
            }
            _this.currentSequence.push(keypress);
            var bestMatch = _this.trie.bestMatch(_this.currentSequence);
            var matchKind = interpretMatch(bestMatch);
            _this.currentMatches = bestMatch ? bestMatch.leafValues() : [];
            switch (matchKind) {
                case MatchKind.NoMatch:
                    _this.currentSequence = [];
                    _this.currentState = wasAlreadySearching
                        ? MatchState.InvalidMatch
                        : MatchState.EmptyMatch;
                    break;
                case MatchKind.PartialMatch:
                    _this.currentState = wasAlreadySearching
                        ? MatchState.ImprovedMatch
                        : MatchState.StartedMatch;
                    break;
                case MatchKind.FullMatch:
                    _this.currentState = wasAlreadySearching
                        ? MatchState.SuccessMatch
                        : // Very sus to reach success state at first try.
                            MatchState.SuccessMatch;
                    break;
            }
            return _this.currentState;
        };
        this.allMatches = function () {
            return _this.currentMatches;
        };
        this.fullMatch = function () {
            var numMatches = _this.allMatches().length;
            var isFullMatch = _this.currentState === MatchState.SuccessMatch;
            // Sanity checking.
            if (isFullMatch && numMatches !== 1) {
                writeConsole('State Machine in FullMatch state, but availableHotkeys.length contains more than 1 element. This is definitely a bug.');
                return null;
            }
            if (isFullMatch && numMatches === 1) {
                return _this.currentMatches[0];
            }
            return null;
        };
        this.stateKind = function () {
            if (_this.currentState === MatchState.EmptyMatch) {
                return MatchStateKind.Initial;
            }
            var flowStates = [
                MatchState.StartedMatch,
                MatchState.RetainedMatch,
                MatchState.ImprovedMatch,
            ];
            return flowStates.includes(_this.currentState)
                ? MatchStateKind.Flow
                : MatchStateKind.Terminal;
        };
        this.trie = trie;
        this.currentState = MatchState.EmptyMatch;
        this.currentSequence = [];
        this.currentMatches = [];
    }
    return MatchMachine;
}());
var MatchHandler = /** @class */ (function () {
    function MatchHandler(parent) {
        var _this = this;
        this.handleKeyDown = function (event) {
            var keypress = KeyPress.fromEvent(event);
            console.log(keypress);
            var machineState = _this.machine.advance(keypress);
            writeConsole("An keypress resulted in a " + MatchState[machineState] + " state.");
            if (_this.machine.stateKind() !== MatchStateKind.Initial) {
                event.preventDefault();
                if (machineState === MatchState.SuccessMatch) {
                    var keymap = _this.machine.fullMatch();
                    _this.emit(keymap);
                }
            }
        };
        this.parent = parent;
        this.setKeymap(parent.settings.hotkeys);
    }
    MatchHandler.prototype.emit = function (keymap) {
        if (keymap) {
            this.parent.invokeCommand(keymap.commandID);
            return;
        }
        writeConsole('Fully matched an prefix, but without a corresponding Keymap. This is definitely a bug.');
    };
    MatchHandler.prototype.setKeymap = function (keymaps) {
        this.trie = Trie.from(keymaps || []);
        this.machine = new MatchMachine(this.trie);
    };
    MatchHandler.prototype.findMatchingKeymaps = function (presses) {
        var matches = this.trie.bestMatch(presses);
        return matches ? matches.leafValues() : [];
    };
    return MatchHandler;
}());
// endregion
// region Recording of new keymaps
var RecordingState;
(function (RecordingState) {
    RecordingState[RecordingState["EmptySequence"] = 0] = "EmptySequence";
    RecordingState[RecordingState["FirstKey"] = 1] = "FirstKey";
    RecordingState[RecordingState["AddedKeys"] = 2] = "AddedKeys";
    RecordingState[RecordingState["WaitingInput"] = 3] = "WaitingInput";
    RecordingState[RecordingState["DeletedKey"] = 4] = "DeletedKey";
    RecordingState[RecordingState["PendingAddition"] = 5] = "PendingAddition";
    RecordingState[RecordingState["PendingDeletion"] = 6] = "PendingDeletion";
    RecordingState[RecordingState["FinishedMapping"] = 7] = "FinishedMapping";
})(RecordingState || (RecordingState = {}));
var PendingChoice;
(function (PendingChoice) {
    PendingChoice[PendingChoice["KeepLiteral"] = 0] = "KeepLiteral";
    PendingChoice[PendingChoice["DiscardLiteral"] = 1] = "DiscardLiteral";
    PendingChoice[PendingChoice["DeletePrevious"] = 2] = "DeletePrevious";
    PendingChoice[PendingChoice["Finish"] = 3] = "Finish";
    PendingChoice[PendingChoice["Unknown"] = 4] = "Unknown";
})(PendingChoice || (PendingChoice = {}));
var RecordingMachine = /** @class */ (function () {
    function RecordingMachine() {
        var _this = this;
        this.advance = function (keyPress) {
            var classification = keyPress.kind();
            if (classification === PressKind.ModifierOnly) {
                return _this.currentState;
            }
            if (_this.currentState === RecordingState.FinishedMapping) {
                // Explicitly state that it can be re-started without loss.
                _this.currentState = RecordingState.WaitingInput;
                return _this.advance(keyPress);
            }
            if (_this.currentState === RecordingState.PendingAddition ||
                _this.currentState === RecordingState.PendingDeletion) {
                var previousLiteral = _this.currentSequence.pop();
                var action = _this.interpretAction(keyPress);
                switch (action) {
                    case PendingChoice.KeepLiteral:
                        _this.currentSequence.push(previousLiteral);
                        _this.currentState = RecordingState.AddedKeys;
                        break;
                    case PendingChoice.DiscardLiteral:
                        _this.currentState = RecordingState.WaitingInput;
                        break;
                    case PendingChoice.DeletePrevious:
                        _this.currentSequence.pop();
                        _this.currentState = RecordingState.DeletedKey;
                        break;
                    case PendingChoice.Finish:
                        _this.currentState = RecordingState.FinishedMapping;
                        break;
                    default:
                        _this.currentSequence.push(previousLiteral);
                        break;
                }
            }
            else {
                _this.currentSequence.push(keyPress);
                if (classification === PressKind.SpecialKey) {
                    _this.currentState =
                        keyPress.key === 'Enter'
                            ? RecordingState.PendingAddition
                            : RecordingState.PendingDeletion;
                }
                else {
                    _this.currentState =
                        _this.currentSequence.length === 1
                            ? RecordingState.FirstKey
                            : RecordingState.AddedKeys;
                }
            }
            return _this.currentState;
        };
        this.presses = function () {
            return _this.currentSequence;
        };
        this.documentRepresentation = function () {
            return _this.presses().map(function (press) { return press.kbd(); });
        };
        this.currentState = RecordingState.EmptySequence;
        this.currentSequence = [];
    }
    RecordingMachine.prototype.interpretAction = function (keypress) {
        if (keypress.ctrl && keypress.alt && keypress.key === 'Enter') {
            return PendingChoice.Finish;
        }
        if (keypress.key === 'Enter') {
            return PendingChoice.KeepLiteral;
        }
        else if (keypress.key === 'Backspace' &&
            this.currentState === RecordingState.PendingDeletion) {
            return PendingChoice.DeletePrevious;
        }
        else if (keypress.key === 'Backspace' &&
            this.currentState === RecordingState.PendingAddition) {
            return PendingChoice.DiscardLiteral;
        }
        return PendingChoice.Unknown;
    };
    return RecordingMachine;
}());
var RecordingModal = /** @class */ (function (_super) {
    __extends(RecordingModal, _super);
    function RecordingModal(parent, commandId) {
        var _this = _super.call(this, parent.app) || this;
        _this.onOpen = function () {
            _this.renderContent(_this.registerMachine.documentRepresentation());
            document.addEventListener('keydown', _this.handleKeyDown);
        };
        _this.onClose = function () {
            document.removeEventListener('keydown', _this.handleKeyDown);
            _this.parent.display();
        };
        _this.handleKeyDown = function (event) {
            event.preventDefault();
            var keyPress = KeyPress.fromEvent(event);
            var registerState = _this.registerMachine.advance(keyPress);
            _this.currentSequence = _this.registerMachine.presses();
            writeConsole("An keypress resulted in " + RecordingState[registerState] + " state.");
            switch (registerState) {
                case RecordingState.EmptySequence:
                case RecordingState.WaitingInput:
                case RecordingState.FirstKey:
                case RecordingState.DeletedKey:
                case RecordingState.AddedKeys:
                    _this.renderNormally();
                    return;
                case RecordingState.PendingDeletion:
                case RecordingState.PendingAddition:
                    _this.renderPending(registerState);
                    return;
                case RecordingState.FinishedMapping:
                    _this.saveSequence();
                    return;
            }
        };
        _this.renderContent = function (inKeySequence, inAdditionalContent) {
            var _a;
            var elements = inKeySequence || [];
            var additionalContent = inAdditionalContent || [];
            _this.contentEl.empty();
            var command = document.createElement('kbd');
            command.setText(_this.commandId);
            var header = document.createElement('h3');
            header.setText('Adding keymap for command ');
            header.appendChild(command);
            var introText = document.createElement('div');
            introText.addClass('setting-hotkey');
            introText.style.overflow = 'auto';
            if (elements.length === 0) {
                var prompt_1 = document.createElement('span');
                prompt_1.setText('Waiting for keyboard input.');
                introText.appendChild(prompt_1);
            }
            else {
                introText.append.apply(introText, __spread(elements));
            }
            _this.contentEl.appendChild(header);
            _this.contentEl.appendChild(introText);
            if (additionalContent) {
                (_a = _this.contentEl).append.apply(_a, __spread(additionalContent));
            }
            new obsidian.Setting(_this.contentEl).addButton(function (button) {
                button.setButtonText('Save');
                button.onClick(function () {
                    _this.saveSequence();
                });
            });
        };
        _this.saveSequence = function () {
            var conflicts = _this.parent.conflicts(_this.currentSequence);
            if (conflicts.length >= 1) {
                // todo handle this properly
                createNotice('There are conflicts with your keyPresses!');
            }
            else {
                var newKeyMap = new KeyMap(_this.commandId, _this.currentSequence);
                _this.parent.addKeymap(newKeyMap);
                var sequenceRepr = newKeyMap.sequence
                    .map(function (key) { return key.text(); })
                    .join(' => ');
                createNotice("Command  " + _this.commandId + "\n           can now be invoked by " + sequenceRepr);
                _this.close();
            }
        };
        _this.renderNormally = function () {
            _this.renderContent(_this.registerMachine.documentRepresentation());
        };
        _this.renderPending = function (mappingState) {
            // Inplace mutation :(
            var elements = _this.registerMachine.documentRepresentation();
            var lastElement = elements[elements.length - 1];
            lastElement.style.opacity = '0.5';
            var enter = KeyPress.just('Enter').kbd();
            enter.style.borderColor = 'green';
            var backspace = KeyPress.just('Backspace').kbd();
            backspace.style.borderColor = 'red';
            var ctrlAltEnter = KeyPress.ctrlAlt('Enter').kbd();
            var pressLiteral = lastElement.cloneNode(true);
            pressLiteral.style.opacity = '1';
            var discardOrRemoves = mappingState === RecordingState.PendingAddition
                ? ' will discard this input.'
                : ' will delete the previous input.';
            var confirmText = document.createElement('p');
            confirmText.append('Did you mean literal ', pressLiteral, '?', document.createElement('br'), enter, ' will add it to the sequence.', document.createElement('br'), backspace, discardOrRemoves, document.createElement('br'), ctrlAltEnter, ' will discard pending changes and complete.');
            _this.renderContent(elements, [confirmText]);
        };
        _this.parent = parent;
        _this.commandId = commandId;
        _this.registerMachine = new RecordingMachine();
        _this.currentSequence = [];
        return _this;
    }
    return RecordingModal;
}(obsidian.Modal));
var CommandModal = /** @class */ (function (_super) {
    __extends(CommandModal, _super);
    function CommandModal(parent) {
        var _this = _super.call(this, parent.app) || this;
        _this.parent = parent;
        return _this;
    }
    CommandModal.prototype.onOpen = function () {
        var _this = this;
        var title = document.createElement('h3');
        title.setText('Leader Hotkeys: pick a command to create a keymap.');
        this.contentEl.appendChild(title);
        var setting = new obsidian.Setting(this.contentEl);
        setting.addDropdown(function (dropdown) {
            var e_4, _a;
            dropdown.selectEl.addClass('leader-hotkeys-command');
            try {
                for (var _b = __values(_this.parent.obsidianCommands()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var command = _c.value;
                    dropdown.addOption(command.id, command.name);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            var placeHolder = new Option('Select a Command', 'placeholder', true);
            placeHolder.setAttribute('disabled', 'true');
            placeHolder.setAttribute('selected', 'true');
            placeHolder.setAttribute('hidden', 'true');
            dropdown.selectEl.append(placeHolder);
            dropdown.setValue('placeholder');
            dropdown.onChange(function (selectedId) {
                _this.commandId = selectedId;
            });
            dropdown.selectEl.focus();
        });
        setting.addButton(function (button) {
            button.setButtonText('OK');
            button.onClick(function () {
                if (_this.commandId === null ||
                    _this.commandId === undefined ||
                    _this.commandId === '') {
                    createNotice('Select a command to register');
                    return;
                }
                var registerer = new RecordingModal(_this.parent, _this.commandId);
                registerer.open();
                _this.close();
            });
        });
    };
    return CommandModal;
}(obsidian.Modal));
// endregion
var LeaderSettingsTab = /** @class */ (function (_super) {
    __extends(LeaderSettingsTab, _super);
    function LeaderSettingsTab(plugin) {
        var _this = _super.call(this, plugin.app, plugin) || this;
        _this.plugin = plugin;
        _this.app = plugin.app;
        return _this;
    }
    LeaderSettingsTab.prototype.display = function () {
        var _this = this;
        this.refreshCommands();
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Leader Hotkeys Plugin - Settings' });
        containerEl.createEl('h3', { text: 'Existing Hotkeys' });
        for (var i = 0; i < this.currentKeymaps().length; i++) {
            this.displayExisting(i);
        }
        new obsidian.Setting(containerEl).addButton(function (button) {
            button.setButtonText('New Keymap').onClick(function () {
                new CommandModal(_this).open();
            });
        });
    };
    LeaderSettingsTab.prototype.refreshCommands = function () {
        this.commands = listCommands(this.app);
    };
    LeaderSettingsTab.prototype.conflicts = function (keyPresses) {
        // todo validate properly
        return this.plugin.findMatchingKeymaps(keyPresses) || [];
    };
    LeaderSettingsTab.prototype.obsidianCommands = function () {
        return this.commands;
    };
    LeaderSettingsTab.prototype.addKeymap = function (keymap) {
        writeConsole("Adding keymap: " + keymap.text());
        var newHotkeys = __spread(this.currentKeymaps()).concat(keymap);
        this.saveKeymap(newHotkeys);
    };
    LeaderSettingsTab.prototype.removeKeymap = function (positionId) {
        var currentHotkeys = this.currentKeymaps();
        var toRemove = currentHotkeys[positionId];
        writeConsole("Removing keymap: " + toRemove.text());
        var newKeymap = [];
        for (var i = 0; i < currentHotkeys.length; i++) {
            if (i !== positionId) {
                newKeymap.push(currentHotkeys[i]);
            }
        }
        this.saveKeymap(newKeymap);
    };
    LeaderSettingsTab.prototype.updateKeymap = function (positionId, keyMap) {
        writeConsole("Updating keymap at position " + positionId + ": " + keyMap.text());
        var keyMaps = __spread(this.currentKeymaps());
        keyMaps[positionId] = keyMap;
        this.saveKeymap(keyMaps);
    };
    LeaderSettingsTab.prototype.saveKeymap = function (keymaps) {
        this.plugin.persistKeymaps(keymaps);
    };
    LeaderSettingsTab.prototype.displayExisting = function (positionId) {
        var _this = this;
        var containerEl = this.containerEl;
        var thisKeymap = this.currentKeymaps()[positionId];
        var setting = new obsidian.Setting(containerEl);
        setting.addDropdown(function (dropdown) {
            var e_5, _a;
            try {
                for (var _b = __values(_this.commands), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var command = _c.value;
                    dropdown.addOption(command.id, command.name);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            dropdown.onChange(function (newCommand) {
                var newKeyMap = KeyMap.of(thisKeymap);
                newKeyMap.commandID = newCommand;
                _this.updateKeymap(positionId, newKeyMap);
            });
            dropdown.setValue(thisKeymap.commandID);
            dropdown.selectEl.addClass('leader-hotkeys-command');
        });
        setting.addExtraButton(function (button) {
            button
                .setIcon('cross')
                .setTooltip('Delete shortcut')
                .extraSettingsEl.addClass('leader-hotkeys-delete');
            button.onClick(function () {
                _this.removeKeymap(positionId);
                _this.display();
            });
        });
        setting.infoEl.remove();
        var settingControl = setting.settingEl.children[0];
        var keySetter = document.createElement('div');
        keySetter.addClass('setting-hotkey');
        var kbds = thisKeymap.sequence.map(function (press) { return press.kbd(); });
        keySetter.append.apply(keySetter, __spread(kbds));
        keySetter.addEventListener('click', function (_) {
            return new RecordingModal(_this, thisKeymap.commandID).open();
        });
        settingControl.insertBefore(keySetter, settingControl.children[0]);
        var appendText = document.createElement('span');
        appendText.addClass('leader-hotkeys-setting-append-text');
        appendText.setText('to');
        settingControl.insertBefore(appendText, settingControl.children[1]);
    };
    LeaderSettingsTab.prototype.currentSettings = function () {
        return this.plugin.settings;
    };
    LeaderSettingsTab.prototype.currentKeymaps = function () {
        return this.currentSettings().hotkeys;
    };
    return LeaderSettingsTab;
}(obsidian.PluginSettingTab));
var LeaderHotkeys = /** @class */ (function (_super) {
    __extends(LeaderHotkeys, _super);
    function LeaderHotkeys() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registerEventsAndCallbacks = function () { return __awaiter(_this, void 0, void 0, function () {
            var workspaceContainer, openModalCommand;
            var _this = this;
            return __generator(this, function (_a) {
                writeConsole('Registering necessary event callbacks');
                workspaceContainer = this.app.workspace.containerEl;
                this.registerDomEvent(workspaceContainer, 'keydown', this.matchHandler.handleKeyDown);
                writeConsole('Registered workspace "keydown" event callbacks.');
                openModalCommand = {
                    id: 'register-modal',
                    name: 'Open Register Modal',
                    callback: function () {
                        _this.settingsTab.refreshCommands();
                        new CommandModal(_this.settingsTab).open();
                    },
                };
                this.addCommand(openModalCommand);
                writeConsole('Registered open modal command');
                return [2 /*return*/];
            });
        }); };
        _this.loadSavedSettings = function () { return __awaiter(_this, void 0, void 0, function () {
            var savedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        writeConsole('Loading previously saved settings.');
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        savedSettings = (_a.sent()) || {};
                        try {
                            savedSettings.hotkeys = (savedSettings.hotkeys || []).map(KeyMap.of);
                            this.settings = savedSettings;
                            writeConsole('Loaded previous settings.');
                        }
                        catch (err) {
                            writeConsole('A failure occured while parsing the saved settings.');
                            createNotice('A failure occured while loading the saved settings. Fallbacking to defaults.');
                            // todo : Retrocompatibility?
                            //  Harder than i thought since LeaderKey isn't saved here.
                            //  Would need to keep the old command ,
                            //  lookup the binding and convert it to the new one.
                            this.settings = defaultSettings;
                        }
                        this.matchHandler = new MatchHandler(this);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    LeaderHotkeys.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        writeConsole('Started Loading.');
                        return [4 /*yield*/, this.loadSavedSettings()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.registerEventsAndCallbacks()];
                    case 2:
                        _a.sent();
                        this.settingsTab = new LeaderSettingsTab(this);
                        this.addSettingTab(this.settingsTab);
                        writeConsole('Registered Setting Tab.');
                        writeConsole('Finished Loading.');
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaderHotkeys.prototype.onunload = function () {
        writeConsole('Unloading plugin.');
    };
    LeaderHotkeys.prototype.invokeCommand = function (commandID) {
        if (commandID) {
            // todo remove any typing
            var app = this.app;
            app.commands.executeCommandById(commandID);
        }
    };
    LeaderHotkeys.prototype.findMatchingKeymaps = function (presses) {
        return this.matchHandler.findMatchingKeymaps(presses);
    };
    LeaderHotkeys.prototype.persistKeymaps = function (newKeymaps) {
        var _this = this;
        this.settings.hotkeys = newKeymaps;
        this.saveData(this.settings)
            .then(function () {
            _this.matchHandler.setKeymap(newKeymaps);
        })
            .catch(function () {
            createNotice('Error while Saving Keymaps.');
        });
    };
    return LeaderHotkeys;
}(obsidian.Plugin));
// region consts and utils
var listCommands = function (app) {
    // todo remove any type
    var anyApp = app;
    var commands = anyApp.commands.commands;
    return Object.values(commands);
};
var interpretMatch = function (bestMatch) {
    if (!bestMatch) {
        return MatchKind.NoMatch;
    }
    if (bestMatch.isLeaf()) {
        return MatchKind.FullMatch;
    }
    return MatchKind.PartialMatch;
};
var defaultHotkeys = [
    new KeyMap('editor:focus-left', [KeyPress.ctrl('b'), KeyPress.just('h')]),
    new KeyMap('editor:focus-right', [KeyPress.ctrl('b'), KeyPress.just('l')]),
    new KeyMap('editor:focus-top', [KeyPress.ctrl('b'), KeyPress.just('k')]),
    new KeyMap('editor:focus-bottom', [KeyPress.ctrl('b'), KeyPress.just('j')]),
    new KeyMap('command-palette:open', [
        KeyPress.ctrl('q'),
        KeyPress.just('1'),
        KeyPress.just('2'),
        KeyPress.just('2'),
    ]),
    new KeyMap('command-palette:open', [
        KeyPress.ctrl(' '),
        KeyPress.just('p'),
        KeyPress.just('a'),
        KeyPress.just('l'),
        KeyPress.just('l'),
        KeyPress.just('e'),
        KeyPress.just('t'),
        KeyPress.just('t'),
        KeyPress.just('e'),
    ]),
];
var defaultSettings = {
    hotkeys: defaultHotkeys,
};
var writeConsole = function (message) {
    console.debug(" Leader Hotkeys: " + message);
};
var createNotice = function (message) {
    new obsidian.Notice('Leader Hotkeys: ' + message);
};
// endregion

module.exports = LeaderHotkeys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7XG4gIEFwcCxcbiAgTW9kYWwsXG4gIE5vdGljZSxcbiAgUGx1Z2luLFxuICBQbHVnaW5TZXR0aW5nVGFiLFxuICBTZXR0aW5nLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIHJlZ2lvbiAgVHlwZSBTaGltc1xuaW50ZXJmYWNlIE9ic2lkaWFuQ29tbWFuZCB7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBpY29uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbW1hbmRNYXAge1xuICBba2V5OiBzdHJpbmddOiBPYnNpZGlhbkNvbW1hbmQ7XG59XG5cbmludGVyZmFjZSBDdXN0b21Db21tYW5kIHtcbiAga2V5OiBzdHJpbmc7XG4gIG1vZGlmaWVyczogc3RyaW5nW107XG59XG5cbnR5cGUgT3B0aW9uYWw8VD4gPSBUIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuaW50ZXJmYWNlIFN0YXRlTWFjaGluZTxLLCBUPiB7XG4gIC8vIFdvdWxkIGxvdmUgdG8gcmVzdHJpY3QgVCB0byBhIGZpbml0ZSBzZXQgKCBUIGV4dGVuZHMgRW51bSApLFxuICAvLyBidXQgaXQncyBub3QgcG9zc2libGUgdG8gZG8gdGhhdCBpbiBUeXBlU2NyaXB0IGN1cnJlbnRseVxuICBhZHZhbmNlOiAoZXZlbnQ6IEspID0+IFQ7XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gRnVuZGFtZW50YWwgRG9tYWluXG5lbnVtIFByZXNzS2luZCB7XG4gIE1vZGlmaWVyT25seSxcbiAgU3BlY2lhbEtleSxcbiAgTm9ybWFsS2V5LFxufVxuXG5pbnRlcmZhY2UgSGFzaGFibGUge1xuICBhc0hhc2goKTogc3RyaW5nO1xufVxuXG5jbGFzcyBLZXlQcmVzcyBpbXBsZW1lbnRzIEhhc2hhYmxlIHtcbiAgLy8gcmVnaW9uIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbiAgcHVibGljIHN0YXRpYyBjdHJsKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2hpZnQoa2V5OiBzdHJpbmcpOiBLZXlQcmVzcyB7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtZXRhKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMganVzdChrZXk6IHN0cmluZyk6IEtleVByZXNzIHtcbiAgICByZXR1cm4gbmV3IEtleVByZXNzKGtleSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjdHJsQWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgY29uc3QgY3RybCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgY29uc3QgYWx0ID0gZXZlbnQuYWx0S2V5O1xuICAgIGNvbnN0IG1ldGEgPSBldmVudC5tZXRhS2V5O1xuXG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBhbHQsIGN0cmwsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tQ3VzdG9tKGJpbmRpbmc6IEN1c3RvbUNvbW1hbmQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG5cbiAgICBjb25zdCBrZXkgPSBiaW5kaW5nLmtleTtcbiAgICBjb25zdCBzaGlmdCA9IG1vZGlmaWVycy5jb250YWlucygnU2hpZnQnKTtcbiAgICBjb25zdCBjdHJsID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdDdHJsJyk7XG4gICAgY29uc3QgYWx0ID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdBbHQnKTtcbiAgICBjb25zdCBtZXRhID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdNZXRhJyk7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBjdHJsLCBhbHQsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvZihrZXlQcmVzc0xpa2U6IEtleVByZXNzKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3MoXG4gICAgICBrZXlQcmVzc0xpa2Uua2V5LFxuICAgICAga2V5UHJlc3NMaWtlLnNoaWZ0LFxuICAgICAga2V5UHJlc3NMaWtlLmFsdCxcbiAgICAgIGtleVByZXNzTGlrZS5jdHJsLFxuICAgICAga2V5UHJlc3NMaWtlLm1ldGEsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIHB1YmxpYyByZWFkb25seSBrZXk6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGFsdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IGN0cmw6IGJvb2xlYW47XG4gIHB1YmxpYyByZWFkb25seSBzaGlmdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHNoaWZ0OiBib29sZWFuLFxuICAgIGFsdDogYm9vbGVhbixcbiAgICBjdHJsOiBib29sZWFuLFxuICAgIG1ldGE6IGJvb2xlYW4sXG4gICkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgdGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IG1ldGFSZXByID0gdGhpcy5tZXRhID8gJ+KMmCArICcgOiAnJztcbiAgICBjb25zdCBhbHRSZXByID0gdGhpcy5hbHQgPyAnQWx0ICsgJyA6ICcnO1xuICAgIGNvbnN0IGN0cmxSZXByID0gdGhpcy5jdHJsID8gJ0N0cmwgKyAnIDogJyc7XG4gICAgY29uc3Qgc2hpZnRSZXByID0gdGhpcy5zaGlmdCA/ICfih6cgKyAnIDogJyc7XG5cbiAgICByZXR1cm4gbWV0YVJlcHIgKyBjdHJsUmVwciArIGFsdFJlcHIgKyBzaGlmdFJlcHIgKyB0aGlzLmtleTtcbiAgfTtcbiAgcHVibGljIHJlYWRvbmx5IGtiZCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gICAgcmVzdWx0LmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuICAgIHJlc3VsdC5zZXRUZXh0KHRoaXMudGV4dCgpKTtcbiAgICByZXN1bHQuc3R5bGUucGFkZGluZyA9ICcycHgnO1xuICAgIHJlc3VsdC5zdHlsZS5tYXJnaW4gPSAnNXB4JztcbiAgICByZXN1bHQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSknO1xuICAgIHJlc3VsdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwdWJsaWMgcmVhZG9ubHkgYXNIYXNoID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBraW5kID0gKCk6IFByZXNzS2luZCA9PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5rZXkgPT09IG51bGwgfHxcbiAgICAgIHRoaXMua2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIFsnQWx0JywgJ0NvbnRyb2wnLCAnU2hpZnQnLCAnTWV0YScsICdBbHRHcmFwaCddLmluY2x1ZGVzKHRoaXMua2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuIFByZXNzS2luZC5Nb2RpZmllck9ubHk7XG4gICAgfVxuICAgIGlmIChbJ0VudGVyJywgJ0VzY2FwZScsICdCYWNrc3BhY2UnXS5pbmNsdWRlcyh0aGlzLmtleSkpIHtcbiAgICAgIHJldHVybiBQcmVzc0tpbmQuU3BlY2lhbEtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJlc3NLaW5kLk5vcm1hbEtleTtcbiAgfTtcbn1cblxuY2xhc3MgS2V5TWFwIGltcGxlbWVudHMgSXRlcmFibGU8S2V5UHJlc3M+IHtcbiAgcHVibGljIHN0YXRpYyBvZihrZXlNYXBMaWtlOiBLZXlNYXApOiBLZXlNYXAge1xuICAgIC8vIEZJWE1FIDogVGhlb3JldGljYWxseSBwb3NzaWJsZSB0byBjcmVhdGUgYSBrZXltYXAgd2l0aG91dCBhIGNvbW1hbmRJRC5cblxuICAgIGNvbnN0IHNlcXVlbmNlID0ga2V5TWFwTGlrZS5zZXF1ZW5jZSB8fCBbXTtcblxuICAgIGNvbnN0IHByZXNzZXMgPSBzZXF1ZW5jZS5tYXAoS2V5UHJlc3Mub2YpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBrZXlNYXBMaWtlLmNvbW1hbmRJRDtcbiAgICByZXR1cm4gbmV3IEtleU1hcChjb21tYW5kLCBwcmVzc2VzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHVibGljIGNvbW1hbmRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1hbmRJRDogc3RyaW5nLCBzZXF1ZW5jZTogS2V5UHJlc3NbXSkge1xuICAgIHRoaXMuc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLmNvbW1hbmRJRCA9IGNvbW1hbmRJRDtcbiAgfVxuXG4gIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxLZXlQcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLnZhbHVlcygpO1xuICB9XG5cbiAgcHVibGljIHRleHQgPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb21tYW5kSUQgK1xuICAgICAgJyA9ICcgK1xuICAgICAgdGhpcy5zZXF1ZW5jZS5tYXAoKHByZXNzKSA9PiBwcmVzcy50ZXh0KCkpLmpvaW4oJyA9PiAnKVxuICAgICk7XG4gIH07XG59XG5cbmludGVyZmFjZSBLZXlCaW5kaW5nIHtcbiAgaG90a2V5czogS2V5TWFwW107XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gTWF0Y2hpbmcgb2YgZXhpc3Rpbmcga2V5bWFwc1xuaW50ZXJmYWNlIEhhc2hJdGVyIGV4dGVuZHMgSXRlcmFibGU8SGFzaGFibGU+IHt9XG5cbmNsYXNzIFRyaWVOb2RlPFQ+IHtcbiAgcHVibGljIGNoaWxkcmVuID0gbmV3IE1hcDxzdHJpbmcsIFRyaWVOb2RlPFQ+PigpO1xuXG4gIHB1YmxpYyB2YWx1ZTogT3B0aW9uYWw8VD47XG5cbiAgcHVibGljIGNoaWxkKGtleTogc3RyaW5nKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGlsZChrZXk6IHN0cmluZywgY2hpbGQ6IFRyaWVOb2RlPFQ+KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoa2V5LCBjaGlsZCk7XG4gIH1cblxuICBwdWJsaWMgbGVhdmVzKCk6IFRyaWVOb2RlPFQ+W10ge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gW3RoaXNdO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IFRyaWVOb2RlPFQ+W10gPSBbXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIF8pID0+IHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGQubGVhdmVzKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBsZWFmVmFsdWVzKCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMubGVhdmVzKCkubWFwKChub2RlKSA9PiBub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xlYWYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5jbGFzcyBUcmllPFQgZXh0ZW5kcyBIYXNoSXRlcj4ge1xuICBwdWJsaWMgc3RhdGljIGZyb208SyBleHRlbmRzIEhhc2hJdGVyPihpdGVyOiBLW10pOiBUcmllPEs+IHtcbiAgICBjb25zdCB0cmllID0gbmV3IFRyaWU8Sz4oKTtcbiAgICB0cmllLmFkZEFsbChpdGVyKTtcbiAgICByZXR1cm4gdHJpZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcm9vdDogVHJpZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290ID0gbmV3IFRyaWVOb2RlKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQWxsKGl0ZXI6IFRbXSk6IFRyaWU8VD4ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVyKSB7XG4gICAgICB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYWRkKGNvbXBvc2l0ZTogVCk6IFRyaWU8VD4ge1xuICAgIC8vIEZJWE1FIDogSG9uZXN0bHksIHZlcnkgc3VzIGltcGxlbWVudGF0aW9uXG4gICAgbGV0IGxhc3RTZWVuTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb3NpdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5hc0hhc2goKTtcbiAgICAgIGNvbnN0IGNoaWxkID0gbGFzdFNlZW5Ob2RlLmNoaWxkKGtleSkgfHwgbmV3IFRyaWVOb2RlKCk7XG4gICAgICBsYXN0U2Vlbk5vZGUuYWRkQ2hpbGQoa2V5LCBjaGlsZCk7XG4gICAgICBsYXN0U2Vlbk5vZGUgPSBjaGlsZDtcbiAgICB9XG4gICAgaWYgKGxhc3RTZWVuTm9kZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBrZXltYXAnKTtcbiAgICB9XG4gICAgbGFzdFNlZW5Ob2RlLnNldFZhbHVlKGNvbXBvc2l0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYmVzdE1hdGNoKHNlcXVlbmNlOiBIYXNoYWJsZVtdKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICBsZXQgbGFzdE5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChjb25zdCBrZXlQcmVzcyBvZiBzZXF1ZW5jZSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5UHJlc3MuYXNIYXNoKCk7XG4gICAgICBjb25zdCBjaGlsZCA9IGxhc3ROb2RlLmNoaWxkKGtleSk7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGFzdE5vZGUgPSBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE5vZGU7XG4gIH1cbn1cblxuZW51bSBNYXRjaEtpbmQge1xuICBOb01hdGNoLFxuICBQYXJ0aWFsTWF0Y2gsXG4gIEZ1bGxNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlIHtcbiAgRW1wdHlNYXRjaCxcbiAgU3RhcnRlZE1hdGNoLFxuICBSZXRhaW5lZE1hdGNoLFxuICBJbXByb3ZlZE1hdGNoLFxuICBTdWNjZXNzTWF0Y2gsXG4gIEludmFsaWRNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlS2luZCB7XG4gIEluaXRpYWwsXG4gIEZsb3csXG4gIFRlcm1pbmFsLFxufVxuXG5jbGFzcyBNYXRjaE1hY2hpbmUgaW1wbGVtZW50cyBTdGF0ZU1hY2hpbmU8S2V5UHJlc3MsIE1hdGNoU3RhdGU+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0cmllOiBUcmllPEtleU1hcD47XG4gIHByaXZhdGUgY3VycmVudFN0YXRlOiBNYXRjaFN0YXRlO1xuICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHJpdmF0ZSBjdXJyZW50TWF0Y2hlczogS2V5TWFwW107XG5cbiAgY29uc3RydWN0b3IodHJpZTogVHJpZTxLZXlNYXA+KSB7XG4gICAgdGhpcy50cmllID0gdHJpZTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IE1hdGNoU3RhdGUuRW1wdHlNYXRjaDtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgIHRoaXMuY3VycmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBhZHZhbmNlID0gKGtleXByZXNzOiBLZXlQcmVzcyk6IE1hdGNoU3RhdGUgPT4ge1xuXG5cblxuICAgIGNvbnN0IG1hY3JvU3RhdGUgPSB0aGlzLnN0YXRlS2luZCgpO1xuICAgIGNvbnN0IHdhc0FscmVhZHlTZWFyY2hpbmcgPSBtYWNyb1N0YXRlID09PSBNYXRjaFN0YXRlS2luZC5GbG93O1xuICAgIGlmIChtYWNyb1N0YXRlID09PSBNYXRjaFN0YXRlS2luZC5UZXJtaW5hbCkge1xuICAgICAgLy8gUmVzZXQgYW5kIHRyeSBhZ2Fpbi5cbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoO1xuICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudE1hdGNoZXMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLmFkdmFuY2Uoa2V5cHJlc3MpO1xuICAgIH1cbiAgICBpZiAoa2V5cHJlc3Mua2luZCgpID09PSBQcmVzc0tpbmQuTW9kaWZpZXJPbmx5KSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFtNYXRjaFN0YXRlLkVtcHR5TWF0Y2ggLCBNYXRjaFN0YXRlLkludmFsaWRNYXRjaCAsIE1hdGNoU3RhdGUuU3VjY2Vzc01hdGNoXS5pbmNsdWRlcyggdGhpcy5jdXJyZW50U3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0Y2hTdGF0ZS5SZXRhaW5lZE1hdGNoO1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucHVzaChrZXlwcmVzcyk7XG4gICAgY29uc3QgYmVzdE1hdGNoID0gdGhpcy50cmllLmJlc3RNYXRjaCh0aGlzLmN1cnJlbnRTZXF1ZW5jZSk7XG4gICAgY29uc3QgbWF0Y2hLaW5kID0gaW50ZXJwcmV0TWF0Y2goYmVzdE1hdGNoKTtcbiAgICB0aGlzLmN1cnJlbnRNYXRjaGVzID0gYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxlYWZWYWx1ZXMoKSA6IFtdO1xuXG4gICAgc3dpdGNoIChtYXRjaEtpbmQpIHtcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLk5vTWF0Y2g6XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW11cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLkludmFsaWRNYXRjaFxuICAgICAgICAgIDogTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLlBhcnRpYWxNYXRjaDpcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLkltcHJvdmVkTWF0Y2hcbiAgICAgICAgICA6IE1hdGNoU3RhdGUuU3RhcnRlZE1hdGNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLkZ1bGxNYXRjaDpcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaFxuICAgICAgICAgIDogLy8gVmVyeSBzdXMgdG8gcmVhY2ggc3VjY2VzcyBzdGF0ZSBhdCBmaXJzdCB0cnkuXG4gICAgICAgICAgICBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gIH07XG5cbiAgcHVibGljIGFsbE1hdGNoZXMgPSAoKTogcmVhZG9ubHkgS2V5TWFwW10gPT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXRjaGVzO1xuICB9O1xuXG4gIHB1YmxpYyBmdWxsTWF0Y2ggPSAoKTogT3B0aW9uYWw8S2V5TWFwPiA9PiB7XG4gICAgY29uc3QgbnVtTWF0Y2hlcyA9IHRoaXMuYWxsTWF0Y2hlcygpLmxlbmd0aDtcbiAgICBjb25zdCBpc0Z1bGxNYXRjaCA9IHRoaXMuY3VycmVudFN0YXRlID09PSBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaDtcblxuICAgIC8vIFNhbml0eSBjaGVja2luZy5cbiAgICBpZiAoaXNGdWxsTWF0Y2ggJiYgbnVtTWF0Y2hlcyAhPT0gMSkge1xuICAgICAgd3JpdGVDb25zb2xlKFxuICAgICAgICAnU3RhdGUgTWFjaGluZSBpbiBGdWxsTWF0Y2ggc3RhdGUsIGJ1dCBhdmFpbGFibGVIb3RrZXlzLmxlbmd0aCBjb250YWlucyBtb3JlIHRoYW4gMSBlbGVtZW50LiBUaGlzIGlzIGRlZmluaXRlbHkgYSBidWcuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaXNGdWxsTWF0Y2ggJiYgbnVtTWF0Y2hlcyA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hdGNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHB1YmxpYyBzdGF0ZUtpbmQgPSAoKTogTWF0Y2hTdGF0ZUtpbmQgPT4ge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoKSB7XG4gICAgICByZXR1cm4gTWF0Y2hTdGF0ZUtpbmQuSW5pdGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCBmbG93U3RhdGVzID0gW1xuICAgICAgTWF0Y2hTdGF0ZS5TdGFydGVkTWF0Y2gsXG4gICAgICBNYXRjaFN0YXRlLlJldGFpbmVkTWF0Y2gsXG4gICAgICBNYXRjaFN0YXRlLkltcHJvdmVkTWF0Y2gsXG4gICAgXTtcblxuICAgIHJldHVybiBmbG93U3RhdGVzLmluY2x1ZGVzKHRoaXMuY3VycmVudFN0YXRlKVxuICAgICAgPyBNYXRjaFN0YXRlS2luZC5GbG93XG4gICAgICA6IE1hdGNoU3RhdGVLaW5kLlRlcm1pbmFsO1xuICB9O1xufVxuXG5jbGFzcyBNYXRjaEhhbmRsZXIge1xuICBwcml2YXRlIHRyaWU6IFRyaWU8S2V5TWFwPjtcbiAgcHJpdmF0ZSBtYWNoaW5lOiBNYXRjaE1hY2hpbmU7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBMZWFkZXJIb3RrZXlzO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IExlYWRlckhvdGtleXMpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNldEtleW1hcChwYXJlbnQuc2V0dGluZ3MuaG90a2V5cyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGtleXByZXNzID0gS2V5UHJlc3MuZnJvbUV2ZW50KGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZygga2V5cHJlc3MgKTtcbiAgICBjb25zdCBtYWNoaW5lU3RhdGUgPSB0aGlzLm1hY2hpbmUuYWR2YW5jZShrZXlwcmVzcyk7XG4gICAgd3JpdGVDb25zb2xlKFxuICAgICAgYEFuIGtleXByZXNzIHJlc3VsdGVkIGluIGEgJHtNYXRjaFN0YXRlW21hY2hpbmVTdGF0ZV19IHN0YXRlLmAsXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm1hY2hpbmUuc3RhdGVLaW5kKCkgIT09IE1hdGNoU3RhdGVLaW5kLkluaXRpYWwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChtYWNoaW5lU3RhdGUgPT09IE1hdGNoU3RhdGUuU3VjY2Vzc01hdGNoKSB7XG4gICAgICAgIGNvbnN0IGtleW1hcCA9IHRoaXMubWFjaGluZS5mdWxsTWF0Y2goKTtcbiAgICAgICAgdGhpcy5lbWl0KGtleW1hcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBlbWl0KGtleW1hcDogT3B0aW9uYWw8S2V5TWFwPik6IHZvaWQge1xuICAgIGlmIChrZXltYXApIHtcbiAgICAgIHRoaXMucGFyZW50Lmludm9rZUNvbW1hbmQoa2V5bWFwLmNvbW1hbmRJRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3JpdGVDb25zb2xlKFxuICAgICAgJ0Z1bGx5IG1hdGNoZWQgYW4gcHJlZml4LCBidXQgd2l0aG91dCBhIGNvcnJlc3BvbmRpbmcgS2V5bWFwLiBUaGlzIGlzIGRlZmluaXRlbHkgYSBidWcuJyxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldEtleW1hcChrZXltYXBzOiBLZXlNYXBbXSk6IHZvaWQge1xuICAgIHRoaXMudHJpZSA9IFRyaWUuZnJvbShrZXltYXBzIHx8IFtdKTtcbiAgICB0aGlzLm1hY2hpbmUgPSBuZXcgTWF0Y2hNYWNoaW5lKHRoaXMudHJpZSk7XG4gIH1cblxuICBwdWJsaWMgZmluZE1hdGNoaW5nS2V5bWFwcyhwcmVzc2VzOiBLZXlQcmVzc1tdKTogS2V5TWFwW10ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnRyaWUuYmVzdE1hdGNoKHByZXNzZXMpO1xuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlcy5sZWFmVmFsdWVzKCkgOiBbXTtcbiAgfVxufVxuXG4vLyBlbmRyZWdpb25cblxuLy8gcmVnaW9uIFJlY29yZGluZyBvZiBuZXcga2V5bWFwc1xuZW51bSBSZWNvcmRpbmdTdGF0ZSB7XG4gIEVtcHR5U2VxdWVuY2UsXG4gIEZpcnN0S2V5LFxuICBBZGRlZEtleXMsXG4gIFdhaXRpbmdJbnB1dCxcbiAgRGVsZXRlZEtleSxcbiAgUGVuZGluZ0FkZGl0aW9uLFxuICBQZW5kaW5nRGVsZXRpb24sXG4gIEZpbmlzaGVkTWFwcGluZyxcbn1cblxuZW51bSBQZW5kaW5nQ2hvaWNlIHtcbiAgS2VlcExpdGVyYWwsXG4gIERpc2NhcmRMaXRlcmFsLFxuICBEZWxldGVQcmV2aW91cyxcbiAgRmluaXNoLFxuICBVbmtub3duLFxufVxuXG5jbGFzcyBSZWNvcmRpbmdNYWNoaW5lIGltcGxlbWVudHMgU3RhdGVNYWNoaW5lPEtleVByZXNzLCBSZWNvcmRpbmdTdGF0ZT4ge1xuICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogUmVjb3JkaW5nU3RhdGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgY3VycmVudFNlcXVlbmNlOiBLZXlQcmVzc1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuRW1wdHlTZXF1ZW5jZTtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGFkdmFuY2UgPSAoa2V5UHJlc3M6IEtleVByZXNzKTogUmVjb3JkaW5nU3RhdGUgPT4ge1xuICAgIGNvbnN0IGNsYXNzaWZpY2F0aW9uID0ga2V5UHJlc3Mua2luZCgpO1xuXG4gICAgaWYgKGNsYXNzaWZpY2F0aW9uID09PSBQcmVzc0tpbmQuTW9kaWZpZXJPbmx5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuRmluaXNoZWRNYXBwaW5nKSB7XG4gICAgICAvLyBFeHBsaWNpdGx5IHN0YXRlIHRoYXQgaXQgY2FuIGJlIHJlLXN0YXJ0ZWQgd2l0aG91dCBsb3NzLlxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5XYWl0aW5nSW5wdXQ7XG4gICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKGtleVByZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nQWRkaXRpb24gfHxcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdEZWxldGlvblxuICAgICkge1xuICAgICAgY29uc3QgcHJldmlvdXNMaXRlcmFsID0gdGhpcy5jdXJyZW50U2VxdWVuY2UucG9wKCk7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmludGVycHJldEFjdGlvbihrZXlQcmVzcyk7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgUGVuZGluZ0Nob2ljZS5LZWVwTGl0ZXJhbDpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5wdXNoKHByZXZpb3VzTGl0ZXJhbCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5BZGRlZEtleXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUGVuZGluZ0Nob2ljZS5EaXNjYXJkTGl0ZXJhbDpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLldhaXRpbmdJbnB1dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQZW5kaW5nQ2hvaWNlLkRlbGV0ZVByZXZpb3VzOlxuICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLnBvcCgpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuRGVsZXRlZEtleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQZW5kaW5nQ2hvaWNlLkZpbmlzaDpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLkZpbmlzaGVkTWFwcGluZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5wdXNoKHByZXZpb3VzTGl0ZXJhbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLnB1c2goa2V5UHJlc3MpO1xuICAgICAgaWYgKGNsYXNzaWZpY2F0aW9uID09PSBQcmVzc0tpbmQuU3BlY2lhbEtleSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9XG4gICAgICAgICAga2V5UHJlc3Mua2V5ID09PSAnRW50ZXInXG4gICAgICAgICAgICA/IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdBZGRpdGlvblxuICAgICAgICAgICAgOiBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nRGVsZXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoID09PSAxXG4gICAgICAgICAgICA/IFJlY29yZGluZ1N0YXRlLkZpcnN0S2V5XG4gICAgICAgICAgICA6IFJlY29yZGluZ1N0YXRlLkFkZGVkS2V5cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHByZXNzZXMgPSAoKTogS2V5UHJlc3NbXSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNlcXVlbmNlO1xuICB9O1xuICBwdWJsaWMgcmVhZG9ubHkgZG9jdW1lbnRSZXByZXNlbnRhdGlvbiA9ICgpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VzKCkubWFwKChwcmVzcykgPT4gcHJlc3Mua2JkKCkpO1xuICB9O1xuXG4gIHByaXZhdGUgaW50ZXJwcmV0QWN0aW9uKGtleXByZXNzOiBLZXlQcmVzcyk6IFBlbmRpbmdDaG9pY2Uge1xuICAgIGlmIChrZXlwcmVzcy5jdHJsICYmIGtleXByZXNzLmFsdCAmJiBrZXlwcmVzcy5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybiBQZW5kaW5nQ2hvaWNlLkZpbmlzaDtcbiAgICB9XG4gICAgaWYgKGtleXByZXNzLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuIFBlbmRpbmdDaG9pY2UuS2VlcExpdGVyYWw7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5cHJlc3Mua2V5ID09PSAnQmFja3NwYWNlJyAmJlxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0RlbGV0aW9uXG4gICAgKSB7XG4gICAgICByZXR1cm4gUGVuZGluZ0Nob2ljZS5EZWxldGVQcmV2aW91cztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXlwcmVzcy5rZXkgPT09ICdCYWNrc3BhY2UnICYmXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nQWRkaXRpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBQZW5kaW5nQ2hvaWNlLkRpc2NhcmRMaXRlcmFsO1xuICAgIH1cbiAgICByZXR1cm4gUGVuZGluZ0Nob2ljZS5Vbmtub3duO1xuICB9XG59XG5cbmNsYXNzIFJlY29yZGluZ01vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogTGVhZGVyU2V0dGluZ3NUYWI7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0ZXJNYWNoaW5lOiBSZWNvcmRpbmdNYWNoaW5lO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRJZDogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZTogS2V5UHJlc3NbXTtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IExlYWRlclNldHRpbmdzVGFiLCBjb21tYW5kSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudC5hcHApO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuY29tbWFuZElkID0gY29tbWFuZElkO1xuICAgIHRoaXMucmVnaXN0ZXJNYWNoaW5lID0gbmV3IFJlY29yZGluZ01hY2hpbmUoKTtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IG9uT3BlbiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5yZWdpc3Rlck1hY2hpbmUuZG9jdW1lbnRSZXByZXNlbnRhdGlvbigpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBvbkNsb3NlID0gKCk6IHZvaWQgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIHRoaXMucGFyZW50LmRpc3BsYXkoKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGtleVByZXNzID0gS2V5UHJlc3MuZnJvbUV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCByZWdpc3RlclN0YXRlID0gdGhpcy5yZWdpc3Rlck1hY2hpbmUuYWR2YW5jZShrZXlQcmVzcyk7XG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSB0aGlzLnJlZ2lzdGVyTWFjaGluZS5wcmVzc2VzKCk7XG5cbiAgICB3cml0ZUNvbnNvbGUoXG4gICAgICBgQW4ga2V5cHJlc3MgcmVzdWx0ZWQgaW4gJHtSZWNvcmRpbmdTdGF0ZVtyZWdpc3RlclN0YXRlXX0gc3RhdGUuYCxcbiAgICApO1xuXG4gICAgc3dpdGNoIChyZWdpc3RlclN0YXRlKSB7XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLkVtcHR5U2VxdWVuY2U6XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLldhaXRpbmdJbnB1dDpcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuRmlyc3RLZXk6XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLkRlbGV0ZWRLZXk6XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLkFkZGVkS2V5czpcbiAgICAgICAgdGhpcy5yZW5kZXJOb3JtYWxseSgpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0RlbGV0aW9uOlxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nQWRkaXRpb246XG4gICAgICAgIHRoaXMucmVuZGVyUGVuZGluZyhyZWdpc3RlclN0YXRlKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLkZpbmlzaGVkTWFwcGluZzpcbiAgICAgICAgdGhpcy5zYXZlU2VxdWVuY2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlckNvbnRlbnQgPSAoXG4gICAgaW5LZXlTZXF1ZW5jZTogSFRNTEVsZW1lbnRbXSxcbiAgICBpbkFkZGl0aW9uYWxDb250ZW50PzogSFRNTEVsZW1lbnRbXSxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBpbktleVNlcXVlbmNlIHx8IFtdO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxDb250ZW50ID0gaW5BZGRpdGlvbmFsQ29udGVudCB8fCBbXTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuXG4gICAgY29uc3QgY29tbWFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2tiZCcpO1xuICAgIGNvbW1hbmQuc2V0VGV4dCh0aGlzLmNvbW1hbmRJZCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkZXIuc2V0VGV4dCgnQWRkaW5nIGtleW1hcCBmb3IgY29tbWFuZCAnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29tbWFuZCk7XG5cbiAgICBjb25zdCBpbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb1RleHQuYWRkQ2xhc3MoJ3NldHRpbmctaG90a2V5Jyk7XG4gICAgaW50cm9UZXh0LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHByb21wdC5zZXRUZXh0KCdXYWl0aW5nIGZvciBrZXlib2FyZCBpbnB1dC4nKTtcbiAgICAgIGludHJvVGV4dC5hcHBlbmRDaGlsZChwcm9tcHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRyb1RleHQuYXBwZW5kKC4uLmVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKGludHJvVGV4dCk7XG4gICAgaWYgKGFkZGl0aW9uYWxDb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmQoLi4uYWRkaXRpb25hbENvbnRlbnQpO1xuICAgIH1cbiAgICBuZXcgU2V0dGluZyh0aGlzLmNvbnRlbnRFbCkuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdTYXZlJyk7XG4gICAgICBidXR0b24ub25DbGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZVNlcXVlbmNlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHNhdmVTZXF1ZW5jZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjb25mbGljdHMgPSB0aGlzLnBhcmVudC5jb25mbGljdHModGhpcy5jdXJyZW50U2VxdWVuY2UpO1xuICAgIGlmIChjb25mbGljdHMubGVuZ3RoID49IDEpIHtcbiAgICAgIC8vIHRvZG8gaGFuZGxlIHRoaXMgcHJvcGVybHlcbiAgICAgIGNyZWF0ZU5vdGljZSgnVGhlcmUgYXJlIGNvbmZsaWN0cyB3aXRoIHlvdXIga2V5UHJlc3NlcyEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3S2V5TWFwID0gbmV3IEtleU1hcCh0aGlzLmNvbW1hbmRJZCwgdGhpcy5jdXJyZW50U2VxdWVuY2UpO1xuICAgICAgdGhpcy5wYXJlbnQuYWRkS2V5bWFwKG5ld0tleU1hcCk7XG4gICAgICBjb25zdCBzZXF1ZW5jZVJlcHIgPSBuZXdLZXlNYXAuc2VxdWVuY2VcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBrZXkudGV4dCgpKVxuICAgICAgICAuam9pbignID0+ICcpO1xuICAgICAgY3JlYXRlTm90aWNlKGBDb21tYW5kICAke3RoaXMuY29tbWFuZElkfVxuICAgICAgICAgICBjYW4gbm93IGJlIGludm9rZWQgYnkgJHtzZXF1ZW5jZVJlcHJ9YCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyTm9ybWFsbHkgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMucmVnaXN0ZXJNYWNoaW5lLmRvY3VtZW50UmVwcmVzZW50YXRpb24oKSk7XG4gIH07XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyUGVuZGluZyA9IChtYXBwaW5nU3RhdGU6IFJlY29yZGluZ1N0YXRlKTogdm9pZCA9PiB7XG4gICAgLy8gSW5wbGFjZSBtdXRhdGlvbiA6KFxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5yZWdpc3Rlck1hY2hpbmUuZG9jdW1lbnRSZXByZXNlbnRhdGlvbigpO1xuICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgbGFzdEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuXG4gICAgY29uc3QgZW50ZXIgPSBLZXlQcmVzcy5qdXN0KCdFbnRlcicpLmtiZCgpO1xuICAgIGVudGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJ2dyZWVuJztcbiAgICBjb25zdCBiYWNrc3BhY2UgPSBLZXlQcmVzcy5qdXN0KCdCYWNrc3BhY2UnKS5rYmQoKTtcbiAgICBiYWNrc3BhY2Uuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcblxuICAgIGNvbnN0IGN0cmxBbHRFbnRlciA9IEtleVByZXNzLmN0cmxBbHQoJ0VudGVyJykua2JkKCk7XG4gICAgY29uc3QgcHJlc3NMaXRlcmFsID0gbGFzdEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgIHByZXNzTGl0ZXJhbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgY29uc3QgZGlzY2FyZE9yUmVtb3ZlcyA9XG4gICAgICAgICAgICAgIG1hcHBpbmdTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0FkZGl0aW9uXG4gICAgICAgID8gJyB3aWxsIGRpc2NhcmQgdGhpcyBpbnB1dC4nXG4gICAgICAgIDogJyB3aWxsIGRlbGV0ZSB0aGUgcHJldmlvdXMgaW5wdXQuJztcblxuICAgIGNvbnN0IGNvbmZpcm1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbmZpcm1UZXh0LmFwcGVuZChcbiAgICAgICdEaWQgeW91IG1lYW4gbGl0ZXJhbCAnLFxuICAgICAgcHJlc3NMaXRlcmFsLFxuICAgICAgJz8nLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSxcbiAgICAgIGVudGVyLFxuICAgICAgJyB3aWxsIGFkZCBpdCB0byB0aGUgc2VxdWVuY2UuJyxcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyksXG4gICAgICBiYWNrc3BhY2UsXG4gICAgICBkaXNjYXJkT3JSZW1vdmVzLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSxcbiAgICAgIGN0cmxBbHRFbnRlcixcbiAgICAgICcgd2lsbCBkaXNjYXJkIHBlbmRpbmcgY2hhbmdlcyBhbmQgY29tcGxldGUuJyxcbiAgICApO1xuICAgIHRoaXMucmVuZGVyQ29udGVudChlbGVtZW50cywgW2NvbmZpcm1UZXh0XSk7XG4gIH07XG59XG5cbmNsYXNzIENvbW1hbmRNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQ6IExlYWRlclNldHRpbmdzVGFiO1xuICBwcml2YXRlIGNvbW1hbmRJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogTGVhZGVyU2V0dGluZ3NUYWIpIHtcbiAgICBzdXBlcihwYXJlbnQuYXBwKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW4oKTogdm9pZCB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLnNldFRleHQoJ0xlYWRlciBIb3RrZXlzOiBwaWNrIGEgY29tbWFuZCB0byBjcmVhdGUgYSBrZXltYXAuJyk7XG4gICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyh0aGlzLmNvbnRlbnRFbCk7XG5cbiAgICBzZXR0aW5nLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZHJvcGRvd24uc2VsZWN0RWwuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLWNvbW1hbmQnKTtcblxuICAgICAgZm9yIChjb25zdCBjb21tYW5kIG9mIHRoaXMucGFyZW50Lm9ic2lkaWFuQ29tbWFuZHMoKSkge1xuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oY29tbWFuZC5pZCwgY29tbWFuZC5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhY2VIb2xkZXIgPSBuZXcgT3B0aW9uKCdTZWxlY3QgYSBDb21tYW5kJywgJ3BsYWNlaG9sZGVyJywgdHJ1ZSk7XG4gICAgICBwbGFjZUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgIHBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgcGxhY2VIb2xkZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgZHJvcGRvd24uc2VsZWN0RWwuYXBwZW5kKHBsYWNlSG9sZGVyKTtcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICBkcm9wZG93bi5vbkNoYW5nZSgoc2VsZWN0ZWRJZCkgPT4ge1xuICAgICAgICB0aGlzLmNvbW1hbmRJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICB9KTtcbiAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBzZXR0aW5nLmFkZEJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnT0snKTtcbiAgICAgIGJ1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29tbWFuZElkID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5jb21tYW5kSWQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHRoaXMuY29tbWFuZElkID09PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjcmVhdGVOb3RpY2UoJ1NlbGVjdCBhIGNvbW1hbmQgdG8gcmVnaXN0ZXInKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWdpc3RlcmVyID0gbmV3IFJlY29yZGluZ01vZGFsKHRoaXMucGFyZW50LCB0aGlzLmNvbW1hbmRJZCk7XG4gICAgICAgIHJlZ2lzdGVyZXIub3BlbigpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBlbmRyZWdpb25cblxuY2xhc3MgTGVhZGVyU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcHVibGljIGNvbW1hbmRzOiBPYnNpZGlhbkNvbW1hbmRbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IExlYWRlckhvdGtleXM7XG5cbiAgY29uc3RydWN0b3IocGx1Z2luOiBMZWFkZXJIb3RrZXlzKSB7XG4gICAgc3VwZXIocGx1Z2luLmFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmFwcCA9IHBsdWdpbi5hcHA7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hDb21tYW5kcygpO1xuXG4gICAgY29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lckVsO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTGVhZGVyIEhvdGtleXMgUGx1Z2luIC0gU2V0dGluZ3MnIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnRXhpc3RpbmcgSG90a2V5cycgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRLZXltYXBzKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlzcGxheUV4aXN0aW5nKGkpO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5hZGRCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnNldEJ1dHRvblRleHQoJ05ldyBLZXltYXAnKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgbmV3IENvbW1hbmRNb2RhbCh0aGlzKS5vcGVuKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQ29tbWFuZHMoKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kcyA9IGxpc3RDb21tYW5kcyh0aGlzLmFwcCk7XG4gIH1cblxuICBwdWJsaWMgY29uZmxpY3RzKGtleVByZXNzZXM6IEtleVByZXNzW10pOiBLZXlNYXBbXSB7XG4gICAgLy8gdG9kbyB2YWxpZGF0ZSBwcm9wZXJseVxuICAgIHJldHVybiB0aGlzLnBsdWdpbi5maW5kTWF0Y2hpbmdLZXltYXBzKGtleVByZXNzZXMpIHx8IFtdO1xuICB9XG5cbiAgcHVibGljIG9ic2lkaWFuQ29tbWFuZHMoKTogT2JzaWRpYW5Db21tYW5kW10ge1xuICAgIHJldHVybiB0aGlzLmNvbW1hbmRzO1xuICB9XG5cbiAgcHVibGljIGFkZEtleW1hcChrZXltYXA6IEtleU1hcCk6IHZvaWQge1xuICAgIHdyaXRlQ29uc29sZShgQWRkaW5nIGtleW1hcDogJHtrZXltYXAudGV4dCgpfWApO1xuXG4gICAgY29uc3QgbmV3SG90a2V5cyA9IFsuLi50aGlzLmN1cnJlbnRLZXltYXBzKCldLmNvbmNhdChrZXltYXApO1xuXG4gICAgdGhpcy5zYXZlS2V5bWFwKG5ld0hvdGtleXMpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUtleW1hcChwb3NpdGlvbklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SG90a2V5cyA9IHRoaXMuY3VycmVudEtleW1hcHMoKTtcbiAgICBjb25zdCB0b1JlbW92ZSA9IGN1cnJlbnRIb3RrZXlzW3Bvc2l0aW9uSWRdO1xuICAgIHdyaXRlQ29uc29sZShgUmVtb3Zpbmcga2V5bWFwOiAke3RvUmVtb3ZlLnRleHQoKX1gKTtcblxuICAgIGNvbnN0IG5ld0tleW1hcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEhvdGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpICE9PSBwb3NpdGlvbklkKSB7XG4gICAgICAgIG5ld0tleW1hcC5wdXNoKGN1cnJlbnRIb3RrZXlzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNhdmVLZXltYXAobmV3S2V5bWFwKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVLZXltYXAocG9zaXRpb25JZDogbnVtYmVyLCBrZXlNYXA6IEtleU1hcCk6IHZvaWQge1xuICAgIHdyaXRlQ29uc29sZShgVXBkYXRpbmcga2V5bWFwIGF0IHBvc2l0aW9uICR7cG9zaXRpb25JZH06ICR7a2V5TWFwLnRleHQoKX1gKTtcbiAgICBjb25zdCBrZXlNYXBzID0gWy4uLnRoaXMuY3VycmVudEtleW1hcHMoKV07XG4gICAga2V5TWFwc1twb3NpdGlvbklkXSA9IGtleU1hcDtcbiAgICB0aGlzLnNhdmVLZXltYXAoa2V5TWFwcyk7XG4gIH1cblxuICBwcml2YXRlIHNhdmVLZXltYXAoa2V5bWFwczogS2V5TWFwW10pOiB2b2lkIHtcbiAgICB0aGlzLnBsdWdpbi5wZXJzaXN0S2V5bWFwcyhrZXltYXBzKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheUV4aXN0aW5nKHBvc2l0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5jb250YWluZXJFbDtcbiAgICBjb25zdCB0aGlzS2V5bWFwID0gdGhpcy5jdXJyZW50S2V5bWFwcygpW3Bvc2l0aW9uSWRdO1xuXG4gICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICBzZXR0aW5nLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBjb21tYW5kIG9mIHRoaXMuY29tbWFuZHMpIHtcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGNvbW1hbmQuaWQsIGNvbW1hbmQubmFtZSk7XG4gICAgICB9XG4gICAgICBkcm9wZG93bi5vbkNoYW5nZSgobmV3Q29tbWFuZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdLZXlNYXAgPSBLZXlNYXAub2YodGhpc0tleW1hcCk7XG4gICAgICAgIG5ld0tleU1hcC5jb21tYW5kSUQgPSBuZXdDb21tYW5kO1xuICAgICAgICB0aGlzLnVwZGF0ZUtleW1hcChwb3NpdGlvbklkLCBuZXdLZXlNYXApO1xuICAgICAgfSk7XG5cbiAgICAgIGRyb3Bkb3duLnNldFZhbHVlKHRoaXNLZXltYXAuY29tbWFuZElEKTtcbiAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1jb21tYW5kJyk7XG4gICAgfSk7XG4gICAgc2V0dGluZy5hZGRFeHRyYUJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b25cbiAgICAgICAgLnNldEljb24oJ2Nyb3NzJylcbiAgICAgICAgLnNldFRvb2x0aXAoJ0RlbGV0ZSBzaG9ydGN1dCcpXG4gICAgICAgIC5leHRyYVNldHRpbmdzRWwuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLWRlbGV0ZScpO1xuXG4gICAgICBidXR0b24ub25DbGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlS2V5bWFwKHBvc2l0aW9uSWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldHRpbmcuaW5mb0VsLnJlbW92ZSgpO1xuICAgIGNvbnN0IHNldHRpbmdDb250cm9sID0gc2V0dGluZy5zZXR0aW5nRWwuY2hpbGRyZW5bMF07XG5cbiAgICBjb25zdCBrZXlTZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlTZXR0ZXIuYWRkQ2xhc3MoJ3NldHRpbmctaG90a2V5Jyk7XG5cbiAgICBjb25zdCBrYmRzID0gdGhpc0tleW1hcC5zZXF1ZW5jZS5tYXAoKHByZXNzKSA9PiBwcmVzcy5rYmQoKSk7XG4gICAga2V5U2V0dGVyLmFwcGVuZCguLi5rYmRzKTtcblxuICAgIGtleVNldHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChfOiBFdmVudCkgPT5cbiAgICAgIG5ldyBSZWNvcmRpbmdNb2RhbCh0aGlzLCB0aGlzS2V5bWFwLmNvbW1hbmRJRCkub3BlbigpLFxuICAgICk7XG5cbiAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoa2V5U2V0dGVyLCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblswXSk7XG5cbiAgICBjb25zdCBhcHBlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFwcGVuZFRleHQuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLXNldHRpbmctYXBwZW5kLXRleHQnKTtcbiAgICBhcHBlbmRUZXh0LnNldFRleHQoJ3RvJyk7XG4gICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKGFwcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzFdKTtcbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudFNldHRpbmdzKCk6IEtleUJpbmRpbmcge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudEtleW1hcHMoKTogS2V5TWFwW10ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZXR0aW5ncygpLmhvdGtleXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVySG90a2V5cyBleHRlbmRzIFBsdWdpbiB7XG4gIHB1YmxpYyBzZXR0aW5nczogS2V5QmluZGluZztcbiAgcHJpdmF0ZSBzZXR0aW5nc1RhYjogTGVhZGVyU2V0dGluZ3NUYWI7XG4gIHByaXZhdGUgbWF0Y2hIYW5kbGVyOiBNYXRjaEhhbmRsZXI7XG5cbiAgcHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB3cml0ZUNvbnNvbGUoJ1N0YXJ0ZWQgTG9hZGluZy4nKTtcblxuICAgIGF3YWl0IHRoaXMubG9hZFNhdmVkU2V0dGluZ3MoKTtcbiAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyRXZlbnRzQW5kQ2FsbGJhY2tzKCk7XG5cbiAgICB0aGlzLnNldHRpbmdzVGFiID0gbmV3IExlYWRlclNldHRpbmdzVGFiKHRoaXMpO1xuICAgIHRoaXMuYWRkU2V0dGluZ1RhYih0aGlzLnNldHRpbmdzVGFiKTtcbiAgICB3cml0ZUNvbnNvbGUoJ1JlZ2lzdGVyZWQgU2V0dGluZyBUYWIuJyk7XG5cbiAgICB3cml0ZUNvbnNvbGUoJ0ZpbmlzaGVkIExvYWRpbmcuJyk7XG4gIH1cblxuICBwdWJsaWMgb251bmxvYWQoKTogdm9pZCB7XG4gICAgd3JpdGVDb25zb2xlKCdVbmxvYWRpbmcgcGx1Z2luLicpO1xuICB9XG5cbiAgcHVibGljIGludm9rZUNvbW1hbmQoY29tbWFuZElEOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29tbWFuZElEKSB7XG4gICAgICAvLyB0b2RvIHJlbW92ZSBhbnkgdHlwaW5nXG4gICAgICBjb25zdCBhcHAgPSB0aGlzLmFwcCBhcyBhbnk7XG4gICAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKGNvbW1hbmRJRCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbmRNYXRjaGluZ0tleW1hcHMocHJlc3NlczogS2V5UHJlc3NbXSk6IEtleU1hcFtdIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaEhhbmRsZXIuZmluZE1hdGNoaW5nS2V5bWFwcyhwcmVzc2VzKTtcbiAgfVxuXG4gIHB1YmxpYyBwZXJzaXN0S2V5bWFwcyhuZXdLZXltYXBzOiBLZXlNYXBbXSk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3MuaG90a2V5cyA9IG5ld0tleW1hcHM7XG4gICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm1hdGNoSGFuZGxlci5zZXRLZXltYXAobmV3S2V5bWFwcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY3JlYXRlTm90aWNlKCdFcnJvciB3aGlsZSBTYXZpbmcgS2V5bWFwcy4nKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RlckV2ZW50c0FuZENhbGxiYWNrcyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB3cml0ZUNvbnNvbGUoJ1JlZ2lzdGVyaW5nIG5lY2Vzc2FyeSBldmVudCBjYWxsYmFja3MnKTtcblxuICAgIGNvbnN0IHdvcmtzcGFjZUNvbnRhaW5lciA9IHRoaXMuYXBwLndvcmtzcGFjZS5jb250YWluZXJFbDtcbiAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoXG4gICAgICB3b3Jrc3BhY2VDb250YWluZXIsXG4gICAgICAna2V5ZG93bicsXG4gICAgICB0aGlzLm1hdGNoSGFuZGxlci5oYW5kbGVLZXlEb3duLFxuICAgICk7XG4gICAgd3JpdGVDb25zb2xlKCdSZWdpc3RlcmVkIHdvcmtzcGFjZSBcImtleWRvd25cIiBldmVudCBjYWxsYmFja3MuJyk7XG5cbiAgICBjb25zdCBvcGVuTW9kYWxDb21tYW5kID0ge1xuICAgICAgaWQ6ICdyZWdpc3Rlci1tb2RhbCcsXG4gICAgICBuYW1lOiAnT3BlbiBSZWdpc3RlciBNb2RhbCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldHRpbmdzVGFiLnJlZnJlc2hDb21tYW5kcygpO1xuICAgICAgICBuZXcgQ29tbWFuZE1vZGFsKHRoaXMuc2V0dGluZ3NUYWIpLm9wZW4oKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmFkZENvbW1hbmQob3Blbk1vZGFsQ29tbWFuZCk7XG4gICAgd3JpdGVDb25zb2xlKCdSZWdpc3RlcmVkIG9wZW4gbW9kYWwgY29tbWFuZCcpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9hZFNhdmVkU2V0dGluZ3MgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgd3JpdGVDb25zb2xlKCdMb2FkaW5nIHByZXZpb3VzbHkgc2F2ZWQgc2V0dGluZ3MuJyk7XG5cbiAgICBjb25zdCBzYXZlZFNldHRpbmdzID0gKGF3YWl0IHRoaXMubG9hZERhdGEoKSkgfHwge307XG4gICAgdHJ5IHtcbiAgICAgIHNhdmVkU2V0dGluZ3MuaG90a2V5cyA9IChzYXZlZFNldHRpbmdzLmhvdGtleXMgfHwgW10pLm1hcChLZXlNYXAub2YpO1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHNhdmVkU2V0dGluZ3M7XG4gICAgICB3cml0ZUNvbnNvbGUoJ0xvYWRlZCBwcmV2aW91cyBzZXR0aW5ncy4nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHdyaXRlQ29uc29sZSgnQSBmYWlsdXJlIG9jY3VyZWQgd2hpbGUgcGFyc2luZyB0aGUgc2F2ZWQgc2V0dGluZ3MuJyk7XG4gICAgICBjcmVhdGVOb3RpY2UoXG4gICAgICAgICdBIGZhaWx1cmUgb2NjdXJlZCB3aGlsZSBsb2FkaW5nIHRoZSBzYXZlZCBzZXR0aW5ncy4gRmFsbGJhY2tpbmcgdG8gZGVmYXVsdHMuJyxcbiAgICAgICk7XG4gICAgICAvLyB0b2RvIDogUmV0cm9jb21wYXRpYmlsaXR5P1xuICAgICAgLy8gIEhhcmRlciB0aGFuIGkgdGhvdWdodCBzaW5jZSBMZWFkZXJLZXkgaXNuJ3Qgc2F2ZWQgaGVyZS5cbiAgICAgIC8vICBXb3VsZCBuZWVkIHRvIGtlZXAgdGhlIG9sZCBjb21tYW5kICxcbiAgICAgIC8vICBsb29rdXAgdGhlIGJpbmRpbmcgYW5kIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBvbmUuXG5cbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIHRoaXMubWF0Y2hIYW5kbGVyID0gbmV3IE1hdGNoSGFuZGxlcih0aGlzKTtcbiAgfTtcbn1cblxuLy8gcmVnaW9uIGNvbnN0cyBhbmQgdXRpbHNcbmNvbnN0IGxpc3RDb21tYW5kcyA9IChhcHA6IEFwcCk6IE9ic2lkaWFuQ29tbWFuZFtdID0+IHtcbiAgLy8gdG9kbyByZW1vdmUgYW55IHR5cGVcbiAgY29uc3QgYW55QXBwID0gYXBwIGFzIGFueTtcbiAgY29uc3QgY29tbWFuZHMgPSBhbnlBcHAuY29tbWFuZHMuY29tbWFuZHMgYXMgQ29tbWFuZE1hcDtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29tbWFuZHMpO1xufTtcbmNvbnN0IGludGVycHJldE1hdGNoID0gKGJlc3RNYXRjaDogT3B0aW9uYWw8VHJpZU5vZGU8S2V5TWFwPj4pOiBNYXRjaEtpbmQgPT4ge1xuICBpZiAoIWJlc3RNYXRjaCkge1xuICAgIHJldHVybiBNYXRjaEtpbmQuTm9NYXRjaDtcbiAgfVxuICBpZiAoYmVzdE1hdGNoLmlzTGVhZigpKSB7XG4gICAgcmV0dXJuIE1hdGNoS2luZC5GdWxsTWF0Y2g7XG4gIH1cbiAgcmV0dXJuIE1hdGNoS2luZC5QYXJ0aWFsTWF0Y2g7XG59O1xuY29uc3QgZGVmYXVsdEhvdGtleXM6IEtleU1hcFtdID0gW1xuICBuZXcgS2V5TWFwKCdlZGl0b3I6Zm9jdXMtbGVmdCcsIFtLZXlQcmVzcy5jdHJsKCdiJyksIEtleVByZXNzLmp1c3QoJ2gnKV0pLFxuICBuZXcgS2V5TWFwKCdlZGl0b3I6Zm9jdXMtcmlnaHQnLCBbS2V5UHJlc3MuY3RybCgnYicpLCBLZXlQcmVzcy5qdXN0KCdsJyldKSxcbiAgbmV3IEtleU1hcCgnZWRpdG9yOmZvY3VzLXRvcCcsIFtLZXlQcmVzcy5jdHJsKCdiJyksIEtleVByZXNzLmp1c3QoJ2snKV0pLFxuICBuZXcgS2V5TWFwKCdlZGl0b3I6Zm9jdXMtYm90dG9tJywgW0tleVByZXNzLmN0cmwoJ2InKSwgS2V5UHJlc3MuanVzdCgnaicpXSksXG4gIG5ldyBLZXlNYXAoJ2NvbW1hbmQtcGFsZXR0ZTpvcGVuJywgW1xuICAgIEtleVByZXNzLmN0cmwoJ3EnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCcxJyksXG4gICAgS2V5UHJlc3MuanVzdCgnMicpLFxuICAgIEtleVByZXNzLmp1c3QoJzInKSxcbiAgXSksXG4gIG5ldyBLZXlNYXAoJ2NvbW1hbmQtcGFsZXR0ZTpvcGVuJywgW1xuICAgIEtleVByZXNzLmN0cmwoJyAnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdwJyksXG4gICAgS2V5UHJlc3MuanVzdCgnYScpLFxuICAgIEtleVByZXNzLmp1c3QoJ2wnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdsJyksXG4gICAgS2V5UHJlc3MuanVzdCgnZScpLFxuICAgIEtleVByZXNzLmp1c3QoJ3QnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCd0JyksXG4gICAgS2V5UHJlc3MuanVzdCgnZScpLFxuICBdKSxcbl07XG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IEtleUJpbmRpbmcgPSB7XG4gIGhvdGtleXM6IGRlZmF1bHRIb3RrZXlzLFxufTtcbmNvbnN0IHdyaXRlQ29uc29sZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc29sZS5kZWJ1ZyhgIExlYWRlciBIb3RrZXlzOiAke21lc3NhZ2V9YCk7XG59O1xuY29uc3QgY3JlYXRlTm90aWNlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBuZXcgTm90aWNlKCdMZWFkZXIgSG90a2V5czogJyArIG1lc3NhZ2UpO1xufTtcbi8vIGVuZHJlZ2lvblxuIl0sIm5hbWVzIjpbIlNldHRpbmciLCJNb2RhbCIsIlBsdWdpblNldHRpbmdUYWIiLCJQbHVnaW4iLCJOb3RpY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUs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
