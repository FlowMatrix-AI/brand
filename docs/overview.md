# Overview

## What This Is

This project is a brand system package for Flowmatrix.

Its job is to provide a stable contract between design intent and application code. It is not a raw token dump, a component library, or a one-off style kit.

## Vision

Applications should be able to build UI against a small, obvious, stable theme API that survives:

- palette refinements
- rebranding work
- new themes
- dark mode
- future component libraries
- use across multiple apps

## Goal

The first goal is to establish two layers:

- foundations: internal raw primitives and scales
- semantics: stable meaning-based tokens that apps consume through `theme`

The central rule is simple: foundations may change; semantic meaning should change much less often.

## Scope

Current scope:

- define internal foundations for color, typography, spacing, radius, shadow, motion, border width, and layer
- define semantic tokens for text, surface, border, icon, action, status, type, and layout roles
- export a resolved public `theme` object
- emit CSS custom properties from the same source of truth
- prepare the package to support more than one theme later
- document naming, stability, and change rules

Out of scope for now:

- component-level tokens as a public system layer
- a component library
- Tailwind bindings
- full dark mode implementation
- Figma automation or advanced tooling integrations
- exposing raw color palette values to app code

## Success Criteria

The system is succeeding when:

- product UI can be built mostly with semantic theme names
- changing palette internals does not force broad app refactors
- the site can adopt the package without bespoke per-component hacks
- a future second theme can be introduced without changing consumer code
