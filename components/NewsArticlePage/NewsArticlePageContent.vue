<script setup lang="ts">
import type { MarkdownRoot } from "@nuxt/content";

const { body } = defineProps<{
  body: MarkdownRoot;
}>();
</script>

<template>
  <ContentRendererMarkdown :value="body" class="content-renderer" />
</template>

<style lang="scss">
.content-renderer {
  color: #f0f6fc;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  scroll-behavior: auto !important;
  margin: 40px auto;
  word-break: break-word;
}

.content-renderer .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.content-renderer h1:hover .anchor .octicon-link:before,
.content-renderer h2:hover .anchor .octicon-link:before,
.content-renderer h3:hover .anchor .octicon-link:before,
.content-renderer h4:hover .anchor .octicon-link:before,
.content-renderer h5:hover .anchor .octicon-link:before,
.content-renderer h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: " ";
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.content-renderer details,
.content-renderer figcaption,
.content-renderer figure {
  display: block;
}

.content-renderer summary {
  display: list-item;
}

.content-renderer [hidden] {
  display: none !important;
}

.content-renderer a {
  color: #4493f8;
  text-decoration: none;
}

.content-renderer abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.content-renderer b,
.content-renderer strong {
  font-weight: 600;
}

.content-renderer dfn {
  font-style: italic;
}

.content-renderer h1 {
  margin: 0.67em 0;
  font-weight: 600;
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #3d444db3;
}

.content-renderer mark {
  background-color: #bb800926;
  color: #f0f6fc;
}

.content-renderer small {
  font-size: 90%;
}

.content-renderer sub,
.content-renderer sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.content-renderer sub {
  bottom: -0.25em;
}

.content-renderer sup {
  top: -0.5em;
}

.content-renderer img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.content-renderer code,
.content-renderer kbd,
.content-renderer pre,
.content-renderer samp {
  font-family: monospace;
  font-size: 1em;
}

.content-renderer figure {
  margin: 1em 2.5rem;
}

.content-renderer hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #3d444db3;
  height: 0.25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #3d444d;
  border: 0;
}

.content-renderer input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.content-renderer [type="button"],
.content-renderer [type="reset"],
.content-renderer [type="submit"] {
  -webkit-appearance: button;
  appearance: button;
}

