---
title: "BaseWeight Snap"
date: "2025-05-14"
author: "Joe Bowser"
coverImage: '/baseweight_snap_camera.jpg'
---

## Introducing Baseweight Snap

While we prepare for Web Summit Vancouver, we are excited to share our experiences working with llama.cpp, the new libmtmd implemented by ngxson at HuggingFace, and the current drawbacks when testing the model out on a Pixel 9.

While LLMs are useful, there's also multimodal models, which until recently were too large to realistically run on a phone.  This changed with innovations from HuggingFace, such as the SmolVLM and SmolVLM2 models, but despite the models being small, it's been a challenge to take Transformers code and porting it to a device.  We were working on a non-llama based solution involving ONNX runtime and Rust when the release of libmtmd was announced.

<youtube id="16FLQFcMwkQ" />

### Working with llama.cpp on Android

The Android example in the llama.cpp library brings it in through the CMake directly allowing for build customization, and despite the longer build times, this is the way to go since this allows us to enable optimizations such as enabling Vulkan or experiment with OpenCL.  Due to time constraints, we decided to go with a Vulkan backend and to show a dialog every time we do inference, since the purpose is to show it running, not to show it running super fast.

### Shipping Baseweight Snap

Even though it's a demo, and even though there's a lot of sharp edges, we plan on shipping Baseweight Snap on the Google Play store this week, and we are launching the product page for Baseweight Snap.  The eventual goal is to allow it to be an evaluation tool paired with the Baseweight Model Park and your training environment to be able to move custom tuned VLM models to move from training to production.

## Try It — Or contribute back

Baseweight Snap is open source on GitHub now, and we hope to ship to the Google Play store in the next couple of days leading up to Web Summit.

**Join the Test Group** on [Google Play](https://play.google.com/apps/internaltest/4700798842570705295) now
**Clone the Repo** on [GitHub](https://github.com/baseweight/BaseweightSnap)
**📬 Or email us directly** at hello@baseweight.ai  
**💬 Join the conversation** on [Discord](https://discord.gg/bKa3XgXxFz)

We’re going to be at **Web Summit Vancouver** on Thursday, May 29th in the Web Summit Alpha area — if you're there, come by and say hi.