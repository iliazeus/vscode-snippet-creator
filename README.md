# Snippet Creator

This extension helps to automate snippet creation. Select the code you want to create snippet from and use command `Create Snippet` from the command palette or your custom keybind.

😥 **This extension was accidentally deleted from the marketplace in mid 2020, but is now back! The number of downloads count, unfortunately, has been reset to zero**

## Features

![Example](https://raw.githubusercontent.com/abulka/vscode-snippet-creator/master/img/example.gif)


## Usage

Use the command `Create Snippet` from the command palette or your custom keybind:

When answering the prompts:
- `Language`: Use ▴ or ▾ to choose, do not just hit enter immediately. Type partial names to match an existing vscode language e.g. "python"
- `Name`: This is the official snippet name, which can contain spaces. These become the string 'keys' in the snippet json file e.g. "my snippet"
- `Prefix`: This is the phrase you type in the editor that triggers the snippet e.g. "mysnip" *[OPTIONAL]*
- `Description`: Snippet description *[OPTIONAL]*

> Tip: It's OK to simply hit ENTER when prompted for the `prefix` and `description`. The `prefix` becomes the same as the `name`, and the `description` becomes 'description for `name`'.

Your snippet will now have been added to the relevant snippets file, and is now ready to use.

---

## Mini Tutorial on Snippets

### Inserting your new snippet

Use `Insert Snippet` (a built-in vscode command) to select and insert your snippet. 
Alternatively, whilst typing in the vscode editor, snippets `prefix`es are automatically listed in the vscode code completion dropdown.

*This plugin does not change the standard way you insert snippets.*

> Tip: Optionally, use the extension [Snippets Explorer](https://marketplace.visualstudio.com/items?itemName=wware.snippets-explorer) (see below) to list all snippets in a treeview and insert snippets.

### Editing snippets

You can edit snippets created by this extension using `Preferences: Configure User Snippets` (a built-in vscode command) to select a language and edit your snippets JSON file.

*This plugin does not change the standard way you edit snippets. Just use the built in vscode command.*

### Why edit snippets?

- You may want to later change the `prefix` to something easier to type or remember
- Enhance the `description`
- Simply to edit the snippet code fragment that gets inserted.
- Edit the snippet code fragment to place insertion prompts into your snippet e.g. `$0`, `$1` so that you can conveniently tab between specific points inside your snippet.

### What a snippet looks like:

e.g. in `python.json` in your `~/vscode/snippets` directory:

```json
	"my snippet": {
		"prefix": "mysnip",
		"body": "# this is a fragment of code which is a comment",
		"description": "a nice description of my snippet"
	},
	"my other snippet": {
		"prefix": "mysnip2",
		"body": [
			"a",
			"b",
			"\tc",
			"d",
		],
		"description": "a nice description of my other snippet"
	},
```

> Note snippets that cover more than one line are converted to arrays of strings, making editing them easier.

---

## Background

Before this extension existed, you had to generate snippets by crafting the JSON manually or by visiting https://snippet-generator.app/ and pasting into the relevant JSON snippet file.

## See Also

You may also be interested in [Snippets Explorer](https://marketplace.visualstudio.com/items?itemName=wware.snippets-explorer) in the marketplace, which offers a treeview of all available snippets - hover to preview, click to insert. Search for `'wware'` in the marketplace to find it.