.content-renderer [type="checkbox"],
.content-renderer [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

.content-renderer [type="number"]::-webkit-inner-spin-button,
.content-renderer [type="number"]::-webkit-outer-spin-button {
  height: auto;
}

.content-renderer [type="search"]::-webkit-search-cancel-button,
.content-renderer [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.content-renderer ::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

.content-renderer ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.content-renderer a:hover {
  text-decoration: underline;
}

.content-renderer ::placeholder {
  color: #9198a1;
  opacity: 1;
}

.content-renderer hr::before {
  display: table;
  content: "";
}

.content-renderer hr::after {
  display: table;
  clear: both;
  content: "";
}

.content-renderer table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.content-renderer td,
.content-renderer th {
  padding: 0;
}

.content-renderer details summary {
  cursor: pointer;
}

.content-renderer a:focus,
.content-renderer [role="button"]:focus,
.content-renderer input[type="radio"]:focus,
.content-renderer input[type="checkbox"]:focus {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.content-renderer a:focus:not(:focus-visible),
.content-renderer [role="button"]:focus:not(:focus-visible),
.content-renderer input[type="radio"]:focus:not(:focus-visible),
.content-renderer input[type="checkbox"]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.content-renderer a:focus-visible,
.content-renderer [role="button"]:focus-visible,
.content-renderer input[type="radio"]:focus-visible,
.content-renderer input[type="checkbox"]:focus-visible {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.content-renderer a:not([class]):focus,
.content-renderer a:not([class]):focus-visible,
.content-renderer input[type="radio"]:focus,
.content-renderer input[type="radio"]:focus-visible,
.content-renderer input[type="checkbox"]:focus,
.content-renderer input[type="checkbox"]:focus-visible {
  outline-offset: 0;
}

.content-renderer kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  line-height: 10px;
  color: #f0f6fc;
  vertical-align: middle;
  background-color: #151b23;
  border: solid 1px #3d444db3;
  border-bottom-color: #3d444db3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #3d444db3;
}

.content-renderer h1,
.content-renderer h2,
.content-renderer h3,
.content-renderer h4,
.content-renderer h5,
.content-renderer h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.content-renderer h2 {
  font-weight: 600;
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid #3d444db3;
}

.content-renderer h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.content-renderer h4 {
  font-weight: 600;
  font-size: 1em;
}

.content-renderer h5 {
  font-weight: 600;
  font-size: 0.875em;
}

.content-renderer h6 {
  font-weight: 600;
  font-size: 0.85em;
  color: #9198a1;
}

.content-renderer p {
  margin-top: 0;
  margin-bottom: 10px;
}

.content-renderer blockquote {
  margin: 0;
  padding: 0 1em;
  color: #9198a1;
  border-left: 0.25em solid #3d444d;
}

.content-renderer ul,
.content-renderer ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.content-renderer ol ol,
.content-renderer ul ol {
  list-style-type: lower-roman;
}

.content-renderer ul ul ol,
.content-renderer ul ol ol,
.content-renderer ol ul ol,
.content-renderer ol ol ol {
  list-style-type: lower-alpha;
}

.content-renderer dd {
  margin-left: 0;
}

.content-renderer tt,
.content-renderer code,
.content-renderer samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
}

.content-renderer pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.content-renderer .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.content-renderer input::-webkit-outer-spin-button,
.content-renderer input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.content-renderer .mr-2 {
  margin-right: 0.5rem !important;
}

.content-renderer::before {
  display: table;
  content: "";
}

.content-renderer::after {
  display: table;
  clear: both;
  content: "";
}

.content-renderer > *:first-child {
  margin-top: 0 !important;
}

.content-renderer > *:last-child {
  margin-bottom: 0 !important;
}

.content-renderer a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.content-renderer .absent {
  color: #f85149;
}

.content-renderer .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.content-renderer .anchor:focus {
  outline: none;
}

.content-renderer p,
.content-renderer blockquote,
.content-renderer ul,
.content-renderer ol,
.content-renderer dl,
.content-renderer table,
.content-renderer pre,
.content-renderer details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.content-renderer blockquote > :first-child {
  margin-top: 0;
}

.content-renderer blockquote > :last-child {
  margin-bottom: 0;
}

.content-renderer h1 .octicon-link,
.content-renderer h2 .octicon-link,
.content-renderer h3 .octicon-link,
.content-renderer h4 .octicon-link,
.content-renderer h5 .octicon-link,
.content-renderer h6 .octicon-link {
  color: #f0f6fc;
  vertical-align: middle;
  visibility: hidden;
}

.content-renderer h1:hover .anchor,
.content-renderer h2:hover .anchor,
.content-renderer h3:hover .anchor,
.content-renderer h4:hover .anchor,
.content-renderer h5:hover .anchor,
.content-renderer h6:hover .anchor {
  text-decoration: none;
}

.content-renderer h1:hover .anchor .octicon-link,
.content-renderer h2:hover .anchor .octicon-link,
.content-renderer h3:hover .anchor .octicon-link,
.content-renderer h4:hover .anchor .octicon-link,
.content-renderer h5:hover .anchor .octicon-link,
.content-renderer h6:hover .anchor .octicon-link {
  visibility: visible;
}

.content-renderer h1 tt,
.content-renderer h1 code,
.content-renderer h2 tt,
.content-renderer h2 code,
.content-renderer h3 tt,
.content-renderer h3 code,
.content-renderer h4 tt,
.content-renderer h4 code,
.content-renderer h5 tt,
.content-renderer h5 code,
.content-renderer h6 tt,
.content-renderer h6 code {
  padding: 0 0.2em;
  font-size: inherit;
}

.content-renderer summary h1,
.content-renderer summary h2,
.content-renderer summary h3,
.content-renderer summary h4,
.content-renderer summary h5,
.content-renderer summary h6 {
  display: inline-block;
}

.content-renderer summary h1 .anchor,
.content-renderer summary h2 .anchor,
.content-renderer summary h3 .anchor,
.content-renderer summary h4 .anchor,
.content-renderer summary h5 .anchor,
.content-renderer summary h6 .anchor {
  margin-left: -40px;
}

.content-renderer summary h1,
.content-renderer summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.content-renderer ul.no-list,
.content-renderer ol.no-list {
  padding: 0;
  list-style-type: none;
}

.content-renderer ol[type="a s"] {
  list-style-type: lower-alpha;
}

.content-renderer ol[type="A s"] {
  list-style-type: upper-alpha;
}

.content-renderer ol[type="i s"] {
  list-style-type: lower-roman;
}

.content-renderer ol[type="I s"] {
  list-style-type: upper-roman;
}

.content-renderer ol[type="1"] {
  list-style-type: decimal;
}

.content-renderer div > ol:not([type]) {
  list-style-type: decimal;
}

.content-renderer ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 1rem;
}

.content-renderer ol {
  list-style-type: decimal;
  padding-left: 20px;
  margin-bottom: 1rem;
}

.content-renderer ul ul,
.content-renderer ul ol,
.content-renderer ol ol,
.content-renderer ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.content-renderer li > p {
  margin-top: 1rem;
}

.content-renderer li + li {
  margin-top: 0.25em;
}

.content-renderer dl {
  padding: 0;
}

.content-renderer dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.content-renderer dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.content-renderer table th {
  font-weight: 600;
}

.content-renderer table th,
.content-renderer table td {
  padding: 6px 13px;
  border: 1px solid #3d444d;
}

.content-renderer table td > :last-child {
  margin-bottom: 0;
}

.content-renderer table tr {
  background-color: #0d1117;
  border-top: 1px solid #3d444db3;
}

.content-renderer table tr:nth-child(2n) {
  background-color: #151b23;
}

.content-renderer table img {
  background-color: transparent;
}

.content-renderer img[align="right"] {
  padding-left: 20px;
}

.content-renderer img[align="left"] {
  padding-right: 20px;
}

.content-renderer .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.content-renderer span.frame {
  display: block;
  overflow: hidden;
}

.content-renderer span.frame > span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #3d444d;
}

