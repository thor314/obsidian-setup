---
creation-date: 2022-11-06 16:03
---
# Getting Started with Obsidian
```toc
```
**The links to plugins in this page aren't broken.** This document is designed to be read from within an Obsidian Client. Clone the [repo](https://github.com/thor314/obsidian-setup) or copy paste the [document](https://raw.githubusercontent.com/thor314/obsidian-setup/main/Getting%20Started%20with%20Obsidian.md) into your vault to make the links work.

Obsidian is a note-taking application. It's supports pretty much every Markdown feature you might want, is free-to-use, heavily customizable and extensible with an active contributor community, and lives on the user local file system.

Obsidian is closest in spirit to Notion, if Notion were local-first and Markdown based. If you use Notion and find clicky interfaces inadequate, or if you use HackMD and would like a local repository for organizing markdown thoughts, Obsidian might be for you. On the other hand, Obsidian is very local-first, and does not currently support a web-app for editing documents with others in real-time; for that I typically use HackMD.

Alternatively, if you're familiar with Emacs Org-mode, Obsidian feels to me like what Org mode's flexibility and extensibility attempted to achieve, but in a Markdown-first client.

I've been an Obsidian user for about a year, and have heavily customized it to suit my own needs for knowledge-base building, journaling, self-organization, and more. I prefer keyboard-based interfaces and vim keybindings, but this post should be generally accessible. We'll go over Obsidian in three parts.

