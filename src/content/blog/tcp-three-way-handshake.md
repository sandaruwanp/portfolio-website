---
title: "Understanding TCP's three-way handshake"
description: "How TCP establishes reliable connections at the protocol level."
pubDate: 2026-08-15
tags: ["Networking", "TCP", "Protocols"]
readingTime: "5 min read"
---

## Why a handshake?

Unlike UDP, TCP guarantees delivery order and integrity. The handshake synchronizes sequence numbers.

## The three steps

Each segment serves a specific purpose in synchronizing the two endpoints.

## After the Handshake

The connection enters ESTABLISHED state. Both sides can send and receive data using the sequence numbers established during the handshake.
