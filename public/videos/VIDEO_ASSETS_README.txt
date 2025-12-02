AI4INCLUSION - VIDEO ASSETS REQUIREMENTS
=========================================

This document outlines the video files needed for the fullscreen intro experience.

REQUIRED VIDEO EDITS (from reference video):
-------------------------------------------
1. Fix subtitle text to EXACTLY: "Language AI Infrastructure for the World"
   - Correct spelling and capitalization
   - Ensure readability on dark background
   - Add drop shadow if needed for legibility

2. Remove any watermarks or logos present in the reference video
   - Output must be completely clean

3. Maintain current visual style:
   - Deep blue background palette
   - Globe with orbiting language glyphs
   - Flowing data streams and particles
   - Title: "AI4Inclusion"
   - Subtitle reveal in final frames


REQUIRED DELIVERABLES:
---------------------

1. FULLSCREEN INTRO VIDEO (plays once on first visit):
   
   a) intro_1080.webm (1920×1080, VP9 codec)
      - Primary web version
      - Target: ~3-5MB file size
      - CRF 31-35 for VP9
      - Duration: Same as reference (~12-15 seconds)
   
   b) intro_1080.mp4 (1920×1080, H.264 codec)
      - Fallback for browsers without WebM support
      - Target: ~4-6MB file size
      - CRF 23-25 for H.264
   
   c) intro_720.webm (1280×720, VP9 codec)
      - Mobile optimized version
      - Target: ~2-3MB file size
   
   d) intro_720.mp4 (1280×720, H.264 codec)
      - Mobile fallback
      - Target: ~2-4MB file size

2. DOCKED HERO LOOP VIDEO (plays continuously when docked in hero):
   
   a) hero_loop.webm (1280×720, VP9 codec)
      - 6-8 second seamless loop
      - Extract the most visually appealing segment
      - Globe rotation with data streams
      - Target: ~1-2MB file size
   
   b) hero_loop.mp4 (1280×720, H.264 codec)
      - Fallback version
      - Target: ~1.5-2.5MB file size

3. POSTER IMAGE (fallback/thumbnail):
   
   a) intro_poster.webp (1920×1080)
      - High-quality still frame from video
      - Show globe and title clearly
      - Target: ~200-300KB
      - Quality 85-90
   
   b) intro_poster.jpg (1920×1080)
      - JPEG fallback
      - Target: ~300-400KB
      - Quality 85


TECHNICAL SPECIFICATIONS:
------------------------

Aspect Ratio: 16:9 for all videos
Frame Rate: 30fps (or match source)
Color Space: sRGB / Rec.709
Audio: None required (intro plays muted)

WebM Export Settings (FFmpeg example):
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 31 -b:v 0 -row-mt 1 \
  -tile-columns 2 -tile-rows 1 -g 240 -quality good -speed 1 \
  -movflags +faststart output.webm

MP4 Export Settings (FFmpeg example):
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow \
  -profile:v high -level 4.0 -pix_fmt yuv420p -movflags +faststart output.mp4


VIDEO STRUCTURE & TIMING:
-------------------------

Recommended intro structure (adjust as needed):
- 0:00-0:02 - Dark background with particles appearing
- 0:02-0:05 - Globe forms with language glyphs
- 0:05-0:08 - Data streams activate and orbit
- 0:08-0:10 - Title "AI4Inclusion" reveals
- 0:10-0:12 - Subtitle "Language AI Infrastructure for the World" appears
- 0:12-0:13 - Hold final frame for docking transition

Hero loop should be:
- 6-8 seconds of smooth globe rotation
- Continuous orbital glyph movement
- Seamless loop point (first and last frames match)


DOCKING ANIMATION NOTES (for video editor):
-------------------------------------------

The final 0.9 seconds of the intro should prepare for docking:
- Video will scale down and translate to top-right corner
- Target docked size: approximately 40% of viewport width
- Add subtle vignette or glow to help with corner placement
- Ensure last frame is clean (no mid-motion blur)


FILE NAMING CONVENTION:
----------------------

Place all files in: public/videos/

Required files:
✓ intro_1080.webm
✓ intro_1080.mp4
✓ intro_720.webm
✓ intro_720.mp4
✓ hero_loop.webm
✓ hero_loop.mp4
✓ intro_poster.webp
✓ intro_poster.jpg


QUALITY CHECKLIST:
-----------------

Before delivery, verify:
□ Subtitle text is EXACTLY: "Language AI Infrastructure for the World"
□ No watermarks or unwanted logos visible
□ Video plays smoothly at 30fps
□ File sizes are within target ranges
□ Colors match AI4Inclusion brand palette
□ Title and subtitle are crisp and readable
□ Hero loop seamlessly repeats
□ Poster image shows clear, attractive frame
□ All files are properly named


IMPLEMENTATION NOTES:
--------------------

The developer has already implemented:
- First-visit detection via localStorage
- Fullscreen video player with skip button
- Autoplay (muted) with reduced-motion fallback
- Smooth docking animation (0.9s ease-in-out)
- Keyboard shortcuts (ESC/Space to skip, M to mute)
- Progress bar and controls
- Responsive video sizing

Once you provide the video files, they will be automatically integrated.


OPTIONAL ENHANCEMENTS:
---------------------

If time/budget permits, consider:
- 4K master version (3840×2160) for future use
- Lottie/JSON animation export for ultra-lightweight option
- Alternative color variants for different themes
- Chapters/markers for key animation moments


CONTACT FOR QUESTIONS:
---------------------

If you have questions about video specifications or need clarification,
please reach out before beginning production.


CURRENT STATUS:
--------------

Reference video located at: public/videos/intro-reference.mp4

This is the source video that needs editing. Once you deliver the
finalized assets listed above, the intro experience will be complete.
