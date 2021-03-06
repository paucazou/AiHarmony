import {async_redraw, selected, highlightNote, state, highlightRange} from "../../abc/abchelper.js";
import {stop_advancing} from "./editScore.js";
import {saveState} from "../../state/history.js";
import {update_selection} from "../selection.js";
import {nd} from "../../notes/NotesData.js";
import { play_note } from "../../audio/audio.js";

export function move_to_next_note(saveState = true) {
  if (!selected.note) return false;
  let notes = nd.voices[selected.note.voice].notes;
  if (selected.note.note === notes.length - 1) {
    nd.append_measure(saveState);
    selected.note = {
      voice: selected.note.voice,
      note: selected.note.note + 1
    };
    return true;
  }
  selected.note = {
    voice: selected.note.voice,
    note: selected.note.note + 1
  };
  return false;
}

export function next_note() {
  if (state.state !== 'ready') return;
  if (!selected.note) return;
  stop_advancing();
  if (move_to_next_note(false)) {
    async_redraw();
  } else {
    highlightNote();
  }
  play_note(selected.note.voice, selected.note.note);
  saveState(false);
  update_selection();
}

export function move_to_previous_note() {
  if (!selected.note) return;
  if (selected.note.note) {
    // Decrement
    selected.note = {
      voice: selected.note.voice,
      note: selected.note.note - 1
    };
  } else {
    selected.note = {
      voice: selected.note.voice,
      note: selected.note.note
    };
  }
}

export function prev_note() {
  if (state.state !== 'ready') return;
  if (!selected.note) return;
  move_to_previous_note();
  play_note(selected.note.voice, selected.note.note);
  stop_advancing();
  highlightNote();
  saveState(false);
  update_selection();
}

export function select_note(v, n) {
  if (state.state !== 'ready') return;
  if (nd.voices.length <= v) return;
  if (nd.voices[v].notes.length <= n) return;
  selected.note = {voice: v, note: n};
  stop_advancing();
  highlightNote();
  saveState(false);
  update_selection();
}

export function select_range(v1, v2, s1, s2, severity, doSaveState=true) {
  console.log('Selecting range...', state, nd.voices.length, v1, v2);
  if (state.state !== 'ready') return;
  if (nd.voices.length <= v1) return;
  if (nd.voices.length <= v2) return;
  selected.note = {
    voice: v1,
    note: nd.getClosestNote(v1, s1),
    v1: v1,
    n11: nd.getClosestNote(v1, s1),
    n12: nd.getClosestNote(v1, s2),
    v2: v2,
    n21: nd.getClosestNote(v2, s1),
    n22: nd.getClosestNote(v2, s2),
    s1: s1,
    s2: s2,
    severity: severity
  };
  console.log(selected);
  stop_advancing();
  highlightRange(severity);
  if (doSaveState) {
    saveState(false);
  }
  update_selection();
}