In **Part One**, we'll address a few key features, settings, and plugins. I've set up a sample Obsidian directory to go along with this post, containing most of the setup choices I describe here. You may [clone it](https://github.com/thor314/obsidian-setup) to try it out. If you'd like to steal some or all of the settings, copy the `.obsidian*` folder. If you don't get too bogged down in the recommended community plugins, Part One serves as a reasonable 10-30 minute introduction to setting up Obsidian.

In **Part Two**, we'll talk about how to use Obsidian for note taking, knowledge-basing, and journaling. This section aims to be a guided tour through ways that people use Obsidian, and inspiration for how you might set Obsidian up for your own uses.

Finally, in **Part Three**, I give a listed reference of every plugin I've looked at in the last year, and how you might use them. I've looked at a lot of plugins. In preparation for this post, I looked at a lot more. Trying out and setting up plugins can be time intensive; my goal here is to give an opinionated list of what's out there and help you choose what you want, getting through your set-up quicker. This post is intentionally opinionated: my opinions and needs may not match yours, though I try to paint with as broad a brush as possible.

This guide assumes the reader already has experience with writing documents in Markdown.

This post is more like three posts. Read it how you'd like, but the post is intended as a guide as well as a reference; I aimed to cover everything I learned in a year. Take your time learning to use the tool, don't try to learn everything in a day.

For questions, feel free to [message me on Twitter](https://twitter.com/cryptograthor), shoot me an email at thorck a-squiggle pm dot me, or try the [Obsidian User Forum](https://forum.obsidian.md/).

## Part One: Getting Started
This section leads through installing and setting up Obsidian. Several organizational features and settings of Obsidian are highlighted. This section aims to be a 30-40 minute skeleton for getting started.

### An aside on the security of installing plugins
I weakly claim that none of the community plugins I install or recommend are out to pwn your system, but I could be wrong. If you installed Obsidian unsandboxed, your system is more vulnerable to malicious plugin authors. A way to avoid this is to either:
- Audit every plugin and update yourself. Auditing plugins is time-intensive, but is the only way to be absolutely confident in your system security.
- Prefer only plugins with many downloads, in which case, a malicious or compromised plugin maintainer will only pwn you *and* everyone else.
- Use a sandboxed installation, which prevents Obsidian from poking your system except in very constrained ways, but will prevent plugins like *Obsidian Git* from being able to poke your system for automated git backups.
- Live with risk. This isn't necessarily bad, just know that you might not want to keep anything too valuable on a machine with a larger attack surface.

### Installin Stuff
[Go to the install page](https://obsidian.md/download) or copy the instructions below. As described above, opting for a sandboxed installation is more secure, especially if you use many community plugins.
```sh
# MacOS
# Brew uses the macOS sandbox to install
# https://docs.brew.sh/FAQ#why-does-homebrew-say-sudo-is-bad
brew install --cask obsidian

# Linux; I recommend the snap installation as I'm biased against flatpak for being verbose on the command line, unforgivable
# from my setup script: https://github.com/thor314/.setup/blob/main/install.sh#L189

# Change 1.0.3 to the current version
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.0.3/obsidian_1.0.3_amd64.snap
# Run in sandbox (more safe, especially if you're using many extensions)
snap install obsidian_*.snap
# Run outside of sandbox, allow Obsidian to poke your system (less safe)
snap install --dangerous --classic obsidian_*.snap
```

### Getting started
Open the app, and make a directory, as directed by the GUI. Note that you can manipulate files via the terminal as well. Make a new file, and play with the buttons on the left sidebar. The most useful hotkeys are is **Ctrl-P**, bringing up the Command Palette and **Ctrl-,** for settings.

Take a couple minutes to play around with the basic Markdown document. See the [Obsidian Markdown Guide](https://www.markdownguide.org/tools/obsidian/) for a full list of supported Markdown features. If a feature you would like is not supported, there may be a plugin that extends Obsidian with that feature.

Before diving into some settings, it is worth highlighting three useful features for organizing your notes: **tags**, **folders**, and **links between notes**.

#### Tags
Tags are special identifier recognized by the editor when searching for files. Tags can be heirarchical, and declared either in the metadata or in the file with a hashtag, i.e. \#tag-name.
You can include YAML front-matter to set metadata for your file in a block like this:
```
---
my-metadata: some-input
rating: 10
tags: some-tag-category/kind-of-example, some-tag-category/a-different-kind-of-example, random
alias: another-name-for-this-file
---
```

Where `my-metadata` and `rating` are just a demo that you can create your own metadata fields. `alias` specifies alternate titles for your note when searching your vault. Tags are useful for grouping notes by topic, or with any other categorization system you prefer. Several plugins exist for extending the utility of tags, and are described in greater detail below.

#### Folders
Folders are literal directories on your file-system. Where a single file may have multiple categorizing tags, files exist only in a single folder. I find folders are most useful for separating notes created for different *purposes* but not *topics*, as a note is likely created with a single intention, but potentially multiple related topics.

For example, I keep a folders for:
- templates - note templates for creating new notes
- periodic - a folder for journaling and other periodic review notes. I spend most of my time wandering into and out of my daily journal note for jotting down quick thoughts.
- org - a folder for self-organization notes.
- notes - unstructured notes on any topic or source, eg. notes on a book, or a quick thought about whatever topic.
- graph - structured notes where each note in the graph folder corresponds to some concept with linkage to other concepts, expanded on in more detail below.
- writing - sometimes I blog or write creatively.

These folders are included in this template vault.

#### Links
Notes may link between one another with \[\[square brackets\]\], or annotated links with brackets with a pipe: \[\[note name|what appears in the file\]\]. Links to other files may also be visually included in a note with a leading exclamation point \!\[\[note-title\]\], though I don't much care for this feature.

Links within the vault Obsidian users may visualize all the linkages in their vault with a graph. I find the eye-candy graph to be rarely useful, but the process of thinking of concepts in a graph of dependencies as a useful structure for organizing thought. I most commonly link from within my journal to notes created elsewhere in the vault, and between notes in the graph folder.

#### Closing comments on structure
We'll have more to say on workflows in a moment. Hopefully these initial comments have given some idea of what organization might make sense for you in Obsidian. I'd now like to highlight several settings and plugins that make Obsidian easier to use.

We won't go through every setting, just a few important ones. On your first read through, I might recommend skipping the plugin links until a second pass, as it's easy to spend an hour rabbitholing on a plugin. I also list all my plugins recommendations and how to set them up in part 3.

#### Some Sane Defaults
- **Editor**:
    - spellcheck, overlaps with [LanguageTool](obsidian://show-plugin?id=obsidian-languagetool-plugin), which also checks grammar. I toggle to enable checks when working on a page I intend to publish.
    - vim mode - configurable via the [vimrc](obsidian://show-plugin?id=obsidian-vimrc-support) plugin. Without vim bindings, Obsidian would be much less powerful for me.
- **Files and Links**:
    - Move deleted files to Obsidian `.trash` folder instead of deleting, makes for easy recovery
    - Automatically update internal links - Obsidian can track links between files, and update links when you change title names. In a file, try typing the filename of another filename inside \[square brackets\] to link between files.
    - Default location for new attachments set to *In the folder specified below: `media`*; storing all media in one location is convenient for avoiding clutter in your directories. You may want to exclude your media folder from searches.
- **Appearance:** About the left and right bars: the bars are often useful, but tend to be in the way when working. I recommend setting a hotkey to toggle them (I've set F3 and F4 here).
    - Minimal is a popular theme with a [plugin to tweak](obsidian://show-plugin?id=obsidian-minimal-settings) elements of the appearance, like coloring headers differently. [Hider](https://obsidian.md/plugins?id=obsidian-hider) is also useful for hiding unwanted UI elements.
    - The native fonts are good, but I like custom fonts. I use [Fira Code](https://github.com/tonsky/FiraCode) for a monospace font, and I use [Karla](https://fonts.google.com/specimen/Karla) and [Atkinson](https://brailleinstitute.org/freefont) for system and text fonts. If you want to font-dive, check out [nerdfonts](https://www.nerdfonts.com/). You may have to log out and log back in before Obsidian recognizes your fonts.[^1]
- **Hotkeys** - There's a lot to unpack here, but the default keybinds are basically okay. [Hotkeys++](obsidian://show-plugin?id=hotkeysplus-obsidian) is quite good as an upgrade to the default keybindings.

#### Core Plugins
  We'll run through the plugins Obsidian ships with. Some are good, others are outclassed by existing community plugins.
  - Audio recorder - Record audio and save in a note; I don't use this.
  - Backlinks - Show what other notes link to this note; great for knowledge-graphing
  - Command Palette - Good command selector, use often with ctrl-P.
  - Daily Notes - If you intend to journal but not do weekly/monthly/quarterly/yearly notes, Daily Notes is good enough. If you do want to do those things, use [Periodic Notes](obsidian://show-plugin?id=periodic-notes) instead.
  - File Explorer - I prefer [File Tree](obsidian://show-plugin?id=file-tree-alternative), which is more compact. However, I rarely use the explorer or tree to select files, preferring to open files with search.
  - File recovery - Great file backup, takes snapshots of the vault every $N$ minutes for file recovery.
  - Format converter - for migrating from another app.
  - Graph View - If using Obsidian for knowledge-basing, Graph view is occasionally useful, but mostly eye-candy. There are many adjacent plugins, we'll get to those in part 3.
  - Note composer - I would rather just copy paste than have hotkeys to break notes into parts. There's a popular community plugin to power this feature up called [Note Refactor](obsidian://show-plugin?id=note-refactor-obsidian), but I don't use it.
  - Outgoing links - Show the outgoing links from the open file in the right sidebar. I don't use it often.
  - Outline - See the outline of a long note in the right sidebar, not often used.
  - Page preview - Hover a link to see the first few lines, Wikipedia style. Great feature.
  - Publish - Premium feature, still very WIP as of May 2023, but okay for demo-ing your knowledge vault online.
  - Quick Switcher - Outclassed; I use [quick switcher++](obsidian://show-plugin?id=darlal-switcher-plus) to search for notes, subheadings and more.
  - Random note - never used
  - Search - Good. Search through your vault for stuff. [Omnisearch](obsidian://show-plugin?id=omnisearch) is a search power-up.
  - Slash - I prefer to use command palette.
  - Slides - Never used, but hypothetically for making presentations from markdown.
  - Starred - I prefer to set hotkeys with [Hotkeys for specific files](obsidian://show-plugin?id=obsidian-hotkeys-for-specific-files) for my most used files.
  - Sync - Premium feature for $100/year to sync files across devices; there are community plugins if you'd like to avoid the fee and sync via dropbox or git repos.
  - Tags - Disabling the tags plugin doesn't disable tags, only the right-sidebar tags interface. Plays nicely with the [Tag Wrangler](obsidian://show-plugin?id=tag-wrangler), which adds tools to manage tags.
  - Templates - Create notes from templates, but very limited fields to template. [Templater](obsidian://show-plugin?id=templater-obsidian) is the powered up version of Templates.
  - Unique note creator - Create random hashes for note prefixes in the Zettelkasten style". I don't use this.
  - Word count - Show the word count at the bottom, nice to have. [Better word count](obsidian://show-plugin?id=better-word-count) eclipses this by updating the word count when you select a section of text.
  - Workspaces - I don't use this, but workspaces can be used to open a specific set of pages. Useful for systemically returning to a set of notes. [Workspaces Plus](obsidian://show-plugin?id=workspaces-plus) enhances the workspace workflow.
- **Community Plugins**: See [[#Part Three All the plugins]].

## Part Two: Workflows
Carrying on, we're going to focus on some common workflows for the app. We'll focus on outfitting Obsidian for note taking, knowledge basing, and journaling.

### Note taking
I mentioned above that I prefer to bifurcate my notes into a **notes** directory for unstructured notes, and a **graph** directory for structured conceptual notes. I find this low-enough overhead. Sometimes **notes** notes become **graph** notes, sometimes I start in graph if I know that a note is suffficiently conceptual to start with.

For new users, it may be worthwhile to ignore the graph part of this workflow until Obsidian feels more comfortable, or until a need for graph-based structure becomes self-evident.

Normal note-taking should be fairly straight-forward. My current workflow is to create a new note with `Templater: create new note from template` bound to ctrl-n, allowing me to template the note. The note will be created in the folder the user is actively in, and needs to be moved to the correct folder, i.e. with `Move current file to another folder`, which I bind to alt-r. I then modify whatever metadata is relevant, e.g. tags for topic or source type of source material. If you are inclined, a note will only ever have one type of source material, so it may be worth dividing these notes by source type.

And that's it. Have fun taking notes.

### Knowledge Basing
Graphing and linking, if you intend to take notes in this way, is reasonably similar, but with a few subtleties worth pointing out:
- The reason we use a graph at all is to **make the connections between concepts clear**.
- Therefore, each note in the graph should aim to be **representative of a single concept** that other concepts may atomically gesture at.
- When describing concepts, **minimum-length notes** that state exactly the point, are better suited for clarity than long-winding notes.
- Consider the types of objects that live in your graph. For mathematics notes, the definition of a term is different from a theorem is different from an algorithm. Consider using tags or note titles (i.e. `algorithm-Euclidean Algorithm`) to disambiguate.
- A **subject/topic note** is a note that every other graph note in that subject points to.   Consider using topic notes to unite notes across topics, instead of, or in addition to using tags for graph notes. For example, the Euclidean Algorithm points to the topic `topic-number theory`, which in turn, points to the topic `topic-mathematics` in my vault.
- It may eventually prove worthwhile to have **multiple graph folders**. An example: I graphed the dependencies of theorems and definitions from the book Abstract Algebra by Dummit and Foote, with about 160 notes within the graph. I have a graph folder dedicated to that book.
- **Don't subdivide the graph folder**. The structure within the graph should be dictated by links and maybe also tags, but not directories.
- The best note taking system is the one you stick with. Graph oriented note taking can be different from your mental model. Don't stick with it if it isn't working.

### Writing n Journaling
Keeping a daily journal for self-organization makes it easier to jot down thoughts over the course of a day. Obsidian makes it very easy to journal: hit a hotkey, write, and jump back to wherever you were before. I bind my daily journal to F12 with [Hotkeys for specific files](obsidian://show-plugin?id=obsidian-hotkeys-for-specific-files).

The default Daily Note plugin is all you need to get started journaling, but if you'd like to also write regular reviews (options for weekly, monthly, quarterly, yearly), you should look instead at [Periodic Notes](obsidian://show-plugin?id=periodic-notes), which is straightforward to set up, and works well with templates.

Journal notes can be further adapted to your needs with the [Templater](obsidian://show-plugin?id=templater-obsidian) plugin. I use templater for filling metadata, suggesting tasks, automatically linking to other notes, etc. See [[journal]] for an example.

#### Task management
You can also use your journal for lightweight task management. I sort and dump todos into a task-backlog note, jump to that note with a hotkey, and copy-paste todo's into an area in my journal.The [Rollover Daily Todos](obsidian://show-plugin?id=obsidian-rollover-daily-todos) plugin can be used to update the tomorrow's  journal entry with today's unfinished tasks.

For recurring tasks, I've tried [Tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) and [Todoist Sync](obsidian://show-plugin?id=todoist-sync-plugin). Tasks works from within your vault, Todoist sync works with the Todoist task management app. Both work fine; Todoist has a better mobile experience, but Tasks integrates more natively into Obsidian.

With Tasks, the user makes writes tasks with an option for scheduled due dates and/or recurrence cadences:
- [ ] #task groceries ⏫ 🔁 every week on Saturday ⏳ 2022-11-11 📅 2022-11-12

Tasks can be included in the daily todo by putitng a dynamic block in the journal template:
```tasks
not done
short mode
scheduled before tomorrow
limit to 5
```

The workflow in Todist is largely the same: write recurring tasks in the app, include a codeblock in the journal template to display tasks scheduled for the day. The [Todoist Sync](obsidian://show-plugin?id=todoist-sync-plugin) plugin also allows the user to create Todoist tasks from within Obsidian.
```todoist
{
"name": "Todoist tasks",
"filter": "today | overdue "
}
```

#### Calendar Integration
You may also want to want to interact with and display information from your Calendar in your daily journal. There are several calendar plugins in Obsidian. I currently use [Google Calendar](obsidian://show-plugin?id=google-calendar), though it took a half hour of fiddling with the Google Calendar Cloud Platform to set up. Being able to display the day's google calendar to remind me of any upcoming meetings is nice, but the UI could be better. You can also use the plugin to set manipulate events. The following codeblock renders my daily calendar into my journal:
```gEvent
date: {{date}}
type: day
```

## Part Three: All the plugins
Here's my notes on some nice plugins, and how to fix some user-experience paper cuts.

The following plugin list documents the list of plugins I'm using or trying, or have noped out of. The goal here to help you figure out what plugins you might like to install, and how to get off the ground with Obsidian with less setup cost.

Use the following links to jump ahead if you'd like.
- [[#Look at these plugins first]]
- [[#General low setup|General low setup]]
- [[#General medium setup|General medium setup]]
- [[#General high setup|General high setup]]
- [[#Knowledge Basing Plugins|Knowledge Basing Plugins]]
- [[#Journaling Plugins|Journaling Plugins]]
- [[#Plugins I should mention but don't use|Plugins I should mention but don't use]]

### Look at these plugins first:
First up, a handful of plugins that dramatically improve Obsidian.
- [Templater](obsidian://show-plugin?id=templater-obsidian) - More powerful tools for templating files and creating files from templates than the default Template plugin offers. If you're comfortable writing JS scripts, you may embed [your own scripts](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html) within templates. [Docs](https://silentvoid13.github.io/Templater/). The tool has an active [discussion forum](https://github.com/SilentVoid13/Templater/discussions). See the templates directory for some templater examples.[^2]
- [Vimrc Support](obsidian://show-plugin?id=obsidian-vimrc-support) - If you use Vim mode, you probably want this. See the `.obsidian.vimrc` file for a sample setup, and the [home page](https://github.com/esm7/obsidian-vimrc-support) for info. You'll probably want to enable yank-to-system-clipboard and a couple other things. If you use vim in Obsidian, you can't actually copy text without unbinding Ctrl-C, or using vim yank-to-system-keyboard.
- [Omnisearch](obsidian://show-plugin?id=omnisearch) - Powered up fuzzy grepping search across files and vaults. Replaces core search plugin, and in-file search. Bind vault-search to Alt-O, runs slower than find-note search, which doesn't search inside files. For another powered-up search with many settings for filtering, see [Vantage](obsidian://show-plugin?id=vantage-obsidian).
- [Hotkeys for Specific Files](obsidian://show-plugin?id=obsidian-hotkeys-for-specific-files) - For your notes that you intend to regularly revisit, it may be worth binding hotkeys to them. Works nicely with Leader keys. I prefer this over starring notes. I bind keys for templates that I edit frequently (periodic note templates), personal-organization hub notes, and personal reference notes.
- The `Minimal Theme` in Appearance settings, and [Minimal Theme Settings](obsidian://show-plugin?id=obsidian-minimal-settings) - Set up Obsidian to look the way you want to. I use the Atom custom theming, enable focus mode, change headers to be of different colors, and disable image maximization.
- [Smarter Markdown Hotkeys](obsidian://show-plugin?id=obsidian-smarter-md-hotkeys) - Hotkeys to replace many toggle commands in Obsidian. Smarter Markdown Hotkeys assumes that if your cursor is on a word or part of a word, you mean to bold/italic/whatever the whole word, not put asterisks in the mi\*\*\*\*dle of the word like this. I bind many of these, replacing defaults where possible.
- [Advanced Tables](obsidian://show-plugin?id=obsidian-advanced-new-file) - Must have, makes working with Markdown tables easy. Less powerful but also relevant, see [Table Editor](https://github.com/ganesshkumar/obsidian-table-editor) for another tool for editing markdown tables and csv's, and [Table Extended](https://github.com/aidenlx/table-extended) if you want a MultiMarkdown extended syntax for formatting markdown tables.

### General low setup
These plugins tend to introduce minor UX improvements or generally helpful features. Each requires very little setup (<5 minutes):
- [Auto Link Title](obsidian://show-plugin?id=obsidian-auto-link-title) - No setup. Paste a link from the internet, replace the link with the title and markdown link.
- [Better word count](obsidian://show-plugin?id=better-word-count) - One feature difference from the default word count (see bottom ribbon): select some text, the wordcount will reflect the words in the selection.
- [Clear Unused Images](obsidian://show-plugin?id=oz-clear-unused-images) - Finds unused images in your media folder and clears them, saving space in your vault.
- [Dictionary](obsidian://show-plugin?id=obsidian-dictionary-plugin) - Create a dictionary view in the right sidebar, includes a thesaurus. Bound to Alt-D. Supports several languages.
- [Filename Heading Sync](obsidian://show-plugin?id=obsidian-filename-heading-sync) - H1 headers should usually match filenames. This plugin automates that. Worth disabling for templates in the templates folder, which may have keywords in their H1.
- [Footnote Shortcut](obsidian://show-plugin?id=obsidian-footnotes) - 1 new hotkey for creating, jumping to, and jumping back from footnotes, which I bind to Alt-F. I tried [Better Footnote](obsidian://show-plugin?id=better-fn), but found its model of footnotes less convenient. I also like [Tidy Footnotes](obsidian://show-plugin?id=obsidian-tidy-footnotes), which re-orders misordered footnotes.
- [File Tree Alternative](obsidian://show-plugin?id=file-tree-alternative) - alternative to the default file-explorer. Shows files in a more compact way, with note counts. Doesn't require much setup; you will know quickly whether you like or hate the UI. Though I tend to use the tags view more than either.
- [Hider](obsidian://show-plugin?id=obsidian-hider) - Hide UI elements you don't like. I hide the app ribbon (don't do this unless you're totally comfortable with the keyboard commands!) and the scrollbar.
- [Hotkeys++](obsidian://show-plugin?id=hotkeysplus-obsidian) - Some overlap with vim mode. I mainly use this to toggle to-do lists and blockquotes. The default keybinds are fine.
- [Keyboard Analyzer](obsidian://show-plugin?id=keyboard-analyzer) - Can show you a modal of which hotkeys you've bound where with `Open Keyboard Shortcuts View`. This is very useful if you bind many keys, or want to see what keys are unbound.
- [Natural Language Dates](obsidian://show-plugin?id=nldates-obsidian) - Trigger Obsidian to replace natural language dates with the character `@`.
- [Obsidian Pandoc](obsidian://show-plugin?id=obsidian-pandoc) - Tool to export notes to other formats: pdf, html, ePub, docx, Latex, etc. Requires that you have `pandoc` and `pdflatex` CLI tools, which you should be able to install with your package manager of choice. You have to set up the export directory before you can use this plugin.
- [Paste Image Png to Jpeg](obsidian://show-plugin?id=obsidian-paste-png-to-jpeg) - automatically rename images to indicate what file they live in for clarity, and compress images to take less space on pasting.
- [Remember Cursor Position](obsidian://show-plugin?id=remember-cursor-position) - Does what it says on the box: remembers cursor position across files. I like this a lot.
- [Scroll Offset](obsidian://show-plugin?id=obsidian-scroll-offset) - Keep some distance between your cursor and the bottom of the screen, I set to 80 px, or about 3 lines. If you click into the buffer space, you break the spacing for the current note.
- [Show Current File Path](obsidian://show-plugin?id=obsidian-show-file-path) - Show the file path in the bottom ribbon in an unobtrusive way.
- [Tag Wrangler](obsidian://show-plugin?id=tag-wrangler) - More tools to manage tags in the core plugin right-sidebar tags pane.
- [Tidy Footnotes](obsidian://show-plugin?id=obsidian-tidy-footnotes) - A command to reorder your footnotes, if they are out of order.
- [Trim Whitespace](obsidian://show-plugin?id=obsidian-trim-whitespace) - Automatically trim unused whitespace. A common feature in IDEs, nice to have it here as well, especially if you version control with git.

### General medium setup
Plugins that you may want to poke for at least 10 minutes. I recommend trying out each of these, as they tend to straddle the boundary of *easy to setup and use*, and pretty useful.
- [Completr](obsidian://show-plugin?id=obsidian-completr) - YAML frontmatter and LaTeX completions. I disable natural language completions, as I find it more often annoying than helpful.
- [Database Folder](https://github.com/RafaelGB/obsidian-db-folder) - Create a database folder that tracks notes within a given folder, built around the Dataview plugin. Basically, a simplified version of the dataview plugin, with the specific use case of tracking particular folders. Useful for creating reference list notes, or organization tasks like tracking notes on people, journal files, etc. To make best use, think about what metadata information you would want to see in the database folder about each note. Then template that YAML information in your templates for that note type.
- [LanguageTool Tracker](obsidian://show-plugin?id=obsidian-languagetool-plugin) - Integration with the [LanguageTool](https://languagetool.org/) grammar checker, nice extension for avoiding dumb grammar issues. I prefer this over the default spellchecker, as LanguageTool checks for spelling errors and grammar issues. LanguageTool has a free mode and a premium mode, the free mode is already reasonably decent. There's also a browser extension for LanguageTool, if you're into that.
- [MetaEdit](obsidian://show-plugin?id=metaedit) - Edit the YAML metadata with a customizable modal window. Can be used to name YAML tags and enumerate their values, with a little set-up. Currently using this, would like to eventually try the [Metadata Menu](obsidian://show-plugin?id=metadata-menu) plugin, which appears to have similar goals and a few more options.
- [Obsidian Git](obsidian://show-plugin?id=obsidian-git) - Back up your personal vault to a remote git repository every N minutes. I've stopped using this in favor of the premium Sync, but it is well done. It may not work with sandboxed Obsidian clients.
- [Quick Switcher++](obsidian://show-plugin?id=darlal-switcher-plus) - Replaces the Quick Switcher default plugin. The default command palette shows key-bindings, so the default is still preferred there. I bind Ctrl-S to `Symbol Mode` and Ctrl-L to `Related Items Mode`, and Ctrl-H to `Headers Mode`, and move `Search Replace` to Ctrl-R.
- [Table of Contents](obsidian://show-plugin?id=obsidian-plugin-toc) and [Dynamic Table of Contents](obsidian://show-plugin?id=obsidian-dynamic-toc) - If you want a plaintext Table of Contents inserter, go for the former. If you'd prefer your ToC to update dynamically render with file contents (can't copy the contents of the rendered table), there's the latter. The former is buggier, and tends to number incorrectly, but are easy to replace with bullet points.
- [Tag Folder](obsidian://show-plugin?id=obsidian-tagfolder) - Alternative views on Tags. Warning that the Tag folder does NOT work in an obvious way, but instead represents permutations of all tags in file; that may have been unclear, see their docs. Tag Folder's representation of tags seems powerful, though I'm still evaluating how I'd like to use it in relation to the default tags pane.
- [Workspaces Plus](obsidian://show-plugin?id=workspaces-plus) - enhances the default Workspaces plugin with useful UI elements and hotkeys. Workspaces are a good candidate for leader keys.

### General high setup
Some plugins take longer to set up, but enable entirely new Obsidian workflows. Each of these may take at least a half hour to set up and get acquainted with. If you have time for just two, familiarize yourself with just 2, learn to use Templater and QuickAdd. Vimrc too, if you're using Vim mode. You can use the Dataview plugin to query your vault like an SQL database, but this is
- [Dataview](obsidian://show-plugin?id=dataview) - A JavaScript API and SQL-like query language for filtering, sorting, and extracting data from your vault. May heavily influence how you use notes' YAML metadata. Suggested use case: you've used Obsidian for a while, and want to analyze metadata about your vault. If you're using this, you may also want to look at [MetaEdit](obsidian://show-plugin?id=metaedit), for managing note metadata. Some other plugins require Dataview: eg. DB Folder, a lightweight wrapper around Dataview, and ExcaliBrain, an alternate graph view.
- [Linter](obsidian://show-plugin?id=obsidian-linter) - Highly flexible tool for correcting common formatting issues. The tool is very conservative by default, but has many options to enable, as well as an option to define custom rules.
- [QuickAdd](obsidian://show-plugin?id=quickadd) - Powerful way to add content to the vault, but can be very fiddly to set up. QA comes with 4 modes, of which I use 3.
    - [Capture](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/CaptureChoice.md) - Pop up a prompt to append some text to a file, creating it (from a template if you'd like) if the file doesn't exist. In this example repo, I've set up a pair of example captures to append entries and todos to your journal file. You may have to reload Obsidian before your Captures work. See the accepted template syntax [here](https://github.com/chhoumann/quickadd/blob/master/docs/FormatSyntax.md). You can include Templater replacements inside your QA Captures.
    - [Template](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/TemplateChoice.md) - Create files from templates. Capture also allows you to create files from templates, but Template allows you to choose where the file will be created from a dynamic list of directories, which is often a very useful feature. This vault includes an example of using a QA template to create a new reference note in `note/reference` .
    - [Macro](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/MacroChoice.md) - Combine calling other commands. Very useful for simultaneously adding content in multiple locations. I've set up a demo macro for creating a note on a web page, and adding a link to the new note into a web-page reference note. Macros can also call custom JS scripts, if you feel comfortable with that. Also see the [Database Folder](obsidian://show-plugin?id=dbfolder) plugin for building a Notion-style database of similar notes in a directory.
    - [Multi-choice](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/MultiChoice.md) - if you write many QA's, but don't want to bind them each to a key, but instead choose from a dropdown menu of QA's, multichoice allows you to organize them into a list.


### Graph Tools
There are many community plugins that you might be interested in for your knowledge base workflow. I find most of them more effort than they're worth, but I've included the ones that were at least fun to play with. The only two I very much recommend are `Find unlinked files` and `Graph Analysis`.

- [Find unlinked files](obsidian://show-plugin?id=find-unlinked-files) - Utility to find unlinked files. Particularly useful if your graph is large.
- [Graph Analysis](obsidian://show-plugin?id=graph-analysis) - Get statistics about the closeness of any two notes, and some other neat graph math.
- [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) - Intended to allow you to set up structured relationships (parent, child, sibling) between notes, but the data isn't easily used or displayed.
- [Hover Editor](obsidian://show-plugin?id=obsidian-hover-editor) - Open pages and images in an enhanced Page Preview view pop-up. Also functions as a sort of second overlay of tabs. A key feature is the Juggl integration, for hover-over views of notes in the Juggl alternate graph.
- [Journey](obsidian://show-plugin?id=obsidian-journey-plugin) - Tools for finding paths between two notes in your knowledge base. Makes an unfortunate interface choice, the plugin should include a function, but only has a clicky button in the left bar.
- [Juggl](obsidian://show-plugin?id=juggl) - An alternative to the Obsidian native graph view, integrating with Breadcrumbs for a structured view of note-relationships, and Hover for hover-over previews of nodes in the graph. Doesn't do well with vaults with more than 250 notes (which isn't many). [Docs](https://juggl.io/Juggl). I'm currently trying this out. An alternative to Juggl is ExcaliBrain.
- [ExcaliBrain](obsidian://show-plugin?id=excalibrain) - An alternative to Breadcrumbs and Juggl for structured graph content, with a different UI. Requires DataView and Excalidraw to be installed as well.
- [Zootelkeeper](obsidian://show-plugin?id=zoottelkeeper-obsidian-plugin) - Generates a reference index note for notes in specified directories. A lightweight option for creating linked hub notes to represent your directory structure in the graph. Especially useful for areas of your vault that make extensive use of directory structure, though I would recommend trying to get the most out of tags before trying this; I haven't been able to make good use of this plugin.

### Specifically if you work with LaTeX
- [Completr](obsidian://show-plugin?id=obsidian-completr) (repeated from general medium setup) - YAML frontmatter and LaTeX completions. I disable natural language completions, as I find it more often annoying than helpful.
- [Quick Latex for Obsidian](obsidian://show-plugin?id=quick-latex) - Some nice quality of life automation for writing Latex. Most involve pressing space after some short command to expand to a longer unwieldy command. Some highlighted features:
    - auto-fraction: type `a/b<space>` instead of frac{a}{b} $\frac{a}{b}$
    - use tab and shift tab to jump between brackets
    - hotkey for `\begin{align*}` block and matrix block
    - auto-pair $dollars$ and brackets, and select and press $ to enclose an expression
    - auto appends limits for cleaner notation: $\sum\limits_n^i$ vs $\sum_{i}^n$
    - auto-enlarge brackets that would be too small
    - some [custom shorthands](https://github.com/joeyuping/quick_latex_obsidian#enhanced11-custom-shorthand)
- [Extended MathJax](obsidian://show-plugin?id=obsidian-latex) - adds a global preamble file, `preamble.sty`, for defining latex `newcommand`s. Also adds `mchem` and `bussproofs` packages.
- [Copy as Latex](obsidian://show-plugin?id=copy-as-latex) - Copy markdown as LaTeX. Very useful if you move between the two formats. Overlaps Pandoc, but with the feature export selections as opposed to whole files.
- [Obsidian Pandoc](obsidian://show-plugin?id=obsidian-pandoc) (repeated from general low setup) - Tool to export notes to other formats: pdf, html, ePub, docx, Latex, etc. Requires that you have `pandoc` and `pdflatex` CLI tools, which you should be able to install with your package manager of choice.
- [TikZJax](obsidian://show-plugin?id=obsidian-tikzjax): Enable MathJax support for working with TikZ diagrams. If you work with cryptography, take a look at [this library of diagrams](https://www.iacr.org/authors/tikz/).

Less recommended, as I believe they are overshadowed:
- [Latex Suite](obsidian://show-plugin?id=obsidian-latex-suite) - Snippets for latex. I prefer Completr's interface for completions, and this command duplicates some of Quick Latex's snippets.
- [Latex Environments](obsidian://show-plugin?id=obsidian-latex-environments) - Completr does this, but with a better drop-down menu.

### Journaling Plugins
- [Periodic Notes](obsidian://show-plugin?id=periodic-notes) - Good for regular journaling, with good integration with Templates and Templater. I recommend keeping a top-level directory for periodic notes.
- [Rollover Daily Todos](obsidian://show-plugin?id=obsidian-rollover-daily-todos) - Quality of life tool for a lightweight todo workflow in your daily note. Make checkboxes in your journal file in the checkbox area, this plugin automatically rolls unfinished todos over to tomorrow's journal.
- [Tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) or [Todoist Sync](obsidian://show-plugin?id=todoist-sync-plugin)  are both fine. Todoist can send mobile notifications, which is the only difference to me.


### Misc
I make occasional use of [Citations](obsidian://show-plugin?id=obsidian-citation-plugin), an integration for my Zotero vault. Zotero I mainly use to read pdfs of papers and books. Citations allows me to import my highlights and generate citations.

### Plugins I should mention but don't use
A quick run through some of the more popular plugins (>50k downloads) that I don't use. I also include several plugins that I've tried that didn't work out.
- Kanban - I don't like Kanban boards, but you may differ. You may get some mileage out of this if you use Obsidian for a task manager, but I'm biased against Obsidian for anything but lightweight task-management.
- Calendar - Some people like UI candy like this, I tend to regard it as clutter.
- [Comments](obsidian://show-plugin?id=obsidian-comments) - Drop an inline comments overlay into a page, similar to Google Docs. Would be more useful if Obsidian Vaults were more shareable.
- [Diagrams](obsidian://show-plugin?id=drawio-obsidian) - For drawing Draw.io diagrams without leaving Obsidian.
- [Excalidraw](obsidian://show-plugin?id=obsidian-excalidraw-plugin) - Integrate a feature-rich drawing tool into Obsidian. I typically would rather use Obsidian for Markdown, and other applications for drawing, and maybe throw a screenshot into Obsidian if I felt inspired. Suggested use case: you want to doodle along-side your notes or knowledge base.
- [Ozan's Image in Editor](obsidian://show-plugin?id=oz-image-plugin) - Tools to view images, iframes, PDF Files, excalidraw drawings and transclusions in the Editor view. Suggested use case: for those who like non-text embedded content more than I do.
- [Kindle Highlights](obsidian://show-plugin?id=obsidian-kindle-plugin) - Imports your kindle highlights.
- [Readwise Official](obsidian://show-plugin?id=readwise-official) - Import your highlights from kindle, web highlights, and some other places. I'm looking into trying this and Zotero out.
- [Obsidian Jupyter](obsidian://show-plugin?id=obsidian-jupyter) - Turn obsidian into an interactive python repl.
- [Desmos](obsidian://show-plugin?id=obsidian-desmos) - include plots from the Desmos online graphing calculator in your Vault.
- [Creases](obsidian://show-plugin?id=creases) - Not a huge improvement, but gives hotkeys for folding by headers, and a other custom folding methods. I bind the Obsidian native toggle-fold to Alt-H.
- [Tracker](obsidian://show-plugin?id=obsidian-tracker) - similar to Dataview, but with a more constrained use case: collecting statistics about your vault, typically your journal files. [Some examples](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md). Also see [Vault Statistics](obsidian://show-plugin?id=obsidian-vault-statistics-plugin). I don't currently use either.
- Outliner - Vim mode + normal lists does everything this plugin does, and doesn't require me to remember a bunch of custom commands.
- Advanced Slides - Some people make markdown decks, which is neat! I haven't used it yet though.
- Admonition - I find these UI pieces overbearingly large, even for their intended purpose of highlighting **emphasis points**, which I find **bolding text** works just fine for, and is universally supported across formats.
- Mind Map - More UI candy, I prefer a normal table of contents or a graph over a mindmap.
- Sliding Panes (Andy Matuschak Mode) - Deprecated, but I want to highlight the `Toggle Stacked Tabs` command, which does the same. If you use many tabs, stacked tabs is an interesting UI; I'm still figuring out whether I like it. Documentation: [Stacked tabs - Obsidian Help](https://help.obsidian.md/User+interface/Stacked+tabs).. If you do like stacked tabs, try out Pane Relief, for more hotkeys for navigating tabs and panes and Cycle through Panes.
- Checklist - see Tasks 2 bullets up
- Editor Syntax Highlight - Doesn't change Shell or Rust syntax highlighting, so I uninstalled it. Not sure what languages it does affect.
- Day Planner - UI candy. I would only schedule meetings, scheduling my day like the app seems to me a fiddly act in optimistic futility
- Emoji toolbar - I use an operating system-wide emoji selector; if you don't have one, this might be useful.
- Copy Button for Code blocks - Deprecated; this exists as a default feature
- Annotator - I don't annotate pdfs or epubs from obsidian, but if I did, I might use this
- [Google Calendar](obsidian://show-plugin?id=google-calendar) - Poke your google calendar, from Obsidian. May be useful for taking notes for specific meetings, updating your calendar from Obsidian, displaying your calendar from within a journal files, at the cost of losing at least a half hour to the angry god that is the Google Cloud Platform.
- Note Refactor - An upgrade to default Note Composer, but I would typically rather just copy/cut-paste for breaking notes up.
- [Obsidian Charts](obsidian://show-plugin?id=obsidian-charts) - Create charts. Not a lot of setup, the popup on `Insert New Chart`, and `Create Chart from Table` are pretty self-explanatory, but I'm not that interested in charts from Obsidian metadata usually.
- Recent Files - UI candy, but not as bad as some of the others. Still, I wouldn't use this much.
- Obsidian Icon Folder - Icon UI candy, not for me
- Advanced Obsidian URI - I'm not actually sure how I would use this, but it seems likely too fiddly for me.
- [Hotkey Helper](obsidian://show-plugin?id=hotkey-helper) - Tools for managing and viewing plugin hotkeys. Uninstalled after bug caused hotkeys tab to crash.
- Remotely Save - I pay the annual $100 for Obsidian Sync, but this looks like a great way to get around it.
- Buttons - I am keyboard people, and do not like ze buttons.
- Highlightr - I don't read PDFs from Obsidian, but if I did, I might use this.
- Folder Note and AdrianLx's Folder Note - I found the interface for each poorly setup and not actually clarifying for directory structure. These plugins also don't integrate well with File Tree. I would rather use a QuickAdd macro for setting up my reference notes.
- Spaced Repetition - I do flashcard, but not with Obsidian.
- Markdown prettier - Deprecated for Linter
- Pane Relief - More hotkeys for navigating tabs and panes. I haven't gotten around to trying it, looks good though. Same deal with Cycle Through Panes.
- Cycle through Panes - see Pane Relief.
- Projects - Has a lot of overlap with Database folder, which is effectively the same plugin with more features and a different name.
- Diagrams - draw.io diagrams in Obsidian; poor interface decisions though. Doesn't create any callable commands, and doesn't play nicely with File Tree.
- Key Promoter - Attempts to help remind you where your hotkeys are, when you use the mouse to click something you could have hotkey'd. I feel it could be better, the plugin often offers unhelpful advice. Has a neat feature, can show you which hotkeys you use most with `Key Promoter: Statistics`.
- Text Snippets - Okay, but poor ergonomics for a text-snippets plugin; I prefer to use a system-wide text replacer instead
- Advanced New File - Create new files, prompts for what directory to put the file in, so you don't have to move them manually, but has the bug of creating 1-3 empty newlines at the top of your file (oof), so I use `Templater: create new file from template` instead.
- Macros - Not particularly effective for the typical Obsidian workflow, use Vim macros if you need them.
- Open Link With - An issue with clicking links in Obsidian is that it doesn't use your already open browser windows. I'd hoped this plugin would solve this, but it doesn't, unfortunately.
- [Vault Changelog](obsidian://show-plugin?id=obsidian-vault-changelog) - Automatically generate changelog file with entries on the last N notes changed, and their time of change.

## Conclusion
Uh, hope that was helpful. Have fun using Obsidian.

##### Footnotes
[^1]: You can install fonts on Linux with the following:
[^2]:  How to choose between creating a QA Capture, QA Template, QA Macro, and `Templater: Create new note from template` :
```sh
# make a font directory to store your custom fonts, symlink it to .local/share
mkdir ~/$YOUR_DOTFILES/fonts
ln -s ~/.local/share/fonts/ ~/$YOUR_DOTFILES/fonts
# Get the font however you like, often comes in a zip.
# Move the font to the new directory.
# Update the font cache:
fc-cache -f -v
# check the font is installed
fc-list | {grep or rg} FONTNAME
```
- Templater create new note from template: Least setup, just write the template. Create a new note from a template, filed at the top level directory. You will have to manually move the file to it's correct location (I bind this to `Alt R`.)
- QA Template: Some setup and testing. Create a new note from a given template, either in a given directory (less useful) or with a dynamic directory selection (more useful). Allows the user to set a file naming convention.
- QA Capture: As much setup as QA Template. Besides adding new content to other notes, QA capture can also be used to create notes from templates. QA Capture does not have dynamic directory selection, but is as useful as QA template if you already know where the file needs to be created.
- QA Macro: potentially very fiddly. Combine other commands together. Works best with other QA commands, as you can reuse entry values, eg. {{VALUE:filename}}, across commands. See the QA setup for an examlpe macro in this vault.