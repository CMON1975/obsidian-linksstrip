// linkstrip.ts
import { Plugin, MarkdownView } from "obsidian";

/**
 * LinkstripPlugin
 * Registers a command that strips the [[wikilink]] under the cursor to plain text.
 */
export default class LinkstripPlugin extends Plugin {
    async onload() {
        console.log("Linkstrip plugin loaded");

        this.addCommand({
            id: "strip-link-under-cursor",
            name: "Strip Wikilink Under Cursor",
            editorCallback: (editor) => {
                const pos = editor.getCursor(); // current cursor position
                const lineText = editor.getLine(pos.line); // full line at cursor

                const linkRegex = /\[\[(.*?)\]\]/g;
                let match;

                // iterate through all [[wikilinks]] on the line
                while ((match = linkRegex.exec(lineText)) !== null) {
                    const start = match.index;
                    const end = start + match[0].length;

                    // check if cursor is within the bounds of the link
                    if (pos.ch >= start && pos.ch <= end) {
                        // replace [[link]] with link text only
                        editor.replaceRange(
                            match[1],
                            { line: pos.line, ch: start },
                            { line: pos.line, ch: end }
                        );
                        break;
                    }
                }
            }
        });
    }

    onunload() {
        console.log("Linkstrip plugin unloaded");
    }
}