.content-renderer span.frame span img {
  display: block;
  float: left;
}

.content-renderer span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #f0f6fc;
}

.content-renderer span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.content-renderer span.align-center > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.content-renderer span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.content-renderer span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.content-renderer span.align-right > span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.content-renderer span.align-right span img {
  margin: 0;
  text-align: right;
}

.content-renderer span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.content-renderer span.float-left span {
  margin: 13px 0 0;
}

.content-renderer span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.content-renderer span.float-right > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.content-renderer code,
.content-renderer tt {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #656c7633;
  border-radius: 6px;
}

.content-renderer code br,
.content-renderer tt br {
  display: none;
}

.content-renderer del code {
  text-decoration: inherit;
}

.content-renderer samp {
  font-size: 85%;
}

.content-renderer pre code {
  font-size: 100%;
}

.content-renderer pre > code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.content-renderer .highlight {
  margin-bottom: 1rem;
}

.content-renderer .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.content-renderer .highlight pre,
.content-renderer pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #f0f6fc;
  background-color: #151b23;
  border-radius: 6px;
}

.content-renderer pre code,
.content-renderer pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.content-renderer .csv-data td,
.content-renderer .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.content-renderer .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.content-renderer .csv-data tr {
  border-top: 0;
}

.content-renderer .csv-data th {
  font-weight: 600;
  background: #151b23;
  border-top: 0;
}

.content-renderer [data-footnote-ref]::before {
  content: "[";
}

.content-renderer [data-footnote-ref]::after {
  content: "]";
}

.content-renderer .footnotes {
  font-size: 12px;
  color: #9198a1;
  border-top: 1px solid #3d444d;
}

.content-renderer .footnotes ol {
  padding-left: 1rem;
}

.content-renderer .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.content-renderer .footnotes li {
  position: relative;
}

.content-renderer .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem * -1);
  right: calc(0.5rem * -1);
  bottom: calc(0.5rem * -1);
  left: calc(1.5rem * -1);
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.content-renderer .footnotes li:target {
  color: #f0f6fc;
}

