---
creation-date: 2022-11-06
---
# Getting Started with Obsidian
```table-of-contents
```

> [!NOTE] The links to plugins in this page aren't broken:
>  This document is designed to be read from within an Obsidian Client. Clone the [repo](https://github.com/thor314/obsidian-setup) or copy paste the [document](https://raw.githubusercontent.com/thor314/obsidian-setup/main/Getting%20Started%20with%20Obsidian.md) into your vault to make the plugin links work.

> [!ERROR] If you want to turn vim mode off:
>  If the vault came with Vim-mode already on, and you'd like to turn it off, **ctrl-,** to open settings, toggle the option at the bottom of the Editor pane.

Obsidian is a note-taking application. It's supports pretty much every Markdown feature you might want, is free-to-use, heavily customizable and extensible with an active contributor community, and lives on the user local file system.

This vault is my setup vault, my starting point for creating new vaults. May it be helpful to you as you create your own vault.

### What Obsidian is good for (as compared to Notion)
Obsidian's customizability and plugins allow you to make the application experience your own, even without diving into programming. Note templates, customizable hotkeys, and vim-mode (if you're into that sort of thing) make working with Obsidian delightful.

Obsidian is close in spirit to Notion, another note-taking and general organization tool that you may have used, which provides useful comparison. Obsidian is like Notion, if it were local-first (lives on your file system) and Markdown based (not Notion's proprietary file format). This makes Obsidian well suited for personal tasks like journaling, note-taking, and self-organization.

On the other hand, Obsidian is *not* well suited for:
- Collaborative organization and knowledge bases: Obsidian lives on your file system, not in the cloud (the developers offer cloud hosting and syncing for a \$100 annual subscription.) If you want collaborative markdown a la Google Docs, consider trying out HackMD's book feature.
- Mobile-first experiences: Even with the premium cloud sync, Obsidian's mobile experience is functional, but not phenomenal. I open Obsidian on my phone for grocery lists, or sometimes journal voice memos with speech-to-text, but not much else.
- Tables, spreadsheets, databases: Obsidian can do these things, but Markdown wasn't designed for these features in mind. Setting these up is more involved than just using a Notion database or spreadsheet; I typically use Google spreadsheets for my own data tracking purposes.
- Website hosting: Notion has great website hosting options. For a \$200 per year premium, Obsidian Publish's website offering is okay, but not impressive. However, since you're working with Markdown, you may just copy your files into a static site generator, or otherwise, export them to whatever other format you may desire.

### Overview of this resource
To acknowledge my own preferences, I am a mathematical software developer; I prefer keyboard interfaces to clicky ones. I started using Obsidian at the end of 2021, and now use Obsidian nearly every day, for:
- journaling
- note taking (often with $\LaTeX$)
- project and light task management
- self-organization
- general writing
- meme foldering

I'll describe how you might use Obsidian for each of these in part 2. We'll go over Obsidian in three parts.

In **Part One**, we'll address a few key ideas, settings, and plugins. Part One is intended to serve as a reasonable 15 minute introduction to setting up Obsidian, and to highlight some philosophy about how you might want to set up your vault.

In **Part Two**, we'll talk about how to use Obsidian for the work flows described above. This section aims to be a guided tour through ways that I use Obsidian, and inspiration for how you might set Obsidian up for your own uses.

Finally, in **Part Three**, I give a listed reference of every plugin I've looked at in the last year, and how you might use them. I've looked at a lot of plugins. In preparation for this post, I looked at a lot more. Trying out and setting up plugins can be time intensive; my goal here is to give an opinionated list of what's out there and help you choose what you want, getting through your set-up quicker.

For questions about this resource, feel free to [message me on Twitter](https://twitter.com/cryptograthor), or shoot me an email at thorck a-squiggle pm dot me. For general questions, try the [Obsidian User Forum](https://forum.obsidian.md/).

## Part One: Getting Started
This section introduces some basic features that may be helpful to keep in mind as you set up your Obsidian vault. If you don't have Obsidian installed yet, see the [Obsidian documentation](https://help.obsidian.md/Getting+started/Download+and+install+Obsidian).

I will mention a handful of recommended community plugins in this section, all of which should be pre-installed in this vault. Besides for the Templater and Hotkeys for Specific Files, which I describe shortly, I would advise the reader to avoid rabbit-holing on any plugins mentioned in this section.

### Getting started
Take a couple minutes to play around with the basic Markdown document. See the [Obsidian Markdown Guide](https://www.markdownguide.org/tools/obsidian/) for a full list of supported Markdown features. If a feature you would like is not supported, there may be a plugin that extends Obsidian with that feature.

Make a new file, and play with the buttons on the sidebars. I've made some modifications to the defaults, only a few of these come as default. Some very useful hotkeys are:
- **Ctrl-P** bringing up the command palette
- **Ctrl-,** for settings
- **Ctrl-N** to create a note from a template
- **Alt-O** to open a new file (rebound from Ctrl-o to Alt-o, so that I can use vim Ctrl-o/i)
- **f2** to rename a note
- **Ctrl-M** to mark a list item as a todo checkbox
- **f3** and **f4** to toggle the left and right sidebars
 - **Ctrl-Alt-S** to recover note that you deleted by accident (or see Sync plugin settings, if you buy the premium)
 - **Ctrl-Alt-W** to delete a note
 - **Ctrl-Alt-R** to reload the editor, if something seems weirdly rendered
 - **Alt-,** and **Alt-.** to go to the previous note and vice versa
 - **Alt-R** to refile (move) a file to another folder
 - **Alt-H** while over a heading to toggle folding for everything underneath that header
 - **f12** to open a daily note, and  **Ctrl-f12** to edit the daily note template

You may set your own hotkey settings from within the settings panel.

If you're a terminal jockey, you may notice that the vault will reflect changes you make in the vault filesystem location. This may be useful if you intend to write scripts for your vault. When poking files like `.obsidian.vimrc` or `.preamble.sty`, you may have to reload the app before you observe changes.

Before diving into settings, it is worth highlighting some useful basic features and plugins: **tags**, **folders**, **links**, **templating**, and **hotkeys to files**.

#### Tags and Folders
Tags are sometimes useful for file organization. Tags are like a pseudo-directory structure, where a single file can live in multiple directories simultaneously, e.g.:
- cats pseudo-directory
    - some file tagged \#cats
    - some file tagged both \#cats and \#dogs
- dogs pseudo-directory
    - some file tagged \#dogs
    - some file tagged both \#cats and \#dogs

Tags can also be nested:
- animals psedo-dir
    - cats pseudo-dir
        - file tagged \#animals/cats

Try creating a couple notes (Ctrl-N), add some tags, and open the tags pane (Ctrl-P show tags). Also take a look at the directory structure (Ctrl-P show files; or for a different interface, Ctrl-P file tree reveal active file).

Tag structure is more dynamic and flexible than directory structure. When thinking about how to organize your files, consider using directories to separate notes with entirely different intents. For example, keep a directory for each of journal, notes, and self-organization to keep them separate; but, use tags to organize your notes within these directories.

You can also use YAML front-matter to set tags and other metadata for your files, which is particularly useful when combined with templating and creating databases of your notes with the popular [Dataview](obsidian://show-plugin?id=dataview) plugin. Dataview is powerful, complex, and not worth diving into right now; I only mention it now as food for thought on how you might consider using your note metadata.
```
---
my-metadata: some-input
rating: 10
tags: some-tag-category/kind-of-example, some-tag-category/a-different-kind-of-example, random
alias: another-name-for-this-file
---
```

`my-metadata` and `rating` are just a demo that you can create your own metadata fields. `alias` specifies alternate titles for your note when searching your vault. Tags are useful for grouping notes by topic, or with any other categorization system you prefer.

#### Links
Notes may link between one another with \[\[square brackets\]\], or annotated links with brackets with a pipe: \[\[note name|what appears in the file\]\]. Links to other files may also be visually included in a note with a leading exclamation point \!\[\[note-title\]\], though I don't much care for this feature.

You may also see other notes that link to your current note (Ctrl-P Show backlinks).

Obsidian users may visualize all the linkages in their vault with the graph (Ctrl-Shift-G). I find the visual graph to be more eye-candy than useful; but the process of thinking about my notes as concepts in a graph of related topics as *maybe useful* structure for organizing my thoughts.

Some Obsidian users love their note graph. I find graph-based note taking just worthwhile enough to continue with. More to say on this in part 2. Take notes how you'd like, but know that you can link between your notes.

#### Templates and Templater
Obsidian comes with the **Templates** plugin, for time and date templating. For everything else, [Templater](obsidian://show-plugin?id=templater-obsidian) is the powered up community templating plugin. [repo](https://github.com/SilentVoid13/Templater), [docs](https://silentvoid13.github.io/Templater/).

*remember before clicking the following link, **Alt-**, to return to previous note.*

I've written a sample template for you at [[journal]]. You can click that link with your mouse, or hover over and **alt-enter** to follow the link. The sample template demonstrates:
- using Dataview to display a dynamic last modified date
- using Templater to query for date information at time of note creation, to create metadata, to create the title of today's note, and to link to other notes
- using Templater to set the initial cursor location at time of note creation
- using Templates to create a timestamp

Create your own templates and move them to the template directory to add them to the list of templates you may select from with **Ctrl-N**.

##### Aside on file naming
I follow a particular naming convention for my notes that makes it easier to determine what template I used to generate a note (and therefore what type of note it is) from looking at the filename. For example:
- journals: `j-{{date}}`
- week reviews: `w-{{year}}-W{{week number}}`
- blog notes: `blog-some shortening of the blog title`
- misc observation note: `note-something I thought about`
- definition of a term: `term-Fast Fourier Transform`

This typically duplicates whatever tag was used, but I find the scheme convenient, especially for identifying misfiled notes.

#### Hotkeys for Specific Files
Finally, worth mentioning before we dive into settings is the community plugin **Hotkeys for Specific Files**, which you'll find in Settings, a short scroll down through community plugins. Hotkeys are useful for making your workflow seamless.

I assign hotkeys for files I revisit regularly, for example:
- templates for journaling and periodic review
- self-organization notes, like my todo backlog, reading list, project planning and organization, writing ideas, etc.
- any other note that I want to regularly revisit

Any note that I revisit often gets a hotkey, typically bound to Alt or Ctrl-Alt {1-9}.

### Settings
You may prefer to read this section in the browser so that you may follow along in your Obsidian client. I will only highlight settings I consider useful, or else, those which are superceded by a community plugin.

#### Some Sane Defaults
- **Editor**:
    - spellcheck, overlaps with [LanguageTool](obsidian://show-plugin?id=obsidian-languagetool-plugin), which also checks grammar. I toggle on spellchecking for writing I intend to publish.
    - properties in document: changes how metadata is displayed. I prefer to see my metadata as raw markdown.
    - auto-pair symbols: I find this more annoying than useful.
    - vim mode - configurable via the [vimrc](obsidian://show-plugin?id=obsidian-vimrc-support) plugin. Without vim bindings, Obsidian would be much less {powerful,convenient,fun} for me. This vault comes with my `.obsidian.vimrc`, in which I recommend a few further settings.
- **Files and Links**:
    - Move deleted files to Obsidian `.trash` folder instead of deleting, makes for easy recovery
    - Automatically update internal links - Obsidian can track links between files, and update links when you change title names. In a file, try typing the filename of another filename inside \[square brackets\] to link between files.
    - Default location for new attachments set to *In the folder specified below: `media`*; storing all media in one location is convenient for avoiding clutter in your directories. I have also excluded the media folder from appearing in search results.
- **Appearance:**
    - Minimal is the most popular Obsidian theme and it is good. They maintain a [plugin to tweak](obsidian://show-plugin?id=obsidian-minimal-settings) elements of the appearance, like coloring headers differently. [Hider](https://obsidian.md/plugins?id=obsidian-hider) is also useful for hiding unwanted UI elements.
    - The native fonts are fine. I like custom fonts. I use [Fira Code](https://github.com/tonsky/FiraCode) for a monospace font, and I lately like [Cantarell](https://fonts.google.com/specimen/Cantarell), [Karla](https://fonts.google.com/specimen/Karla) and [Atkinson](https://brailleinstitute.org/freefont) for system and text fonts. If you want to font-dive, check out [nerdfonts](https://www.nerdfonts.com/). You may have to reload before Obsidian recognizes your fonts.[^1]
        - *jump to the end of this footnote by moving the cursor over the footnote and pressing Alt-f. Then press Alt-f again to jump back.*
    - If you ever want to make one-off tweaks to your Obsidian display, you can add your own CSS snippets at `.obsidian/snippets/your_snippet.css`. This vault comes with short two examples.
- **Hotkeys** - This vault is my template vault for setting up new vaults. The keybindings in this vault are my preferred defaults; Your Mileage May Vary. I install [Smarter Markdown Hotkeys](obsidian://show-plugin?id=obsidian-smarter-md-hotkeys) to upgrade a few editing keybinds.

#### Core Plugins
  We'll run through the plugins Obsidian ships with. Some are good, others are outclassed by existing community plugins.
- **Audio recorder** - never used, record audio and save in a note
- **Backlinks** - Show what other notes link to this note; great for knowledge-graphing
- **Bookmarks** - never used. I prefer to just create hotkeys to open my most important files.
- **Canvas** - never used, like a mood board for your notes
- **Command Palette** - Good command selector, use often with ctrl-P.
- **Daily Notes** - If you intend to journal but not do weekly/monthly/quarterly/yearly notes, Daily Notes is good enough. If you do want to do those things, use [Periodic Notes](obsidian://show-plugin?id=periodic-notes) instead.
- **File recovery** - Great file backup, takes snapshots of the vault every $N$ minutes for file recovery.
- **Files** - I prefer [File Tree](obsidian://show-plugin?id=file-tree-alternative), which is more compact. However, I rarely use the explorer to select files, preferring to open files with search.
- **Format converter** - never used, built for migrating from another app
- **Graph View** - Graph view is mostly eye-candy
- **Note composer** - never used. Commands for breaking notes into parts. I just copy-paste. There's a popular community plugin to power this feature up called [Note Refactor](obsidian://show-plugin?id=note-refactor-obsidian), but I haven't used it.
- **Outgoing links** - Show the outgoing links from the open file in the right sidebar. I don't use it often.
- **Outline** - See the outline of a long note in the right sidebar, only useful for really long notes, like this one.
- **Page preview** - Hover a link to see the first few lines, Wikipedia style. Great feature.
- **Properties view** - never used; note metadata appearance plugin that I didn't like
- **Publish** - Premium feature, still very bare-bones as of December 2023, okay for demo-ing your knowledge vault online (not for cheap).
- **Quick Switcher** - Outclassed; I use [quick switcher++](obsidian://show-plugin?id=darlal-switcher-plus) to search for notes, subheadings and more.
- **Random note** - never used
- **Search** - Vault-wide search. Slight preference for [Omnisearch](obsidian://show-plugin?id=omnisearch) for vault search and in-file search, but don't de-activate, as other plugins rely on Search.
- **Slash** - I prefer to use command palette.
- **Slides** - Never used, but hypothetically for making presentations from markdown.
- **Sync** - Premium feature for $100/year to sync files across devices; there are community plugins if you'd like to avoid the fee and sync via dropbox or git repos. I buy it.
- **Tags View** - See all your tags. [Tag Wrangler](obsidian://show-plugin?id=tag-wrangler) provides tools for renaming, merging, toggling and searching for tags from the tags pane.
- **Templates** - Create notes from templates, but very limited fields to template. [Templater](obsidian://show-plugin?id=templater-obsidian) is the powered up version of Templates.
- **Unique note creator** - Create random hashes for note prefixes in the Zettelkasten style". I don't use this.
- **Word count** - Show the word count at the bottom, nice to have. [Better word count](obsidian://show-plugin?id=better-word-count) eclipses this by updating the word count when you select a section of text.
- **Workspaces** - I don't use this, but workspaces can be used to open a specific set of pages. Maybe useful for systemically returning to a set of notes. [Workspaces Plus](obsidian://show-plugin?id=workspaces-plus) enhances the workspace workflow.
- **Community Plugins**: See [[#Part Three All the plugins]].

## Part Two: Workflows
Next up, we'll walk through some workflows of how to use Obsidian for:
- journaling and personal review
- note taking
- project and task management
- self-organization
- general writing
- meme-foldering: see part 3: DB Folder

I'll assume you've at least skimmed part one, which gave a bit of basic philosophy for how to set up your vault.

### Journaling and personal review
I use daily journaling in Obsidian to quickly jot down thoughts over the course of a day. Obsidian makes it very easy to journal: hit a hotkey, write, and jump back to wherever you were before.

Try jumping to the journal file for this vault with F12, or the journal template with Ctrl-F12.

I typically use timestamps as journal sub-headers, created with a text-expander tool, [Espanso](https://espanso.org/install/)[^2]; they look like this:
> ## 13:26
> Text expanders are pretty good, and you should give them a try if you like writing things. Espanso is a cross-operating system text expander geared at people who don't mind editting YAML files from their terminal, Back to journaling.

I typically start my workday with the journal, taking a few minutes to sort out my thoughts, make notes on anything I've read, and warm up my brain. Throughout the day, I revisit the journal to brain dump my intentions for the next hour or two, sort out my thoughts, and record quick notes from calls or whatever else.

If a sub-note grows large, I may cut-paste that section out into its own note, and link to that note from my journal to keep the notes linked.

The default Daily Note plugin is all you need to get started journaling, but if you'd like to also write regular reviews (options for weekly, monthly, quarterly, yearly), you should look instead at [Periodic Notes](obsidian://show-plugin?id=periodic-notes), which is straightforward to set up, and works well with templates, and is installed in this vault.

See [[journal]] for an example journal template file.

I use weekly notes as a recurring commitment to reflect on my values, projects, and other commitments, as the important through-lines of my life. My weekly note template links to other notes that I intend to regularly revisit:
```
# w-<% tp.date.now("YYYY") %>-W<% tp.date.now("ww") %>]]
## reminders:
- look at [[thor-short term goals]]
## reach out to people, make social plans for next week -  [people sheet](https://docs.google.com/spreadsheets/d/redacted)
## do meal planning [[thor-meal planning]], [[thor-grocery list]]
## projects
- [[thor-Project backlog]]
- [[thor-week project planning]]
## [[people-<redacted, someone I care about>]]
## habits - [[thor-routines and habits]]
## old week theme
## new theme
## wanna go make a playlist?
```

I hotkey my review files to F{8-12} and their templates to Ctrl-F{8-12} for convenience.

I also use my journal for lightweight task management. On starting my day, I set my intentions to accomplish certain tasks in the Tasks section of my journal. I copy unfinished tasks from the previous day into today's journal with [Rollover Daily Todos](obsidian://show-plugin?id=obsidian-rollover-daily-todos).

```
## 📜 Tasks:
- [x] 30m self-care in the morning
- [ ] meep
### overflow
### misc
```

If new tasks come up later in the day, I try to avoid the context switch of tackling them right away, and add them to the overflow or misc sections to handle later.

Any tasks that don't need to be prioritized get moved into a backlog task note that I bind to Alt-1. For example, my backlog note might look like:
```
# thor-misc todos n tasks
## hot-swap backlog
- [ ] buy spices - cinnamon sticks, ground cardamum, szechuan peppercorns
- organize the wires round two
## luke-warm swap backlog
- [ ] what do I want for the house vibe
- learn some dice games
- collect all my old writing into one location - 2
- get that shirt tailored?
## general home improvement task backlog
...
```

This lightweight task management system has been great for me: I make todos, shove em in a journal, backlog, or project overview file, and then copy them into my journal as need be.

Journaling in Obsidian is super straight forward, has been helpful for managing my intentions, and gives me a great place to explore my ad-hoc thoughts. If you're journal-curious, I'm a huge fan of how easy Obsidian journaling is to get started with.

Next up, we'll walk through my process for taking notes.

### Note taking
As mentioned above in [[#Links]], Obsidian supports graph-based note taking. Any notes with a link between them will show up in the Obsidian graph (Ctrl-G). The Zettlekasten people seem to think the graph thing changed their life; I'm skeptical it's been useful for me, but the graph is pretty and I'm already doing it, so I keep doing it.

That is, you will probably be well served with just a simple notes directory, topic-tagging your notes reasonably, and skipping to the rest of this section. If you intend to takes notes with $\LaTeX$, I've collected LaTex-related plugin tips in Part 3.

But for the graph-curious; I've been doing the graph-based note taking thing for a year or so and I like it enough to keep doing it. My basic vault structure looks like this:
- **notes directory:** a collection of notes I've taken on books and articles, and other miscellaneous observations. These don't get graphed, but I do usually tag them by topic, eg. \#t/algorithm (t for topic).
- **graph directory:** a collection of notes that point at eachother. This is the only directory I include in the graph, and I try to keep each note relatively short. Every note in the journal is roughly, one of:
    - **topic** - a topic-organizing note. These notes usually look like stubs, though sometimes I keep notes in them. They exist mainly to be tagged to some topic, and to be linked to by other notes in graph. This is the only kind of note in my graph that gets topic-tagged (otherwise I am likely to forget or incorrectly tag). If I want to see the notes that are tagged this topic, I will see the topic-tagged notes in the `notes` directory, and the topic-organizer in the `graph` directory. Topics point at one another heirarchically, which is mainly how I structure my graph.
    - **object notes** - everything else. These notes link to their organizing topic(s), at the bottom, and sometimes to other notes, if I'm in the mood. Some kinds of object templates I've made:
        - **term** - the shortest convenient definiton of a term, often generated by ChatGPT
        - **tool** - for taking notes on particular tools that I'm using or considering using
        - **theorem, algorithm, mathobject** - for if I'm taking math notes
        - **company, organization, foundation** - you get it
        - **object** - I haven't come up with a more specific thing to call this, so it's an object

Note that notes get created in the directory you were last in, and you may forget to move your notes to the intended folder. Per the [[#Aside on file naming]], I keep file-naming conventions to make it obvious what kind of file I'm looking at by file name, and whether it's in the wrong place.

A few final graph-based note taking subtleties worth pointing out:
- The reason to use a graph at all is to **make the connections between concepts clear**, so use links.
- Each note in the graph should aim to be **representative of a single concept** that other concepts may atomically gesture at.
- When describing concepts, **minimum-length notes** that state exactly the point, are better suited for linking between than long-winding multi-topic notes.
- It may eventually prove worthwhile to have **multiple graph folders**. An example: I graphed the dependencies of theorems and definitions from the first several chapters of the book Abstract Algebra by Dummit and Foote, with about 160 notes within the graph. Graphing definitions and theorem dependencies in a math book is a lot of fun, but has made my graph messy. I wish I had a graph folder dedicated to that book, but am now too lazy to go through and move the notes, one-by-one.
- **Don't subdivide the graph folder**. Create a different graph folder instead. The structure within the graph should be dictated by links, and making sub-directories is basically a partitioning anyways.
- The best note taking system is the one you stick with.

Anyways, here's the obligatory screenshot of my graph. For context: the yellow dots are my topic notes, which are often empty, and only serve to help structure the graph as a whole. I make a lot of empty notes just for the sake of plausible structure. That overhead may or may not be something you would like, but is something to keep in mind as you create your own graph.
![[Getting Started with Obsidian-1703198611566.jpeg]]
*imagine how powerful you could be with a constellation of colorful dots*

And that's it. Have fun taking notes.

### Project and Task Management
As mentioned in the section on journaling, I use journal files and a couple backlog notes for convenient, lightweight task management.

Besides the general task backlog, I also keep a file for each of my active projects. Some of these currently include:
- A [cryptographic codebase](https://github.com/thor314/pebble-stark) I'm working on
- Blogging and writing educational content
- I'd like to have more friends in my new city and I made it a project

In my ideal-world work day, I wake up, stretch, know exactly what I need to do, and sit down to do 6 hours of deep work on exactly that, with very little overhead for project management.

What follows is my current system for Very Little Overhead, which is really just a markdown file for:
- evaluating whether a project is actually worth doing
- setting intentions and expectations for balancing my time between my various projects
- breaking down the project into sub-projects and manageable tasks
- logging progress toward the project goals
- recording context and thoughts, attempting to reduce the friction of context switching

When I evaluate a new project, I start with the following template:
```
---
creation-date: <% tp.file.creation_date("YYYY-MM-DD") %>
tags: org/project,
---
# project-projectname
## setup
### planning
start date:
total time estimate:
weekly effort:
estimated end date:
### project overview
### motivation
# other sections
# Tasks
# Log
```

If I intend to start a project, I bind it to a hotkey like Ctrl+Alt+{1-9}. Typically, at the start of a work day, I copy any relevant tasks for the day into my journal task area. At the end of the day, I log whatever progress I make in a date h2, eg. `## 2023-12-21`.

Context switching pours concrete on my brain, so I try to do that as little as possible. The workflow I've settled on lately involves roughly 1-2 day sprints toward the project goal. I often take a down day (ideally wednesday or a weekend day) between sprints to handle the backlog of crap that wolud be too distracting to handle on a deep work day.

That's pretty much it. I don't much automate anything. It's not high-tech, doesn't have a productivity guru promoting it AFAIK, and it's worked great since I started with it.

#### Aside: scheduling tasks and todo apps
This workflow won't help if you need to schedule deadlines into the future, or recurring tasks. For my personal projects, deadlines are pretty much made made-up anyways and not helpful. I do like to schedule reminders, just not with Obsidian. I find that Obsidian is a great markdown application and a just okay todo app; for scheduling tasks into the future, I prefer to use an actual todo app.

In the past I tried using e.g. the [Tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) plugin for scheduling tasks and creating recurring tasks. I find that Obsidian's mobile experience doesn't hold up, so I tried out Todoist and Google Tasks. Both of these have Obsidian plugins, but I just use the Google tasks dedicated front-end now. I like that Google Tasks integrates well with Google Calendar, and the Pixel android phone makes it easy create tasks, so I just stuck with the Google suite for anything scheduling-related.

In the same vein, I've also tried out calendar integrations for Obsidian, though I felt they were more clutter than useful.

All of this is to say, I find Obsidian is great for writing markdown. While it can be used for rendering dynamic content, iframes and whatever else, in most cases I'd usually rather just use a dedicated application in a web browser.

### Self organization
I keep a personal organization note directory that links to other major notes and spreadsheets. The notes linked are the basis of a personal self-organization and intentionality practice. Most notes are reviewed on a regular basis, linked to my weekly/monthly/etc review cadence.

It looks like this:
```
# thor-self-organization meta note
## Systems - Regularly updated self-organization notes
bound to convenient hotkeys alt+\[0-9\]:
- [[thor-self-organization system meta note]] - this note, to organize all the other notes
- [[thor-misc todos n tasks]] - lightweight task organization and planning backlog, poked dailyish
- [[thor-Day in a Sentence]] - what makes each day special
- [[thor-Reading list]] - avoid getting overwhelmed by all the things to read, keep a queue
- [[thor-ideas for writing]] - dump ideas for blogging and tweeting, link to drafts

## project planning
- [[thor-week project planning]] - think about what i want to get done this week, as touched in week reviews
- [[thor-Project backlog]] - think about projects now and upcoming

## goals, values, routines organization:
- [[thor-routines and habits]] - what I want out of my habits and routines
- [[thor-values]] - my values and updates to them
- [[thor-short term goals]] - things I want in the next 3 months, updating monthly right now
- [[thor-medium-term-goals]] - things I want in the next year, updating quarterly right now
- [[thor-long term goals]] - things I want in the next several years

## misc self-organization notes:
- [[thor-Documents and Numbers]] - dump the important documents and numbers
- [[thor-Trader Joes grocery list]] - what to get at the grocery store

## Spreadsheets
- [People](https://docs.google.com/spreadsheets/d/redacted) - People I care about, social connection tracking, updated reg
- [Personality tests](https://docs.google.com/spreadsheets/d/redacted) - annual-ish personality test results
- [recipe log](https://docs.google.com/spreadsheets/d/1H7kGE5RGowdehqw8lDL466ahR-XNap5dsDPgNJVeCrQ/edit) - 2023-12-05 experimental; log of recipes I made, and liked
- [travel checklist](https://docs.google.com/spreadsheets/d/16Un5m4zPh4yenWnqMF6KdYbMgOO7sAUHfP4qyKv9FA0/edit?usp=drive_web&ouid=115883971599314555687) - more useful format than the travel checklist I was maintaining as a markdown note
## experimental
...
```

These notes represent my goal to maintain my values, hobbies, an introspective life practice, and so on. I mostly review and update them connected to periodic reviews. They are generally self-explanatory based on their titles and comments, so we won't spend any more time here.

### Writing
I suppose this is going to be a fairly short section. You can use a markdown notes app to write. Blog posts and everything. Following the guideline of directories for different purposes, I keep my writing in a separate `writing` directory. I use tags, and sometimes further directories to delineate drafts from finished posts, and where I intend to post them, if I intend to post them at all.

Hot tip: if you want to export a note to rich-text format, e.g. for copying to Google Docs or Substack, try toggling reading mode (Ctrl-e) and copying document, and switching back into source mode if you need to make further edits.

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
- [Templater](obsidian://show-plugin?id=templater-obsidian) - More powerful tools for templating files and creating files from templates than the default Template plugin offers. If you're comfortable writing JS scripts, you may embed [your own scripts](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html) within templates. [Docs](https://silentvoid13.github.io/Templater/). The tool has an active [discussion forum](https://github.com/SilentVoid13/Templater/discussions). See the templates directory for some templater examples.[^3] I prefer to avoid the Folder Templates feature, which can cause unexpected behavior when I wanted one template but got another.
- [Hotkeys for Specific Files](obsidian://show-plugin?id=obsidian-hotkeys-for-specific-files) - For your notes that you intend to regularly revisit, it may be worth binding hotkeys to them. I prefer this over starring notes. I bind keys for templates that I edit frequently (periodic note templates), personal-organization hub notes, and personal reference notes.
- The `Minimal Theme` in Appearance settings, and [Minimal Theme Settings](obsidian://show-plugin?id=obsidian-minimal-settings) - Make Obsidian look good. A couple things I like: headers of different colors, and disabling image maximization. I liked focus mode but the UI for moving the mouse over the header is annoying.
- [Smarter Markdown Hotkeys](obsidian://show-plugin?id=obsidian-smarter-md-hotkeys) - Hotkeys to replace many toggle commands in Obsidian. Smarter Markdown Hotkeys assumes that if your cursor is on a word or part of a word, you mean to bold/italic/whatever the whole word, not put asterisks in the mi\*\*\*\*dle of the word like this. I bind many of these, replacing defaults where possible.
- [Advanced Tables](obsidian://show-plugin?id=obsidian-advanced-new-file) - Must have, makes working with Markdown tables easier by providing commands for working with tables, and binding tab/enter to table movement. Requires basically no setup.
    - If you really want to work with markdown tables instead of just using a spreadsheet, see [Table Editor](https://github.com/ganesshkumar/obsidian-table-editor) for another tool for editing markdown tables and csv's, and [Table Extended](https://github.com/aidenlx/table-extended) if you want a MultiMarkdown extended syntax for formatting markdown tables.
- [Vimrc Support](obsidian://show-plugin?id=obsidian-vimrc-support) - If you use Vim mode, you probably want this. See the `.obsidian.vimrc` file for a sample setup, and the [home page](https://github.com/esm7/obsidian-vimrc-support) for info. You'll probably want to enable yank-to-system-clipboard and a couple other things. If you use vim in Obsidian, you can't actually copy text without unbinding Ctrl-C, or using vim yank-to-system-keyboard.

### General low setup
These plugins tend to introduce minor UX improvements or generally helpful features, and I recommend them all. Each requires very little setup (<5 minutes):
- [Auto Link Title](obsidian://show-plugin?id=obsidian-auto-link-title) - No setup. Paste a link from the internet, replace the link with the title and markdown link.
- [Automatic table of contents](obsidian://show-plugin?id=automatic-table-of-contents) Insert an dynamically generated table of contents. The other [Table of Contents](obsidian://show-plugin?id=obsidian-plugin-toc) plugin was buggy when I tried it.
- [Better word count](obsidian://show-plugin?id=better-word-count) - Souped up word count. Also shows words written today, and sub-heading word counts.
- [Clear Unused Images](obsidian://show-plugin?id=oz-clear-unused-images) - Finds unused images in your media folder and clears them, saving space in your vault.
- [Completr](obsidian://show-plugin?id=obsidian-completr) - convenient metadata and LaTeX completion suggestions.
- [Dictionary](obsidian://show-plugin?id=obsidian-dictionary-plugin) - Create a dictionary view in the right sidebar. Supposedly comes with a synonym search on hovering over highlighted words, but this seems to rarely work. Dictionary bound to Alt-D. Supports several languages.
- [File Tree Alternative](obsidian://show-plugin?id=file-tree-alternative) - alternative to the default file-explorer. Shows files in a more compact way, with note counts. Doesn't require much setup; you will know quickly whether you like or hate the UI. Though I tend to use the tags view more than either.
- [Filename Heading Sync](obsidian://show-plugin?id=obsidian-filename-heading-sync) - H1 headers should usually match filenames. This plugin automates that. Worth disabling for templates in the templates folder, which may have template syntax in their H1.
- [Footnote Shortcut](obsidian://show-plugin?id=obsidian-footnotes) - 1 new hotkey for creating, jumping to, and jumping back from footnotes, which I bind to Alt-F. I tried [Better Footnote](obsidian://show-plugin?id=better-fn), but found its model of footnotes less convenient. I also like [Tidy Footnotes](obsidian://show-plugin?id=obsidian-tidy-footnotes), which re-orders misordered footnotes.
- [Hider](obsidian://show-plugin?id=obsidian-hider) - Hide UI elements you don't like. I hide the left side app ribbon (don't do this unless you're totally comfortable with the keyboard commands!) and the scrollbar. I also hide tabs. I don't like tabs, and would disable them entirely if I could.
- [Keyboard Analyzer](obsidian://show-plugin?id=keyboard-analyzer) - Can show you a modal of which hotkeys you've bound where with `Open Keyboard Shortcuts View`. This is very useful if you bind many keys, or want to see what keys are unbound.
- [LanguageTool Tracker](obsidian://show-plugin?id=obsidian-languagetool-plugin) - Integration with the [LanguageTool](https://languagetool.org/) grammar checker, nice extension for avoiding dumb grammar issues. I prefer this over the default spellchecker, as LanguageTool checks for spelling errors and grammar issues. LanguageTool has a free mode and a premium mode, the free mode is already reasonably decent. There's also a browser extension for LanguageTool, if you're into that.
- [MetaEdit](obsidian://show-plugin?id=metaedit) - A hotkey to edit metadata, with a customizable modal window. Useful for occasionally creating metadata fields. The [Metadata Menu](obsidian://show-plugin?id=metadata-menu) plugin is another powerful plugin for interacting with metadata along with Dataview, though I haven't needed a more powerful tool, so I haven't reached for it.
- [Obsidian Pandoc](obsidian://show-plugin?id=obsidian-pandoc) - Occasionally useful plugin for exporting notes to other formats: pdf, html, ePub, docx, Latex, etc. Requires that you have `pandoc` and `pdflatex` CLI tools, which you should be able to install with your package manager of choice.
- [Omnisearch](obsidian://show-plugin?id=omnisearch) - Powered up fuzzy grepping search across files and vaults. Similar to core search plugin, and in-file search. I also looked at (but do not use) [Vantage](obsidian://show-plugin?id=vantage-obsidian) which allows for highly specific searches of your vault.
- [Paste Image Png to Jpeg](obsidian://show-plugin?id=obsidian-paste-png-to-jpeg) - automatically rename images to indicate what file they live in for clarity, and compress images to take less space on pasting.
- [Quick Switcher++](obsidian://show-plugin?id=darlal-switcher-plus) - Replaces the Quick Switcher default plugin. The default command palette shows key-bindings, so the default is still preferred there. I bind Ctrl-S to `Symbol Mode` and Ctrl-L to `Related Items Mode`, and Ctrl-H to `Headers Mode`, and move `Search Replace` to Ctrl-R. Comes with a lot of settings, though I haven't changed them much at all.
- [Recent Files](obsidian://show-plugin?id=recent-files-obsidian) - A left-bar menu for recently opened files.
- [Remember Cursor Position](obsidian://show-plugin?id=remember-cursor-position) - Does what it says on the box: remembers cursor position across files. I like this a lot.
- [Scroll Offset](obsidian://show-plugin?id=obsidian-scroll-offset) - Nice to keep some distance between your cursor and the bottom of the screen. There is a mouse bug; if you click into the buffer space, you break the spacing for the current note.
- [Settings search](obsidian://show-plugin?id=settings-search) - A searchbar for your settings. Useful if you install many plugins.
- [Show Current File Path](obsidian://show-plugin?id=obsidian-show-file-path) - Show the file path in the bottom ribbon in an unobtrusive way.
- [Tag Wrangler](obsidian://show-plugin?id=tag-wrangler) - Right click on a tag in the tabs pane to rename, search, and merge tags.
- [Tidy Footnotes](obsidian://show-plugin?id=obsidian-tidy-footnotes) - A command to reorder your footnotes, if they are out of order.
- [Trim Whitespace](obsidian://show-plugin?id=obsidian-trim-whitespace) - Automatically trim unused whitespace. A common feature in IDEs, nice to have it here as well, especially if you version control with git.

### General medium setup
Plugins that you may need to read documentation/settings for at least 10 minutes. I also recommend each of these, as they tend to straddle the boundary of *easy to setup and use*, and pretty useful.
- [Obsidian Git](obsidian://show-plugin?id=obsidian-git) - Back up your personal vault to a remote git repository every N minutes. I've stopped using this in favor of the premium Sync, but it is well done. It may not work with sandboxed Obsidian clients, and I'm not sure how you'd set it up for mobile.
- [Text Generator](obsidian://show-plugin?id=obsidian-textgenerator-plugin) - plugin to query OpenAI text generation API's. You'll need your own API key.
- [Hover Editor](obsidian://show-plugin?id=obsidian-hover-editor) - preview and edit pages in an persistent pop-up. Also functions as a sort of second overlay of tabs. Has a tie-in with Hotkeys for Specific Files that I haven't used much. I'm borderline on whether this is actually useful.

### General high setup
These plugins take longer to set up, but enable new Obsidian workflows. Each of these may take at least a half hour to set up and get acquainted with.

*2023-12-22: I wrote this section somewhat aspirational documentation for myself a year ago, at the end of 2022, so that I might use these more. There was an attempt, but I haven't actually used them much. They are powerful, and might be useful for you.*

- [Database Folder](https://github.com/RafaelGB/obsidian-db-folder) - Create a database folder that tracks notes within a given folder, built around the Dataview plugin. Basically, a simplified version of the dataview plugin, with the specific use case of tracking the metadata inside particular folders. Maybe useful for creating reference list notes, or organization tasks like tracking notes on people, journal files, etc. To make best use, think about what metadata information you would want to see in the database folder about each note. Then template that information in your templates for that note type.
    - 2023-12-22: Haven't used this much...but I think I might finally have a use case. I'm going to make meme folder with a tagging system. For vibe.
    - Update: we did it. Workflow:
        - See a meme. Screenshot it.
        - Create a new note from the meme template (Ctrl-n); name it, and tag it with vibes and smash paste.
        - Move it to the meme folder (Alt-r)
        - Open the meme database. Ctrl-hover over the files to see the goods.
            - Could probably use quick-add to combine steps 2 and 3. Left as an exercise for the reader, or me in like 6 months
- [Dataview](obsidian://show-plugin?id=dataview) - A JavaScript API and SQL-like query language for filtering, sorting, and extracting data from your vault. May heavily influence how you use notes' YAML metadata. Suggested use case: you've used Obsidian for a while, and want to analyze metadata about your vault. If you're using this, you may also want to look at [MetaEdit](obsidian://show-plugin?id=metaedit), for managing note metadata. Some other plugins require Dataview: eg. DB Folder, a lightweight wrapper around Dataview, and ExcaliBrain, an alternate graph view.
- [Linter](obsidian://show-plugin?id=obsidian-linter) - Highly flexible tool for correcting common formatting issues. The tool is very conservative by default, but has many options to enable, as well as an option to define custom rules.
- [QuickAdd](obsidian://show-plugin?id=quickadd) - A way to add content to the vault from pop-up prompts; can be fiddly to set up. QA comes with 4 modes, of which I use 3. I've set up a few QuickAdd macros for reference.
    - [Capture](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/CaptureChoice.md) - Pop up a prompt to append some text to a file, creating it (from a template if you'd like) if the file doesn't exist. In this example repo, I've set up a pair of example captures to append entries and todos to your journal file. You may have to reload Obsidian before your Captures work. See the accepted template syntax [here](https://github.com/chhoumann/quickadd/blob/master/docs/FormatSyntax.md). You can include Templater replacements inside your QA Captures.
    - [Template](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/TemplateChoice.md) - Create files from templates. Capture also allows you to create files from templates, but Template allows you to choose where the file will be created from a dynamic list of directories, which is often a very useful feature. This vault includes an example of using a QA template to create a new reference note in `note/reference` .
    - [Macro](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/MacroChoice.md) - Combine calling other commands. Very useful for simultaneously adding content in multiple locations. I've set up a demo macro for creating a note on a web page, and adding a link to the new note into a web-page reference note. Macros can also call custom JS scripts, if you feel comfortable with that. Also see the [Database Folder](obsidian://show-plugin?id=dbfolder) plugin for building a Notion-style database of similar notes in a directory.
    - [Multi-choice](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/MultiChoice.md) - if you write many QA's, but don't want to bind them each to a key, but instead choose from a dropdown menu of QA's, multichoice allows you to organize them into a list.

### Graph Tools
I haven't discovered any plugins that make graph management much easier. I tried each of these, found them all more bother than they're worth, but I've included the ones that were at least fun to play with. The only one I much recommend is Find Orphaned Files.

- [Find Orphaned Files](obsidian://show-plugin?id=find-unlinked-files) - Utility to find unlinked files. Particularly useful if your graph is large.
- [Graph Analysis](obsidian://show-plugin?id=graph-analysis) - Get statistics about the closeness of any two notes, and some other neat graph math.
- [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) - Intended to allow you to set up structured relationships (parent, child, sibling) between notes, but the data isn't easily used or displayed.
- [Journey](obsidian://show-plugin?id=obsidian-journey-plugin) - Tools for finding paths between two notes in your knowledge base. Makes an unfortunate interface choice, the plugin should include a function, but only has a clicky button in the left bar.
- [Juggl](obsidian://show-plugin?id=juggl) - An alternative to the Obsidian native graph view, integrating with Breadcrumbs for a structured view of note-relationships, and Hover for hover-over previews of nodes in the graph. Doesn't do well with vaults with more than 250 notes (which isn't many). [Docs](https://juggl.io/Juggl). An alternative to Juggl is ExcaliBrain.
- [ExcaliBrain](obsidian://show-plugin?id=excalibrain) - An alternative to Breadcrumbs and Juggl for structured graph content, with a different UI. Requires DataView and Excalidraw to be installed as well.
- [Zootelkeeper](obsidian://show-plugin?id=zoottelkeeper-obsidian-plugin) - Generates a reference index note for notes in specified directories. A lightweight option for creating linked hub notes to represent your directory structure in the graph. Especially useful for areas of your vault that make extensive use of directory structure, though I would recommend trying to get the most out of tags before trying this; I haven't been able to make good use of this plugin.

### Specifically if you work with $\LaTeX$
These plugins are nice to have, and improve the experience of writing $\LaTeX$:
- [Completr](obsidian://show-plugin?id=obsidian-completr) (copied from general medium setup) - YAML frontmatter and LaTeX completion suggestions.
- [Quick Latex for Obsidian](obsidian://show-plugin?id=quick-latex) - Some nice quality of life automation for writing Latex. Most involve pressing space after some short command to expand to a longer unwieldy command. Some highlighted features:
    - auto-fraction: type `a/b<space>` instead of frac{a}{b} $\frac{a}{b}$
    - use tab and shift tab to jump between brackets
    - hotkey for `\begin{align*}` block and matrix block
    - auto-pair $dollars$ and brackets, and select and press $ to enclose an expression
    - auto appends limits for cleaner notation: $\sum\limits_n^i$ vs $\sum_{i}^n$
    - auto-enlarge brackets that would be too small
    - some [custom shorthands](https://github.com/joeyuping/quick_latex_obsidian#enhanced11-custom-shorthand)
- [Extended MathJax](obsidian://show-plugin?id=obsidian-latex) - adds a global preamble file, `preamble.sty`, for defining latex `newcommand`s. Also adds `mchem` and `bussproofs` packages.
- [Obsidian Pandoc](obsidian://show-plugin?id=obsidian-pandoc) (repeated from general low setup) - Tool to export notes to other formats: pdf, html, ePub, docx, Latex, etc. Requires that you have `pandoc` and `pdflatex` CLI tools, which you should be able to install with your package manager of choice.
- [TikZJax](obsidian://show-plugin?id=obsidian-tikzjax): Enable MathJax support for working with TikZ diagrams. If you work with cryptography, take a look at [this library of diagrams](https://www.iacr.org/authors/tikz/).

Other LaTeX related plugins I've tried that weren't worth recommending:
- [Copy as Latex](obsidian://show-plugin?id=copy-as-latex) - Copy markdown as LaTeX. Maybe useful if you move between the two formats. Overlaps Pandoc, but with the feature export only a selection, as opposed to whole files.
- [Latex Suite](obsidian://show-plugin?id=obsidian-latex-suite) - Snippets for latex. I prefer Completr's interface for completions, and this command duplicates some of Quick Latex's snippets.
- [Latex Environments](obsidian://show-plugin?id=obsidian-latex-environments) - Completr does this, but with a better drop-down menu.

### Journaling Plugins
- [Periodic Notes](obsidian://show-plugin?id=periodic-notes) - The main plugin.
- [Rollover Daily Todos](obsidian://show-plugin?id=obsidian-rollover-daily-todos) - Quality of life tool for a lightweight todo workflow in your daily note. Make checkboxes in your journal file in the checkbox area, this plugin automatically rolls unfinished todos over to tomorrow's journal.

### Misc
I make occasional use of [Zotero Integration](obsidian://show-plugin?id=obsidian-zotero-desktop-connector), an integration for my Zotero vault. Zotero I mainly use to read pdfs of papers and books. Citations allows me to import my highlights and generate citations.

### Plugins I should mention but don't use
A quick run through some of the more popular plugins (>50k downloads) that I don't use. I also include several plugins that I've tried that didn't work out. The disqualifying factor for many of these is that I rarely want dynamic content in a markdown editor.

- [Workspaces Plus](obsidian://show-plugin?id=workspaces-plus) - enhances the default Workspaces plugin with useful UI elements and hotkeys. Workspaces don't feel like they fill a need for me.
- [TagFolder](obsidian://show-plugin?id=obsidian-tagfolder) similar to Tags View, with a slightly different interface. The one unique feature I see is actually to display all (back)links in the same way as tags in Tags View are displayed, but this isn't a killer feature for me. Also doesn't play nice with Tag Wrangler.
- Google Tasks or [Tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) or [Todoist Sync](obsidian://show-plugin?id=todoist-sync-plugin): prefer to do task scheduling in the normal app.
- [Hotkeys++](obsidian://show-plugin?id=hotkeysplus-obsidian) has a similar idea to Smarter Markdown Hotkeys, but stops way short.
- Kanban - I don't like Kanban boards. You may get some mileage out of this if you use Obsidian for a task manager, but I'm biased against Obsidian for anything but lightweight task-management.
- Calendar - Some people like UI candy like this, I regard it as clutter.
- [Comments](obsidian://show-plugin?id=obsidian-comments) - Drop an inline comments overlay into a page, similar to Google Docs. Would be more useful if Obsidian Vaults were more shareable.
- [Diagrams](obsidian://show-plugin?id=drawio-obsidian) - For drawing Draw.io diagrams without leaving Obsidian. Seemed neat, but I think I would just use Draw.io's front-end.
- [Excalidraw](obsidian://show-plugin?id=obsidian-excalidraw-plugin) - Integrate a feature-rich drawing tool into Obsidian. I typically would rather use Obsidian for Markdown, and other applications for drawing, and maybe throw a screenshot into Obsidian if I felt inspired.
- [Ozan's Image in Editor](obsidian://show-plugin?id=oz-image-plugin) - Tools to view images, iframes, PDF Files, excalidraw drawings and transclusions in the Editor view. Suggested use case: for those who like non-text embedded content more than I do.
- [Kindle Highlights](obsidian://show-plugin?id=obsidian-kindle-plugin) - Imports your kindle highlights. I might want it eventually! But not right now.
- [Natural Language Dates](obsidian://show-plugin?id=nldates-obsidian) - Trigger Obsidian to replace natural language dates with the character `@`.
- [Readwise Official](obsidian://show-plugin?id=readwise-official) - Import your highlights from kindle, web highlights, and some other places. Readwise didn't fill a niche for me.
- [Obsidian Jupyter](obsidian://show-plugin?id=obsidian-jupyter) - Turn obsidian into an interactive python repl. I'd probably rather use anything else.
- [Desmos](obsidian://show-plugin?id=obsidian-desmos) - include plots from the Desmos online graphing calculator in your Vault.
- [Creases](obsidian://show-plugin?id=creases) - Not a huge improvement, but gives hotkeys for folding by headers, and a other custom folding methods; more power than I need. I bind the Obsidian native toggle-fold to Alt-H.
- [Tracker](obsidian://show-plugin?id=obsidian-tracker) - similar to Dataview, but with a more constrained use case: collecting statistics about your vault, typically your journal files. [Some examples](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md). Also see [Vault Statistics](obsidian://show-plugin?id=obsidian-vault-statistics-plugin). I don't currently use either.
- Outliner - Vim mode + normal lists does everything this plugin does, and doesn't require me to remember a bunch of custom commands.
- Advanced Slides - Some people make markdown decks, which is neat! I haven't used it yet though.
- Admonition - I find callouts (which obsidian supports by default) overbearingly large in general.
- Mind Map - More UI candy, I prefer a normal table of contents or a graph over a mindmap.
- Sliding Panes (Andy Matuschak Mode) - Deprecated, but I want to highlight the `Toggle Stacked Tabs` command, which does the same. If you use many tabs, stacked tabs is an interesting UI; I'm still figuring out whether I like it. Documentation: [Stacked tabs - Obsidian Help](https://help.obsidian.md/User+interface/Stacked+tabs).. If you do like stacked tabs, try out Pane Relief, for more hotkeys for navigating tabs and panes and Cycle through Panes.
- Checklist - combine checklists into a dynamic pane, don't need that.
- Editor Syntax Highlight - Doesn't change Shell or Rust syntax highlighting, so I uninstalled it. Not sure what languages it does affect.
- Day Planner - UI candy. I would only schedule meetings, scheduling my day like the app seems to me a fiddly act in optimistic futility
- Emoji toolbar - I use an operating system-wide emoji selector; if you don't have one, this might be useful.
- Copy Button for Code blocks - Deprecated; this exists as a default feature
- Annotator - I don't annotate pdfs or epubs from obsidian, that sounds terrible
- [Google Calendar](obsidian://show-plugin?id=google-calendar) - Poke your google calendar, from Obsidian. May be useful for taking notes for specific meetings, updating your calendar from Obsidian, displaying your calendar from within a journal files, at the cost of losing at least a half hour to the angry god that is the Google Cloud Platform.
- Note Refactor - An upgrade to default Note Composer, but I would typically rather just copy/cut-paste for breaking notes up.
- [Obsidian Charts](obsidian://show-plugin?id=obsidian-charts) - Create charts. Not a lot of setup, the popup on `Insert New Chart`, and `Create Chart from Table` are pretty self-explanatory, but I'm not that interested in charts from Obsidian metadata usually.
- Obsidian Icon Folder - Icon UI candy, not for me
- [Advanced Obsidian URI](obsidian://show-plugin?id=obsidian-advanced-uri) - use URI's to automate workflows like creating, opening, and editing, all in a single URI. I'm not actually sure how I would use this, seems popular fiddly.
- [Hotkey Helper](obsidian://show-plugin?id=hotkey-helper) - Tools for managing and viewing plugin hotkeys. Uninstalled after bug caused hotkeys tab to crash. overlap with Keyboard analyzer.
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
- Open Link With - An issue with clicking links in Obsidian is that it used to not use the already open browser windows. That issue got fixed, so I'm not sure what this would be useful for.
- [Vault Changelog](obsidian://show-plugin?id=obsidian-vault-changelog) - Automatically generate changelog file with entries on the last N notes changed, and their time of change.

## Conclusion
Uh, hope that was helpful. Have fun using Obsidian.

### Footnotes
[^1]: You can install fonts on Linux with the following:
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
[^2]: my espanso snippets for creating date/time headers in Obsidian
```yaml
matches:
  - trigger: ";d"
    replace: "## {{d}}"
    vars:
      - name: d
        type: date
        params:
          format: "%Y-%m-%d"
  - trigger: ";;;d"
    replace: "### {{d}}"
    vars:
      - name: d
        type: date
        params:
          format: "%Y-%m-%d"
  - trigger: ";t"
    replace: "## {{t}}"
    vars:
      - name: t
        type: date
        params:
          format: "%H:%M"
  - regex: ";(?P<num>[0-9]{1,2}) "
    replace: "[^{{num}}]"

  # code blocks
  - trigger: "```r "
    replace: |
      ```rust$|$

      ```
```
[^3]:  How to choose between creating a QA Capture, QA Template, QA Macro, and `Templater: Create new note from template` :
- Templater create new note from template: Least setup, just write the template. Create a new note from a template, filed at the top level directory. You will have to manually move the file to it's correct location (I bind this to `Alt R`.)
- QA Template: Some setup and testing. Create a new note from a given template, either in a given directory (less useful) or with a dynamic directory selection (more useful). Allows the user to set a file naming convention.
- QA Capture: As much setup as QA Template. Besides adding new content to other notes, QA capture can also be used to create notes from templates. QA Capture does not have dynamic directory selection, but is as useful as QA template if you already know where the file needs to be created.
- QA Macro: potentially very fiddly. Combine other commands together. Works best with other QA commands, as you can reuse entry values, eg. {{VALUE:filename}}, across commands. See the QA setup for an examlpe macro in this vault.