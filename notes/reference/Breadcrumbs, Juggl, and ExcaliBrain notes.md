---
creation-date: 2022-11-16 17:17
tags: [note/reference]
---
up:: [[Getting Started with Obsidian]]
# Breadcrumbs, Juggl, and ExcaliBrain notes
## Breadcrumbs
https://breadcrumbs-wiki.onrender.com/docs/Home
Very useful, but very work-in-progress plugin, with some obscure naming practices. Some commands don't work at all, but it's worth suffering bravely for structured graphs. These are my notes, off of a fresh Obsidian Install.

The Trail/Grid View is the modal that displays at the top of the file in Reading View. It can be turned on for Live Preview mode in the Breadcrumbs/Views/Trail settings tab. A local Juggl view can also be enabled. For *reasons*, Trail view **won't show down notes, or same notes**, only up, next, and prev. The Juggl view will show up notes and down notes, but no next, prev, or same notes.
Also it looks like if the note is incredibly long, the Trail view doesn't render, but this could be for a lot of reasons.

The Matrix View is the right sidebar shows relationships for the given note.
The obscurely named Duck View shows unconnected notes. Quack.
[Tree View](https://breadcrumbs-wiki.onrender.com/docs/Getting%20Started/Views#tree-view) appears to have been removed, but left in docs.

Relationships are bidirectional: if note-1 calls note-2 it's next, note-2 will display note-1 as it's prev in the header and matrix view sidebar. Redundancy is actually a bad idea, as the Juggl graph isn't smart enough to not render the words "up" and "down" in the same place, if you doubly-link the notes.


### On the vagueries of linking
Make sure Dataview is installed, so that you may take advantage of double-colons.
```sh
# The following in YAML will include a breadcrumbs link, but not a graph link
up: \[\[up-note]]
up: [up-note]
up: up-note
# The following in YAML will produce two breadcrumbs links, but not a graph link
up: [up-note1, up-note2]
# The following outside YAML will produce a graph link but not a breadcrumbs link:
up: \[\[up-note]]
# The following outside YAML will produce both a breadcrumbs link AND a graph link (assuming dataview is installed). Ignore the backslash.
up\:: \[\[up-note]]
# Note that you can\'t tag with Dataview's double colons, so don't do this:
tags\:: this-will-not-be-recognized-by-obsidian-but-dataview-will-see-it
# On Juggl links: Juggl introduces "typed" links. Similar rules apply as before. The link type must be a single word. Juggl will also recognize all Breadcrumbs links (up, down, next, prev, same). Ignore the backslash.
\- THE_NAME_OF_THIS_LINK_TYPE [[The Target Note]]
```

### Display a breadcrumbs code block:
```
\```breadcrumbs
# see additional juggl options: 
# https://juggl.io/Features/Breadcrumbs+code+blocks
# tree or juggl
type: tree       
# one of {up,down,same,next,prev}
dir: down        
# true by default
#title: false      
# fields: parent # limit which fields get shown; not yet implemented
# a range of depth to go down
depth: 1-2       
# true to flatten results
# flat: true
# from: # from any dataview source field
# display dropdowns as open or closed
content: open    
```


### Commands
#### that appear to not work
- `Open X View` appears to straight up not work.
- `Adjust Hierarchy Notes` brings up an empty list, regardless of my links.
- `Open Visualisation Model` - Tools for displaying links hypothetically, but none seem to work

#### Commands that do work
- `Refresh Breadcrumbs Index` - refreshes the index. Have to do this before your links will show up.
- `Write Breadcrumbs to Current file`: If another note links to your current note, you can get a list of backlinks.
- `Toggle: Show Trail/Grid in Edit & LP mode`

## Juggl 
https://juggl.io/Features/Styling/CSS+Styling
The juggl graph does label the {up,down,same,next,prev} breadcrumbs edges in the graph view, but doesn't appear to be smart enough to actually use that information to structure the graph, except in the limited Trail view display, which is capable of displaying up and down nodes (but not same, next or prev). It seems to be best practice to label forwards from high-up links, and NOT bidirectionally link, since the Breadcrumbs trail view will try to display the words "up" and "down" in the same location. 

It looks like Juggl uses [cytoscapeJS](https://js.cytoscape.org/#style) for styling nodes. The styling nodes has a guide on how to use css to select and style nodes. See the right [style pane](https://juggl.io/Features/Styling/Style+Pane) for selecting nodes and styling them by [filters](https://juggl.io/Features/Filtering), though it looks like there are also options to use CSS snippets or use [YAML](https://juggl.io/Features/Styling/YAML+Styling) frontmatter.

Important to note that Juggl doesn't do well with vaults larger than 250 nodes, which honestly isn't very many.

The degree to which Juggl is "tightly integrated" with Breadcrumbs is non-zero, but definitely leaves significant room for improvement. The local and global graph views display the words "up, down, prev, next, same" on the Breadcrumbs edges, but don't actually *use that information* to structure the graph. Looks like we're still early.

## Excalidraw
Without changing anything, Excalidraw seems to have an immediate sense of what the Breadcrumbs data means. Looking at the settings, it doesn't look like there's much of a differentiation between siblings; a `friend` is a `next` is a `prev` is a `same.` But it at least has a sense of up versus down.

Bidirectional links don't seem to change anything, the display understands redundancy. And there's no need to refresh anything, the map changes node-by-node. There are plenty of styling options. 

Everything so far so good, but the one thing: Excalibrain is local-node only. So no global graphs. 

## Conclusion
Oh well. Til next time. I will probably continue to use Breadcrumbs for graphing, expecting that the supporting software probably gets better over time. Who knows, maybe I write something. But I don't think I'll be getting much out of Excalidraw. I'll leave the Juggl Trail view on for my notes. This did give me a convenient excuse to learn a little more about the Dataview inline metadata
