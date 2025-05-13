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

We will be HuggingFace Hub hooks, and other features but the core product is already live and working — with encrypted model downloads ready for integration.

## Why Start with Model Deployment?

In OnDevice AI, you have to start somewhere. We debated starting with a new inference framework, but honestly? There are already ten of those — each with their quirks, hardware targets, and half-baked compatibility layers.

Instead, we focused on a common problem everyone faces: **model protection and deployment**.

We know we can't guarantee that a model won't be stolen, and our founder himself in his previous role has said many times that you can't fully protect assests stored on the attacker's machine. That being said, we can at least make it harder. Our approach is based on widely accepted encryption and deployment best practices, so developers don't have to reinvent the wheel or duct-tape together insecure pipelines.  This is what we like to call bike lock security.

## Why Not Start with Model Export?

We thought about it — a lot. But model export is a *huge* challenge, and solving it properly means going way deeper than just converting weights.

Getting a model out of PyTorch and into a usable format for mobile or web inference is still one of the biggest bottlenecks in OnDevice AI. There's no universal standard, and every serious attempt to address it — from Meta's **Executorch** to the community-driven **llama.cpp** — has had to spin up a whole new inference stack just to make things work on real-world hardware.

Even with great tooling like Executorch (which we respect a lot and have contributed back to), you still need to solve:

* **Pre- and post-processing** logic for each model type,
* **Tokenizer integration** for LLMs (and often RAG and vector databases),
* And **multi-stage pipelines** for models like Diffusion, where four or more models might be chained together with dynamic intermediate results.

This isn't just a tooling problem — it's a full pipeline problem. That's why we're starting with deployment first: encryption, delivery, and a standardized runtime layer. Once that's solid, we'll expand upward to tackle model conversion in a serious way.

## Where We're Going Next

We're starting with deployment. But our long-term roadmap includes:

* **Model conversion pipelines** for ONNX, TorchScript, GGUF, etc.
* **Cross-platform SDKs** that actually handle post-processing for you.
* **Support for VLMs (Visual Language Models)** to enable lightweight multimodal use cases on mobile and edge devices.
* **Exploration of embedded and IoT targets**, including MCU-class devices. We believe OnDevice AI doesn't stop at smartphones — and the next wave of TinyML tools will need robust, encrypted, and production-ready pipelines.

And yes — we do offer **consulting services** if you're trying to ship models now and can't wait for the full platform to mature. Hit us up at [baseweight.ai/contact](https://baseweight.ai/contact) and we'll book a call.

This is just the beginning. We're building the deployment layer for the future of AI — **encrypted, cross-platform, and OnDevice**.
