import {readMusicXml} from "./musicXmlToData.js";

export function load_test_musicXml() {
  readMusicXml(test_xml_string, '');
}

let test_xml_string =
`<?xml version="1.0" encoding='UTF-8' standalone='no' ?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.0">
 <work>
  <work-title>test-xml Это тест</work-title>
 </work>
 <identification>
  <creator type="composer">test-xml-composer Это тест</creator>
  <creator type="arranger">test-xml-arranger Это тест</creator>
  <rights>Copyright © test Это тест</rights>
  <encoding>
   <encoding-date>2020-01-19</encoding-date>
   <encoder>Rualark</encoder>
   <software>Sibelius 19.5.0</software>
   <software>Direct export, not from Dolet</software>
   <encoding-description>Sibelius / MusicXML 3.0</encoding-description>
   <supports element="print" type="yes" value="yes" attribute="new-system" />
   <supports element="print" type="yes" value="yes" attribute="new-page" />
   <supports element="accidental" type="yes" />
   <supports element="beam" type="yes" />
   <supports element="stem" type="yes" />
  </encoding>
 </identification>
 <defaults>
  <scaling>
   <millimeters>215.9</millimeters>
   <tenths>1233</tenths>
  </scaling>
  <page-layout>
   <page-height>1596</page-height>
   <page-width>1233</page-width>
   <page-margins type="both">
    <left-margin>85</left-margin>
    <right-margin>85</right-margin>
    <top-margin>85</top-margin>
    <bottom-margin>85</bottom-margin>
   </page-margins>
  </page-layout>
  <system-layout>
   <system-margins>
    <left-margin>67</left-margin>
    <right-margin>0</right-margin>
   </system-margins>
   <system-distance>92</system-distance>
  </system-layout>
  <appearance>
   <line-width type="stem">0.9375</line-width>
   <line-width type="beam">5</line-width>
   <line-width type="staff">0.9375</line-width>
   <line-width type="light barline">1.5625</line-width>
   <line-width type="heavy barline">5</line-width>
   <line-width type="leger">1.5625</line-width>
   <line-width type="ending">1.5625</line-width>
   <line-width type="wedge">1.25</line-width>
   <line-width type="enclosure">0.9375</line-width>
   <line-width type="tuplet bracket">1.25</line-width>
   <line-width type="bracket">5</line-width>
   <line-width type="dashes">1.5625</line-width>
   <line-width type="extend">0.9375</line-width>
   <line-width type="octave shift">1.5625</line-width>
   <line-width type="pedal">1.5625</line-width>
   <line-width type="slur middle">1.5625</line-width>
   <line-width type="slur tip">0.625</line-width>
   <line-width type="tie middle">1.5625</line-width>
   <line-width type="tie tip">0.625</line-width>
   <note-size type="cue">75</note-size>
   <note-size type="grace">60</note-size>
  </appearance>
  <music-font font-family="Opus Std" font-size="19.8425" />
  <lyric-font font-family="Plantin MT Std" font-size="11.4715" />
  <lyric-language xml:lang="en" />
 </defaults>
 <credit page="1">
  <credit-words default-x="616" default-y="155" font-family="Plantin MT Std" font-style="normal" font-size="22.0128" font-weight="normal" justify="center" valign="middle">test-xml Это тест</credit-words>
 </credit>
 <part-list>
  <part-group type="start" number="1">
   <group-symbol>brace</group-symbol>
  </part-group>
  <score-part id="P1">
   <part-name>Piano</part-name>
   <part-name-display>
    <display-text>Piano</display-text>
   </part-name-display>
   <part-abbreviation>Pno.</part-abbreviation>
   <part-abbreviation-display>
    <display-text>Pno.</display-text>
   </part-abbreviation-display>
   <score-instrument id="P1-I1">
    <instrument-name>Piano (2)</instrument-name>
    <instrument-sound>keyboard.piano.grand</instrument-sound>
    <solo />
    <virtual-instrument>
     <virtual-library>General MIDI</virtual-library>
     <virtual-name>Acoustic Piano</virtual-name>
    </virtual-instrument>
   </score-instrument>
  </score-part>
  <part-group type="stop" number="1" />
  <part-group type="start" number="2">
   <group-symbol>bracket</group-symbol>
  </part-group>
  <score-part id="P3">
   <part-name>Violin</part-name>
   <part-name-display>
    <display-text>Violin</display-text>
   </part-name-display>
   <part-abbreviation>Vln.</part-abbreviation>
   <part-abbreviation-display>
    <display-text>Vln.</display-text>
   </part-abbreviation-display>
   <score-instrument id="P3-I1">
    <instrument-name>Violin</instrument-name>
    <instrument-sound>strings.violin</instrument-sound>
    <solo />
    <virtual-instrument>
     <virtual-library>General MIDI</virtual-library>
     <virtual-name>Violin</virtual-name>
    </virtual-instrument>
   </score-instrument>
  </score-part>
  <score-part id="P4">
   <part-name>Viola</part-name>
   <part-name-display>
    <display-text>Viola</display-text>
   </part-name-display>
   <part-abbreviation>Vla.</part-abbreviation>
   <part-abbreviation-display>
    <display-text>Vla.</display-text>
   </part-abbreviation-display>
   <score-instrument id="P4-I1">
    <instrument-name>Viola</instrument-name>
    <instrument-sound>strings.viola</instrument-sound>
    <solo />
    <virtual-instrument>
     <virtual-library>General MIDI</virtual-library>
     <virtual-name>Viola</virtual-name>
    </virtual-instrument>
   </score-instrument>
  </score-part>
  <score-part id="P5">
   <part-name>Violoncello</part-name>
   <part-name-display>
    <display-text>Violoncello</display-text>
   </part-name-display>
   <part-abbreviation>Vc.</part-abbreviation>
   <part-abbreviation-display>
    <display-text>Vc.</display-text>
   </part-abbreviation-display>
   <score-instrument id="P5-I1">
    <instrument-name>Violoncello</instrument-name>
    <instrument-sound>strings.cello</instrument-sound>
    <solo />
    <virtual-instrument>
     <virtual-library>General MIDI</virtual-library>
     <virtual-name>Cello</virtual-name>
    </virtual-instrument>
   </score-instrument>
  </score-part>
  <part-group type="stop" number="2" />
 </part-list>
 <part id="P1">
  <!--============== Part: P1, Measure: 1 ==============-->
  <measure number="1" width="190">
   <print new-page="yes">
    <system-layout>
     <system-margins>
      <left-margin>140</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
     <top-system-distance>218</top-system-distance>
    </system-layout>
    <staff-layout number="2">
     <staff-distance>55</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <divisions>256</divisions>
    <key color="#000000">
     <fifths>2</fifths>
     <mode>major</mode>
    </key>
    <time color="#000000">
     <beats>4</beats>
     <beat-type>4</beat-type>
    </time>
    <staves>2</staves>
    <clef number="1" color="#000000">
     <sign>G</sign>
     <line>2</line>
    </clef>
    <clef number="2" color="#000000">
     <sign>F</sign>
     <line>4</line>
    </clef>
    <staff-details number="1" print-object="yes" />
    <staff-details number="2" print-object="yes" />
   </attributes>
   <note default-x="72">
    <rest />
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note default-x="72">
    <rest />
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 2 ==============-->
  <measure number="2" width="279">
   <attributes />
   <note default-x="15">
    <rest />
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <staff>1</staff>
   </note>
   <direction>
    <direction-type>
     <words default-x="40" default-y="82" justify="left" valign="middle" font-family="Plantin MT Std" font-style="normal" font-size="11.9365" font-weight="normal">some text</words>
     <words justify="left" valign="middle" font-family="Plantin MT Std" font-style="normal" font-size="11.9365" font-weight="normal">more text</words>
     <words justify="left" valign="middle" font-family="Plantin MT Std" font-style="normal" font-size="11.9365" font-weight="normal">another text</words>
    </direction-type>
    <voice>1</voice>
    <staff>1</staff>
   </direction>
   <note color="#000000" default-x="45" default-y="-49">
    <pitch>
     <step>D</step>
     <octave>5</octave>
    </pitch>
    <duration>64</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>16th</type>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">begin</beam>
    <beam number="2">begin</beam>
   </note>
   <note color="#000000" default-x="69" default-y="-49">
    <pitch>
     <step>B</step>
     <octave>4</octave>
    </pitch>
    <duration>64</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>16th</type>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">end</beam>
    <beam number="2">end</beam>
   </note>
   <note color="#000000" default-x="93" default-y="-49">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>5</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">begin</beam>
   </note>
   <note color="#000000" default-x="124" default-y="-49">
    <pitch>
     <step>B</step>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">end</beam>
   </note>
   <note color="#000000" default-x="154" default-y="10">
    <pitch>
     <step>A</step>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <note default-x="185">
    <rest />
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="217" default-y="-5">
    <pitch>
     <step>F</step>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>natural</accidental>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">begin</beam>
   </note>
   <note color="#000000" default-x="248" default-y="-5">
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">end</beam>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 3 ==============-->
  <measure number="3" width="267">
   <attributes />
   <note color="#000000" default-x="15" default-y="9">
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>sharp</accidental>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">begin</beam>
   </note>
   <note color="#000000" default-x="46" default-y="9">
    <pitch>
     <step>G</step>
     <alter>-1</alter>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>flat</accidental>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">continue</beam>
   </note>
   <note color="#000000" default-x="82" default-y="9">
    <pitch>
     <step>A</step>
     <alter>-2</alter>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>flat-flat</accidental>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">continue</beam>
   </note>
   <note color="#000000" default-x="113" default-y="9">
    <pitch>
     <step>B</step>
     <alter>2</alter>
     <octave>4</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>double-sharp</accidental>
    <stem>up</stem>
    <staff>1</staff>
    <beam number="1">end</beam>
   </note>
   <note color="#000000" default-x="144" default-y="-50">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>5</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note default-x="175">
    <rest />
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="205" default-y="-34">
    <pitch>
     <step>E</step>
     <octave>5</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">begin</beam>
   </note>
   <note color="#000000" default-x="236" default-y="-34">
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>5</octave>
    </pitch>
    <duration>128</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>eighth</type>
    <accidental>sharp</accidental>
    <stem>down</stem>
    <staff>1</staff>
    <beam number="1">end</beam>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15">
    <pitch>
     <step>E</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 4 ==============-->
  <measure number="4" width="185">
   <attributes />
   <note color="#000000" default-x="15">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>5</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15" default-y="22">
    <pitch>
     <step>G</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>2</staff>
   </note>
   <note color="#000000" default-x="57" default-y="27">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>2</staff>
   </note>
   <note color="#000000" default-x="100" default-y="32">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>2</staff>
   </note>
   <note color="#000000" default-x="142" default-y="27">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>2</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15">
    <pitch>
     <step>E</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>3</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 5 ==============-->
  <measure number="5" width="232">
   <print new-system="yes">
    <system-layout>
     <system-margins>
      <left-margin>22</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
     <system-distance>200</system-distance>
    </system-layout>
    <staff-layout number="2">
     <staff-distance>55</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <staff-details number="1" print-object="yes" />
    <staff-details number="2" print-object="yes" />
   </attributes>
   <note color="#000000" default-x="87" default-y="-45">
    <pitch>
     <step>D</step>
     <octave>5</octave>
    </pitch>
    <duration>512</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>half</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="160" default-y="-40">
    <pitch>
     <step>E</step>
     <octave>5</octave>
    </pitch>
    <duration>512</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>half</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="87">
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 6 ==============-->
  <measure number="6" width="160">
   <attributes />
   <note color="#000000" default-x="15" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>768</duration>
    <tie type="start" />
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="123" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <tie type="stop" />
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15" default-y="-50">
    <pitch>
     <step>E</step>
     <octave>3</octave>
    </pitch>
    <duration>768</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>half</type>
    <dot />
    <stem>down</stem>
    <staff>2</staff>
   </note>
   <note color="#000000" default-x="123" default-y="-55">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="start" />
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>2</staff>
    <notations>
     <tied type="start" orientation="over" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 7 ==============-->
  <measure number="7" width="209">
   <attributes />
   <note color="#000000" default-x="15" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <forward>
    <duration>256</duration>
   </forward>
   <note color="#000000" default-x="112" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <backup>
    <duration>768</duration>
   </backup>
   <note color="#000000" default-x="15" default-y="-55">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>512</duration>
    <tie type="stop" />
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>half</type>
    <stem>down</stem>
    <staff>2</staff>
    <notations>
     <tied type="stop" orientation="over" />
    </notations>
   </note>
   <note color="#000000" default-x="112" default-y="-55">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>512</duration>
    <tie type="start" />
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>half</type>
    <stem>down</stem>
    <staff>2</staff>
    <notations>
     <tied type="start" orientation="over" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 8 ==============-->
  <measure number="8" width="160">
   <attributes />
   <note color="#000000" default-x="15" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51" default-y="5">
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>768</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15" default-y="-55">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="stop" />
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>2</staff>
    <notations>
     <tied type="stop" orientation="over" />
    </notations>
   </note>
   <note color="#000000" default-x="51" default-y="10">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>3</octave>
    </pitch>
    <duration>768</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 9 ==============-->
  <measure number="9" width="124">
   <attributes />
   <note color="#000000" default-x="15">
    <pitch>
     <step>D</step>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15" default-y="5">
    <pitch>
     <step>B</step>
     <octave>2</octave>
    </pitch>
    <duration>768</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>2</staff>
   </note>
   <note default-x="88">
    <rest />
    <duration>256</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>quarter</type>
    <staff>2</staff>
   </note>
  </measure>
  <!--============== Part: P1, Measure: 10 ==============-->
  <measure number="10" width="153">
   <attributes />
   <note color="#000000" default-x="15">
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <barline>
    <bar-style>light-heavy</bar-style>
   </barline>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15">
    <pitch>
     <step>D</step>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>2</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
   <backup>
    <duration>1024</duration>
   </backup>
   <note color="#000000" default-x="15">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P1-I1" />
    <voice>3</voice>
    <type>whole</type>
    <staff>2</staff>
   </note>
  </measure>
 </part>
 <part id="P3">
  <!--============== Part: P3, Measure: 1 ==============-->
  <measure number="1" width="190">
   <print new-page="yes">
    <system-layout>
     <system-margins>
      <left-margin>140</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>90</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <divisions>256</divisions>
    <key color="#000000">
     <fifths>2</fifths>
     <mode>major</mode>
    </key>
    <time color="#000000">
     <beats>4</beats>
     <beat-type>4</beat-type>
    </time>
    <staves>1</staves>
    <clef number="1" color="#000000">
     <sign>G</sign>
     <line>2</line>
     <clef-octave-change>-1</clef-octave-change>
    </clef>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note default-x="72">
    <rest />
    <duration>1024</duration>
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 2 ==============-->
  <measure number="2" width="279">
   <note color="#000000" default-x="15">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 3 ==============-->
  <measure number="3" width="267">
   <note color="#000000" default-x="15">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <tie type="stop" />
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
     <tied type="start" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 4 ==============-->
  <measure number="4" width="185">
   <note color="#000000" default-x="15">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <tie type="stop" />
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
     <tied type="start" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 5 ==============-->
  <measure number="5" width="232">
   <print new-system="yes">
    <system-layout>
     <system-margins>
      <left-margin>22</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>90</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note color="#000000" default-x="87">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>1024</duration>
    <tie type="stop" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 6 ==============-->
  <measure number="6" width="160">
   <note color="#000000" default-x="15" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>768</duration>
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="123" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="stop" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 7 ==============-->
  <measure number="7" width="209">
   <note color="#000000" default-x="15" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>512</duration>
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="112" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="stop" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="173" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 8 ==============-->
  <measure number="8" width="160">
   <note color="#000000" default-x="15" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="stop" />
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
     <tied type="start" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="51" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>512</duration>
    <tie type="stop" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
   <note color="#000000" default-x="123" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <tie type="start" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="start" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 9 ==============-->
  <measure number="9" width="124">
   <note color="#000000" default-x="15" default-y="10">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>768</duration>
    <tie type="stop" />
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <dot />
    <stem>up</stem>
    <staff>1</staff>
    <notations>
     <tied type="stop" orientation="under" />
    </notations>
   </note>
  </measure>
  <!--============== Part: P3, Measure: 10 ==============-->
  <measure number="10" width="153">
   <note color="#000000" default-x="15" default-y="-10">
    <pitch>
     <step>D</step>
     <octave>3</octave>
    </pitch>
    <duration>512</duration>
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <note default-x="76">
    <rest />
    <duration>512</duration>
    <instrument id="P3-I1" />
    <voice>1</voice>
    <type>half</type>
    <staff>1</staff>
   </note>
   <barline>
    <bar-style>light-heavy</bar-style>
   </barline>
  </measure>
 </part>
 <part id="P4">
  <!--============== Part: P4, Measure: 1 ==============-->
  <measure number="1" width="190">
   <print new-page="yes">
    <system-layout>
     <system-margins>
      <left-margin>140</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>61</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <divisions>256</divisions>
    <key color="#000000">
     <fifths>2</fifths>
     <mode>major</mode>
    </key>
    <time color="#000000">
     <beats>4</beats>
     <beat-type>4</beat-type>
    </time>
    <staves>1</staves>
    <clef number="1" color="#000000">
     <sign>C</sign>
     <line>3</line>
    </clef>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note default-x="72">
    <rest />
    <duration>1024</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 2 ==============-->
  <measure number="2" width="279">
   <note color="#000000" default-x="15" default-y="-55">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
    <lyric default-y="-80" number="part4verse1" color="#000000">
     <syllabic>single</syllabic>
     <text>sp5555555</text>
    </lyric>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="93" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="93">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="154" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="154">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="217" default-y="17">
    <pitch>
     <step>G</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="217">
    <chord />
    <pitch>
     <step>D</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 3 ==============-->
  <measure number="3" width="267">
   <note color="#000000" default-x="15" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="82" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="82">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="144" default-y="-55">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="144">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="205" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="205">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 4 ==============-->
  <measure number="4" width="185">
   <note color="#000000" default-x="15" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="57" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="57">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="100" default-y="-55">
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="100">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="142" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="142">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 5 ==============-->
  <measure number="5" width="232">
   <print new-system="yes">
    <system-layout>
     <system-margins>
      <left-margin>22</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>60</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note color="#000000" default-x="87" default-y="-57">
    <pitch>
     <step>B</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>A</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="160" default-y="-62">
    <pitch>
     <step>G</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="160">
    <chord />
    <pitch>
     <step>D</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <accidental>sharp</accidental>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="160">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="196" default-y="20">
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>up</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="196">
    <chord />
    <pitch>
     <step>C</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="196">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 6 ==============-->
  <measure number="6" width="160">
   <note color="#000000" default-x="15" default-y="-62">
    <pitch>
     <step>G</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>D</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <accidental>natural</accidental>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 7 ==============-->
  <measure number="7" width="209">
   <note color="#000000" default-x="15" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="75" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="75">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="75">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="112" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="112">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="112">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="173" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="173">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="173">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 8 ==============-->
  <measure number="8" width="160">
   <note color="#000000" default-x="15" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="51">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="87">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>quarter</type>
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="123">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>256</duration>
    <instrument id="P4-I1" />
    <type>quarter</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 9 ==============-->
  <measure number="9" width="124">
   <note color="#000000" default-x="15" default-y="-60">
    <pitch>
     <step>A</step>
     <octave>3</octave>
    </pitch>
    <duration>768</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>half</type>
    <dot />
    <stem>down</stem>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>E</step>
     <octave>4</octave>
    </pitch>
    <duration>512</duration>
    <instrument id="P4-I1" />
    <type>half</type>
    <dot />
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>G</step>
     <octave>4</octave>
    </pitch>
    <duration>512</duration>
    <instrument id="P4-I1" />
    <type>half</type>
    <dot />
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P4, Measure: 10 ==============-->
  <measure number="10" width="153">
   <note color="#000000" default-x="15">
    <pitch>
     <step>D</step>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P4-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>F</step>
     <alter>1</alter>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P4-I1" />
    <type>whole</type>
    <staff>1</staff>
   </note>
   <note color="#000000" default-x="15">
    <chord />
    <pitch>
     <step>A</step>
     <octave>4</octave>
    </pitch>
    <duration>1024</duration>
    <instrument id="P4-I1" />
    <type>whole</type>
    <staff>1</staff>
   </note>
   <barline>
    <bar-style>light-heavy</bar-style>
   </barline>
  </measure>
 </part>
 <part id="P5">
  <!--============== Part: P5, Measure: 1 ==============-->
  <measure number="1" width="190">
   <print new-page="yes">
    <system-layout>
     <system-margins>
      <left-margin>140</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>60</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <divisions>256</divisions>
    <key color="#000000">
     <fifths>2</fifths>
     <mode>major</mode>
    </key>
    <time color="#000000">
     <beats>4</beats>
     <beat-type>4</beat-type>
    </time>
    <staves>1</staves>
    <clef number="1" color="#000000">
     <sign>F</sign>
     <line>4</line>
     <clef-octave-change>-1</clef-octave-change>
    </clef>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note default-x="72">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 2 ==============-->
  <measure number="2" width="279">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 3 ==============-->
  <measure number="3" width="267">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 4 ==============-->
  <measure number="4" width="185">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 5 ==============-->
  <measure number="5" width="232">
   <print new-system="yes">
    <system-layout>
     <system-margins>
      <left-margin>22</left-margin>
      <right-margin>0</right-margin>
     </system-margins>
    </system-layout>
    <staff-layout number="1">
     <staff-distance>61</staff-distance>
    </staff-layout>
   </print>
   <attributes>
    <staff-details number="1" print-object="yes" />
   </attributes>
   <note default-x="87">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 6 ==============-->
  <measure number="6" width="160">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 7 ==============-->
  <measure number="7" width="209">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 8 ==============-->
  <measure number="8" width="160">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 9 ==============-->
  <measure number="9" width="124">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
  </measure>
  <!--============== Part: P5, Measure: 10 ==============-->
  <measure number="10" width="153">
   <note default-x="15">
    <rest />
    <duration>1024</duration>
    <instrument id="P5-I1" />
    <voice>1</voice>
    <type>whole</type>
    <staff>1</staff>
   </note>
   <barline>
    <bar-style>light-heavy</bar-style>
   </barline>
  </measure>
 </part>
</score-partwise>
`;
