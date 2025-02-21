import { marked } from "marked";
import sanitizeHtmlLibrary from "sanitize-html";
import TurndownService from "turndown";

export default function sanitizeMarkdown(markdownContent) {
    const turndownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    return turndownService.turndown(sanitizedHtml);
}