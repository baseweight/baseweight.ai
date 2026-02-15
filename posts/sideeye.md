---
title: "BaseWeight SideEye"
date: "2026-02-14"
author: "Joe Bowser"
coverImage: '/baseweight_snap_camera.jpg'
---

## Introducing Baseweight SideEye

This is the first post in a while, and it's about SideEye, our entry in the NEXA AI SDK Bounty Program run by NEXA and Qualcomm.  A month ago, someone from NEXA reached out and asked me to participate, and since Baseweight needs money, and I needed a real excuse to mess around with Qualcomm again, I said why not, and after a couple weeks of assembling datasets, running benchmarks, searching the Noun Project for a cool icon and vibecoding, this is the result.

<youtube id="NrTsukkUwKA" />


### Where things worked

To their credit, the NEXA AI SDK on the Qualcomm Snapdragon 8 Elite is fast, and it's much easier to use than Executorch on Android on the same hardware. I wasn't able to get apples-to-apples measurements, but the inference time was extremely fast with OmniNeural 4B on the Qualcomm hardware while Qwen3-VL-4B took about 2.3 seconds per image in PyTorch using GPU on my RTX 4070 TI Super.

Also, Qualcomm really outdid themselves with the Qualcomm Device Cloud.  I haven't used Firebase, but this definitely beats the pants off of AWS Device Farm or Sauce Labs in the fact that it was almost trivial to get Claude Code to connect to ADB and run the UI tests, and interactive tests, spinning up and down devices.  The scarcity mindset did limit manual testing, and I did find the manual testing tedious, which means that it hasn't been as well tested as I would hav liked, but I'd probably pay money for Qualcomm Device Cloud in the future, and it did lead me to look at Firebase ADB debugging for Android development.

### Where they fell apart

Well, there's the technical limitations, which is the fact that the NPU can really only support models up to four billion parameters, the fact that there's a lack of documentation for mainstream modesl like Qwen3-VL-4B, which meant that I had to spend a lot of time writing tests for actual viability instead of working on the app.  I think I spent about a week just making sure that the thing actually ran well and satisfied our use case.  For a moment, there was a time where I would have had to change my initial idea because I couldn't see any examples of VLM usage.

There's also the fact that I didn't own a Qualcomm Snapdragon Elite device.  The last time I used one, it was at the Executorch Hackathon where I teamed up with NimbleEdge to work on their thing, and we worked on their stack and it was tricky to learn their whole stack and do model conversion in an hour.  I decided based on the Executorch experience to stick to the happy path for the Bounty program, because I get easily distracted by fads (i.e. OpenClaw) and I am working a day job, so I had to rely on QDC.  

I DID order a OnePlus 15, and it was supposed to arrive last Wednesday, then Friday and now it's delayed due to Severe Weather.  I probably should have bought a OnePlus 13 from Best Buy, but dropping $2K CAD for a shot at a $5K CAD was starting to make this fun activity look far too expensive.

### What I delivered

Due to the deadline weekend being BOTH BC Family Day Long Weekend and Valentines Day, I had to submit as soon as I could because family obligations meant that I had no more time for this.  I was planning on doing some photos throughout the day and doing last minute real world testing, BUT with the phone being stuck in Ontario, it was time to submit the v0.0.1 and hope for the best.  It does run everything but the AI parts on a Google Pixel 9, so there is that.

## Where's the code?

Baseweight SideEye is open source on GitHub now, and you can sideload the debug APK.  If you have one of the latest generation Qualcomm phones running a Snapdragon Gen 4 or newer, feel free to try it out.


**Clone the Repo** on [GitHub](https://github.com/baseweight/SideEye)
**📬 Or email us directly** at hello@baseweight.ai  
**💬 Join the conversation** on [Discord](https://discord.gg/bKa3XgXxFz)

We’re going to be at **Web Summit Vancouver** on Thursday, May 29th in the Web Summit Alpha area — if you're there, come by and say hi.