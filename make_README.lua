#!/usr/bin/env lua
require 'ext'
local url = require 'socket.url'

--local base = [[https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/]]
--local base = [[https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/]]
local base = [[https://thenumbernine.github.io/math/]]

local s = table{[[
Some helper worksheets for my projects.

Here's the CDN URLs:
]]}
local fs = table()
local function recurse(dir)
	for f in file[dir]() do
		if io.isdir(dir..'/'..f) then
			if f:sub(1,1) ~= '.' then
				recurse(dir..'/'..f)
			end
		elseif f:sub(-5) == '.html' then
			fs:insert(dir..'/'..f)
		end
	end
end
recurse '.'
for i=1,#fs do
	assert(fs[i]:sub(1,2) == './')
	fs[i] = fs[i]:sub(3)
end
fs:sort()
for _,f in ipairs(fs) do
	local name = f:sub(1,-6)
	s:insert('['..name..']('..base
		..url.escape(f)
			:gsub('%%2f','/')
			:gsub('%%2e','.')
		..')\n')
end
file['README.md'] = s:concat'\n'
