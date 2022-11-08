---
creation date: <% tp.file.creation_date() %>
---
#journal j-<% tp.date.yesterday() %>
## 📜 Tasks for {{date}} 📜 
<% tp.file.cursor() %>
## {{time}}
This is a sample journal template, used by periodic notes. You can edit this template to change what shows up in your daily journal note. The Templater fields should be evaluated when the note is created, though if you want to use multiple cursor prompts as demonstrated here, use `Jump to next cursor location`  (bound to ctr-alt-j).
I've set up this vault to open this file with the hotkey C-F12, via the Hotkeys for Specific Files plugin, and bound F12 to jump to today's journal note.
<% tp.file.cursor() %>