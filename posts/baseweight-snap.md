---
title: "BaseWeight Snap"
date: "2025-05-14"
author: "Joe Bowser"
coverImage: '/baseweight-snap-cover.jpg'
---

## Introducing Baseweight Snap

While we prepare for Web Summit Vancouver, we are excited to share our experiences working with llama.cpp, the new libmtmd implemented by ngxson at HuggingFace, and the current drawbacks when testing the model out on a Pixel 9.

While LLMs are useful, there's also multimodal models, which until recently were too large to realistically run on a phone.  This changed with innovations from HuggingFace, such as the SmolVLM and SmolVLM2 models, but despite the models being small, it's been a challenge to take Transformers code and porting it to a device.  We were working on a non-llama based solution involving ONNX runtime and Rust when the release of libmtmd was announced.

<youtube id="16FLQFcMwkQ" />

### Working with llama.cpp on Android

The Android example in the llama.cpp library brings it in through the CMake directly allowing for build customization, and despite the longer build times, this is the way to go since this allows us to enable optimizations such as enabling Vulkan or experiment with OpenCL.  Due to time constraints, we decided to go with a Vulkan backend.

As far as actually using Vulkan on Android, there was definitely a learning curve, but this video shows how to use tools like the Android GPU Inspector to make sure that the GPU is actually used and to measure battery use per inference.  Measuring the power use during the inference runs is important, since this translates to heat use.  Debugging GPU on Android is extra tricky since the power draw can be hard on the battery, which is of course plugged in.

### Shipping Baseweight Snap

Even though it's a demo, and even though there's a lot of sharp edges, we plan on shipping Baseweight Snap on the Google Play store this week, and we are launching the product page for Baseweight Snap.  The eventual goal is to allow it to be an evaluation tool paired with the Baseweight Model Park and your training environment to be able to move custom tuned VLM models to move from training to production.

## Try It — Or contribute back

Baseweight Snap is open source on GitHub now, and we hope to ship to the Google Play store in the next couple of days leading up to Web Summit.

**Clone the Repo** on [GitHub](https://github.com/baseweight/BaseweightSnap)
**📬 Or email us directly** at hello@baseweight.ai  
**💬 Join the conversation** on [Discord](https://discord.gg/bKa3XgXxFz)

We’re going to be at **Web Summit Vancouver** on Thursday, May 29th in the Web Summit Alpha area — if you're there, come by and say hi.