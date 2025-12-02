---
title: "BaseWeight Canvas"
date: "2025-07-02"
author: "Joe Bowser"
coverImage: '/baseweight_canvas.jpg'
---

## Introducing Baseweight Canvas

It's NeurIPS week, and while I'm not able to go down to NeurIPS, I did decide to throw some software over the fence, introducing Baseweight Canvas.

Baseweight Canvas was written because llama.cpp frontends were all very chat based and Multimodal, when it was added, was kind of thrown over the fence.  The problem with this approach is that you have to type everything into the chat window, and you can't do things like mark up an image, or crop.  In fact, the overall use case is greate for software development, but it sucks for other use cases like design where "show me, not tell me" means actually editing an image.  Therefore, a thought experiment emerged.

<youtube id="16FLQFcMwkQ" />

### Introducing Contextual Crop

Contextual Crop is the main feature in Baseweight Snap that makes it unique.  The VLM has a regular contextual chat that you would expect form a desktop class LLM application, but with mtmd and multi-image support, we can send cropped images and ask intelligent questions on the cropped image.  There have been other instances of cropping in research, but those were entirely based on automated cropping, where this is a UX exploration.  

### Shipping Baseweight Canvas

While Baseweight Canvas is a proof-of-concept, Tauri is being leveraged as is llama.cpp, which means that this is a multiplatform Desktop application that has been developed and tested on Linux, MacOS and Windows.

## Try It — Or contribute back

Baseweight Canvas is open source on GitHub, and you can download it here:

**Clone the Repo** on [GitHub](https://github.com/baseweight/Canvas)
**📬 Or email us directly** at hello@baseweight.ai  
**💬 Join the conversation** on [Discord](https://discord.gg/bKa3XgXxFz)


