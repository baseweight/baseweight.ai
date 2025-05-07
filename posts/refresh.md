---
title: "Closed Beta and Web Summit"
date: "2025-05-10"
author: "Joe Bowser"
coverImage: '/hello-world-cover.jpg'
---

It's been a few months since the last update, and a fair bit has happened.  First off, Baseweight is one of the featured 
startups at Vancouver Web Summit. If you're doing any work deploying models on mobile, on the web or on edge devices, we would like to talk to you.  Please feel free to find us at the conference. 

As far as our first prototypes, we have been quietly at work getting our Model Deployment platform, the Baseweight Model Park, ready for closed beta.  We have a video posted on YouTube showing the basic functionality, which includes our OnDevice SDK, model encryption, as well as the online platform that allows you to manage the encrypted models and have them either uploaded using our Python SDK, or from the Web Interface.  Depending on user feedback, we may add 
HuggingFace hooks to pull the models from the HF Hub.

### Why Model Deployment?

The fact is that we had to start somewhere in the OnDevice space.  The most logical thing would be with an SDK that tackles the inference framework, but there are already ten different inference frameworks, we decided to look at the problem of IP theft of models, and while we can't guarantee that the model won't walk off, we can provide a tool established in the best practices of the industry so that new developers don't have to re-invent the wheel every single time.

### Why not start with model export?

Model export, namely the process of getting a model out of PyTorch, the most popular training framework to one of the many inference frameworks has been a major challenge and is the primary barrier to widespread OnDevice adoption.  The fact is that there is no simple portability of networks and frameworks, and that every attempt to do so has created a new ML inference framework with the main evidence of this being both llama.cpp, which was written to acclerate transformer based models on x86 CPUs and Executorch, which was written for Meta to have a PyTorch native way to compile models into a runtime to be executed on various hardware backends.

In addition to all of this, model export by itself isn't enough.  There's also the rest of the inference pipeline, which includes the pre-processing and post-processing code for each application.  For classic imagenet based models including GANs, there's the normalization step, for LLMs there's the tokenization step, which can also include RAG where previously generated or relevant data is stored in a vector database, and then there's the most complex of all, which are the Diffusion family of models, which include no less than four models executed sequentially based on data derived from the prior.  This is a whole industry, and while our goal is to provide tools for the entire end to end development experience, we're launching with model deployment. 

We do offer consulting services for companies looking to export models and build custom pipelines. For consulting services, please [contact us](https://baseweight.ai/contact) using our form and we will get back to you shortly to book an introductory call and to discuss your project further.

