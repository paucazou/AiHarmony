import {nd} from "../notes/NotesData.js";
import { ares } from "../analysis/AnalysisResults.js";
import { MD5 } from "../core/string.js";
import { modeName } from "./noteHelper.js";

export function getMusicHash() {
  let st = '';
  st += nd.keysig.name + nd.keysig.mode + ' ';
  st += nd.timesig.measure_len + ' ' + nd.timesig.beats_per_measure + ' ';
  for (let v=0; v<nd.voices.length; ++v) {
    const vc = nd.voices[v];
    for (let n = 0; n < vc.notes.length; ++n) {
      const nt = vc.notes[n];
      if (!nt.d) continue;
      let packed = '';
      packed += nt.len;
      packed += nt.startsTie ? 1 : 0;
      packed += nt.alter;
      packed += nt.d;
      st += packed + ' ';
    }
  }
  return MD5(st);
}

export function getCantusHash() {
  let st = '';
  for (let v=0; v<nd.voices.length; ++v) {
    const species = ares.getSpecies(v);
    // Return empty string if there is problem with analysis
    if (species == null) return '';
    if (species) continue;
    const vc = nd.voices[v];
    for (let n = 0; n < vc.notes.length; ++n) {
      const nt = vc.notes[n];
      if (!nt.d) continue;
      let packed = '';
      packed += nt.startsTie ? 1 : 0;
      packed += nt.alter == 10 ? 0 : 1;
      packed += nt.d;
      st += packed + ' ';
    }
  }
  console.log(st);
  if (st) return MD5(st);
  else return '';
}

export function getSpeciesString() {
  let st = '';
  for (let v=0; v<nd.voices.length; ++v) {
    const species = ares.getSpecies(v);
    // Return empty string if there is problem with analysis
    if (species == null) return '';
    st += species ? species : "C";
  }
  return st;
}

export function getVocraString() {
  let st = '';
  for (let v=0; v<nd.voices.length; ++v) {
    const vocra = ares.getVocra(v);
    // Return empty string if there is problem with analysis
    if (vocra == null) return '';
    st += vocra[0];
  }
  return st;
}

export function getAnnotationsHash() {
  let st = '';
  for (let v=0; v<nd.voices.length; ++v) {
    const vc = nd.voices[v];
    for (let n = 0; n < vc.notes.length; ++n) {
      const nt = vc.notes[n];
      if (nt.text) st += v + '' + n + nt.text + '~';
      if (nt.lyric) st += v + '' + n + nt.lyric + '~';
    }
  }
  if (st) return MD5(st);
  else return '';
}

export function getAnnotationsCount() {
  let cnt = 0;
  for (let v=0; v<nd.voices.length; ++v) {
    const vc = nd.voices[v];
    for (let n = 0; n < vc.notes.length; ++n) {
      const nt = vc.notes[n];
      if (nt.text) cnt++;
      if (nt.lyric) cnt++;
    }
  }
  return cnt;
}

export function getPublishedModeName() {
  console.log(nd.keysig, ares.mode);
  if (ares.mode != null) {
    return modeName(nd.keysig.fifths, ares.mode);
  } else {
    return modeName(nd.keysig.fifths, nd.keysig.mode);
  }
}