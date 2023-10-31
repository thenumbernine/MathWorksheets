#!/usr/bin/env lua
require 'ext'
local url = require 'socket.url'

--local base = [[https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/]]
--local base = [[https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/]]
local base = [[https://thenumbernine.github.io/math/]]

local s = table{[[
Some helper worksheets for my projects.
]]}

local fs = path:rdir(function(f, isdir)
	local dir, name = path(f):getdir()
	return name ~= '.git' and (isdir or name:sub(-5) == '.html')
end):mapi(function(f)
	if f:sub(1,2) == './' then f = f:sub(3) end
	return f
end):sort():mapi(function(f)
	local name = f:sub(1,-6)
	s:insert('['..name..']('..base..
		url.escape(f)
			:gsub('%%2f','/')
			:gsub('%%2e','.')
		..')\n')
end)

path'README.md':write(s:concat'\n')
