/*
[BUG] XCOM-388: Mass spectrometer crashes
https://www.codewars.com/kata/66001d26a43fba02c5c8adc4

You are an intern working in the software development department of the X-COM agency, responsible for fighting off a large-scale invasion of extraterrestrials. Your task for today is described with the bug report below:

[BUG] XCOM-388: Mass spectrometer crashes when evaluating large samples of E-115
Type: Bug 🪳
Priority: Major ⚡
Component: Mass spectrometer
Reporter: gfreeman
Assignee: Assigned to you

Description of the Bug
The mass spectrometer built by X-COM engineers for researching ultra-heavy atoms of E-115 crashes when filled with large samples. This was not a problem until now because samples obtained from crashed ships were very scarce and contained trace amounts of E-115. However, agents recently managed to obtain an unscratched container from an undamaged, landed scout ship. Unfortunately, a large sample of ca. 1 million atoms of E-115 extracted from it caused our equipment to crash.

Additionally the device breaks when powered on without any sample inserted. This has to be fixed too.

Expected behavior
The device is able to determine the atomic mass of the heaviest atom in a sample of up to 1 million atoms.
The device must be calibrated to point to 0 when no sample is present.
Additional Info
The spectrometer is used to analyze atoms in a sample of E-115 and determine the heaviest isotope present. The most common isotopes have atomic masses between 286 and 290 and are of no special interest. However, theory suggests the possible existence of 
115
292
E
115
292
​
 E atoms, and finding such an isotope would be a major breakthrough in our research.

Once this ticket is resolved, you can pick another open ticket from the backlog.

const Spectrometer = {
  getHeaviest: function(atomicMasses) {
    return Math.max(...atomicMasses)
  }  
};

don't use Math.max()
*/
Spectrometer={getHeaviest:a=>a.reduce((m,v)=>v>m?v:m,0)}