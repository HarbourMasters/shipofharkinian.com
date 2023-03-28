import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Changelog";

  return (
    <>

      <PageHeader pageName={pageName} />

      <main className={pageName}>
          <section id="content">
            <h1 className="pageTitle">{pageName}</h1>
            <div className="container">
              <div className="column">
                <div className="textBackground">
                  <div className="textArea">
                    <h3 id="greg-alfa-42-0-69">
                      <a href="#greg-alfa-42-0-69">Greg Alfa (42.0.69)</a>
                    </h3>
                    <p>April 1st 2023</p>
                    <h4>New Features</h4>
                    <ul>
                      <li>Added VR with full body tracking.</li>
                      <li>Added Pirate as a language option.</li>
                      <li>Added Raytracing for Nvidia 900 series cards.</li>
                      <li>Added Ganondorf romance option.</li>
                      <li>Removed Herobrine.</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Added bee movie script to potential Gossip Stone hints.</li>
                      <li>Removed Mido from the game because nobody liked him anyway.</li>
                      <li>Added a second README just in case people don&apos;t read the first one.</li>
                    </ul>
                    <h4>Bugfixes</h4>
                    <ul>
                      <li>Fixed a rare scenario where system32 was accidentily deleted on Steam Deck sometimes.</li>
                    </ul>
                    <h3 id="khan-bravo-6-1-1">
                      <a href="#khan-bravo-6-1-1">Khan Bravo (6.1.1)</a>
                    </h3>
                    <p>March 14th 2023</p>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Enemy Randomizer</li>
                      <ul>
                        <li>Range check for Arwing lasers</li>
                        <li>Exclude Club Moblins in clear rooms</li>
                      </ul>
                      <li>Performance refactor for Custom Sequences</li>
                      <li>Tweaked behaviour for Affordable Shop Prices</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix Switch Port on 16.0.0 firmware</li>
                      <li>Fix Equip now enhancement bug when receiving certain items</li>
                      <li>Fix Change Age cheat causing Link to spawn at the wrong spot</li>
                      <li>Fix Skulltula token count message on vanilla</li>
                      <li>Fix the flags in Haunted Wasteland no longer being affected by the wind</li>
                      <li>Fix Quest Selection falling back to vanilla save under certain circumstances</li>
                      <li>Fix Bongo Bongo not resetting its visual effects properly when refighting it</li>
                      <li>Fix Happy Mask Shop throwing Link out in Entrance Rando not being handled correctly</li>
                      <li>Fix Auto Save dropdown not saving immediately</li>
                    </ul>

                    <h3 id="khan-alfa-6-1-0">
                      <a href="#khan-alfa-6-1-0">Khan Alfa (6.1.0)</a>
                    </h3>
                    <p>March 1st 2023</p>
                    <h4>New Enhancements/Features</h4>
                    <ul>
                      <li>Enhancement to have Link use the correct ammo types when using bow or slingshot as the wrong age</li>
                      <li>Time saver to auto fill new file names as &quot;Link&quot;</li>
                      <li>Enhancement to disable the automatic first person mode when placing down Bombchus</li>
                      <li>
                        The SFX Editor has been renamed to Audio Editor and a new audio shuffle pool management system is added
                        <ul>
                          <li>You can now manage a list of included and excluded sequences</li>
                          <li>Easily search, filter and preview for sequences to include/exclude</li>
                        </ul>
                      </li>
                      <li>Added support for the Metal renderer as a graphics option for Macs</li>
                      <li>Added option to set virtual notch support for the control stick in the Controller Configuration</li>
                      <li>Added difficulty option &quot;Rupee Dash Mode&quot; were you slowly lose rupees over time, and start to lose health when you run out of rupees</li>
                    </ul>
                    <h4>Randomizer</h4>
                    <ul>
                      <li>
                        Added Greg (the Green Rupee of Eternal Glory) as an option for the rainbow bridge requirement
                        <ul>
                          <li>An entry for Greg is now available in the item tracker to let you know when you find Greg</li>
                          <li>The treasure chest mini game man will provide a hint for where Greg is located</li>
                        </ul>
                      </li>
                      <li>Add a Shopsanity price range option to control the price options, including an affordable option, and wallet locked options</li>
                      <li>Added warning system to indicate when a randomizer save is being played on a different build</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Rainbow effects in the Cosmetic Editor transition more smoothly</li>
                      <li>Check tracker now persists skipped checks</li>
                      <li>Add more junk hints</li>
                      <li>Add separate sensitivity sliders for X and Y axis for First person view and Free Camera</li>
                      <li>Adjust the altar text in rando to still list bridge requirements when hints are turned off</li>
                      <li>Adjust the manual seed input field in the randomizer menu to now permit alpha-numeric values</li>
                      <li>Tweaked hint generation to no longer treat Heart Pieces as major hint hints improving the usefulness of Barren hints</li>
                      <li>Tweaked the Entrance Tracker to not display redundant entrances when decoupled entrances is not on</li>
                      <li>Tweaked the Static Explosion enhancement radius size to match the maximum vanilla size</li>
                      <li>Enhancement to fix the disappearing paths in Hyrule Field</li>
                      <li>Tweaked Autosave to now be a dropdown and allowing to choose when to auto save</li>
                      <li>Split easy pause buffer inputs into a new cheat that can be turned on or off</li>
                    </ul>
                    <h4>Accessibility</h4>
                    <ul>
                      <li>Added Accessibility submenu</li>
                      <li>Added toggle to disable re centering the camera when Link is idle</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix N64 mode not applying</li>
                      <li>Fix entrance tracker sometimes not populating</li>
                      <li>Fix sun song sometimes placing Link out of bounds when Entrance Rando is active</li>
                      <li>Fix duplicate music sequence names displaying during the Barinade fight and when night transitions to day in Hyrule Field</li>
                      <li>Fix the wrong title card being displayed for the Lakeside Laboratory</li>
                      <li>Fix excluded locations not applying in some cases</li>
                      <li>Fix Item Tracker notes sometimes causing a crash on launch</li>
                      <li>Fix the Gerudo Fortress chest to grant the same shuffled item as adult and child to prevent softlocks</li>
                      <li>Fix Scrubs hints and Skulltula house hints not displaying Ice Trap trick names</li>
                      <li>Fix cutscene crashes when only loading MQ</li>
                    </ul>

                    <h3 id="gibbs-alfa-6-0-0">
                      <a href="#gibbs-alfa-6-0-0">Gibbs Alfa (6.0.0)</a>
                    </h3>
                    <p>February 7th 2023</p>
                    <h4>New Enhancements/Features</h4>
                    <ul>
                      <li>
                        Better Farore&apos;s wind
                        <ul>
                          <li>Dedicated Farore&apos;s wind for both ages and does not reset when changing age</li>
                          <li>Faster Farore&apos;s wind casting time</li>
                        </ul>
                      </li>
                      <li>MM style static explosion radius</li>
                      <li>Enhancement to spawn with full health instead of 3 hearts</li>
                      <li>Enhancement to allow a dog to follow you anywhere</li>
                      <li>Cheat for extending Hookshot reach</li>
                      <li>Enhancement to auto play ending credits with controller inputs</li>
                      <li>Added restoration for 1.0 QPA methods and &quot;Blank A&quot;</li>
                    </ul>
                    <h4>Randomizer</h4>
                    <ul>
                      <li>Start with songs options</li>
                      <li>
                        Additional hint options
                        <ul>
                          <li>Dampe&apos;s diary for Hookshot hint</li>
                          <li>Skull token reward hints in House of Skulltula</li>
                          <li>Shuffled warp song destination can be revealed or hidden</li>
                          <li>Deku scrub reveal what they are selling</li>
                          <li>Can turn off Altar hints and Ganondorf hint for Light Arrows</li>
                        </ul>
                      </li>
                      <li>Boss Room Entrance Rando</li>
                      <li>Shuffle 100 Gold Skulltula reward, including an option to place Ganon&apos;s Boss key there</li>
                      <li>Seed input field for Randomizer</li>
                      <li>Try talking to the Goron&apos;s in Fire temple! (silly messages)</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Many updates and tweaks under the hood for improved resource management</li>
                      <li>Behind the scenes game interaction for improved Crowd Control support and extensibility</li>
                      <li>Linux builds now split into performance and compatibility options</li>
                      <li>Cosmetics: new Lock/Unlock all buttons</li>
                      <li>SFX: option to display track name on-screen</li>
                      <li>SFX: option to add higher pitches to silver rupee jingle in rooms with more than 5 rupees</li>
                      <li>Adjust ice traps from Gold Skulltulas and free standing items to freeze Link after the text box is closed (or with a short delay)</li>
                      <li>
                        Adjusted Ganondorf/Ganon Cutscene skips in Randomizer
                        <ul>
                          <li>Ganondorf&apos;s second dying cutscene is much shorter</li>
                          <li>The tower collapsing cutscene is now skipped even when tower escape skip is off</li>
                          <li>Link and Zelda talking after the tower collapses is now skipped</li>
                        </ul>
                      </li>
                      <li>More rupee names</li>
                      <li>Gameplay Stats: add missing adult trade sequence items</li>
                      <li>Gameplay Stats: can now display either only timestamps, counts, or both</li>
                      <li>Adjust faster block pushing enhancement to be even faster</li>
                      <li>Check Tracker now opens with a default size for the first time and has a close button</li>
                      <li>Added Fullscreen and Quit buttons in the menu bar</li>
                      <li>Renamed menu bar controller navigation setting to be more clear</li>
                      <li>Removed Zelda&apos;s letter from location exclusion</li>
                      <li>
                        Adjusted some locations to be hidden from the excluded location list when certain rando settings are active
                        <ul>
                          <li>song locations, rewards at end of dungeon, vanilla dungeon items, etc.</li>
                        </ul>
                      </li>
                    </ul>
                    <h4>Debug</h4>
                    <ul>
                      <li>Actor viewer now supports live editing properties and flags for actors</li>
                      <li>Save Editor: Flags now enables editing player state flags</li>
                      <li>DisplayList viewer</li>
                      <li>Improved translation support for debug warp menu</li>
                      <li>Debug camera viewer</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix instances where Mido would not spawn, especially during Dungeon Entrance Rando</li>
                      <li>Fix edge case where Randomizer menu would get stuck in a disabled state</li>
                      <li>Fix some chests not being able to be opened or hookshot-able when Chest Size Matches Content is on</li>
                      <li>Fix Gerudo fighter sending child Link to jail instead of Gerudo Valley</li>
                      <li>Fix Check Tracker sometimes showing duplicates</li>
                      <li>Fix song overlays not covering the whole screen when Fast Ocarina Playback is on</li>
                      <li>Fix the locations tab in the Randomizer menu not updating when settings were changed</li>
                    </ul>

                    <h3 id="bradley-echo-5-1-4">
                      <a href="#bradley-echo-5-1-4">Bradley Echo (5.1.4)</a>
                    </h3>
                    <p>January 18th 2023</p>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Support Windowed Fullscreen on OpenGL</li>
                      <li>Relabel Mido flags in the save editor</li>
                      <li>When keys are set to vanilla and Spirit MQ is active, 3 keys will be given to prevent softlocks</li>
                      <li>Set Mac application category as &quot;Game&quot; for Launch Pad</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fisherman now correctly knows if the controller supports rumble</li>
                      <li>Properly randomize Mirror Shield and Silver Gauntlets chests when only using MQ</li>
                      <li>Fix translations for &quot;Ask to Equip New Items&quot; enhancement</li>
                      <li>Properly randomize Ganon&apos;s boss key chest when only using MQ</li>
                      <li>Fix water box collision in Lake Hylia and missing water in Morpha&apos;s room</li>
                      <li>Fix softlock in Spirit MQ where the silver block in the shortcut hallway is blocking the eye switch for the chest. The block will be removed as Child Link now</li>
                      <li>Fix certain cases where one-way entrances where causing some entrances to be unshuffled, and potentially softlocking a seed</li>
                      <li>Fix leaving Castle Courtyard at night spoiling where Ganon&apos;s Castle entrance is in dungeon randomizer</li>
                      <li>Add missing hint for Medigoron, which would cause a crash during rando generation</li>
                      <li>Fix some entrances not disabling Epona in overworld entrance randomizer</li>
                      <li>Adjust &quot;Fix Dungeon entrances&quot; enhancement not working in the Graveyard</li>
                      <li>Fix presets not clearing out modified values</li>
                      <li>Fix a crash with the Check Tracker when playing a vanilla save</li>
                      <li>Fix Crowd Control connection issues</li>
                    </ul>

                    <h3 id="bradley-delta-5-1-3">
                      <a href="#bradley-delta-5-1-3">Bradley Delta (5.1.3)</a>
                    </h3>
                    <p>December 24th 2022</p>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>SFX editor now replays the active BGM track when shuffled or reset</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix crashes in Hyrule Field, Gohma&apos;s boss room, and Forest Temple Stalfos room with Enemy Randomizer.</li>
                      <li>Fix killing enemies in GtG silver rupee room sometimes leading to opening the door with Enemy Randomizer.</li>
                      <li>Fix enemies setting incorrect flags in Enemy Randomizer, sometimes leading to lit torches, burned webs etc.</li>
                      <li>Fix shopsanity not displaying certain items and crashing on hover</li>
                      <li>Fix some shop items giving out the wrong item when shopsanity is off</li>
                    </ul>

                    <h3 id="bradley-charlie-5-1-2">
                      <a href="#bradley-charlie-5-1-2">Bradley Charlie (5.1.2)</a>
                    </h3>
                    <p>December 21st 2022</p>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Adjust ice traps to display fake items with an ice effect</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix hookshot point issues with retail PAL ROM (requires regenerating your OTR to get the fix)</li>
                      <li>Fix Ganon crash for retail PAL ROM (requires regenerating your OTR to get the fix)</li>
                      <li>Fix Medi-Goron sometimes handing out Giant&apos;s Knife instead of the randomized item</li>
                      <li>Fix warp song song shuffle not displaying location when hints are off</li>
                      <li>Fix various crashes with SFX editor</li>
                      <li>Fix crashes with cosmetic editor on Wii U</li>
                      <li>Limit total enemy spawn count for Hyrule Field in Enemy Randomizer</li>
                      <li>Fix warp song particles and stick/nut upgrade particles for ice traps</li>
                      <li>Fix memory leak introduced with 5.0.2</li>
                    </ul>

                    <h3 id="bradley-bravo-5-1-1">
                      <a href="#bradley-bravo-5-1-1">Bradley Bravo (5.1.1)</a>
                    </h3>
                    <p>December 14th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix save issue for Double Defense and Double Magic when upgrading from older versions to 5.1.0</li>
                      <li>Fix scrubs displaying the wrong price for their trades</li>
                      <li>Fix receiving the wrong item for ammo drops near a chest</li>
                    </ul>

                    <h3 id="bradley-alfa-5-1-0">
                      <a href="#bradley-alfa-5-1-0">Bradley Alfa (5.1.0)</a>
                    </h3>
                    <p>December 13th 2022</p>
                    <h4>New Enhancements/Features</h4>
                    <ul>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/2066" target="_blank" rel="noreferrer">Custom sequence support</a> (see <a href="https://github.com/HarbourMasters/Shipwright#custom-music" target="_blank" rel="noreferrer">instructions in readme</a>)
                        <ul>
                          <li>Can disable enemy proximity music</li>
                          <li><a href="https://github.com/HarbourMasters/Shipwright/issues/1872" target="_blank" rel="noreferrer">Known Issues/Todo list</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/1898" target="_blank" rel="noreferrer">Cosmetics Editor v3</a>
                        <ul>
                          <li>Link&apos;s Hair, Linen, and boots</li>
                          <li>Swords, Equipment and Rupees</li>
                          <li>Various Silly Options</li>
                          <li>And more! Explore the advanced mode!</li>
                          <li><a href="https://github.com/HarbourMasters/Shipwright/issues/2113" target="_blank" rel="noreferrer">Known Issues/Todo list</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/1986" target="_blank" rel="noreferrer">Enhancements &gt; Gameplay Stats</a>
                        <ul>
                          <li>Enemies defeated</li>
                          <li>Rupees collected and spent</li>
                          <li>Steps taken, rolls, bonks, sidehops, backflips, sword swings</li>
                          <li>Timestamps for items collected, and game completion</li>
                          <li>And many more!</li>
                        </ul>
                      </li>
                      <li>Enhancements &gt; Fixes &gt; Fix Camera Drift</li>
                      <li>Enhancements &gt; Fixes &gt; Fix Camera Swing</li>
                      <li>Enhancements &gt; Fixes &gt; Fix Hanging Ledge Swing Rate</li>
                      <li>Developer Tools &gt; Hide Build Info</li>
                      <li>Enhancements &gt; Gameplay &gt; Difficulty Options &gt; Bombchu Bowling</li>
                      <li>Enhancements &gt; Time Savers &gt; Exit Market at night</li>
                    </ul>
                    <h4>Randomizer</h4>
                    <ul>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/1781" target="_blank" rel="noreferrer">Enemy Randomizer</a>
                        <ul>
                          <li>Includes seeded spawns and always random on area load</li>
                          <li><a href="https://github.com/HarbourMasters/Shipwright/issues/2099" target="_blank" rel="noreferrer">Known issues</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/2071" target="_blank" rel="noreferrer">Entrance Rando v2</a>
                        <ul>
                          <li>Shuffle starting position</li>
                          <li>Shuffle owl drop locations</li>
                          <li>Shuffle warp song locations</li>
                          <li>Mix shuffled entrance pools</li>
                          <li>Decouple shuffled entrances</li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/2005" target="_blank" rel="noreferrer">Entrances Tracker v1</a>
                        <ul>
                          <li>Lists all shuffled entrance options</li>
                          <li>Searching, sorting, grouping, and auto scroll settings</li>
                          <li>Highlights accessbile entrances from the current area</li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://github.com/HarbourMasters/Shipwright/pull/1942" target="_blank" rel="noreferrer">Check Tracker v1</a>
                        <ul>
                          <li>Support for skipping checks</li>
                          <li>Search checks</li>
                          <li>Auto scroll to current area</li>
                        </ul>
                      </li>
                      <li>S6 (adapted) and Hellmode presets added for randomizer menu</li>
                      <li>Add toggle for requiring all locations to be reachable</li>
                      <li>Lake hylia water level control switch</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Infinite ammo cheat also affects minigames</li>
                      <li>Tweaks to difficulty options to toggle them at the top level</li>
                      <li>
                        Reorganized game control related enhancements into a single menu
                        <ul>
                          <li>Includes more configurations over the free camera</li>
                        </ul>
                      </li>
                      <li>NPC interactions are no longer affected by Bunny Hood with MM Bunny hood enhancement</li>
                      <li>Allow for translation of yes/no options when talking to Owl</li>
                      <li>Allow for translation of title screen &quot;Press Start&quot; button</li>
                      <li>&quot;Big key&quot; renamed to &quot;Boss key&quot; in spoiler files</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>OTRGui now correctly names master quest OTR files.</li>
                      <li>Fix issue where randomizer menu would stay disabled after crashing when creating a seed</li>
                      <li>Fix crash with autosave when creating a new file</li>
                      <li>Fix issue preventing you from lake hylia lab dive check when you have eye drops in your inventory</li>
                      <li>Fix issues with CrowdControl enemy clear conditions when new enemies were spawned</li>
                      <li>Various fixes to randomizer location exclusions tab</li>
                      <li>Remove a few problematic sequences from sequence shuffling in SFX editor</li>
                      <li>Fix interpolation issue when using both bunny hood and hover boots</li>
                    </ul>

                    <h3 id="flynn-charlie-5-0-2">
                      <a href="#flynn-charlie-5-0-2">Flynn Charlie (5.0.2)</a>
                    </h3>
                    <p>December 3rd 2022</p>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Add German translations to custom randomizer texts</li>
                      <li>Adjust French translations for randomizer texts</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fix Lake Hylia water texture issues when the lake is refilled</li>
                      <li>Fix C Button display not moving when un-pausing</li>
                      <li>Fix not being able to retract the hookshot when assigned to a D-Pad button</li>
                      <li>Prevent autosaving in the Chamber of Sages</li>
                      <li>Prevent autosaving when picking up bombchu drops when bombchus are in logic</li>
                      <li>Fix Skulltula check in vanilla Jabu-Jabu</li>
                      <li>Fix missing rom error for Linux when only one OTR is present</li>
                      <li>Fix Ganondorf&apos;s title card</li>
                      <li>Fix Ganondorf crash when playing MQ only saves</li>
                      <li>
                        Fix various CrowdControl issues
                        <ul>
                          <li>Prevent Arwings from spawning in certain areas</li>
                          <li>Prevent heart commands from killing Link</li>
                        </ul>
                      </li>
                    </ul>

                    <h3 id="flynn-bravo-5-0-1">
                      <a href="#flynn-bravo-5-0-1">Flynn Bravo (5.0.1)</a>
                    </h3>
                    <p>November 27th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>New saves greyed out when using only MQ otr</li>
                      <li>Rando: Turning in Ruto&apos;s letter after rescue</li>
                      <li>Rando: Like like&apos;s no longer eat tunics</li>
                      <li>Dodongo&apos;s boss room crash when using only MQ otr</li>
                    </ul>

                    <h3 id="flynn-alfa-5-0-0">
                      <a href="#flynn-alfa-5-0-0">Flynn Alfa (5.0.0)</a>
                    </h3>
                    <p>November 21st 2022</p>
                    <h4>New Features/Enhancements</h4>
                    <ul>
                      <li>Quest selection on file creation</li>
                      <li>SFX Editor</li>
                      <li>Chest size matches contents</li>
                      <li>Chests of agony (stone of agony reveals type of item in chest)</li>
                      <li>Customize mirror shield cosmetics</li>
                      <li>Customize gauntlet cosmetics</li>
                      <li>Shooting gallery difficulty options</li>
                      <li>Revamped debug map select screen</li>
                      <li>Toggleable walk speed modifier</li>
                      <li>Adjust free cam sensistivity</li>
                      <li>Ask to equip item on item get</li>
                      <li>Glitch line-up tick</li>
                      <li>Cheat: Bombs explode from nut</li>
                      <li>Equip multiple magic arrows at once</li>
                      <li>Clear flags option in save editor</li>
                      <li>Show player state flags in save editor</li>
                      <li>Fishing minigame records in save editor</li>
                      <li>Cheat: Switch age and reload link</li>
                      <li>Cheat: Use any item regardless of link&apos;s age</li>
                      <li>Cheat: Hookshot everything</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Goron wake up animation</li>
                      <li>Ruto fast text softlock</li>
                      <li>Noise effect (disintegrating gohma etc.)</li>
                      <li>Fix generating OTR from files with spaces in the name (Linux)</li>
                      <li>Fix piece of heart sound</li>
                      <li>Show/hide cursors properly in fullscreen</li>
                      <li>Fix crash when creating new randomizer save caused by corrupted hint text</li>
                      <li>Treat gossip stones in Zora&apos;s Fountain as separate</li>
                      <li>Fix corrupted characters in French hint text</li>
                      <li>Most freecam issues are resolved</li>
                      <li>Prevent bugs caused by autosaving on file load</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Option to disable jump boost velocity with bunny hood</li>
                      <li>Quick put away damage restored</li>
                      <li>Toggle to disable multiple view ports in ImGUI</li>
                      <li>Default UI buttons to N64 color scheme</li>
                      <li>Restore N64 save confirmation screen</li>
                      <li>Translation improvements for small keys</li>
                      <li>Remove colons from shopsanity messages</li>
                      <li>Option to adjust credits timing to better match the audio</li>
                      <li>More flexible heart HUD display</li>
                    </ul>
                    <h4>Randomizer</h4>
                    <ul>
                      <li>Master Quest dungeons in randomizer (requires supported Master Quest ROM)</li>
                      <li>Randomize entrances</li>
                      <li>Randomize starting age</li>
                      <li>Shuffle keyrings with all keys for a dungeon</li>
                      <li>Shuffle merchants</li>
                      <li>Ganon&apos;s boss key on light arrow cutscene</li>
                      <li>Skip door of time cutscene</li>
                      <li>Skip rainbow bridge cutscene</li>
                      <li>Ice traps with randomized messages and models</li>
                      <li>Dungeon type hints when collecting dungeon maps</li>
                      <li>Skulltula tokens in starting inventory</li>
                      <li>Track keys collected</li>
                      <li>Track heart containers collected</li>
                      <li>Track heart pieces collected</li>
                      <li>More human-readable randomizer save format</li>
                    </ul>

                    <h3 id="zhora-foxtrot-4-0-5">
                      <a href="#zhora-foxtrot-4-0-5">Zhora Foxtrot (4.0.5)</a>
                    </h3>
                    <p>October 20th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Fixes regression preventing boots and tunics from being equipped while under water</li>
                    </ul>

                    <h3 id="zhora-echo-4-0-4">
                      <a href="#zhora-echo-4-0-4">Zhora Echo (4.0.4)</a>
                    </h3>
                    <p>October 20th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Cosmetic Sword Trail causing crash</li>
                      <li>Cuts down on excess rando lookups in z_en_item00</li>
                      <li>Adds extra entry to obj_lift FallTimerDurations (Nintendo Switch)</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Tunics/Boots on C-buttons are now always enabled (like in interiors)</li>
                    </ul>

                    <h3 id="zhora-delta-4-0-3">
                      <a href="#zhora-delta-4-0-3">Zhora Delta (4.0.3)</a>
                    </h3>
                    <p>October 13th 2022</p>
                    <h4>Feature Additions</h4>
                    <ul>
                      <li>Enhancement to restore the Gerudo Warrior clothing color being afected by Link&apos;s current Tunic or Bombs</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Color Clamping</li>
                      <li>Pickup item cutscene logic</li>
                      <li>Adult Ruto&apos;s earings</li>
                      <li>Implement G_CCMUX_NOISE (Fixes Bongo Bongo&apos;s shadow and others)</li>
                      <li>Occurence when &quot;Mask Select in Inventory&quot; was able to cycling bottle contents when bottle duping</li>
                      <li>Cutscene Lighting (Goddesses cutscene, wrong color on Actors in the Sacred Realm, etc.)</li>
                      <li>Deku scrubs moving into position when entering Forest Stage</li>
                      <li>Goron&apos;s Spin</li>
                      <li>Ruto&apos;s softlock in Water Temple when Skip Text is enabled</li>
                      <li>Prevent infinite ammo cheat from filling bombchus unless the item is obtained</li>
                      <li>Save corruption when &quot;Auto Save&quot; was enabled and quickly returning to main menu when dying</li>
                      <li>Crash when retrieving a merchant message while using fast file select</li>
                      <li>Interpolation issue with the Bunny Hood ears</li>
                      <li>Ice Trap when wearing the Bunny Hood</li>
                      <li>Debug building on Windows with new build.c file</li>
                      <li>Skipping &quot;get item&quot; cutscene logic</li>
                      <li>Showing pocket cucco in rando gives first Anju reward instead</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>Developer Tools button sizes</li>
                      <li>A cursor color in the &quot;Continue&quot; prompt screen</li>
                      <li>Some flag documentation</li>
                      <li>Default HUD to N64 colors</li>
                    </ul>

                    <h3 id="zhora-charlie-4-0-2">
                      <a href="#zhora-charlie-4-0-2">Zhora Charlie (4.0.2)</a>
                    </h3>
                    <p>October 6th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Forest Temple textures [Master Quest]</li>
                      <li>Navi losing her core color in the cosmetic editor</li>
                      <li>Y-Axis inversion in C Up view</li>
                      <li>Merchant message table being generated before items were loaded</li>
                      <li>Business scrubs crashing on expensive scrub shuffle</li>
                      <li>&quot;Scrubsanity Off&quot; was using mysterious text</li>
                    </ul>

                    <h3 id="zhora-bravo-4-0-1">
                      <a href="#zhora-bravo-4-0-1">Zhora Bravo (4.0.1)</a>
                    </h3>
                    <p>October 1st 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Master Quest fixed on Linux and macOS</li>
                      <li>WiiU: Fix overflow for GX2CopySurfaceEx that would lead to a crash</li>
                      <li>Randomizer not properly being disabled when using Master Quest</li>
                      <li>Adjust naming for Auto Center options</li>
                      <li>Global.sav wasn&apos;t generating on Linux and macOS</li>
                    </ul>

                    <h3 id="zhora-alfa-4-0-0">
                      <a href="#zhora-alfa-4-0-0">Zhora Alfa (4.0.0)</a>
                    </h3>
                    <p>September 29th 2022</p>
                    <h4>Feature Additions</h4>
                    <ul>
                      <li>Master Quest (Not currently compatible with randomizer)</li>
                      <li>Crowd Control Integration</li>
                      <li>Support for Nintendo WiiU and Nintendo Switch</li>
                      <li>Crash handler</li>
                      <li>Ability to choose audio back-end on supported systems</li>
                      <li>New window for game-specific controls (custom ocarina keybinds, camera controls)</li>
                    </ul>
                    <h4>New Enhancements</h4>
                    <ul>
                      <li>Answer Navi prompt with L button</li>
                      <li>Remove power crouch stab</li>
                      <li>Instant putaway</li>
                      <li>Mask Select in inventory</li>
                      <li>Prevent dropped ocarina inputs</li>
                      <li>Always win Goron pot</li>
                      <li>Equipment toggle</li>
                      <li>Faster heavy block lift</li>
                      <li>Remember save location</li>
                      <li>Instant boomerang recall</li>
                      <li>Restore old 0.9 Golden Skulltula cutscenes</li>
                      <li>Bombchu drops</li>
                      <li>Skip Scarecrow song</li>
                      <li>Fire Ice Arrows</li>
                      <li>Sunlight Arrows</li>
                      <li>Fish never escape</li>
                      <li>Simulate input lag</li>
                      <li>Always win Dampe digging game</li>
                      <li>Autosave</li>
                      <li>Beta Quest</li>
                      <li>Easy frame advancing</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Lots of misc fixes and code clean-up</li>
                      <li>Lots of fixes for the randomizer</li>
                      <li>Disable toggle minimap when some cheats are on</li>
                      <li>Oddity with Water Temple entrance gate</li>
                      <li>Allow roms with spaces intheir names for OTR generation</li>
                      <li>Hide dpad in minimal UI</li>
                      <li>Only toggle menu with controller when controller navigation is enabled</li>
                      <li>Fixed Temple of Time fog</li>
                      <li>Reset gyro drift when gyro is turned off</li>
                      <li>Disable game input when typing into a textfield</li>
                      <li>Fix decay effect on Ganondorf, windows during Ganondorf&apos;s fight, Gohma&apos;s death animation and Phantom Ganon&apos;s death animation</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>More options for animated Link in the pause menu</li>
                      <li>Frame interpolation goes up to 360 FPS</li>
                      <li>Fast drops became Fast Pickup Messages and includes bottling items now</li>
                      <li>F1 menu overhaul including enhancement presets</li>
                      <li>More options for the Cosmetic editor</li>
                      <li>&quot;Auto&quot; controller back-end</li>
                      <li>Changed Fast Block Push</li>
                      <li>Changed &quot;minimum fish weight&quot; for both ages to be able to go even lower</li>
                      <li>macOS can now generate OTR files</li>
                    </ul>
                    <h4>Randomizer</h4>
                    <ul>
                      <li>Tokensanity (shuffle Golden Skulltula&apos;s)</li>
                      <li>Keysanity (shuffle small keys, Gerudo Fortress keys, boss keys and Ganon&apos;s boss key)</li>
                      <li>Shopsanity (shuffle items into the different shops)</li>
                      <li>Cowsanity (shuffle item with cows and Epona&apos;s song)</li>
                      <li>Scrubsanity (scrubs sells shuffled items)</li>
                      <li>Shuffle maps and compasses</li>
                      <li>Custom key colors for Keysanity</li>
                      <li>Shuffle individual frog rewards</li>
                      <li>Shuffle adult trade quest and switch between adult trade items in the pause menu</li>
                      <li>Shuffle Magic Beans</li>
                      <li>Skip / Complete mask quest</li>
                      <li>Exclude any location</li>
                      <li>No logic setting</li>
                      <li>Don&apos;t skip glitch-useful cutscenes settings</li>
                      <li>Longer quest item fanfares</li>
                      <li>Rando-relevant Navi hints</li>
                      <li>Random Rupee names</li>
                      <li>More options for Ganon&apos;s trials settings</li>
                      <li>More seed icons</li>
                      <li>Fire Ice Arrows (included in item logic)</li>
                      <li>Sunlight Arrows (included in item logic)</li>
                      <li>Particles on Deku nut and stick upgrades in overworld locations</li>
                      <li>Spirtial sontes on Temple of Time altar show shadow when not obtained yet</li>
                      <li>Skip more cutscenes (time travel, giving fish to Jabu-Jabu)</li>
                      <li>Skip tower escape</li>
                      <li>Menu styling overhaul</li>
                      <li>More meme hints</li>
                      <li>Item tracker overhaul</li>
                    </ul>

                    <h3 id="rachael-charlie-3-0-2">
                      <a href="#rachael-charlie-3-0-2">Rachael Charlie (3.0.2)</a>
                    </h3>
                    <p>September 12th 2022</p>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Ruto no longer disappears in Jabu-Jabu</li>
                      <li>Fixed ammo count display for glitched items</li>
                      <li>Zelda sequence fixes for the Randomizer</li>
                      <li>Bomb / Bombchu shop fix for the Randomizer</li>
                      <li>Lost Woods leafing music for the Randomizer</li>
                      <li>Ice Traps fix for Windows and macOS</li>
                      <li>Multiple sung song fix for the Randomizer</li>
                      <li>Volvagia interpolation</li>
                      <li>Temple of Time fog</li>
                      <li>Fast File Select seed loading for Randomizer</li>
                    </ul>

                    <h3 id="rachael-bravo-3-0-1">
                      <a href="#rachael-bravo-3-0-1">Rachael Bravo (3.0.1)</a>
                    </h3>
                    <p>August 4th 2022</p>
                    <h4>Feature Additions</h4>
                    <ul>
                      <li>Render API dropdown (Graphics --&gt; Render Api)</li>
                      <li>Tooltip for free camera</li>
                      <li>Edit your D-Pad items from the save editor</li>
                    </ul>
                    <h4>Bug Fixes</h4>
                    <ul>
                      <li>Crash caused by Keys&apos; sprites</li>
                      <li>Window resolution is now read from the configuration file</li>
                      <li>macOS issues while playing the ocarina</li>
                      <li>Sun&apos;s Song was respawning Link when using a cheat</li>
                      <li>Child Zelda Skip settings was always on in Randomizer</li>
                      <li>Randomizer interraction from Malon and her checks</li>
                      <li>Morpha fixes</li>
                      <li>Various randomizer fixes</li>
                      <li>Lots of interpolations visual bugs</li>
                      <li>Controller configuration couldn&apos;t select a controller</li>
                      <li>Apply AA and resolution scale settings at startup</li>
                      <li>Shadow Temple objects proper resets</li>
                    </ul>
                    <h4>Tweaks</h4>
                    <ul>
                      <li>macOS support from 10.15 to latest</li>
                      <li>Ice Trap chests now hav e a short chest animation</li>
                      <li>Free Camera collision V2</li>
                    </ul>

                    <h3 id="rachael-alfa-3-0-0">
                      <a href="#rachael-alfa-3-0-0">Rachael Alfa (3.0.0)</a>
                    </h3>
                    <p>July 14th 2022</p>
                    <h4>Feature Additions</h4>
                    <ul>
                      <li>Randomizer</li>
                      <li>SoH is now a 64bits application</li>
                      <li>macOS and WiiU support</li>
                      <li>Free camera</li>
                      <li>Actor viewer</li>
                      <li>Difficulty sliders</li>
                      <li>Time moves in the file select screen</li>
                      <li>Customizable HUD position and colors</li>
                      <li>More options for the animated Link in the pause menu</li>
                      <li>D-Pad control / D-Pad item slots</li>
                      <li>Fast chest opening / climbing / text</li>
                      <li>Ignorable Navi</li>
                      <li>Spammable Owl</li>
                      <li>Equip tunics and boots as C-items</li>
                    </ul>
                    <h4>New Cheats &amp; Enhancements</h4>
                    <ul>
                      <li>Can use shield when using the Biggoron Sword</li>
                      <li>Guard vision in Hyrule Castle</li>
                      <li>Use items anywhere</li>
                      <li>Unburnable Deku Shield</li>
                      <li>Epona infinite stamina</li>
                      <li>Bunny hood for adult Link</li>
                      <li>Faster Biggoron Sword Quest</li>
                    </ul>

                    <h3 id="roy-alfa-2-0-0">
                      <a href="#roy-alfa-2-0-0">Roy Alfa (2.0.0)</a>
                    </h3>
                    <p>May 13th 2022</p>
                    <ul>
                      <li>No changelog for this one sorry :D</li>
                    </ul>

                    <h3 id="deckard-alfa-1-0-0">
                      <a href="#deckard-alfa-1-0-0">Deckard Alfa (1.0.0)</a>
                    </h3>
                    <p>March 22nd 2022</p>
                    <ul>
                      <li>Initial release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      <PageFooter />

    </>
  );
};

export const getServerSideProps = async({ locale }: { locale: string }) => ({
  props: {
  ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Home;
