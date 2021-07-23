import { GRAMMAR_TEXT, GRAMMAR_TITLE } from "src/app/modules/grammar/grammar.constants";
import { AboutText } from "./left-layout.component";

export class Grammar implements AboutText {
  title = GRAMMAR_TITLE;
  text = GRAMMAR_TEXT;
}

