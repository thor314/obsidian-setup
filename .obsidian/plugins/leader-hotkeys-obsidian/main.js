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
            console.debug(keypress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7XG4gIEFwcCxcbiAgTW9kYWwsXG4gIE5vdGljZSxcbiAgUGx1Z2luLFxuICBQbHVnaW5TZXR0aW5nVGFiLFxuICBTZXR0aW5nLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIHJlZ2lvbiAgVHlwZSBTaGltc1xuaW50ZXJmYWNlIE9ic2lkaWFuQ29tbWFuZCB7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBpY29uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbW1hbmRNYXAge1xuICBba2V5OiBzdHJpbmddOiBPYnNpZGlhbkNvbW1hbmQ7XG59XG5cbmludGVyZmFjZSBDdXN0b21Db21tYW5kIHtcbiAga2V5OiBzdHJpbmc7XG4gIG1vZGlmaWVyczogc3RyaW5nW107XG59XG5cbnR5cGUgT3B0aW9uYWw8VD4gPSBUIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuaW50ZXJmYWNlIFN0YXRlTWFjaGluZTxLLCBUPiB7XG4gIC8vIFdvdWxkIGxvdmUgdG8gcmVzdHJpY3QgVCB0byBhIGZpbml0ZSBzZXQgKCBUIGV4dGVuZHMgRW51bSApLFxuICAvLyBidXQgaXQncyBub3QgcG9zc2libGUgdG8gZG8gdGhhdCBpbiBUeXBlU2NyaXB0IGN1cnJlbnRseVxuICBhZHZhbmNlOiAoZXZlbnQ6IEspID0+IFQ7XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gRnVuZGFtZW50YWwgRG9tYWluXG5lbnVtIFByZXNzS2luZCB7XG4gIE1vZGlmaWVyT25seSxcbiAgU3BlY2lhbEtleSxcbiAgTm9ybWFsS2V5LFxufVxuXG5pbnRlcmZhY2UgSGFzaGFibGUge1xuICBhc0hhc2goKTogc3RyaW5nO1xufVxuXG5jbGFzcyBLZXlQcmVzcyBpbXBsZW1lbnRzIEhhc2hhYmxlIHtcbiAgLy8gcmVnaW9uIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbiAgcHVibGljIHN0YXRpYyBjdHJsKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2hpZnQoa2V5OiBzdHJpbmcpOiBLZXlQcmVzcyB7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtZXRhKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMganVzdChrZXk6IHN0cmluZyk6IEtleVByZXNzIHtcbiAgICByZXR1cm4gbmV3IEtleVByZXNzKGtleSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjdHJsQWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgY29uc3QgY3RybCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgY29uc3QgYWx0ID0gZXZlbnQuYWx0S2V5O1xuICAgIGNvbnN0IG1ldGEgPSBldmVudC5tZXRhS2V5O1xuXG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBhbHQsIGN0cmwsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tQ3VzdG9tKGJpbmRpbmc6IEN1c3RvbUNvbW1hbmQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG5cbiAgICBjb25zdCBrZXkgPSBiaW5kaW5nLmtleTtcbiAgICBjb25zdCBzaGlmdCA9IG1vZGlmaWVycy5jb250YWlucygnU2hpZnQnKTtcbiAgICBjb25zdCBjdHJsID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdDdHJsJyk7XG4gICAgY29uc3QgYWx0ID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdBbHQnKTtcbiAgICBjb25zdCBtZXRhID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdNZXRhJyk7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBjdHJsLCBhbHQsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvZihrZXlQcmVzc0xpa2U6IEtleVByZXNzKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3MoXG4gICAgICBrZXlQcmVzc0xpa2Uua2V5LFxuICAgICAga2V5UHJlc3NMaWtlLnNoaWZ0LFxuICAgICAga2V5UHJlc3NMaWtlLmFsdCxcbiAgICAgIGtleVByZXNzTGlrZS5jdHJsLFxuICAgICAga2V5UHJlc3NMaWtlLm1ldGEsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIHB1YmxpYyByZWFkb25seSBrZXk6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGFsdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IGN0cmw6IGJvb2xlYW47XG4gIHB1YmxpYyByZWFkb25seSBzaGlmdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHNoaWZ0OiBib29sZWFuLFxuICAgIGFsdDogYm9vbGVhbixcbiAgICBjdHJsOiBib29sZWFuLFxuICAgIG1ldGE6IGJvb2xlYW4sXG4gICkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgdGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IG1ldGFSZXByID0gdGhpcy5tZXRhID8gJ+KMmCArICcgOiAnJztcbiAgICBjb25zdCBhbHRSZXByID0gdGhpcy5hbHQgPyAnQWx0ICsgJyA6ICcnO1xuICAgIGNvbnN0IGN0cmxSZXByID0gdGhpcy5jdHJsID8gJ0N0cmwgKyAnIDogJyc7XG4gICAgY29uc3Qgc2hpZnRSZXByID0gdGhpcy5zaGlmdCA/ICfih6cgKyAnIDogJyc7XG5cbiAgICByZXR1cm4gbWV0YVJlcHIgKyBjdHJsUmVwciArIGFsdFJlcHIgKyBzaGlmdFJlcHIgKyB0aGlzLmtleTtcbiAgfTtcbiAgcHVibGljIHJlYWRvbmx5IGtiZCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gICAgcmVzdWx0LmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuICAgIHJlc3VsdC5zZXRUZXh0KHRoaXMudGV4dCgpKTtcbiAgICByZXN1bHQuc3R5bGUucGFkZGluZyA9ICcycHgnO1xuICAgIHJlc3VsdC5zdHlsZS5tYXJnaW4gPSAnNXB4JztcbiAgICByZXN1bHQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSknO1xuICAgIHJlc3VsdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwdWJsaWMgcmVhZG9ubHkgYXNIYXNoID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBraW5kID0gKCk6IFByZXNzS2luZCA9PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5rZXkgPT09IG51bGwgfHxcbiAgICAgIHRoaXMua2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIFsnQWx0JywgJ0NvbnRyb2wnLCAnU2hpZnQnLCAnTWV0YScsICdBbHRHcmFwaCddLmluY2x1ZGVzKHRoaXMua2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuIFByZXNzS2luZC5Nb2RpZmllck9ubHk7XG4gICAgfVxuICAgIGlmIChbJ0VudGVyJywgJ0VzY2FwZScsICdCYWNrc3BhY2UnXS5pbmNsdWRlcyh0aGlzLmtleSkpIHtcbiAgICAgIHJldHVybiBQcmVzc0tpbmQuU3BlY2lhbEtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJlc3NLaW5kLk5vcm1hbEtleTtcbiAgfTtcbn1cblxuY2xhc3MgS2V5TWFwIGltcGxlbWVudHMgSXRlcmFibGU8S2V5UHJlc3M+IHtcbiAgcHVibGljIHN0YXRpYyBvZihrZXlNYXBMaWtlOiBLZXlNYXApOiBLZXlNYXAge1xuICAgIC8vIEZJWE1FIDogVGhlb3JldGljYWxseSBwb3NzaWJsZSB0byBjcmVhdGUgYSBrZXltYXAgd2l0aG91dCBhIGNvbW1hbmRJRC5cblxuICAgIGNvbnN0IHNlcXVlbmNlID0ga2V5TWFwTGlrZS5zZXF1ZW5jZSB8fCBbXTtcblxuICAgIGNvbnN0IHByZXNzZXMgPSBzZXF1ZW5jZS5tYXAoS2V5UHJlc3Mub2YpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBrZXlNYXBMaWtlLmNvbW1hbmRJRDtcbiAgICByZXR1cm4gbmV3IEtleU1hcChjb21tYW5kLCBwcmVzc2VzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHVibGljIGNvbW1hbmRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1hbmRJRDogc3RyaW5nLCBzZXF1ZW5jZTogS2V5UHJlc3NbXSkge1xuICAgIHRoaXMuc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLmNvbW1hbmRJRCA9IGNvbW1hbmRJRDtcbiAgfVxuXG4gIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxLZXlQcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLnZhbHVlcygpO1xuICB9XG5cbiAgcHVibGljIHRleHQgPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb21tYW5kSUQgK1xuICAgICAgJyA9ICcgK1xuICAgICAgdGhpcy5zZXF1ZW5jZS5tYXAoKHByZXNzKSA9PiBwcmVzcy50ZXh0KCkpLmpvaW4oJyA9PiAnKVxuICAgICk7XG4gIH07XG59XG5cbmludGVyZmFjZSBLZXlCaW5kaW5nIHtcbiAgaG90a2V5czogS2V5TWFwW107XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gTWF0Y2hpbmcgb2YgZXhpc3Rpbmcga2V5bWFwc1xuaW50ZXJmYWNlIEhhc2hJdGVyIGV4dGVuZHMgSXRlcmFibGU8SGFzaGFibGU+IHt9XG5cbmNsYXNzIFRyaWVOb2RlPFQ+IHtcbiAgcHVibGljIGNoaWxkcmVuID0gbmV3IE1hcDxzdHJpbmcsIFRyaWVOb2RlPFQ+PigpO1xuXG4gIHB1YmxpYyB2YWx1ZTogT3B0aW9uYWw8VD47XG5cbiAgcHVibGljIGNoaWxkKGtleTogc3RyaW5nKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGlsZChrZXk6IHN0cmluZywgY2hpbGQ6IFRyaWVOb2RlPFQ+KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoa2V5LCBjaGlsZCk7XG4gIH1cblxuICBwdWJsaWMgbGVhdmVzKCk6IFRyaWVOb2RlPFQ+W10ge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gW3RoaXNdO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IFRyaWVOb2RlPFQ+W10gPSBbXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIF8pID0+IHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGQubGVhdmVzKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBsZWFmVmFsdWVzKCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMubGVhdmVzKCkubWFwKChub2RlKSA9PiBub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xlYWYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5jbGFzcyBUcmllPFQgZXh0ZW5kcyBIYXNoSXRlcj4ge1xuICBwdWJsaWMgc3RhdGljIGZyb208SyBleHRlbmRzIEhhc2hJdGVyPihpdGVyOiBLW10pOiBUcmllPEs+IHtcbiAgICBjb25zdCB0cmllID0gbmV3IFRyaWU8Sz4oKTtcbiAgICB0cmllLmFkZEFsbChpdGVyKTtcbiAgICByZXR1cm4gdHJpZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcm9vdDogVHJpZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290ID0gbmV3IFRyaWVOb2RlKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQWxsKGl0ZXI6IFRbXSk6IFRyaWU8VD4ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVyKSB7XG4gICAgICB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYWRkKGNvbXBvc2l0ZTogVCk6IFRyaWU8VD4ge1xuICAgIC8vIEZJWE1FIDogSG9uZXN0bHksIHZlcnkgc3VzIGltcGxlbWVudGF0aW9uXG4gICAgbGV0IGxhc3RTZWVuTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb3NpdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5hc0hhc2goKTtcbiAgICAgIGNvbnN0IGNoaWxkID0gbGFzdFNlZW5Ob2RlLmNoaWxkKGtleSkgfHwgbmV3IFRyaWVOb2RlKCk7XG4gICAgICBsYXN0U2Vlbk5vZGUuYWRkQ2hpbGQoa2V5LCBjaGlsZCk7XG4gICAgICBsYXN0U2Vlbk5vZGUgPSBjaGlsZDtcbiAgICB9XG4gICAgaWYgKGxhc3RTZWVuTm9kZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBrZXltYXAnKTtcbiAgICB9XG4gICAgbGFzdFNlZW5Ob2RlLnNldFZhbHVlKGNvbXBvc2l0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYmVzdE1hdGNoKHNlcXVlbmNlOiBIYXNoYWJsZVtdKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICBsZXQgbGFzdE5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChjb25zdCBrZXlQcmVzcyBvZiBzZXF1ZW5jZSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5UHJlc3MuYXNIYXNoKCk7XG4gICAgICBjb25zdCBjaGlsZCA9IGxhc3ROb2RlLmNoaWxkKGtleSk7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGFzdE5vZGUgPSBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE5vZGU7XG4gIH1cbn1cblxuZW51bSBNYXRjaEtpbmQge1xuICBOb01hdGNoLFxuICBQYXJ0aWFsTWF0Y2gsXG4gIEZ1bGxNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlIHtcbiAgRW1wdHlNYXRjaCxcbiAgU3RhcnRlZE1hdGNoLFxuICBSZXRhaW5lZE1hdGNoLFxuICBJbXByb3ZlZE1hdGNoLFxuICBTdWNjZXNzTWF0Y2gsXG4gIEludmFsaWRNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlS2luZCB7XG4gIEluaXRpYWwsXG4gIEZsb3csXG4gIFRlcm1pbmFsLFxufVxuXG5jbGFzcyBNYXRjaE1hY2hpbmUgaW1wbGVtZW50cyBTdGF0ZU1hY2hpbmU8S2V5UHJlc3MsIE1hdGNoU3RhdGU+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0cmllOiBUcmllPEtleU1hcD47XG4gIHByaXZhdGUgY3VycmVudFN0YXRlOiBNYXRjaFN0YXRlO1xuICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHJpdmF0ZSBjdXJyZW50TWF0Y2hlczogS2V5TWFwW107XG5cbiAgY29uc3RydWN0b3IodHJpZTogVHJpZTxLZXlNYXA+KSB7XG4gICAgdGhpcy50cmllID0gdHJpZTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IE1hdGNoU3RhdGUuRW1wdHlNYXRjaDtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgIHRoaXMuY3VycmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBhZHZhbmNlID0gKGtleXByZXNzOiBLZXlQcmVzcyk6IE1hdGNoU3RhdGUgPT4ge1xuXG5cblxuICAgIGNvbnN0IG1hY3JvU3RhdGUgPSB0aGlzLnN0YXRlS2luZCgpO1xuICAgIGNvbnN0IHdhc0FscmVhZHlTZWFyY2hpbmcgPSBtYWNyb1N0YXRlID09PSBNYXRjaFN0YXRlS2luZC5GbG93O1xuICAgIGlmIChtYWNyb1N0YXRlID09PSBNYXRjaFN0YXRlS2luZC5UZXJtaW5hbCkge1xuICAgICAgLy8gUmVzZXQgYW5kIHRyeSBhZ2Fpbi5cbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoO1xuICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudE1hdGNoZXMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLmFkdmFuY2Uoa2V5cHJlc3MpO1xuICAgIH1cbiAgICBpZiAoa2V5cHJlc3Mua2luZCgpID09PSBQcmVzc0tpbmQuTW9kaWZpZXJPbmx5KSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFtNYXRjaFN0YXRlLkVtcHR5TWF0Y2ggLCBNYXRjaFN0YXRlLkludmFsaWRNYXRjaCAsIE1hdGNoU3RhdGUuU3VjY2Vzc01hdGNoXS5pbmNsdWRlcyggdGhpcy5jdXJyZW50U3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0Y2hTdGF0ZS5SZXRhaW5lZE1hdGNoO1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucHVzaChrZXlwcmVzcyk7XG4gICAgY29uc3QgYmVzdE1hdGNoID0gdGhpcy50cmllLmJlc3RNYXRjaCh0aGlzLmN1cnJlbnRTZXF1ZW5jZSk7XG4gICAgY29uc3QgbWF0Y2hLaW5kID0gaW50ZXJwcmV0TWF0Y2goYmVzdE1hdGNoKTtcbiAgICB0aGlzLmN1cnJlbnRNYXRjaGVzID0gYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxlYWZWYWx1ZXMoKSA6IFtdO1xuXG4gICAgc3dpdGNoIChtYXRjaEtpbmQpIHtcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLk5vTWF0Y2g6XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW11cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLkludmFsaWRNYXRjaFxuICAgICAgICAgIDogTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLlBhcnRpYWxNYXRjaDpcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLkltcHJvdmVkTWF0Y2hcbiAgICAgICAgICA6IE1hdGNoU3RhdGUuU3RhcnRlZE1hdGNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0Y2hLaW5kLkZ1bGxNYXRjaDpcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB3YXNBbHJlYWR5U2VhcmNoaW5nXG4gICAgICAgICAgPyBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaFxuICAgICAgICAgIDogLy8gVmVyeSBzdXMgdG8gcmVhY2ggc3VjY2VzcyBzdGF0ZSBhdCBmaXJzdCB0cnkuXG4gICAgICAgICAgICBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gIH07XG5cbiAgcHVibGljIGFsbE1hdGNoZXMgPSAoKTogcmVhZG9ubHkgS2V5TWFwW10gPT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXRjaGVzO1xuICB9O1xuXG4gIHB1YmxpYyBmdWxsTWF0Y2ggPSAoKTogT3B0aW9uYWw8S2V5TWFwPiA9PiB7XG4gICAgY29uc3QgbnVtTWF0Y2hlcyA9IHRoaXMuYWxsTWF0Y2hlcygpLmxlbmd0aDtcbiAgICBjb25zdCBpc0Z1bGxNYXRjaCA9IHRoaXMuY3VycmVudFN0YXRlID09PSBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaDtcblxuICAgIC8vIFNhbml0eSBjaGVja2luZy5cbiAgICBpZiAoaXNGdWxsTWF0Y2ggJiYgbnVtTWF0Y2hlcyAhPT0gMSkge1xuICAgICAgd3JpdGVDb25zb2xlKFxuICAgICAgICAnU3RhdGUgTWFjaGluZSBpbiBGdWxsTWF0Y2ggc3RhdGUsIGJ1dCBhdmFpbGFibGVIb3RrZXlzLmxlbmd0aCBjb250YWlucyBtb3JlIHRoYW4gMSBlbGVtZW50LiBUaGlzIGlzIGRlZmluaXRlbHkgYSBidWcuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaXNGdWxsTWF0Y2ggJiYgbnVtTWF0Y2hlcyA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hdGNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHB1YmxpYyBzdGF0ZUtpbmQgPSAoKTogTWF0Y2hTdGF0ZUtpbmQgPT4ge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoKSB7XG4gICAgICByZXR1cm4gTWF0Y2hTdGF0ZUtpbmQuSW5pdGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCBmbG93U3RhdGVzID0gW1xuICAgICAgTWF0Y2hTdGF0ZS5TdGFydGVkTWF0Y2gsXG4gICAgICBNYXRjaFN0YXRlLlJldGFpbmVkTWF0Y2gsXG4gICAgICBNYXRjaFN0YXRlLkltcHJvdmVkTWF0Y2gsXG4gICAgXTtcblxuICAgIHJldHVybiBmbG93U3RhdGVzLmluY2x1ZGVzKHRoaXMuY3VycmVudFN0YXRlKVxuICAgICAgPyBNYXRjaFN0YXRlS2luZC5GbG93XG4gICAgICA6IE1hdGNoU3RhdGVLaW5kLlRlcm1pbmFsO1xuICB9O1xufVxuXG5jbGFzcyBNYXRjaEhhbmRsZXIge1xuICBwcml2YXRlIHRyaWU6IFRyaWU8S2V5TWFwPjtcbiAgcHJpdmF0ZSBtYWNoaW5lOiBNYXRjaE1hY2hpbmU7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBMZWFkZXJIb3RrZXlzO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IExlYWRlckhvdGtleXMpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNldEtleW1hcChwYXJlbnQuc2V0dGluZ3MuaG90a2V5cyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGtleXByZXNzID0gS2V5UHJlc3MuZnJvbUV2ZW50KGV2ZW50KTtcbiAgICBjb25zb2xlLmRlYnVnKCBrZXlwcmVzcyApO1xuICAgIGNvbnN0IG1hY2hpbmVTdGF0ZSA9IHRoaXMubWFjaGluZS5hZHZhbmNlKGtleXByZXNzKTtcbiAgICB3cml0ZUNvbnNvbGUoXG4gICAgICBgQW4ga2V5cHJlc3MgcmVzdWx0ZWQgaW4gYSAke01hdGNoU3RhdGVbbWFjaGluZVN0YXRlXX0gc3RhdGUuYCxcbiAgICApO1xuXG4gICAgaWYgKHRoaXMubWFjaGluZS5zdGF0ZUtpbmQoKSAhPT0gTWF0Y2hTdGF0ZUtpbmQuSW5pdGlhbCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG1hY2hpbmVTdGF0ZSA9PT0gTWF0Y2hTdGF0ZS5TdWNjZXNzTWF0Y2gpIHtcbiAgICAgICAgY29uc3Qga2V5bWFwID0gdGhpcy5tYWNoaW5lLmZ1bGxNYXRjaCgpO1xuICAgICAgICB0aGlzLmVtaXQoa2V5bWFwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHVibGljIGVtaXQoa2V5bWFwOiBPcHRpb25hbDxLZXlNYXA+KTogdm9pZCB7XG4gICAgaWYgKGtleW1hcCkge1xuICAgICAgdGhpcy5wYXJlbnQuaW52b2tlQ29tbWFuZChrZXltYXAuY29tbWFuZElEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cml0ZUNvbnNvbGUoXG4gICAgICAnRnVsbHkgbWF0Y2hlZCBhbiBwcmVmaXgsIGJ1dCB3aXRob3V0IGEgY29ycmVzcG9uZGluZyBLZXltYXAuIFRoaXMgaXMgZGVmaW5pdGVseSBhIGJ1Zy4nLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2V0S2V5bWFwKGtleW1hcHM6IEtleU1hcFtdKTogdm9pZCB7XG4gICAgdGhpcy50cmllID0gVHJpZS5mcm9tKGtleW1hcHMgfHwgW10pO1xuICAgIHRoaXMubWFjaGluZSA9IG5ldyBNYXRjaE1hY2hpbmUodGhpcy50cmllKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTWF0Y2hpbmdLZXltYXBzKHByZXNzZXM6IEtleVByZXNzW10pOiBLZXlNYXBbXSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMudHJpZS5iZXN0TWF0Y2gocHJlc3Nlcyk7XG4gICAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzLmxlYWZWYWx1ZXMoKSA6IFtdO1xuICB9XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gUmVjb3JkaW5nIG9mIG5ldyBrZXltYXBzXG5lbnVtIFJlY29yZGluZ1N0YXRlIHtcbiAgRW1wdHlTZXF1ZW5jZSxcbiAgRmlyc3RLZXksXG4gIEFkZGVkS2V5cyxcbiAgV2FpdGluZ0lucHV0LFxuICBEZWxldGVkS2V5LFxuICBQZW5kaW5nQWRkaXRpb24sXG4gIFBlbmRpbmdEZWxldGlvbixcbiAgRmluaXNoZWRNYXBwaW5nLFxufVxuXG5lbnVtIFBlbmRpbmdDaG9pY2Uge1xuICBLZWVwTGl0ZXJhbCxcbiAgRGlzY2FyZExpdGVyYWwsXG4gIERlbGV0ZVByZXZpb3VzLFxuICBGaW5pc2gsXG4gIFVua25vd24sXG59XG5cbmNsYXNzIFJlY29yZGluZ01hY2hpbmUgaW1wbGVtZW50cyBTdGF0ZU1hY2hpbmU8S2V5UHJlc3MsIFJlY29yZGluZ1N0YXRlPiB7XG4gIHByaXZhdGUgY3VycmVudFN0YXRlOiBSZWNvcmRpbmdTdGF0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50U2VxdWVuY2U6IEtleVByZXNzW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5FbXB0eVNlcXVlbmNlO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW107XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgYWR2YW5jZSA9IChrZXlQcmVzczogS2V5UHJlc3MpOiBSZWNvcmRpbmdTdGF0ZSA9PiB7XG4gICAgY29uc3QgY2xhc3NpZmljYXRpb24gPSBrZXlQcmVzcy5raW5kKCk7XG5cbiAgICBpZiAoY2xhc3NpZmljYXRpb24gPT09IFByZXNzS2luZC5Nb2RpZmllck9ubHkpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuY3VycmVudFN0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5GaW5pc2hlZE1hcHBpbmcpIHtcbiAgICAgIC8vIEV4cGxpY2l0bHkgc3RhdGUgdGhhdCBpdCBjYW4gYmUgcmUtc3RhcnRlZCB3aXRob3V0IGxvc3MuXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLldhaXRpbmdJbnB1dDtcbiAgICAgIHJldHVybiB0aGlzLmFkdmFuY2Uoa2V5UHJlc3MpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdBZGRpdGlvbiB8fFxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0RlbGV0aW9uXG4gICAgKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0xpdGVyYWwgPSB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5wb3AoKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuaW50ZXJwcmV0QWN0aW9uKGtleVByZXNzKTtcblxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBQZW5kaW5nQ2hvaWNlLktlZXBMaXRlcmFsOlxuICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLnB1c2gocHJldmlvdXNMaXRlcmFsKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLkFkZGVkS2V5cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQZW5kaW5nQ2hvaWNlLkRpc2NhcmRMaXRlcmFsOlxuICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuV2FpdGluZ0lucHV0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBlbmRpbmdDaG9pY2UuRGVsZXRlUHJldmlvdXM6XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucG9wKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5EZWxldGVkS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBlbmRpbmdDaG9pY2UuRmluaXNoOlxuICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuRmluaXNoZWRNYXBwaW5nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLnB1c2gocHJldmlvdXNMaXRlcmFsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucHVzaChrZXlQcmVzcyk7XG4gICAgICBpZiAoY2xhc3NpZmljYXRpb24gPT09IFByZXNzS2luZC5TcGVjaWFsS2V5KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID1cbiAgICAgICAgICBrZXlQcmVzcy5rZXkgPT09ICdFbnRlcidcbiAgICAgICAgICAgID8gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0FkZGl0aW9uXG4gICAgICAgICAgICA6IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdEZWxldGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gUmVjb3JkaW5nU3RhdGUuRmlyc3RLZXlcbiAgICAgICAgICAgIDogUmVjb3JkaW5nU3RhdGUuQWRkZWRLZXlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgcHJlc3NlcyA9ICgpOiBLZXlQcmVzc1tdID0+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VxdWVuY2U7XG4gIH07XG4gIHB1YmxpYyByZWFkb25seSBkb2N1bWVudFJlcHJlc2VudGF0aW9uID0gKCk6IEhUTUxFbGVtZW50W10gPT4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZXMoKS5tYXAoKHByZXNzKSA9PiBwcmVzcy5rYmQoKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbnRlcnByZXRBY3Rpb24oa2V5cHJlc3M6IEtleVByZXNzKTogUGVuZGluZ0Nob2ljZSB7XG4gICAgaWYgKGtleXByZXNzLmN0cmwgJiYga2V5cHJlc3MuYWx0ICYmIGtleXByZXNzLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuIFBlbmRpbmdDaG9pY2UuRmluaXNoO1xuICAgIH1cbiAgICBpZiAoa2V5cHJlc3Mua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm4gUGVuZGluZ0Nob2ljZS5LZWVwTGl0ZXJhbDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXlwcmVzcy5rZXkgPT09ICdCYWNrc3BhY2UnICYmXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nRGVsZXRpb25cbiAgICApIHtcbiAgICAgIHJldHVybiBQZW5kaW5nQ2hvaWNlLkRlbGV0ZVByZXZpb3VzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleXByZXNzLmtleSA9PT0gJ0JhY2tzcGFjZScgJiZcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdBZGRpdGlvblxuICAgICkge1xuICAgICAgcmV0dXJuIFBlbmRpbmdDaG9pY2UuRGlzY2FyZExpdGVyYWw7XG4gICAgfVxuICAgIHJldHVybiBQZW5kaW5nQ2hvaWNlLlVua25vd247XG4gIH1cbn1cblxuY2xhc3MgUmVjb3JkaW5nTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBMZWFkZXJTZXR0aW5nc1RhYjtcbiAgcHJpdmF0ZSByZWFkb25seSByZWdpc3Rlck1hY2hpbmU6IFJlY29yZGluZ01hY2hpbmU7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZElkOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVudFNlcXVlbmNlOiBLZXlQcmVzc1tdO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogTGVhZGVyU2V0dGluZ3NUYWIsIGNvbW1hbmRJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LmFwcCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5jb21tYW5kSWQgPSBjb21tYW5kSWQ7XG4gICAgdGhpcy5yZWdpc3Rlck1hY2hpbmUgPSBuZXcgUmVjb3JkaW5nTWFjaGluZSgpO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW107XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgb25PcGVuID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVuZGVyQ29udGVudCh0aGlzLnJlZ2lzdGVyTWFjaGluZS5kb2N1bWVudFJlcHJlc2VudGF0aW9uKCkpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IG9uQ2xvc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgdGhpcy5wYXJlbnQuZGlzcGxheSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qga2V5UHJlc3MgPSBLZXlQcmVzcy5mcm9tRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHJlZ2lzdGVyU3RhdGUgPSB0aGlzLnJlZ2lzdGVyTWFjaGluZS5hZHZhbmNlKGtleVByZXNzKTtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IHRoaXMucmVnaXN0ZXJNYWNoaW5lLnByZXNzZXMoKTtcblxuICAgIHdyaXRlQ29uc29sZShcbiAgICAgIGBBbiBrZXlwcmVzcyByZXN1bHRlZCBpbiAke1JlY29yZGluZ1N0YXRlW3JlZ2lzdGVyU3RhdGVdfSBzdGF0ZS5gLFxuICAgICk7XG5cbiAgICBzd2l0Y2ggKHJlZ2lzdGVyU3RhdGUpIHtcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuRW1wdHlTZXF1ZW5jZTpcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuV2FpdGluZ0lucHV0OlxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5GaXJzdEtleTpcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuRGVsZXRlZEtleTpcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuQWRkZWRLZXlzOlxuICAgICAgICB0aGlzLnJlbmRlck5vcm1hbGx5KCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nRGVsZXRpb246XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLlBlbmRpbmdBZGRpdGlvbjpcbiAgICAgICAgdGhpcy5yZW5kZXJQZW5kaW5nKHJlZ2lzdGVyU3RhdGUpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuRmluaXNoZWRNYXBwaW5nOlxuICAgICAgICB0aGlzLnNhdmVTZXF1ZW5jZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyQ29udGVudCA9IChcbiAgICBpbktleVNlcXVlbmNlOiBIVE1MRWxlbWVudFtdLFxuICAgIGluQWRkaXRpb25hbENvbnRlbnQ/OiBIVE1MRWxlbWVudFtdLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGluS2V5U2VxdWVuY2UgfHwgW107XG4gICAgY29uc3QgYWRkaXRpb25hbENvbnRlbnQgPSBpbkFkZGl0aW9uYWxDb250ZW50IHx8IFtdO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG5cbiAgICBjb25zdCBjb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gICAgY29tbWFuZC5zZXRUZXh0KHRoaXMuY29tbWFuZElkKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRlci5zZXRUZXh0KCdBZGRpbmcga2V5bWFwIGZvciBjb21tYW5kICcpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb21tYW5kKTtcblxuICAgIGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGludHJvVGV4dC5hZGRDbGFzcygnc2V0dGluZy1ob3RrZXknKTtcbiAgICBpbnRyb1RleHQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgcHJvbXB0LnNldFRleHQoJ1dhaXRpbmcgZm9yIGtleWJvYXJkIGlucHV0LicpO1xuICAgICAgaW50cm9UZXh0LmFwcGVuZENoaWxkKHByb21wdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludHJvVGV4dC5hcHBlbmQoLi4uZWxlbWVudHMpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcbiAgICBpZiAoYWRkaXRpb25hbENvbnRlbnQpIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmFwcGVuZCguLi5hZGRpdGlvbmFsQ29udGVudCk7XG4gICAgfVxuICAgIG5ldyBTZXR0aW5nKHRoaXMuY29udGVudEVsKS5hZGRCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnNldEJ1dHRvblRleHQoJ1NhdmUnKTtcbiAgICAgIGJ1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlU2VxdWVuY2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2F2ZVNlcXVlbmNlID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGNvbmZsaWN0cyA9IHRoaXMucGFyZW50LmNvbmZsaWN0cyh0aGlzLmN1cnJlbnRTZXF1ZW5jZSk7XG4gICAgaWYgKGNvbmZsaWN0cy5sZW5ndGggPj0gMSkge1xuICAgICAgLy8gdG9kbyBoYW5kbGUgdGhpcyBwcm9wZXJseVxuICAgICAgY3JlYXRlTm90aWNlKCdUaGVyZSBhcmUgY29uZmxpY3RzIHdpdGggeW91ciBrZXlQcmVzc2VzIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdLZXlNYXAgPSBuZXcgS2V5TWFwKHRoaXMuY29tbWFuZElkLCB0aGlzLmN1cnJlbnRTZXF1ZW5jZSk7XG4gICAgICB0aGlzLnBhcmVudC5hZGRLZXltYXAobmV3S2V5TWFwKTtcbiAgICAgIGNvbnN0IHNlcXVlbmNlUmVwciA9IG5ld0tleU1hcC5zZXF1ZW5jZVxuICAgICAgICAubWFwKChrZXkpID0+IGtleS50ZXh0KCkpXG4gICAgICAgIC5qb2luKCcgPT4gJyk7XG4gICAgICBjcmVhdGVOb3RpY2UoYENvbW1hbmQgICR7dGhpcy5jb21tYW5kSWR9XG4gICAgICAgICAgIGNhbiBub3cgYmUgaW52b2tlZCBieSAke3NlcXVlbmNlUmVwcn1gKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJOb3JtYWxseSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQodGhpcy5yZWdpc3Rlck1hY2hpbmUuZG9jdW1lbnRSZXByZXNlbnRhdGlvbigpKTtcbiAgfTtcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJQZW5kaW5nID0gKG1hcHBpbmdTdGF0ZTogUmVjb3JkaW5nU3RhdGUpOiB2b2lkID0+IHtcbiAgICAvLyBJbnBsYWNlIG11dGF0aW9uIDooXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnJlZ2lzdGVyTWFjaGluZS5kb2N1bWVudFJlcHJlc2VudGF0aW9uKCk7XG4gICAgY29uc3QgbGFzdEVsZW1lbnQgPSBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICBsYXN0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG5cbiAgICBjb25zdCBlbnRlciA9IEtleVByZXNzLmp1c3QoJ0VudGVyJykua2JkKCk7XG4gICAgZW50ZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSAnZ3JlZW4nO1xuICAgIGNvbnN0IGJhY2tzcGFjZSA9IEtleVByZXNzLmp1c3QoJ0JhY2tzcGFjZScpLmtiZCgpO1xuICAgIGJhY2tzcGFjZS5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuXG4gICAgY29uc3QgY3RybEFsdEVudGVyID0gS2V5UHJlc3MuY3RybEFsdCgnRW50ZXInKS5rYmQoKTtcbiAgICBjb25zdCBwcmVzc0xpdGVyYWwgPSBsYXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgcHJlc3NMaXRlcmFsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICBjb25zdCBkaXNjYXJkT3JSZW1vdmVzID1cbiAgICAgICAgICAgICAgbWFwcGluZ1N0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nQWRkaXRpb25cbiAgICAgICAgPyAnIHdpbGwgZGlzY2FyZCB0aGlzIGlucHV0LidcbiAgICAgICAgOiAnIHdpbGwgZGVsZXRlIHRoZSBwcmV2aW91cyBpbnB1dC4nO1xuXG4gICAgY29uc3QgY29uZmlybVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uZmlybVRleHQuYXBwZW5kKFxuICAgICAgJ0RpZCB5b3UgbWVhbiBsaXRlcmFsICcsXG4gICAgICBwcmVzc0xpdGVyYWwsXG4gICAgICAnPycsXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpLFxuICAgICAgZW50ZXIsXG4gICAgICAnIHdpbGwgYWRkIGl0IHRvIHRoZSBzZXF1ZW5jZS4nLFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSxcbiAgICAgIGJhY2tzcGFjZSxcbiAgICAgIGRpc2NhcmRPclJlbW92ZXMsXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpLFxuICAgICAgY3RybEFsdEVudGVyLFxuICAgICAgJyB3aWxsIGRpc2NhcmQgcGVuZGluZyBjaGFuZ2VzIGFuZCBjb21wbGV0ZS4nLFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KGVsZW1lbnRzLCBbY29uZmlybVRleHRdKTtcbiAgfTtcbn1cblxuY2xhc3MgQ29tbWFuZE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogTGVhZGVyU2V0dGluZ3NUYWI7XG4gIHByaXZhdGUgY29tbWFuZElkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBMZWFkZXJTZXR0aW5nc1RhYikge1xuICAgIHN1cGVyKHBhcmVudC5hcHApO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgcHVibGljIG9uT3BlbigpOiB2b2lkIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGUuc2V0VGV4dCgnTGVhZGVyIEhvdGtleXM6IHBpY2sgYSBjb21tYW5kIHRvIGNyZWF0ZSBhIGtleW1hcC4nKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKHRoaXMuY29udGVudEVsKTtcblxuICAgIHNldHRpbmcuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtY29tbWFuZCcpO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgdGhpcy5wYXJlbnQub2JzaWRpYW5Db21tYW5kcygpKSB7XG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihjb21tYW5kLmlkLCBjb21tYW5kLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwbGFjZUhvbGRlciA9IG5ldyBPcHRpb24oJ1NlbGVjdCBhIENvbW1hbmQnLCAncGxhY2Vob2xkZXInLCB0cnVlKTtcbiAgICAgIHBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgcGxhY2VIb2xkZXIuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICBwbGFjZUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgICBkcm9wZG93bi5zZWxlY3RFbC5hcHBlbmQocGxhY2VIb2xkZXIpO1xuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKChzZWxlY3RlZElkKSA9PiB7XG4gICAgICAgIHRoaXMuY29tbWFuZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd24uc2VsZWN0RWwuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIHNldHRpbmcuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdPSycpO1xuICAgICAgYnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb21tYW5kSWQgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLmNvbW1hbmRJZCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5jb21tYW5kSWQgPT09ICcnXG4gICAgICAgICkge1xuICAgICAgICAgIGNyZWF0ZU5vdGljZSgnU2VsZWN0IGEgY29tbWFuZCB0byByZWdpc3RlcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyZXIgPSBuZXcgUmVjb3JkaW5nTW9kYWwodGhpcy5wYXJlbnQsIHRoaXMuY29tbWFuZElkKTtcbiAgICAgICAgcmVnaXN0ZXJlci5vcGVuKCk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGVuZHJlZ2lvblxuXG5jbGFzcyBMZWFkZXJTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwdWJsaWMgY29tbWFuZHM6IE9ic2lkaWFuQ29tbWFuZFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogTGVhZGVySG90a2V5cztcblxuICBjb25zdHJ1Y3RvcihwbHVnaW46IExlYWRlckhvdGtleXMpIHtcbiAgICBzdXBlcihwbHVnaW4uYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuYXBwID0gcGx1Z2luLmFwcDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaENvbW1hbmRzKCk7XG5cbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyRWw7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdMZWFkZXIgSG90a2V5cyBQbHVnaW4gLSBTZXR0aW5ncycgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdFeGlzdGluZyBIb3RrZXlzJyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudEtleW1hcHMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kaXNwbGF5RXhpc3RpbmcoaSk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLmFkZEJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnTmV3IEtleW1hcCcpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICBuZXcgQ29tbWFuZE1vZGFsKHRoaXMpLm9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hDb21tYW5kcygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRzID0gbGlzdENvbW1hbmRzKHRoaXMuYXBwKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25mbGljdHMoa2V5UHJlc3NlczogS2V5UHJlc3NbXSk6IEtleU1hcFtdIHtcbiAgICAvLyB0b2RvIHZhbGlkYXRlIHByb3Blcmx5XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luLmZpbmRNYXRjaGluZ0tleW1hcHMoa2V5UHJlc3NlcykgfHwgW107XG4gIH1cblxuICBwdWJsaWMgb2JzaWRpYW5Db21tYW5kcygpOiBPYnNpZGlhbkNvbW1hbmRbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZHM7XG4gIH1cblxuICBwdWJsaWMgYWRkS2V5bWFwKGtleW1hcDogS2V5TWFwKTogdm9pZCB7XG4gICAgd3JpdGVDb25zb2xlKGBBZGRpbmcga2V5bWFwOiAke2tleW1hcC50ZXh0KCl9YCk7XG5cbiAgICBjb25zdCBuZXdIb3RrZXlzID0gWy4uLnRoaXMuY3VycmVudEtleW1hcHMoKV0uY29uY2F0KGtleW1hcCk7XG5cbiAgICB0aGlzLnNhdmVLZXltYXAobmV3SG90a2V5cyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlS2V5bWFwKHBvc2l0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRIb3RrZXlzID0gdGhpcy5jdXJyZW50S2V5bWFwcygpO1xuICAgIGNvbnN0IHRvUmVtb3ZlID0gY3VycmVudEhvdGtleXNbcG9zaXRpb25JZF07XG4gICAgd3JpdGVDb25zb2xlKGBSZW1vdmluZyBrZXltYXA6ICR7dG9SZW1vdmUudGV4dCgpfWApO1xuXG4gICAgY29uc3QgbmV3S2V5bWFwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SG90a2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgIT09IHBvc2l0aW9uSWQpIHtcbiAgICAgICAgbmV3S2V5bWFwLnB1c2goY3VycmVudEhvdGtleXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2F2ZUtleW1hcChuZXdLZXltYXApO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUtleW1hcChwb3NpdGlvbklkOiBudW1iZXIsIGtleU1hcDogS2V5TWFwKTogdm9pZCB7XG4gICAgd3JpdGVDb25zb2xlKGBVcGRhdGluZyBrZXltYXAgYXQgcG9zaXRpb24gJHtwb3NpdGlvbklkfTogJHtrZXlNYXAudGV4dCgpfWApO1xuICAgIGNvbnN0IGtleU1hcHMgPSBbLi4udGhpcy5jdXJyZW50S2V5bWFwcygpXTtcbiAgICBrZXlNYXBzW3Bvc2l0aW9uSWRdID0ga2V5TWFwO1xuICAgIHRoaXMuc2F2ZUtleW1hcChrZXlNYXBzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUtleW1hcChrZXltYXBzOiBLZXlNYXBbXSk6IHZvaWQge1xuICAgIHRoaXMucGx1Z2luLnBlcnNpc3RLZXltYXBzKGtleW1hcHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5RXhpc3RpbmcocG9zaXRpb25JZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lckVsO1xuICAgIGNvbnN0IHRoaXNLZXltYXAgPSB0aGlzLmN1cnJlbnRLZXltYXBzKClbcG9zaXRpb25JZF07XG5cbiAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpO1xuICAgIHNldHRpbmcuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgdGhpcy5jb21tYW5kcykge1xuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oY29tbWFuZC5pZCwgY29tbWFuZC5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKChuZXdDb21tYW5kKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0tleU1hcCA9IEtleU1hcC5vZih0aGlzS2V5bWFwKTtcbiAgICAgICAgbmV3S2V5TWFwLmNvbW1hbmRJRCA9IG5ld0NvbW1hbmQ7XG4gICAgICAgIHRoaXMudXBkYXRlS2V5bWFwKHBvc2l0aW9uSWQsIG5ld0tleU1hcCk7XG4gICAgICB9KTtcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpc0tleW1hcC5jb21tYW5kSUQpO1xuICAgICAgZHJvcGRvd24uc2VsZWN0RWwuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLWNvbW1hbmQnKTtcbiAgICB9KTtcbiAgICBzZXR0aW5nLmFkZEV4dHJhQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvblxuICAgICAgICAuc2V0SWNvbignY3Jvc3MnKVxuICAgICAgICAuc2V0VG9vbHRpcCgnRGVsZXRlIHNob3J0Y3V0JylcbiAgICAgICAgLmV4dHJhU2V0dGluZ3NFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtZGVsZXRlJyk7XG5cbiAgICAgIGJ1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVLZXltYXAocG9zaXRpb25JZCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0dGluZy5pbmZvRWwucmVtb3ZlKCk7XG4gICAgY29uc3Qgc2V0dGluZ0NvbnRyb2wgPSBzZXR0aW5nLnNldHRpbmdFbC5jaGlsZHJlblswXTtcblxuICAgIGNvbnN0IGtleVNldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleVNldHRlci5hZGRDbGFzcygnc2V0dGluZy1ob3RrZXknKTtcblxuICAgIGNvbnN0IGtiZHMgPSB0aGlzS2V5bWFwLnNlcXVlbmNlLm1hcCgocHJlc3MpID0+IHByZXNzLmtiZCgpKTtcbiAgICBrZXlTZXR0ZXIuYXBwZW5kKC4uLmtiZHMpO1xuXG4gICAga2V5U2V0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF86IEV2ZW50KSA9PlxuICAgICAgbmV3IFJlY29yZGluZ01vZGFsKHRoaXMsIHRoaXNLZXltYXAuY29tbWFuZElEKS5vcGVuKCksXG4gICAgKTtcblxuICAgIHNldHRpbmdDb250cm9sLmluc2VydEJlZm9yZShrZXlTZXR0ZXIsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzBdKTtcblxuICAgIGNvbnN0IGFwcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYXBwZW5kVGV4dC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1hcHBlbmQtdGV4dCcpO1xuICAgIGFwcGVuZFRleHQuc2V0VGV4dCgndG8nKTtcbiAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoYXBwZW5kVGV4dCwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXJyZW50U2V0dGluZ3MoKTogS2V5QmluZGluZyB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luLnNldHRpbmdzO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXJyZW50S2V5bWFwcygpOiBLZXlNYXBbXSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNldHRpbmdzKCkuaG90a2V5cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJIb3RrZXlzIGV4dGVuZHMgUGx1Z2luIHtcbiAgcHVibGljIHNldHRpbmdzOiBLZXlCaW5kaW5nO1xuICBwcml2YXRlIHNldHRpbmdzVGFiOiBMZWFkZXJTZXR0aW5nc1RhYjtcbiAgcHJpdmF0ZSBtYXRjaEhhbmRsZXI6IE1hdGNoSGFuZGxlcjtcblxuICBwdWJsaWMgYXN5bmMgb25sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHdyaXRlQ29uc29sZSgnU3RhcnRlZCBMb2FkaW5nLicpO1xuXG4gICAgYXdhaXQgdGhpcy5sb2FkU2F2ZWRTZXR0aW5ncygpO1xuICAgIGF3YWl0IHRoaXMucmVnaXN0ZXJFdmVudHNBbmRDYWxsYmFja3MoKTtcblxuICAgIHRoaXMuc2V0dGluZ3NUYWIgPSBuZXcgTGVhZGVyU2V0dGluZ3NUYWIodGhpcyk7XG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKHRoaXMuc2V0dGluZ3NUYWIpO1xuICAgIHdyaXRlQ29uc29sZSgnUmVnaXN0ZXJlZCBTZXR0aW5nIFRhYi4nKTtcblxuICAgIHdyaXRlQ29uc29sZSgnRmluaXNoZWQgTG9hZGluZy4nKTtcbiAgfVxuXG4gIHB1YmxpYyBvbnVubG9hZCgpOiB2b2lkIHtcbiAgICB3cml0ZUNvbnNvbGUoJ1VubG9hZGluZyBwbHVnaW4uJyk7XG4gIH1cblxuICBwdWJsaWMgaW52b2tlQ29tbWFuZChjb21tYW5kSUQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb21tYW5kSUQpIHtcbiAgICAgIC8vIHRvZG8gcmVtb3ZlIGFueSB0eXBpbmdcbiAgICAgIGNvbnN0IGFwcCA9IHRoaXMuYXBwIGFzIGFueTtcbiAgICAgIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoY29tbWFuZElEKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmluZE1hdGNoaW5nS2V5bWFwcyhwcmVzc2VzOiBLZXlQcmVzc1tdKTogS2V5TWFwW10ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoSGFuZGxlci5maW5kTWF0Y2hpbmdLZXltYXBzKHByZXNzZXMpO1xuICB9XG5cbiAgcHVibGljIHBlcnNpc3RLZXltYXBzKG5ld0tleW1hcHM6IEtleU1hcFtdKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5ob3RrZXlzID0gbmV3S2V5bWFwcztcbiAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubWF0Y2hIYW5kbGVyLnNldEtleW1hcChuZXdLZXltYXBzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBjcmVhdGVOb3RpY2UoJ0Vycm9yIHdoaWxlIFNhdmluZyBLZXltYXBzLicpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IHJlZ2lzdGVyRXZlbnRzQW5kQ2FsbGJhY2tzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHdyaXRlQ29uc29sZSgnUmVnaXN0ZXJpbmcgbmVjZXNzYXJ5IGV2ZW50IGNhbGxiYWNrcycpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlQ29udGFpbmVyID0gdGhpcy5hcHAud29ya3NwYWNlLmNvbnRhaW5lckVsO1xuICAgIHRoaXMucmVnaXN0ZXJEb21FdmVudChcbiAgICAgIHdvcmtzcGFjZUNvbnRhaW5lcixcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIHRoaXMubWF0Y2hIYW5kbGVyLmhhbmRsZUtleURvd24sXG4gICAgKTtcbiAgICB3cml0ZUNvbnNvbGUoJ1JlZ2lzdGVyZWQgd29ya3NwYWNlIFwia2V5ZG93blwiIGV2ZW50IGNhbGxiYWNrcy4nKTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbENvbW1hbmQgPSB7XG4gICAgICBpZDogJ3JlZ2lzdGVyLW1vZGFsJyxcbiAgICAgIG5hbWU6ICdPcGVuIFJlZ2lzdGVyIE1vZGFsJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NUYWIucmVmcmVzaENvbW1hbmRzKCk7XG4gICAgICAgIG5ldyBDb21tYW5kTW9kYWwodGhpcy5zZXR0aW5nc1RhYikub3BlbigpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuYWRkQ29tbWFuZChvcGVuTW9kYWxDb21tYW5kKTtcbiAgICB3cml0ZUNvbnNvbGUoJ1JlZ2lzdGVyZWQgb3BlbiBtb2RhbCBjb21tYW5kJyk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsb2FkU2F2ZWRTZXR0aW5ncyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB3cml0ZUNvbnNvbGUoJ0xvYWRpbmcgcHJldmlvdXNseSBzYXZlZCBzZXR0aW5ncy4nKTtcblxuICAgIGNvbnN0IHNhdmVkU2V0dGluZ3MgPSAoYXdhaXQgdGhpcy5sb2FkRGF0YSgpKSB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgc2F2ZWRTZXR0aW5ncy5ob3RrZXlzID0gKHNhdmVkU2V0dGluZ3MuaG90a2V5cyB8fCBbXSkubWFwKEtleU1hcC5vZik7XG4gICAgICB0aGlzLnNldHRpbmdzID0gc2F2ZWRTZXR0aW5ncztcbiAgICAgIHdyaXRlQ29uc29sZSgnTG9hZGVkIHByZXZpb3VzIHNldHRpbmdzLicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgd3JpdGVDb25zb2xlKCdBIGZhaWx1cmUgb2NjdXJlZCB3aGlsZSBwYXJzaW5nIHRoZSBzYXZlZCBzZXR0aW5ncy4nKTtcbiAgICAgIGNyZWF0ZU5vdGljZShcbiAgICAgICAgJ0EgZmFpbHVyZSBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIHNhdmVkIHNldHRpbmdzLiBGYWxsYmFja2luZyB0byBkZWZhdWx0cy4nLFxuICAgICAgKTtcbiAgICAgIC8vIHRvZG8gOiBSZXRyb2NvbXBhdGliaWxpdHk/XG4gICAgICAvLyAgSGFyZGVyIHRoYW4gaSB0aG91Z2h0IHNpbmNlIExlYWRlcktleSBpc24ndCBzYXZlZCBoZXJlLlxuICAgICAgLy8gIFdvdWxkIG5lZWQgdG8ga2VlcCB0aGUgb2xkIGNvbW1hbmQgLFxuICAgICAgLy8gIGxvb2t1cCB0aGUgYmluZGluZyBhbmQgY29udmVydCBpdCB0byB0aGUgbmV3IG9uZS5cblxuICAgICAgdGhpcy5zZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgdGhpcy5tYXRjaEhhbmRsZXIgPSBuZXcgTWF0Y2hIYW5kbGVyKHRoaXMpO1xuICB9O1xufVxuXG4vLyByZWdpb24gY29uc3RzIGFuZCB1dGlsc1xuY29uc3QgbGlzdENvbW1hbmRzID0gKGFwcDogQXBwKTogT2JzaWRpYW5Db21tYW5kW10gPT4ge1xuICAvLyB0b2RvIHJlbW92ZSBhbnkgdHlwZVxuICBjb25zdCBhbnlBcHAgPSBhcHAgYXMgYW55O1xuICBjb25zdCBjb21tYW5kcyA9IGFueUFwcC5jb21tYW5kcy5jb21tYW5kcyBhcyBDb21tYW5kTWFwO1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjb21tYW5kcyk7XG59O1xuY29uc3QgaW50ZXJwcmV0TWF0Y2ggPSAoYmVzdE1hdGNoOiBPcHRpb25hbDxUcmllTm9kZTxLZXlNYXA+Pik6IE1hdGNoS2luZCA9PiB7XG4gIGlmICghYmVzdE1hdGNoKSB7XG4gICAgcmV0dXJuIE1hdGNoS2luZC5Ob01hdGNoO1xuICB9XG4gIGlmIChiZXN0TWF0Y2guaXNMZWFmKCkpIHtcbiAgICByZXR1cm4gTWF0Y2hLaW5kLkZ1bGxNYXRjaDtcbiAgfVxuICByZXR1cm4gTWF0Y2hLaW5kLlBhcnRpYWxNYXRjaDtcbn07XG5jb25zdCBkZWZhdWx0SG90a2V5czogS2V5TWFwW10gPSBbXG4gIG5ldyBLZXlNYXAoJ2VkaXRvcjpmb2N1cy1sZWZ0JywgW0tleVByZXNzLmN0cmwoJ2InKSwgS2V5UHJlc3MuanVzdCgnaCcpXSksXG4gIG5ldyBLZXlNYXAoJ2VkaXRvcjpmb2N1cy1yaWdodCcsIFtLZXlQcmVzcy5jdHJsKCdiJyksIEtleVByZXNzLmp1c3QoJ2wnKV0pLFxuICBuZXcgS2V5TWFwKCdlZGl0b3I6Zm9jdXMtdG9wJywgW0tleVByZXNzLmN0cmwoJ2InKSwgS2V5UHJlc3MuanVzdCgnaycpXSksXG4gIG5ldyBLZXlNYXAoJ2VkaXRvcjpmb2N1cy1ib3R0b20nLCBbS2V5UHJlc3MuY3RybCgnYicpLCBLZXlQcmVzcy5qdXN0KCdqJyldKSxcbiAgbmV3IEtleU1hcCgnY29tbWFuZC1wYWxldHRlOm9wZW4nLCBbXG4gICAgS2V5UHJlc3MuY3RybCgncScpLFxuICAgIEtleVByZXNzLmp1c3QoJzEnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCcyJyksXG4gICAgS2V5UHJlc3MuanVzdCgnMicpLFxuICBdKSxcbiAgbmV3IEtleU1hcCgnY29tbWFuZC1wYWxldHRlOm9wZW4nLCBbXG4gICAgS2V5UHJlc3MuY3RybCgnICcpLFxuICAgIEtleVByZXNzLmp1c3QoJ3AnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdhJyksXG4gICAgS2V5UHJlc3MuanVzdCgnbCcpLFxuICAgIEtleVByZXNzLmp1c3QoJ2wnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdlJyksXG4gICAgS2V5UHJlc3MuanVzdCgndCcpLFxuICAgIEtleVByZXNzLmp1c3QoJ3QnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdlJyksXG4gIF0pLFxuXTtcbmNvbnN0IGRlZmF1bHRTZXR0aW5nczogS2V5QmluZGluZyA9IHtcbiAgaG90a2V5czogZGVmYXVsdEhvdGtleXMsXG59O1xuY29uc3Qgd3JpdGVDb25zb2xlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zb2xlLmRlYnVnKGAgTGVhZGVyIEhvdGtleXM6ICR7bWVzc2FnZX1gKTtcbn07XG5jb25zdCBjcmVhdGVOb3RpY2UgPSAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIG5ldyBOb3RpY2UoJ0xlYWRlciBIb3RrZXlzOiAnICsgbWVzc2FnZSk7XG59O1xuLy8gZW5kcmVnaW9uXG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIk1vZGFsIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlBsdWdpbiIsIk5vdGljZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFR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RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0wsQ0FBQztBQWFEO0FBQ08sU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQzVCLElBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRixJQUFJLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUUsT0FBTztBQUNsRCxRQUFRLElBQUksRUFBRSxZQUFZO0FBQzFCLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQVksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEQsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcseUJBQXlCLEdBQUcsaUNBQWlDLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBQ0Q7QUFDTyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFD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
