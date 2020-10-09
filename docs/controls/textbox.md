---
title: Textbox
sidebar_label: Textbox
slug: textbox
---

Represents a textbox element with optional label, hint and validation messages.

[IMAGE]

## Properties

### `id`

Control ID. Auto-generated if not specified explicitly.

### `value`

Textbox value.

### `label`

Textbox label.

### `hint`

Pop-up hint next to the textbox label.

### `visible`

`true` - the control is visible; `false` - control is hidden, but still takes up space in the layout.

## Examples

Bash example to add text control to `form` container:

```bash
'add textbox label="First name" id=firstName to=form' > $PAGE_PIPE
```

Bash example to read the value of textbox:

```bash
'get form:firstName value' > $PAGE_PIPE
read $firstName < $PAGE_PIPE
echo $firstName
```