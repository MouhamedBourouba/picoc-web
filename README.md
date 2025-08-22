# picoc-web
Project aims at proting picoc to the web using emscripten

## Overview

Original Repo: https://gitlab.com/zsaleeba/picoc/

PicoC is a very small C interpreter for scripting. It was originally written
as a script language for a UAV's on-board flight system. It's also very
suitable for other robotic, embedded and non-embedded applications.

The core C source code is around 3500 lines of code. It's not intended to be
a complete implementation of ISO C but it has all the essentials. When
compiled it only takes a few k of code space and is also very sparing of
data space. This means it can work well in small embedded devices. It's also
a fun example of how to create a very small language implementation while
still keeping the code readable.

picoc is now feature frozen. Since it's important that it remain small it's
intended that no more major features will be added from now on. It's been
tested on x86-32, x86-64, powerpc, arm, ultrasparc, HP-PA and blackfin
processors and is easy to port to new targets.
