import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = 'Changelog';

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
                  <h2 id="blair-bravo-9-0-1">
                    <a href="#blair-bravo-9-0-1">Blair Bravo (9.0.1)</a>
                  </h2>
                  <p>April 2, 2025</p>
                  <h3>Randomizer</h3>
                  <ul>
                    <li>Fixed various randomizer seed generation bugs.</li>
                    <li>Fixed various randomizer logic bugs.</li>
                    <li>Fixed the &ldquo;Start with Master Sword&rdquo; option.</li>
                    <li>Set saving in Ganondorf&apos;s Boss Arena and resetting to respawn you in Ganon&apos;s Tower instead of Link&apos;s House.</li>
                    <li>Restores the Adult Fishing glitch so it gives you the randomized Adult Fishing reward instead of the Gold Scale.</li>
                    <li>Fixed the MQ Water Temple check totals.</li>
                    <li>Fixed an error in the Enemy Randomizer causing incorrect enemies to spawn when specific enemies were selected.</li>
                    <li>Shuffled Grass now respects the &ldquo;Chests of Agony&rdquo; option.</li>
                  </ul>
                  <h3>NTSC</h3>
                  <p>NOTE: The following bugfixes require regenerating your OTR to be applied.</p>
                  <ul>
                    <li>Fixed Morpha&apos;s Water texture being glitched/invisible.</li>
                    <li>Fixed the door that closes behind you in Gohma&apos;s Boss Arena having glitched/invisible textures.</li>
                    <li>Fixed the copyright textures for OTRs extracted from the Japanese Gamecube versions of OoT.</li>
                    <li>Fixed a crash when attempting to use the Message Viewer while an NTSC OTR is loaded.</li>
                  </ul>
                  <h3>Other</h3>
                  <ul>
                    <li>Added various missing translations and fixes errors in some existing translations.</li>
                    <li>Fixed the &ldquo;Disable Bomb Billboarding&rdquo; option.</li>
                    <li>Prevented the Alt Assets checkbox from being cleared when a settings JSON is dropped onto the SoH window.</li>
                    <li>Fixes some incorrect default values for the Input Viewer window.</li>
                    <li>Applies the menu theme color to the Item Tracker&apos;s Dungeon Rewards Circle Display view.</li>
                    <li>Fixed the Gold Skulltula Map combobox in the Save Editor window to remember its previous selection.</li>
                    <li>Fixed the invisible boulder fragments.</li>
                    <li>Fixed transparent tracker windows remaining transparent when docked.</li>
                    <li>Fixed various typos in enhancement descriptions.</li>
                  </ul>
                  <h2 id="blair-alfa-9-0-0">
                    <a href="#blair-alfa-9-0-0">Blair Alfa (9.0.0)</a>
                  </h2>
                  <p>April 2, 2025</p>
                  <h3>Randomizer</h3>
                  <h4>Features</h4>
                  <ul>
                    <li>Blazing fast seed generation</li>
                    <li>Check availability display</li>
                    <li>Option to show expected logic for a check in the tracker</li>
                    <li>Vanilla Logic generation setting</li>
                    <li>Mysterious Item Shuffle (freestanding/shop items present themselves as a question mark until you collect them)</li>
                    <li>Starting heart count implemented</li>
                    <li>Total check info for trackers</li>
                    <li>Pause menu tracker window for tracking miscellaneous collectibles (like boss souls; c-up on Quest Status screen)</li>
                    <li>Simple Plandomizer GUI</li>
                    <li>Check Tracker search/filter (including check and item names)</li>
                    <li>Open Waterfall setting</li>
                    <li>Ability to generate new seed from the same settings within the file select menu</li>
                    <li>New models for keys, keyrings, progressive bags</li>
                    <li>Get Item Animation skip</li>
                  </ul>
                  <h4>New Shuffles</h4>
                  <ul>
                    <li>Boss Souls (with super fancy soul models!)</li>
                    <li>Ocarina Buttons</li>
                    <li>Pots</li>
                    <li>Crates</li>
                    <li>Grass</li>
                    <li>Freestanding rupees/hearts</li>
                    <li>Fairies</li>
                    <li>Dungeon Chains (via mixing dungeon and boss entrance pools)</li>
                    <li>Fish (fishing pond and pools)</li>
                    <li>Beehives</li>
                    <li>Swim (entering water you would have to swim through voids you back to the last entrance you traversed)</li>
                    <li>Overworld door lock</li>
                    <li>Deku stick/nut bags (for initial capacity)</li>
                    <li>Skeleton Key (universal lock removal)</li>
                    <li>Infinite Capacity Upgrade tiers</li>
                    <li>Up to 7 shop slot shuffle</li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Entrance Tracker has new, more descriptive names, and the entrance display is significantly simplified</li>
                    <li>Hookshot/Longshot indicators on the check tracker</li>
                    <li>Map and Compass colors match dungeons option</li>
                    <li>Sparkles for Greg and non-refill bottle items</li>
                  </ul>
                  <h4>Fixes</h4>
                  <ul>
                    <li>Numerous logic fixes</li>
                    <li>Check/Item trackers now properly show or hide Vanilla/MQ status based on shuffle/map settings. Many will show in the tracker when entering a dungeon, but some entrances require collecting an item first</li>
                    <li>Removed some redundant hints</li>
                    <li>Duplicate WotH/Always hints with strong/very strong distribution option now works</li>
                  </ul>
                  <h3>Full NTSC Support</h3>
                  <ul><li>Includes GC and N64 versions, which means all reasonable retail versions are now supported</li></ul>
                  <h3>New Menu</h3>
                  <ul>
                    <li>Open with Esc</li>
                    <li>Menubar is no more</li>
                    <li>Option search!</li>
                    <li>Larger display size</li>
                    <li>All windows use new fonts and widget styling</li>
                    <li>Advanced Resolution settings implemented</li>
                    <li>Menu buttons rearranged, confirmation placed on menu button for quitting SoH</li>
                    <li>Significant rearrangement of enhancements to utilize new menu</li>
                  </ul>
                  <h3>Other</h3>
                  <h4>New Features</h4>
                  <ul>
                    <li>Mac improvements: game mode support, game scaling, native fullscreen</li>
                    <li>Vsync can be toggled for Mac and Linux</li>
                    <li>Mouse Input Support!</li>
                    <li>Built-in Time Splits</li>
                    <li>Enemy selection/exclusion for random enemies</li>
                    <li>A lot more cutscene skips, and skips apply in vanilla</li>
                    <li>New controller framework (updated since 2ship&apos;s)</li>
                    <li>Swim speed modifiers</li>
                    <li>Increase Crawl Speed</li>
                    <li>Lost Woods Ocarina Game difficulty options</li>
                    <li>Pause menu warping</li>
                    <li>GC Controller support for Linux</li>
                    <li>Option to disable HUD heartbeat animation</li>
                    <li>Options to effectively restore console pause buffer behavior</li>
                    <li>Developer Value and Message Viewers</li>
                    <li>Added stick sensitivity</li>
                    <li>Hurt Container Mode: Start with 20 hearts and lose max health with heart pieces and heart containers down to a minimum of 3</li>
                    <li>Option to have shops and minigames open day and night</li>
                    <li>Built-in Full Input Viewer</li>
                    <li>Option to fix vanilla height for some switches</li>
                    <li>O2R archive support</li>
                    <li>Frogs Ocarina Game difficulty options (instant win, unlimited timer, or increased frame count before failure)</li>
                    <li>Early Eyeball Frog trick restoration</li>
                    <li>Zora Waterfall options (always open, only play song once)</li>
                    <li>Boomerang reticle/first-person aiming</li>
                    <li>Timer display window (with many options for timing, including in-game time)</li>
                    <li>Custom tunic loading for each tunic type</li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Remove file slots from fast file select, change to Boot Cycle instead (authentic, skip to file select, otherwise both splash screens play)</li>
                    <li>Ability to mash through bootup splash screens</li>
                    <li>Allow Linux to use symlinked ROMs</li>
                    <li>Can scale enemy size by amount of health</li>
                    <li>Can increase the amount of time before a cucco runs away after putting it down</li>
                    <li>Lots of language improvements, especially German and French</li>
                    <li>Improvements to actor and dl viewers</li>
                    <li>Lots of new and improved menu tooltips</li>
                    <li>Pausing now properly pauses the game in the background</li>
                    <li>Preserve minimap toggle state</li>
                    <li>Allow longer Mweep</li>
                    <li>Improvements to fast textbox behavior</li>
                    <li>Option to disable waterfall hitbox as soon as ZL is played</li>
                    <li>Option for faster rupee accumulation</li>
                    <li>Improved randomizer presets, including removing enhancement changes tied to the previous ones</li>
                    <li>Exclude void and death traps from extra trap randomization pool</li>
                    <li>Cosmetics editor improvements (more rainbow, options set all given colors to rainbow, etc)</li>
                    <li>Autosave converted to interval saving, with automatic saving on soft reset when autosave is enabled</li>
                    <li>Rumble strength defaults to 50%</li>
                  </ul>
                  <h4>Fixes</h4>
                  <ul>
                    <li>MacOS: Metal audio crackle resolved, fix vanishing paths options not applying</li>
                    <li>Pause menu interpolation</li>
                    <li>Hand contortion when holding the hammer</li>
                    <li>Disable lens effect when unequipping with it enabled</li>
                    <li>Most situations of equipping boots and tunics with buttons causing the player to drop/throw held items</li>
                  </ul>
                  <h2 id="macready-golf-8-0-6">
                    <a href="#macready-golf-8-0-6">MacReady Golf (8.0.6)</a>
                  </h2>
                  <p>August 12th 2024</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Several small performance improvements, especially for lower-end hardware (like Wii U)</li>
					<li>Equip swap now works even with &quot;Cursor on any slot in inventory&quot; enabled</li>
					<li>Add Flexible skeleton support to various enemies and bosses (modding-related)</li>
					<li>&quot;Disable LOD&quot; enhancement now applies to everything, not just Link</li>
					<li>Clean up Change Age conditions and better persist loadouts per age</li>
					<li>Rework Disable Draw Distance application for better performance</li>
					<li>Add widescreen culling as a toggle option to allow for actors to behave properly in widescreen</li>
					<ul><li>Also add toggle to exclude glitch-helpful actors from culling calculations. They may still be visible, but won&apos;t affect tricks and glitches done with them</li></ul>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
					<li>Fix issues with blocks saving position on the Switch port</li>
                    <li>Check/Item Trackers no longer spoil Master Quest prematurely</li>
					<li>Fix in-game language option not saving properly</li>
					<li>Fix logic issue preventing Gerudo Fortress key rings being placed in any dungeon</li>
					<li>Graphics menu no longer causes lag</li>
					<li>Resolve more issues with DPI scaling on Windows (crashing with internal resolution &gt; 100% at 4k resolution, fullscreen sizing, etc)</li>
                  </ul>
                  <h2 id="macready-foxtrot-8-0-5">
                    <a href="#macready-foxtrot-8-0-5">MacReady Foxtrot (8.0.5)</a>
                  </h2>
                  <p>February 28th 2024</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Move Personal Notes to Save File</li>
                    <li>Rename Freecam to Free Look</li>
                    <li>Noclip now only applies to the player actor</li>
                    <li>Add MessageBoxes to `no_ui` handling</li>
                    <li>Improved OTR creation process on Mac</li>
                    <li>Catch save loading errors and notify user</li>
                    <li>Prevent remember save location in dungeons/boss rooms</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix Check Tracker Area Totals</li>
                    <li>Fix Starting Triforce Piece Count</li>
                    <li>Fix Fire Temple Boss Door Logic</li>
                    <li>Fix Tektite texture not loading for death animation</li>
                    <li>Restore Original Scene Command Object List Behaviour</li>
                    <li>Improve pause menu dungeon map performance</li>
                    <li>Fix some actor culling behavior (This will continue to be iterated on)</li>
                    <li>Fix some missing &quot;Bombcus in Logic&quot; issues</li>
                    <li>Fix Rando Reward Count Slider Defaults not registering</li>
                    <li>Fix RTA timestamp truncation</li>
                    <li>Fix object dependency issue in Deku Scrub Theatre</li>
                    <li>Cvars not clearing when Enabled Tricks and Excluded Locations are empty</li>
                    <li>Fix GS Token giveItemId bleed between rando and vanilla saves</li>
                    <li>Fix some enhancements not working in debug saves</li>
                    <li>Fix endianess issue with camera setting data</li>
                    <li>Fix CVar evaluation for scummed checks being hidden</li>
                  </ul>
                  <h2 id="macready-echo-8-0-4">
                    <a href="#macready-echo-8-0-4">MacReady Echo (8.0.4)</a>
                  </h2>
                  <p>December 17th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>
                      Adult shooting gallery now correctly only gives reward when you have a bow (Along with a new
                      message to indicate such)
                    </li>
                    <li>Add &quot;Always show Gold Skulltulas&quot; option to the Check Tracker</li>
                    <li>HD Textures now supported for pause screen dungeon maps</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>
                      Fix for various issues related to custom models being used in conjuction with the alt-assets
                      functionality
                    </li>
                    <li>Fix regression in FPS calculation causing performance/audio issues on Windows</li>
                    <li>Fix graphical bug causing color clamping issues with effects like Saria&apos;s Song</li>
                    <li>Support for more accurate color clamping on Metal GFX backend (Mac Only)</li>
                    <li>Fix Jabu Jabu MQ minimap chest icons</li>
                    <li>Fix controller LED crash when using the &quot;Health&quot; option</li>
                    <li>Retain gameplay stats window size across sessions</li>
                    <li>More swordless Link fixes when time traveling</li>
                    <li>Fix bug causing enemies to always be small in Enemy Size Rando</li>
                    <li>Fix performance issues on file select when an active spoiler was loaded</li>
                    <li>Performance/Stability fixes to King Dodongo&apos;s lava texture/effect</li>
                    <li>Fixes to pause screen dungeon maps, including inaccuracy of rooms you&apos;ve traveled to</li>
                    <li>
                      Fix initialization of SaveManager happening before something it depended on (hopefully will squash
                      a crash or two)
                    </li>
                    <li>Fix logical error with Darunias door entrance</li>
                    <li>Fix soft lock when using boots in death animation</li>
                    <li>Fix usage of static variable in chest code, causing unknown behavior</li>
                  </ul>

                  <h2 id="macready-delta-8-0-3">
                    <a href="#macready-delta-8-0-3">MacReady Delta (8.0.3)</a>
                  </h2>
                  <p>November 29th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Add Fix for Darunia dancing too fast</li>
                    <li>
                      Added ability to drop <code className="code">shipofharkinian.json</code> file over window to load
                      the configuration from it (Note: This will overwrite your current configuration)
                    </li>
                    <li>
                      Added hidden CVars for racing QoL (<code className="code">gDisableChangingSettings</code> and{' '}
                      <code className="code">gRandomizerDontGenerateSpoiler</code>)
                    </li>
                    <li>Disable Fix Vine Fall when Climb Everything is enabled</li>
                    <li>Adjustments to Enemy Size Rando to prevent gameplay issues</li>
                    <li>Disable equip dupe when using &quot;Equip Multiple Arrows at Once&quot; enhancement</li>
                    <li>Mod OTRs load order is now consistent across all platforms</li>
                    <li>Tweak to &quot;Bugs don&apos;t despawn&quot; cheat to disable it near soil patches</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix Morpha&apos;s poor poor broken vertex. (Requires OTR regen)</li>
                    <li>Fix Missing TextIDs for MQ PAL (Requires OTR regen)</li>
                    <li>Fix for audio cutting off Link&apos;s voice SFX and a others</li>
                    <li>
                      King Dodongo&apos;s Lava Textures have been fixed and now support HD Textures (Requires updated
                      texture packs)
                    </li>
                    <li>Fix Alt-Asset toggling making some textures and models stuck as the non-alt version</li>
                    <li>Fix kokiri sword unequipping when using switch age cheat/enhancements</li>
                    <li>Fix Symlinks to Directories in Mods folder not being traversed</li>
                    <li>Fix crash for Mask Shop Skybox when in entrance randomizer</li>
                    <li>Various Check Tracker fixes</li>
                  </ul>

                  <h2 id="macready-charlie-8-0-2">
                    <a href="#macready-charlie-8-0-2">MacReady Charlie (8.0.2)</a>
                  </h2>
                  <p>November 16th 2023</p>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix for keyboard input lag issue introduced in 8.0.1</li>
                    <li>Fix for boot changing effects in Crowd Control</li>
                  </ul>

                  <h2 id="macready-bravo-8-0-1">
                    <a href="#macready-bravo-8-0-1">MacReady Bravo (8.0.1)</a>
                  </h2>
                  <p>November 14th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Enhancement: Fix Link&apos;s eyes being open while sleeping</li>
                    <li>
                      Renamed every remaining reference to &quot;Desert Wasteland&quot; to &quot;Haunted Wasteland&quot;
                    </li>
                    <li>Saving now writes to a temp file before replacing the existing one upon completion</li>
                    <li>Autosave now works in grottos, fairy fountains, bowling alley, fishing pond, and on Epona</li>
                    <li>
                      Tunics stolen by Like Likes now removed from item buttons if Equippable Tunics and Boots is
                      enabled
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Temp B now restored on autosave (resolves sticks on B)</li>
                    <li>Fix for crashes when applying Fix OOB Textures and Cosmetics Editor effects on mods</li>
                    <li>Fix for Chest Texture Matches Contents on custom chest models</li>
                    <li>Audio Editor properly loads exclusions list again</li>
                    <li>Fix crashes with custom model skeletons</li>
                    <li>Fix magic zeroing out when using fast file select</li>
                    <li>
                      Fix crashes on item collection with max debug saves and vanilla saves that were transferred from
                      previous versions
                    </li>
                    <li>Fix edge case of swordlessness in MS shuffle</li>
                    <li>Fix issues related to DPI (weird game screen sizing, menus unclickable on DPI, etc)</li>
                  </ul>

                  <h2 id="macready-alfa-8-0-0">
                    <a href="#macready-alfa-8-0-0">MacReady Alfa (8.0.0)</a>
                  </h2>
                  <p>November 7th 2023</p>
                  <h4>Breaking Change</h4>
                  <ul>
                    <li>
                      Texture paths and names have been changed to unify them across ROMs and to remove duplicate
                      textures between Vanilla and MQ textures. Texture mods might be partially broken until updated by
                      the mod&apos;s author
                    </li>
                  </ul>
                  <h4>New Features</h4>
                  <ul>
                    <li>
                      Support for playing SoH with N64 PAL 1.0 and GC retail MQ ROMs{' '}
                      <b>This means all PAL ROMs are now supported!</b>
                    </li>
                    <li>OTR version tracking, to prompt re-extraction when necessary</li>
                    <li>Menu item to open the app data folder</li>
                    <li>Color bunny hood in Cosmetics Editor and hide it in mod options</li>
                    <li>Restoration: RBA Values (outcomes now match vanilla)</li>
                    <li>
                      Added combobox for selecting the type of file save creation on slot 1 when debug mode is enabled.
                      This includes off (no items given/flags set) and Max (virtually 100% completed seed)
                    </li>
                    <li>Extra mode: Randomized enemy sizes</li>
                    <li>Experimental ImGui scaling combobox</li>
                    <li>
                      SoH checks its install path for file permissions and being in the temp folder to prevent issues
                      with saves disappearing, among others
                    </li>
                    <li>
                      Randomizer
                      <ul>
                        <li>Triforce Hunt</li>
                        <li>Master Sword Shuffle</li>
                        <li>Colorized hints</li>
                      </ul>
                    </li>
                    <li>
                      Enhancements
                      <ul>
                        <li>Enemy Health Bars</li>
                        <li>&quot;More info in file select&quot;</li>
                        <li>Toggleable additional Ice Trap effects</li>
                        <li>Fix Bush Item Drops, which fixes a vanilla bug</li>
                        <li>Disable Lost Woods leading music functionality</li>
                        <li>Fix enemies not spawning near water</li>
                        <li>Fix wall climbing on edges of climbable areas</li>
                      </ul>
                    </li>
                    <li>
                      Cheats
                      <ul>
                        <li>Bomb timer multiplier</li>
                        <li>Fish Don&apos;t despawn</li>
                        <li>
                          Bugs Don&apos;t Despawn (note: this can interfere with spawning gold skulltulas from bean
                          patches)
                        </li>
                        <li>Ultra Deku Stick</li>
                        <li>Clear cutscene pointer</li>
                        <li>Easy QPA</li>
                      </ul>
                    </li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>
                      Improved Check Tracker
                      <ul>
                        <li>More accurate tracking</li>
                        <li>
                          Multiple collection states implemented, including Scummed and Collected, with individual color
                          options
                        </li>
                        <li>Option to automatically hide shop slots 1-4</li>
                        <li>Shop item tracker, with names and prices</li>
                        <li>Skipping items counts toward area completion totals</li>
                        <li>Full vanilla tracking (typical 100% expectations; MQ still has some issues)</li>
                        <li>Autoscroll now tracks shuffled entrances</li>
                      </ul>
                    </li>
                    <li>3D drops has had many tweaks, fixing numerous issues with it</li>
                    <li>
                      Audio editor additions: New Voices tab, Hover Boots and Drinking Bottle sound effects, lock button
                    </li>
                    <li>
                      Save states now have to be turned on to work, with a clearer warning message of potential issues
                      using them
                    </li>
                    <li>
                      New option in Cosmetics Editor to change the Hookshot reticle to a different color when over
                      hookshottable area
                    </li>
                    <li>New visualisation for pause menu cycling, for masks and adult trade items in randomizer</li>
                    <li>
                      Additional option When shuffling Vanilla and MQ dungeons in randomizer to select which ones
                      specifically will be MQ
                    </li>
                    <li>Added Shield Aim Invert X & Y Axis options to Additional Controls</li>
                    <li>Added additional Randomizer Settings preset for the No Logic Spock race</li>
                    <li>Can now equip boots and tunics in most actions</li>
                    <li>Ability to allow equipping bunny hood as adult separated from the MM effect</li>
                    <li>Transitions added to Change Age with SoT/OoT enhancement</li>
                    <li>
                      Randomizer quest now shows all the time, just disabled if no spoiler file has ever been generated
                      or loaded
                    </li>
                    <li>Goron Neck Length affects Goron Shopkeeper</li>
                    <li>Improved free cam cancellation</li>
                    <li>&quot;Navi Targeting Colors&quot; option added to Controller LED Color options</li>
                    <li>Rupee Dash: Wallet size affects drain rate; interval can now be anywhere from 1-10 seconds</li>
                    <li>Ivan the Fairy now uses equipped items rather than specific items tied to slots</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix: Restore original Equip Dupe behavior</li>
                    <li>Stone of Agony now properly hidden with &quot;no ui&quot; on</li>
                    <li>Fix certain debug inputs being triggered in cutscenes without debug enabled</li>
                    <li>Generating OTRs with ByteSwapped/LittleEndian ROMs now works</li>
                    <li>Fix issue with Bunny Hood Equip Swap in scene transitions</li>
                    <li>Fix for ice traps collected in first person view kicking them out of the first person view</li>
                    <li>Fix Item Tracker visibility combo button</li>
                    <li>Randomizer: Warp Song Hints option works properly</li>
                    <li>
                      Randomizer: Logic bug that expected collecting items as child past the Fire Temple shortcut climb
                      room with Fewer Tunic Requirements on
                    </li>
                    <li>Several issues with Shadow Tag softlocking</li>
                    <li>Entrance rando validation edge cases</li>
                  </ul>
                  <h4>Accessibility</h4>
                  <ul>
                    <li>Added TTS for Game Over screen</li>
                  </ul>

                  <h2 id="sulu-bravo-7-1-1">
                    <a href="#sulu-bravo-7-1-1">Sulu Bravo (7.1.1)</a>
                  </h2>
                  <p>August 14th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Audio Editor dropdowns now auto scroll to the currently selected sequence</li>
                    <li>
                      &quot;Easy Input Buffering&quot; cheat no longer causes accidental button re-presses when
                      unpausing
                    </li>
                    <li>
                      &quot;Easy Frame Advance&quot; cheat now works correctly with &quot;Simulated Input Lag&quot;
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix mouse cursor not always displaying when starting in Fullscreen mode</li>
                    <li>Fix SoH window sometimes not being visible when using a multi-monitor setup</li>
                    <li>
                      Fix HD textures not rendering correctly for the song note icons in the Item Tracker and the Save
                      Editor
                    </li>
                    <li>Fix Dark Link&apos;s movement in Mirror Mode</li>
                    <li>Fix various crashes when generating a Rando seed</li>
                    <li>
                      Fix Anju Adult rewards not granting an item when performing an action immediately after the text
                      box
                    </li>
                    <li>
                      Add &quot;Fix Poacher&apos;s Saw Softlock&quot; option to prevent softlocks when trading the
                      poacher saw and mashing/skipping text while holding out an item
                    </li>
                    <li>
                      Fix Carpet Merchant shuffle from accidentally giving bombchus instead of the Rando reward when
                      Link is not close enough to him
                    </li>
                    <li>
                      Fix &quot;Disable Idle Camera Re-Centering&quot; enhancement from getting stuck on level geometry
                    </li>
                    <li>Fix Extraction sometimes crashing for machines with older CPUs</li>
                    <li>Fix PAL 1.1 rom not being detected properly on Mac</li>
                    <li>Fix Granny shop shuffle not checking for empty bottles when offering Blue Potion refills</li>
                    <li>Fix Granny shop shuffle check not showing as completed in the Check Tracker</li>
                    <li>Fix various text overflow issues</li>
                    <li>Fix the &quot;Exit Market at Night&quot; enhancement not working when wearing a mask</li>
                    <li>
                      Fix various asset issues with the GC PAL rom (requires regenerating your OTR to get the fix)
                    </li>
                    <li>
                      Fix various asset issues with the PAL 1.1 rom (requires regenerating your OTR to get the fix)
                    </li>
                    <li>Fix Dungeon Maps not always indicating if the dungeon is Vanilla or MQ</li>
                    <li>Fix resolution and MSAA sliders not applying immediately</li>
                    <li>Fix Collision Viewer in Mirror Mode</li>
                  </ul>
                  <h4>Accessibility</h4>
                  <ul>
                    <li>TTS fixes and improvements in the Pause Menu</li>
                  </ul>

                  <h2 id="sulu-alfa-7-1-0">
                    <a href="#sulu-alfa-7-1-0">Sulu Alfa (7.1.0)</a>
                  </h2>
                  <p>June 18th 2023</p>
                  <h4>New Features</h4>
                  <ul>
                    <li>Wii U build returns!</li>
                    <li>Boss Rush quest selection</li>
                    <li>Hyper Enemies</li>
                    <li>N64 PAL 1.1 cartridge ROM support</li>
                    <li>RTA Timing in gameplay stats (with in-game display option)</li>
                    <li>
                      Mirror mode: flip ALL the things! Allows for everything to be mirrored, set rooms (based on a
                      seed) or constantly randomizing mirrored rooms
                    </li>
                    <li>Shadow Tag mode: a wallmaster follows you everywhere...</li>
                    <li>Trick logic now available in the randomizer settings (glitches have not yet been added)</li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Gerudo Fortress keyring now in randomizer settings</li>
                    <li>Gameplay stats UI cleanup</li>
                    <li>Decreased size of save files</li>
                    <li>MQ toggle added to Better Warp Menu</li>
                    <li>Greg options for Bridge and LACS dungeon rewards settings</li>
                    <li>Full controller (e.g. PS4/5) LED control (can turn it off, more color options)</li>
                    <li>Option to prevent speed modifier from affecting jumps</li>
                    <li>Better spoiler log section order</li>
                    <li>Option in SoH menu bar to hide the menu bar</li>
                    <li>Option for Time Travel with fairy ocarina</li>
                    <li>Crowd Control and Enemy Rando moved to the Extra Modes menu</li>
                    <li>Enemy Rando now has select box for both options</li>
                    <li>Window size and position now remembered outside of fullscreen</li>
                    <li>Fullscreen shortcut for all graphics APIs changed to F11</li>
                    <li>Added Spock race settings to the randomizer presets</li>
                    <li>
                      Additional Controller Options (previously Customize Game Controls) now sits under Controller
                      Mapping (previously Controller Configuration) in the Settings menu
                    </li>
                    <li>Option to show gauntlets in first-person while holding bow or hookshot</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Crash when changing margins in Cosmetics Editor</li>
                    <li>Crash when resetting Link&apos;s model size modifier out of game</li>
                    <li>Crash with Ivan-placed hookshot targets</li>
                    <li>Dungeon entrance icon fixes (positioning with HUD placement settings, missing icons)</li>
                    <li>Granny no longer gives 5th bottle when not shuffled (rando logic bug)</li>
                    <li>More V-Sync fixes/tweaks</li>
                    <li>Switching age with Time Travel enhancement no longer gives the Kokiri sword</li>
                  </ul>

                  <h2 id="spock-charlie-7-0-2">
                    <a href="#spock-charlie-7-0-2">Spock Charlie (7.0.2)</a>
                  </h2>
                  <p>May 22nd 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Enables visual styles for Windows so dialogs can match the OS better</li>
                    <li>
                      Adds Scene Specific checks to Dirt Path fix so that it isn&apos;t active for other effects like
                      Deku Scrub shadows
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fixes conversion of oot-save.sav to modern format</li>
                    <li>Fixes an oversight when searching for rom file extensions during extraction</li>
                    <li>Fixes a crash when buying Songs on Switch</li>
                    <li>Fixes a crash when selling Masks on Switch</li>
                    <li>
                      Fixes randomizer generating the same seed every time on the first generation after launching the
                      game
                    </li>
                    <li>Re-adds the accidentally removed Greg timestamp from the Stats tracker</li>
                    <li>
                      Implements Skeleton Unregistration for actors who manage their own skeletons, which should fix
                      crashes when toggling alternate assets
                    </li>
                  </ul>

                  <h2 id="spock-bravo-7-0-1">
                    <a href="#spock-bravo-7-0-1">Spock Bravo (7.0.1)</a>
                  </h2>
                  <p>May 10th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Move game saving to a separate thread to prevent slow downs on the main game thread</li>
                    <li>No longer use alternate assets for the Item Tracker and Save Editor</li>
                    <li>
                      Improvements to the built-in extraction process to handle larger paths and detect MQ vs Vanilla
                      when generating OTRs back to back
                    </li>
                    <li>
                      Always reset the trade item cycling behavior when switching pause menu pages or closing the pause
                      menu
                    </li>
                    <li>Remove duplicated Rupee Dash toggle</li>
                    <li>Small tweaks for CC 2.0</li>
                    <li>
                      Rainbow Cosmetic Editor effects now have a consistent cycling speed regardless of frame rate
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix various crashes when only using a MQ game</li>
                    <li>Fix crash when changing HUD margins in Linux</li>
                    <li>
                      Fix crash on Mac when displaying SoH custom graphics like the DPad or quest selection screen
                    </li>
                    <li>
                      Fix situation where capturing a Poe or buying bottle refills from shops would fill all empty
                      bottles instead of one
                    </li>
                    <li>Properly load custom models on scene transition</li>
                    <li>
                      Fix Keys/Maps/Compasses not being set for the correct dungeon when using Own Dungeon items and
                      Boss Rooms are shuffled
                    </li>
                    <li>Fix Randomizer logic condition for the Gold Skulltula Outside Ganon&apos;s Castle</li>
                    <li>Fix various issues with the built-in extraction not detecting the correct roms</li>
                    <li>
                      Disable TTS hotkey on Linux to prevent accidental crashes as TTS is not supported on Linux yet
                    </li>
                    <li>Fix Gohma larvae being affected by Hyper Bosses outside of Gohma&apos;s lair</li>
                  </ul>

                  <h2 id="spock-alfa-7-0-0">
                    <a href="#spock-alfa-7-0-0">Spock Alfa (7.0.0)</a>
                  </h2>
                  <p>April 27th 2023</p>
                  <h4>New Features</h4>
                  <ul>
                    <li>
                      Support for high resolution textures!<a href="#spock-alfa-custom-textures-models">*</a>
                    </li>
                    <li>
                      Support for custom models!<a href="#spock-alfa-custom-textures-models">*</a>
                    </li>
                    <li>New local 2 player mode: Ivan the Fairy</li>
                    <ul>
                      <li>Ivan can use Link&apos;s items to his advantage and disadvantage</li>
                    </ul>
                    <li>
                      Add built in extraction support for Windows. This replaces the need for OTRGui, which is no longer
                      shipped.
                    </li>
                    <li>CrowdControl V2 with new effects, effect descriptions, CC client layout and bugfixes</li>
                    <li>Restoration for Bongo-Bongo 1.0 quick kill</li>
                    <li>Hyper Bosses - Bosses will act and move twice as fast!</li>
                    <li>Time Saver to have Dampe appear out all night</li>
                    <li>Cheat to prevent Gibdo and ReDeads from freezing Link with their screams</li>
                    <li>Time Saver to allow traveling through time when playing Song of Time</li>
                    <li>Time Saver to have Gold Skulltulas present during day time</li>
                    <li>Option to remove the Hot/Underwater warning text when not wearing the proper tunic</li>
                    <li>Enhancement to add an aiming reticle for the Bow and Slingshot</li>
                    <li>Gameplay Stats now has added times for scenes and rooms</li>
                    <li>Add Difficulty Option to have bonking deal damage to Link</li>
                    <li>Add option to fix authentic out of bounds texture reads (e.g. Deku Sticks, Freezards)</li>
                    <li>Ability to change Link&apos;s voice pitch in the Audio Editor</li>
                  </ul>
                  <h4>Randomizer</h4>
                  <ul>
                    <li>
                      Add Kakariko Granny&apos;s Potion Shop to Merchant Shuffle. She will sell you an item for 100
                      rupees after turning in the Odd Mushroom.
                    </li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Frame interpolation has been renamed to FPS and moved to Graphics under the Settings menu</li>
                    <li>Match Refresh rate is now a toggle instead of a button</li>
                    <li>Add V-Sync toggle in Graphics menu</li>
                    <li>
                      Change Age cheat now properly switches Link&apos;s sword for the appropriate age and places him in
                      the correct room in Dungeons
                    </li>
                    <li>
                      New <i>powered by libultraship</i> boot logo sequence. An option to restore the original hardware
                      boot logo is available.
                    </li>
                    <li>Custom SoH assets are now provided in the soh.otr supplied with downloads</li>
                    <li>The debug room 120 is patched to now load correctly</li>
                    <li>Add version info and other details to Windows exe properties</li>
                    <li>Updated README. Sections reworded or appended to clarify them.</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>
                      Fix Goron Links text in Randomizer and bug where he would grant his item without bombing him first
                    </li>
                    <li>Fix Spirit Temple Cobra mirror statue shadow not updating when rotated</li>
                    <li>Fix Gold Skulltula token on Kakariko construction site being positioned wrong</li>
                    <li>Fix shooting Lake Hylia Sun in vanilla saves granting multiple Fire Arrows</li>
                    <li>Fix Boss shuffle logic issues for Barinade, Jabu-Jabu, and items set to Own Dungeon</li>
                    <li>Fix the Death Mountain cloud in Randomizer not changing after defeating Volvagia</li>
                    <li>Fix buying Heart Pieces or Containers from Shopsanity not healing Link</li>
                    <li>Fix edge case where free standing progressive items would not update to the correct item</li>
                    <li>Various fixes for sliders in the UI</li>
                  </ul>
                  <h4>Accessibility</h4>
                  <ul>
                    <li>
                      Add Text-to-Speech option under the Accessibility menu for in game text and menus. Toggle by
                      pressing F9.
                    </li>
                  </ul>
                  <h4 id="spock-alfa-custom-textures-models">
                    <p>
                      <a href="#spock-alfa-custom-textures-models">*</a>Developers&apos; Note:
                    </p>
                    <p>
                      This update provides the{' '}
                      <u>
                        <i>framework</i>
                      </u>{' '}
                      that allows for content creators to create custom, high resolution textures and models. The HM64
                      team does not provide custom textures or models. Please allow ample time for people interested in
                      content creation to develop texture and model packs for SoH.
                    </p>
                  </h4>

                  <h2 id="khan-charlie-6-1-2">
                    <a href="#khan-charlie-6-1-2">Khan Charlie (6.1.2)</a>
                  </h2>
                  <p>April 2nd 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Add Treasure Chest mini-game reward chest to Chest Size and Texture Matches Content</li>
                    <li>
                      Green rupees (not Greg) no longer display as gold chests for Chest Size and Texture Matches
                      Content
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fix scenario where resetting after starting a rando save would make Link lose rupees</li>
                    <li>Fix Deku Theatre mask checks showing as completed but the item was not granted</li>
                    <li>Fix Skulltula token count message on Rando</li>
                    <li>
                      Fix scenario where Mido would block the Deku tree pathway without moving when Link has Kokiri
                      Emerald in Rando
                    </li>
                    <li>Fix scenario where some custom sequence would get overridden by authentic sounds/sequences</li>
                    <li>
                      Fix crash when Link dies while fishing or stealing the fishing rod and going back to the fishing
                      pond
                    </li>
                    <li>
                      Fix Rando always allowing pulling graves during the day regardless if the grave pulling
                      enhancement is off
                    </li>
                  </ul>

                  <h2 id="greg-alfa-42-0-69">
                    <a href="#greg-alfa-42-0-69">Greg Alfa (42.0.69) (APRIL FOOL&apos;S RELEASE)</a>
                  </h2>
                  <h3>Fake Greg Alfa Changelog</h3>
                  <p>April 1st 2023</p>
                  <h4>New Features</h4>
                  <ul>
                    <li>Added VR with full body tracking</li>
                    <li>Added Pirate as a language option</li>
                    <li>Added Raytracing for Nvidia 900 series cards</li>
                    <li>Added Ganondorf romance option</li>
                    <li>Removed Herobrine</li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Added bee movie script to potential Gossip Stone hints</li>
                    <li>Removed Mido from the game because nobody liked him anyway</li>
                    <li>Added a second README just in case people don&apos;t read the first one</li>
                  </ul>
                  <h4>Bugfixes</h4>
                  <ul>
                    <li>Fixed a rare scenario where system32 was accidentally deleted on Steam Deck sometimes</li>
                  </ul>
                  <h3>Real Greg Alfa Changelog</h3>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Based on Khan Bravo 6.1.1</li>
                    <li>Enemy Randomizer spawn pool is limited to 11 difficult enemies</li>
                    <li>Dampe throws out way more flames than usual</li>
                    <li>
                      King Zora moves 5x slower than vanilla speed, making him take roughly 2.5 minutes to move out of
                      the way.
                    </li>
                    <li>Randomly unequip c-buttons, dpad and shield</li>
                    <li>Ocarina can&apos;t be equipped on dpad down</li>
                    <li>Scrubs and shops show a fake 999 price</li>
                    <li>Link is 90% of his original size both as child and adult</li>
                    <li>Hookshot and longshot are randomly between 0 and double their original length</li>
                    <li>Boomerang flies away 5x the original distance</li>
                    <li>Angry cuccos randomly spawn, spawning their brethrens to attack you</li>
                    <li>Rolling randomly makes you bonk into thin air</li>
                    <li>Bunny hood makes you walk backwards very fast</li>
                    <li>All bosses move and act at twice the speed</li>
                    <li>Hover boots last twice as long</li>
                    <li>Link turns sideways while climbing</li>
                    <li>Treasure chest minigame always has the same solution</li>
                  </ul>

                  <h2 id="khan-bravo-6-1-1">
                    <a href="#khan-bravo-6-1-1">Khan Bravo (6.1.1)</a>
                  </h2>
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

                  <h2 id="khan-alfa-6-1-0">
                    <a href="#khan-alfa-6-1-0">Khan Alfa (6.1.0)</a>
                  </h2>
                  <p>March 1st 2023</p>
                  <h4>New Enhancements/Features</h4>
                  <ul>
                    <li>
                      Enhancement to have Link use the correct ammo types when using bow or slingshot as the wrong age
                    </li>
                    <li>Time saver to auto fill new file names as &quot;Link&quot;</li>
                    <li>Enhancement to disable the automatic first person mode when placing down Bombchus</li>
                    <li>
                      The SFX Editor has been renamed to Audio Editor and a new audio shuffle pool management system is
                      added
                      <ul>
                        <li>You can now manage a list of included and excluded sequences</li>
                        <li>Easily search, filter and preview for sequences to include/exclude</li>
                      </ul>
                    </li>
                    <li>Added support for the Metal renderer as a graphics option for Macs</li>
                    <li>
                      Added option to set virtual notch support for the control stick in the Controller Configuration
                    </li>
                    <li>
                      Added difficulty option &quot;Rupee Dash Mode&quot; were you slowly lose rupees over time, and
                      start to lose health when you run out of rupees
                    </li>
                  </ul>
                  <h4>Randomizer</h4>
                  <ul>
                    <li>
                      Added Greg (the Green Rupee of Eternal Glory) as an option for the rainbow bridge requirement
                      <ul>
                        <li>
                          An entry for Greg is now available in the item tracker to let you know when you find Greg
                        </li>
                        <li>The treasure chest mini game man will provide a hint for where Greg is located</li>
                      </ul>
                    </li>
                    <li>
                      Add a Shopsanity price range option to control the price options, including an affordable option,
                      and wallet locked options
                    </li>
                    <li>
                      Added warning system to indicate when a randomizer save is being played on a different build
                    </li>
                  </ul>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Rainbow effects in the Cosmetic Editor transition more smoothly</li>
                    <li>Check tracker now persists skipped checks</li>
                    <li>Add more junk hints</li>
                    <li>Add separate sensitivity sliders for X and Y axis for First person view and Free Camera</li>
                    <li>Adjust the altar text in rando to still list bridge requirements when hints are turned off</li>
                    <li>
                      Adjust the manual seed input field in the randomizer menu to now permit alpha-numeric values
                    </li>
                    <li>
                      Tweaked hint generation to no longer treat Heart Pieces as major hint hints improving the
                      usefulness of Barren hints
                    </li>
                    <li>
                      Tweaked the Entrance Tracker to not display redundant entrances when decoupled entrances is not on
                    </li>
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
                    <li>
                      Fix duplicate music sequence names displaying during the Barinade fight and when night transitions
                      to day in Hyrule Field
                    </li>
                    <li>Fix the wrong title card being displayed for the Lakeside Laboratory</li>
                    <li>Fix excluded locations not applying in some cases</li>
                    <li>Fix Item Tracker notes sometimes causing a crash on launch</li>
                    <li>
                      Fix the Gerudo Fortress chest to grant the same shuffled item as adult and child to prevent
                      softlocks
                    </li>
                    <li>Fix Scrubs hints and Skulltula house hints not displaying Ice Trap trick names</li>
                    <li>Fix cutscene crashes when only loading MQ</li>
                  </ul>

                  <h2 id="gibbs-alfa-6-0-0">
                    <a href="#gibbs-alfa-6-0-0">Gibbs Alfa (6.0.0)</a>
                  </h2>
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
                    <li>
                      Adjust ice traps from Gold Skulltulas and free standing items to freeze Link after the text box is
                      closed (or with a short delay)
                    </li>
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
                      Adjusted some locations to be hidden from the excluded location list when certain rando settings
                      are active
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
                    <li>
                      Fix some chests not being able to be opened or hookshot-able when Chest Size Matches Content is on
                    </li>
                    <li>Fix Gerudo fighter sending child Link to jail instead of Gerudo Valley</li>
                    <li>Fix Check Tracker sometimes showing duplicates</li>
                    <li>Fix song overlays not covering the whole screen when Fast Ocarina Playback is on</li>
                    <li>Fix the locations tab in the Randomizer menu not updating when settings were changed</li>
                  </ul>

                  <h2 id="bradley-echo-5-1-4">
                    <a href="#bradley-echo-5-1-4">Bradley Echo (5.1.4)</a>
                  </h2>
                  <p>January 18th 2023</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Support Windowed Fullscreen on OpenGL</li>
                    <li>Relabel Mido flags in the save editor</li>
                    <li>
                      When keys are set to vanilla and Spirit MQ is active, 3 keys will be given to prevent softlocks
                    </li>
                    <li>Set Mac application category as &quot;Game&quot; for Launch Pad</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fisherman now correctly knows if the controller supports rumble</li>
                    <li>Properly randomize Mirror Shield and Silver Gauntlets chests when only using MQ</li>
                    <li>Fix translations for &quot;Ask to Equip New Items&quot; enhancement</li>
                    <li>Properly randomize Ganon&apos;s boss key chest when only using MQ</li>
                    <li>Fix water box collision in Lake Hylia and missing water in Morpha&apos;s room</li>
                    <li>
                      Fix softlock in Spirit MQ where the silver block in the shortcut hallway is blocking the eye
                      switch for the chest. The block will be removed as Child Link now
                    </li>
                    <li>
                      Fix certain cases where one-way entrances where causing some entrances to be unshuffled, and
                      potentially softlocking a seed
                    </li>
                    <li>
                      Fix leaving Castle Courtyard at night spoiling where Ganon&apos;s Castle entrance is in dungeon
                      randomizer
                    </li>
                    <li>Add missing hint for Medigoron, which would cause a crash during rando generation</li>
                    <li>Fix some entrances not disabling Epona in overworld entrance randomizer</li>
                    <li>Adjust &quot;Fix Dungeon entrances&quot; enhancement not working in the Graveyard</li>
                    <li>Fix presets not clearing out modified values</li>
                    <li>Fix a crash with the Check Tracker when playing a vanilla save</li>
                    <li>Fix Crowd Control connection issues</li>
                  </ul>

                  <h2 id="bradley-delta-5-1-3">
                    <a href="#bradley-delta-5-1-3">Bradley Delta (5.1.3)</a>
                  </h2>
                  <p>December 24th 2022</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>SFX editor now replays the active BGM track when shuffled or reset</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>
                      Fix crashes in Hyrule Field, Gohma&apos;s boss room, and Forest Temple Stalfos room with Enemy
                      Randomizer.
                    </li>
                    <li>
                      Fix killing enemies in GtG silver rupee room sometimes leading to opening the door with Enemy
                      Randomizer.
                    </li>
                    <li>
                      Fix enemies setting incorrect flags in Enemy Randomizer, sometimes leading to lit torches, burned
                      webs etc.
                    </li>
                    <li>Fix shopsanity not displaying certain items and crashing on hover</li>
                    <li>Fix some shop items giving out the wrong item when shopsanity is off</li>
                  </ul>

                  <h2 id="bradley-charlie-5-1-2">
                    <a href="#bradley-charlie-5-1-2">Bradley Charlie (5.1.2)</a>
                  </h2>
                  <p>December 21st 2022</p>
                  <h4>Tweaks</h4>
                  <ul>
                    <li>Adjust ice traps to display fake items with an ice effect</li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>
                      Fix hookshot point issues with retail PAL ROM (requires regenerating your OTR to get the fix)
                    </li>
                    <li>Fix Ganon crash for retail PAL ROM (requires regenerating your OTR to get the fix)</li>
                    <li>Fix Medi-Goron sometimes handing out Giant&apos;s Knife instead of the randomized item</li>
                    <li>Fix warp song song shuffle not displaying location when hints are off</li>
                    <li>Fix various crashes with SFX editor</li>
                    <li>Fix crashes with cosmetic editor on Wii U</li>
                    <li>Limit total enemy spawn count for Hyrule Field in Enemy Randomizer</li>
                    <li>Fix warp song particles and stick/nut upgrade particles for ice traps</li>
                    <li>Fix memory leak introduced with 5.0.2</li>
                  </ul>

                  <h2 id="bradley-bravo-5-1-1">
                    <a href="#bradley-bravo-5-1-1">Bradley Bravo (5.1.1)</a>
                  </h2>
                  <p>December 14th 2022</p>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>
                      Fix save issue for Double Defense and Double Magic when upgrading from older versions to 5.1.0
                    </li>
                    <li>Fix scrubs displaying the wrong price for their trades</li>
                    <li>Fix receiving the wrong item for ammo drops near a chest</li>
                  </ul>

                  <h2 id="bradley-alfa-5-1-0">
                    <a href="#bradley-alfa-5-1-0">Bradley Alfa (5.1.0)</a>
                  </h2>
                  <p>December 13th 2022</p>
                  <h4>New Enhancements/Features</h4>
                  <ul>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/2066" target="_blank" rel="noreferrer">
                        Custom sequence support
                      </a>{' '}
                      (see{' '}
                      <a
                        href="https://github.com/HarbourMasters/Shipwright#custom-music"
                        target="_blank"
                        rel="noreferrer"
                      >
                        instructions in readme
                      </a>
                      )
                      <ul>
                        <li>Can disable enemy proximity music</li>
                        <li>
                          <a
                            href="https://github.com/HarbourMasters/Shipwright/issues/1872"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Known Issues/Todo list
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/1898" target="_blank" rel="noreferrer">
                        Cosmetics Editor v3
                      </a>
                      <ul>
                        <li>Link&apos;s Hair, Linen, and boots</li>
                        <li>Swords, Equipment and Rupees</li>
                        <li>Various Silly Options</li>
                        <li>And more! Explore the advanced mode!</li>
                        <li>
                          <a
                            href="https://github.com/HarbourMasters/Shipwright/issues/2113"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Known Issues/Todo list
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/1986" target="_blank" rel="noreferrer">
                        Enhancements &gt; Gameplay Stats
                      </a>
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
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/1781" target="_blank" rel="noreferrer">
                        Enemy Randomizer
                      </a>
                      <ul>
                        <li>Includes seeded spawns and always random on area load</li>
                        <li>
                          <a
                            href="https://github.com/HarbourMasters/Shipwright/issues/2099"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Known issues
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/2071" target="_blank" rel="noreferrer">
                        Entrance Rando v2
                      </a>
                      <ul>
                        <li>Shuffle starting position</li>
                        <li>Shuffle owl drop locations</li>
                        <li>Shuffle warp song locations</li>
                        <li>Mix shuffled entrance pools</li>
                        <li>Decouple shuffled entrances</li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/2005" target="_blank" rel="noreferrer">
                        Entrances Tracker v1
                      </a>
                      <ul>
                        <li>Lists all shuffled entrance options</li>
                        <li>Searching, sorting, grouping, and auto scroll settings</li>
                        <li>Highlights accessbile entrances from the current area</li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://github.com/HarbourMasters/Shipwright/pull/1942" target="_blank" rel="noreferrer">
                        Check Tracker v1
                      </a>
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
                    <li>
                      Fix issue preventing you from lake hylia lab dive check when you have eye drops in your inventory
                    </li>
                    <li>Fix issues with CrowdControl enemy clear conditions when new enemies were spawned</li>
                    <li>Various fixes to randomizer location exclusions tab</li>
                    <li>Remove a few problematic sequences from sequence shuffling in SFX editor</li>
                    <li>Fix interpolation issue when using both bunny hood and hover boots</li>
                  </ul>

                  <h2 id="flynn-charlie-5-0-2">
                    <a href="#flynn-charlie-5-0-2">Flynn Charlie (5.0.2)</a>
                  </h2>
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

                  <h2 id="flynn-bravo-5-0-1">
                    <a href="#flynn-bravo-5-0-1">Flynn Bravo (5.0.1)</a>
                  </h2>
                  <p>November 27th 2022</p>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>New saves greyed out when using only MQ otr</li>
                    <li>Rando: Turning in Ruto&apos;s letter after rescue</li>
                    <li>Rando: Like like&apos;s no longer eat tunics</li>
                    <li>Dodongo&apos;s boss room crash when using only MQ otr</li>
                  </ul>

                  <h2 id="flynn-alfa-5-0-0">
                    <a href="#flynn-alfa-5-0-0">Flynn Alfa (5.0.0)</a>
                  </h2>
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

                  <h2 id="zhora-foxtrot-4-0-5">
                    <a href="#zhora-foxtrot-4-0-5">Zhora Foxtrot (4.0.5)</a>
                  </h2>
                  <p>October 20th 2022</p>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Fixes regression preventing boots and tunics from being equipped while under water</li>
                  </ul>

                  <h2 id="zhora-echo-4-0-4">
                    <a href="#zhora-echo-4-0-4">Zhora Echo (4.0.4)</a>
                  </h2>
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

                  <h2 id="zhora-delta-4-0-3">
                    <a href="#zhora-delta-4-0-3">Zhora Delta (4.0.3)</a>
                  </h2>
                  <p>October 13th 2022</p>
                  <h4>Feature Additions</h4>
                  <ul>
                    <li>
                      Enhancement to restore the Gerudo Warrior clothing color being afected by Link&apos;s current
                      Tunic or Bombs
                    </li>
                  </ul>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Color Clamping</li>
                    <li>Pickup item cutscene logic</li>
                    <li>Adult Ruto&apos;s earings</li>
                    <li>Implement G_CCMUX_NOISE (Fixes Bongo Bongo&apos;s shadow and others)</li>
                    <li>
                      Occurence when &quot;Mask Select in Inventory&quot; was able to cycling bottle contents when
                      bottle duping
                    </li>
                    <li>Cutscene Lighting (Goddesses cutscene, wrong color on Actors in the Sacred Realm, etc.)</li>
                    <li>Deku scrubs moving into position when entering Forest Stage</li>
                    <li>Goron&apos;s Spin</li>
                    <li>Ruto&apos;s softlock in Water Temple when Skip Text is enabled</li>
                    <li>Prevent infinite ammo cheat from filling bombchus unless the item is obtained</li>
                    <li>
                      Save corruption when &quot;Auto Save&quot; was enabled and quickly returning to main menu when
                      dying
                    </li>
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

                  <h2 id="zhora-charlie-4-0-2">
                    <a href="#zhora-charlie-4-0-2">Zhora Charlie (4.0.2)</a>
                  </h2>
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

                  <h2 id="zhora-bravo-4-0-1">
                    <a href="#zhora-bravo-4-0-1">Zhora Bravo (4.0.1)</a>
                  </h2>
                  <p>October 1st 2022</p>
                  <h4>Bug Fixes</h4>
                  <ul>
                    <li>Master Quest fixed on Linux and macOS</li>
                    <li>WiiU: Fix overflow for GX2CopySurfaceEx that would lead to a crash</li>
                    <li>Randomizer not properly being disabled when using Master Quest</li>
                    <li>Adjust naming for Auto Center options</li>
                    <li>Global.sav wasn&apos;t generating on Linux and macOS</li>
                  </ul>

                  <h2 id="zhora-alfa-4-0-0">
                    <a href="#zhora-alfa-4-0-0">Zhora Alfa (4.0.0)</a>
                  </h2>
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
                    <li>
                      Fix decay effect on Ganondorf, windows during Ganondorf&apos;s fight, Gohma&apos;s death animation
                      and Phantom Ganon&apos;s death animation
                    </li>
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

                  <h2 id="rachael-charlie-3-0-2">
                    <a href="#rachael-charlie-3-0-2">Rachael Charlie (3.0.2)</a>
                  </h2>
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

                  <h2 id="rachael-bravo-3-0-1">
                    <a href="#rachael-bravo-3-0-1">Rachael Bravo (3.0.1)</a>
                  </h2>
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

                  <h2 id="rachael-alfa-3-0-0">
                    <a href="#rachael-alfa-3-0-0">Rachael Alfa (3.0.0)</a>
                  </h2>
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

                  <h2 id="roy-alfa-2-0-0">
                    <a href="#roy-alfa-2-0-0">Roy Alfa (2.0.0)</a>
                  </h2>
                  <p>May 13th 2022</p>
                  <ul>
                    <li>No changelog for this one sorry :D</li>
                  </ul>

                  <h2 id="deckard-alfa-1-0-0">
                    <a href="#deckard-alfa-1-0-0">Deckard Alfa (1.0.0)</a>
                  </h2>
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

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
