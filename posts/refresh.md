---
title: "Announcing Baseweight Model Park"
date: "2025-05-10"
author: "Joe Bowser"
coverImage: '/model_park.png'
---

It's been a few months since our last update, and a lot has happened. First off: Baseweight is a featured startup at **Vancouver Web Summit**! If you're working on deploying models to mobile, web, or edge devices, come talk to us — we want to hear about your pain points and share what we've built.

## What We've Built: Baseweight Model Park

After months of quiet development, we're officially launching the **closed beta** of our model deployment platform: **Baseweight Model Park**.

You can check out a short demo video on YouTube showcasing the basic functionality. 

<youtube id="NvSh-sfCQ5s" />

Or this video showing the full functionality on a simpler, smaller model.

<youtube id="WiamuwOLTsQ" />

The MVP includes:

* An **OnDevice SDK** for downloading encrypted models on Android (iOS coming soon),
* **Model encryption** built on best practices to reduce IP theft risks,
* A simple **web UI and Python SDK** to upload and manage models.

We will be adding HuggingFace Hub hooks, and other features but the core product is already live and working — with encrypted model downloads ready for integration.

## Why Start with Yet Another Model Zoo?

Let’s be clear: Baseweight Model Park isn’t a Zoo. It's not about collecting models — it's about delivering them.

Right now, most ML models are distributed via Hugging Face, which is great for storage and discovery. But for anyone trying to ship a model to a phone, a browser, or an embedded device, the journey doesn’t end with a .gguf or .onnx file on a repo. You still need to:

* Convert the model to the right format for your target runtime,
* Encrypt it to protect your IP (especially if you're shipping on mobile),
* Host it somewhere fast and cheap,
* Integrate it into your app with a working SDK,
* Deal with platform-specific quirks (iOS, Android, WASM, etc).

Most teams duct-tape this together with Python scripts, S3 buckets, and Jupyter notebooks. We think that it's error-prone, expensive to maintain, and hard to scale.

Baseweight Model Park automates the boring parts of model deployment, starting with encryption and download via SDK, and expanding toward format conversion and device-specific packaging.

This isn’t about building another static hub — it’s about building a pipeline. One where you drop in your trained model and get back a signed, encrypted, device-ready package.

## Where We're Headed
Model Park is just the start.

Our goal is to support:

* Format conversion workflows (GGUF ⇄ Executorch ⇄ ONNX ⇄ LiteRT),
* Target-specific optimization (Vulkan/OpenCL for Android, Metal for iOS, etc),
* Streaming inference support for TTS/STT/LLMs on-device,
* Encryption and Delivery that integrates cleanly with existing apps,
* CLI and CI/CD tools to bring this into your daily workflow — not just notebooks.

We want Baseweight to be the platform you reach for when you need to put a model anywhere that isn't a server. Because OnDevice isn’t just a niche — it's the future of privacy-respecting, low-latency, offline-capable AI.

## Try It — Or Help Shape It

Baseweight Model Park is in **closed beta**, and we’re actively looking for early users. If you're shipping models to real devices — or trying to — we want to hear from you.

- Need help encrypting a model for mobile?  
- Want to stop babysitting conversion scripts?  
- Curious if GGUF, Executorch or ONNX Runtime is a better fit for your app?

We’re here for that. And we’re building for you.

**▶️ Apply for the beta** at [baseweight.ai](https://baseweight.ai)  
**📬 Or email us directly** at hello@baseweight.ai
**💬 Join the conversation** on [Discord](https://discord.gg/bKa3XgXxFz)

We’re also at **Vancouver Web Summit** this month — if you're there, come by and say hi.