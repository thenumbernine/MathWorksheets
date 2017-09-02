#!/usr/bin/env lua
require 'ext'
local url = require 'socket.url'

-- using rawgit.com
--local base = [[https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/]]
-- using htmlpreview.github.io
local base = [[https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/]]

local s = table{[[
Some helper worksheets for my projects.

The Euler 1D and 3D ones have all the content required to derive fluxes and spectral decomposition of Euler equations in 1D and 3D.
The 1D is redundant, everything in it and more is in the 3D worksheet.
I could stand to tidy up the 3D one for better explicit naming of what the flux is, etc. 
I could also derive the flux for arbitrary normals.
In the CL hydrodynamics project I've found that -- for axis-aligend grids -- swapping vector components (simulating a rotation) and performing the flux in one direction (typically the x axis) makes for more accurate calculations.

For the MHD worksheet I originally tried to use the same approach, but quickly ran into the ugliness of solving the eigensystem of the giant 8x8 matrix.
To circumvent this I took the symmetrization approach, first separating the conservative-to-primitive transform from the flux, combining the source, and applying a symmetrizing change of basis.
Then I gave up and went to Athena, and then I compared that with Ravi's implementation.  The two are basically the same.  So long, Jameson implementation. 

I've also started on a Special Relativistic Euler Equations worksheet.

The ADM stuff is generated from my symmath project.

Here's the CDN URLs:
]]}
local fs = table()
local function recurse(dir)
	for f in file[dir]() do
		if io.isdir(f) then
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
	s:insert('['..name..']('..base..url.escape(f):gsub('%%2f','/')..')\n')
end
file['README.md'] = s:concat'\n'
