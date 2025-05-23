import { Refractor } from "react-refractor";
import js from "refractor/javascript";
import ts from "refractor/typescript";
import tsx from "refractor/tsx";
import jsx from "refractor/jsx";
import sql from "refractor/sql";
import bash from "refractor/bash";
import markdown from "refractor/markdown";
import css from "refractor/css";
import scss from "refractor/scss";
import python from "refractor/python";
import html from "refractor/markup";
import yaml from "refractor/yaml";
import graphql from "refractor/graphql";
import json from "refractor/json";
import java from "refractor/java";
import Clipoboard from "./Clipoboard";

// Supported languages: https://prismjs.com/#supported-languages
Refractor.bind(js);
Refractor.bind(ts);
Refractor.bind(jsx);
Refractor.bind(tsx);
Refractor.bind(sql);
Refractor.bind(bash);
Refractor.bind(markdown);
Refractor.bind(css);
Refractor.bind(scss);
Refractor.bind(python);
Refractor.bind(html);
Refractor.bind(yaml);
Refractor.bind(graphql);
Refractor.bind(json);
Refractor.bind(java);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}