.content-renderer .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.content-renderer .pl-c {
  color: #9198a1;
}

.content-renderer .pl-c1,
.content-renderer .pl-s .pl-v {
  color: #79c0ff;
}

.content-renderer .pl-e,
.content-renderer .pl-en {
  color: #d2a8ff;
}

.content-renderer .pl-smi,
.content-renderer .pl-s .pl-s1 {
  color: #f0f6fc;
}

.content-renderer .pl-ent {
  color: #7ee787;
}

.content-renderer .pl-k {
  color: #ff7b72;
}

.content-renderer .pl-s,
.content-renderer .pl-pds,
.content-renderer .pl-s .pl-pse .pl-s1,
.content-renderer .pl-sr,
.content-renderer .pl-sr .pl-cce,
.content-renderer .pl-sr .pl-sre,
.content-renderer .pl-sr .pl-sra {
  color: #a5d6ff;
}

.content-renderer .pl-v,
.content-renderer .pl-smw {
  color: #ffa657;
}

.content-renderer .pl-bu {
  color: #f85149;
}

.content-renderer .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.content-renderer .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.content-renderer .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.content-renderer .pl-ml {
  color: #f2cc60;
}

.content-renderer .pl-mh,
.content-renderer .pl-mh .pl-en,
.content-renderer .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.content-renderer .pl-mi {
  font-style: italic;
  color: #f0f6fc;
}

.content-renderer .pl-mb {
  font-weight: bold;
  color: #f0f6fc;
}

.content-renderer .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.content-renderer .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.content-renderer .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.content-renderer .pl-mi2 {
  color: #f0f6fc;
  background-color: #1158c7;
}

.content-renderer .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.content-renderer .pl-ba {
  color: #9198a1;
}

.content-renderer .pl-sg {
  color: #3d444d;
}

.content-renderer .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.content-renderer [role="button"]:focus:not(:focus-visible),
.content-renderer [role="tabpanel"][tabindex="0"]:focus:not(:focus-visible),
.content-renderer button:focus:not(:focus-visible),
.content-renderer summary:focus:not(:focus-visible),
.content-renderer a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.content-renderer [tabindex="0"]:focus:not(:focus-visible),
.content-renderer details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.content-renderer g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.content-renderer g-emoji img {
  width: 1em;
  height: 1em;
}

.content-renderer .task-list-item {
  list-style-type: none;
}

.content-renderer .task-list-item label {
  font-weight: 400;
}

.content-renderer .task-list-item.enabled label {
  cursor: pointer;
}

.content-renderer .task-list-item + .task-list-item {
  margin-top: 0.25rem;
}

.content-renderer .task-list-item .handle {
  display: none;
}

.content-renderer .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.4em;
  vertical-align: middle;
}

.content-renderer ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em 0.25em 0.2em;
}

.content-renderer ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em 0.25em 0.2em;
}

.content-renderer .contains-task-list:hover .task-list-item-convert-container,
.content-renderer
  .contains-task-list:focus-within
  .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.content-renderer ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.content-renderer .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: 0.25em solid #3d444d;
}

.content-renderer .markdown-alert > :first-child {
  margin-top: 0;
}

.content-renderer .markdown-alert > :last-child {
  margin-bottom: 0;
}

.content-renderer .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.content-renderer .markdown-alert.markdown-alert-note {
  border-left-color: #1f6feb;
}

.content-renderer .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #4493f8;
}

.content-renderer .markdown-alert.markdown-alert-important {
  border-left-color: #8957e5;
}

.content-renderer
  .markdown-alert.markdown-alert-important
  .markdown-alert-title {
  color: #ab7df8;
}

.content-renderer .markdown-alert.markdown-alert-warning {
  border-left-color: #9e6a03;
}

.content-renderer .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #d29922;
}

.content-renderer .markdown-alert.markdown-alert-tip {
  border-left-color: #238636;
}

.content-renderer .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #3fb950;
}

.content-renderer .markdown-alert.markdown-alert-caution {
  border-left-color: #da3633;
}

.content-renderer .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #f85149;
}

.content-renderer > *:first-child > .heading-element:first-child {
  margin-top: 0 !important;
}
</style>
