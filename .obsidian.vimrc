""" Thor's Obsidian vimrc
" generally refer to: https://github.com/esm7/obsidian-vimrc-support
" To test file, write file and run "reload app without saving"
" 
" To use an Obsidian command (see back, forward example):
" - Use Ctrl+Shift+I to open the dev console
" - reload and type :obcommand. The names are now in the Console (2nd tab).
" - note, can't rebind exmap-obmap commands with map
" Also execute codemirror commands with cmcommand, js with jscommand.
"
" Note about `surround`: as of 2022-05-20, surround does not work, and is janky
" anyhow, but there's a fix coming, eventually, maybe.

""" General Vim Keybindings
" escapes if I forget to escape
imap jj <Esc> 
imap kk <Esc>
imap jk <Esc>
imap kj <Esc>

" Undo, Redo, and Navigate inside page:
" Don't overwrite <C-u> or <C-d> for file movement, or <C-o>,<C-i> for back/forward movement within document. 
" <C-r> is for search-replace. u/U for undo/redo. Also Ctrl-z/Z native app.
nmap U :redo
vmap <C-r> :s/
nmap <C-r> <C-a>:s/

" for replacing OpenAI style \( \) with latex $
nmap <leader>r :%s/(\\\(\s|\s\\\))/$/g
nmap <leader>R :%s/(\\\[\s|\s\\\])/$$$/g

" Navigate Forward and Back between pages:
" This mapping repeats a mapping in the in-app hotkeys menu for demonstration; the in-app menu overwrites mappings here.
exmap back obcommand app:go-back
nmap <A-,> :back
exmap forward obcommand app:go-forward
nmap <A-.> :forward

" enable select all with C-a
unmap <C-a>

" Must use map, not omap, to get these to work in visual mode
map H ^ 
map L $

" transpose, shift case
nmap t xhPl 
nmap T ~ 

" nope:

" Example leader mapping, set 'Space' as leader
" may migrate to this if the Leader-Hotkeys normal-mode bug isn't fixed
nmap <Space> <leader>
nmap <leader>j 4j
nmap <leader>k 4k
nmap <leader>i <C-i>
nmap <leader>o <C-o>
nmap <leader>. :forward
nmap <leader>, :back

""" Settings
" Yank to system clipboard https://forum.obsidian.md/t/how-to-copy-with-vim-mode/3881
set clipboard=unnamed

""" Trash
" - useless, not sure how to get rid of Obsidian's persistent search highlight, except hit esc every time
" nmap <F9> :nohl 
" set nohlsearch 
